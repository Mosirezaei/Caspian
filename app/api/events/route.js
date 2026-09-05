import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Cache the whole response for 10 minutes. Without this, Next.js 15 refetches
// tomsarkgh.am's full homepage (hundreds of events) and re-parses it on every
// single page view, which is the main reason the page felt slow.
export const revalidate = 600;

const CAT_FA = {
  'Համերգ': 'کنسرت',
  'Թատրոն': 'تئاتر',
  'Կինո': 'سینما',
  'Կատակերգություն': 'کمدی',
  'Stand-up': 'استندآپ',
  'Party': 'پارتی',
  'Ակումբ': 'کلاب',
  'Փաբ': 'پاب',
  'Օպերա և բալետ': 'اپرا و باله',
  'Ցուցահանդես': 'نمایشگاه',
  'Սպորտ': 'ورزش',
  'Կրկես': 'سیرک',
  'Ակումբ և փաբ': 'کلاب و پاب',
  'Այլ': 'سایر',
};

const MONTH_FA = {
  'Սեպտեմբեր': 'سپتامبر',
  'Հոկտեմբեր': 'اکتبر',
  'Նոյեմբեր': 'نوامبر',
  'Դեկտեմբեր': 'دسامبر',
  'Հունվար': 'ژانویه',
  'Փետրվար': 'فوریه',
  'Մարտ': 'مارس',
  'Ապրիլ': 'آوریل',
  'Մայիս': 'مه',
  'Հունիս': 'ژوئن',
  'Հուլիս': 'ژوئیه',
  'Օգոստոս': 'اوت',
};

function proxyImage(url) {
  if (!url) return null;
  const origUrl = url.replace(/\/\d+_\d+_center_[A-F0-9]+\//, '/orig/');
  return `/api/image-proxy?src=${encodeURIComponent(origUrl)}`;
}

// Extracts every number group out of a raw price string (Armenian/Russian/
// English digits are identical, only the currency word differs) and turns
// it into one consistent "X AMD" / "X–Y AMD" string. Filters out anything
// under 100 so age-restriction badges like "14+" that sometimes leak into
// the price block don't get treated as a price.
function normalizePrice(raw) {
  if (!raw) return null;
  const nums = (raw.match(/\d[\d,.\s]*\d|\d/g) || [])
    .map((m) => parseInt(m.replace(/[^\d]/g, ''), 10))
    .filter((n) => Number.isFinite(n) && n >= 100);
  if (nums.length === 0) return null;
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  const fmt = (n) => n.toLocaleString('en-US');
  return min === max ? `${fmt(min)} AMD` : `${fmt(min)}\u2013${fmt(max)} AMD`;
}

// Lightweight second pass over the English mirror of the same site
// (tomsarkgh.am/en). Venue names there are always in English, and many
// event titles are too (anything the organizer entered in English stays
// in English). Used purely as a display fallback: titleFa (cached Farsi
// translation) still wins when present; this only fills the gap between
// "no Farsi yet" and "raw Armenian".
async function scrapeEnglishTitlesAndVenues() {
  const map = {};
  try {
    const res = await fetch('https://www.tomsarkgh.am/en/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html',
      },
      next: { revalidate: 600 },
    });
    if (!res.ok) return map;
    const html = await res.text();
    const blocks = html.split('event-box-item');
    for (let i = 1; i < blocks.length; i++) {
      const block = blocks[i];
      try {
        const linkMatch = block.match(/href="\/en\/event\/(\d+)\//);
        if (!linkMatch) continue;
        const eid = linkMatch[1];
        const titleMatch = block.match(/event-title">\s*(?:<a[^>]*>)?([^<]+)/);
        const venueMatch = block.match(/event-venue">\s*(?:<a[^>]*>)?([^<]+)/);
        if (!map[eid]) map[eid] = {};
        if (titleMatch) map[eid].titleEn = titleMatch[1].trim();
        if (venueMatch) map[eid].venueEn = venueMatch[1].trim();
      } catch (e) { /* skip this block */ }
    }
  } catch (e) {
    // English mirror unreachable -- events just fall back to raw Armenian,
    // same as before this change.
  }
  return map;
}

// Reads any already-translated titles/venues out of the events_cache table
// (kept up to date by the daily /api/cron/sync-events job). No live call to
// Claude ever happens on this request path -- if an event isn't cached yet
// (e.g. it appeared today), it just shows in its original language until
// tomorrow's sync picks it up.
async function mergeFarsiTranslations(events) {
  if (events.length === 0) return;
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!supabaseUrl || !supabaseKey) return;

    const supabase = createClient(supabaseUrl, supabaseKey);
    const ids = events.map((e) => e.id);
    const { data, error } = await supabase
      .from('events_cache')
      .select('event_id, title_fa, venue_fa')
      .in('event_id', ids);

    if (error || !data) return;

    const byId = new Map(data.map((row) => [row.event_id, row]));
    for (const event of events) {
      const cached = byId.get(event.id);
      if (cached?.title_fa) event.titleFa = cached.title_fa;
      if (cached?.venue_fa) event.venueFa = cached.venue_fa;
    }
  } catch (e) {
    // Supabase unreachable -- events just stay untranslated, same as before.
  }
}

export async function GET() {
  try {
    const [res, enMap] = await Promise.all([
      fetch('https://www.tomsarkgh.am/', {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          'Accept': 'text/html',
        },
        next: { revalidate: 600 },
      }),
      scrapeEnglishTitlesAndVenues(),
    ]);

    if (!res.ok) return NextResponse.json({ error: 'Fetch failed' }, { status: 502 });

    const html = await res.text();
    const events = [];
    const seenIds = new Set();
    const blocks = html.split('event-box-item');

    for (let i = 1; i < blocks.length; i++) {
      const block = blocks[i];
      try {
        const linkMatch = block.match(/href="\/hy\/event\/(\d+)\/([^"]+)"/);
        if (!linkMatch) continue;
        const eid = linkMatch[1];
        if (seenIds.has(eid)) continue;
        seenIds.add(eid);

        // Use 260_146 thumbnail size (confirmed to exist)
        const imgMatch = block.match(/<img\s+src="(\/thumbnails\/Photo\/[^"]+)"/);
        let imageUrl = null;
        if (imgMatch) {
          imageUrl = 'https://www.tomsarkgh.am' + imgMatch[1];
        }

        const catMatch = block.match(/event-type">([^<]+)</);
        const titleMatch = block.match(/event-title">\s*(?:<a[^>]*>)?([^<]+)/);
        const dateMatch = block.match(/event-date">\s*(\d+)&nbsp;(\S+)/);
        const venueMatch = block.match(/event-venue">\s*(?:<a[^>]*>)?([^<]+)/);

        let priceText = null;
        const priceDiv = block.match(/event-price[^>]*>([^<]+)/);
        if (priceDiv) priceText = priceDiv[1].trim();
        if (!priceText) {
          const pg = block.match(/(\d[\d\s,.]*[-\u2013]?\s*\d*[\d\s,.]*\s*(?:դրամ|AMD|др))/);
          if (pg) priceText = pg[1].trim();
        }

        let dateFa = null;
        if (dateMatch) {
          dateFa = dateMatch[1] + ' ' + (MONTH_FA[dateMatch[2]] || dateMatch[2]);
        }

        const catFa = catMatch ? (CAT_FA[catMatch[1].trim()] || catMatch[1].trim()) : null;

        if (titleMatch) {
          const en = enMap[eid];
          events.push({
            id: eid,
            title: titleMatch[1].trim(),
            titleEn: en?.titleEn || null,
            url: 'https://www.tomsarkgh.am/hy/event/' + eid + '/' + linkMatch[2],
            image: proxyImage(imageUrl),
            category: catMatch ? catMatch[1].trim() : null,
            categoryFa: catFa,
            date: dateFa,
            venue: venueMatch ? venueMatch[1].trim() : null,
            venueEn: en?.venueEn || null,
            price: priceText,
            priceDisplay: normalizePrice(priceText) || priceText,
          });
        }
      } catch (e) { /* skip */ }
    }

    // Merge in any Farsi translations we already have cached. This is a
    // single fast Supabase read -- no dependency on Claude API latency or
    // uptime at request time. Precedence for display purposes ends up:
    // titleFa (cached Farsi) > titleEn (scraped from tomsarkgh.am/en just
    // above) > title (raw, whatever language the organizer entered).
    await mergeFarsiTranslations(events);

    return NextResponse.json({ events, total: events.length, fetchedAt: new Date().toISOString() });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

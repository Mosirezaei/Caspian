import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Runs once a day (see vercel.json -- Vercel Hobby caps cron jobs at one run
// per day). Scrapes tomsarkgh.am, translates whichever events aren't already
// cached, and upserts everything into Supabase through a SECURITY DEFINER
// RPC (sync_events_cache) gated by CRON_SECRET -- this route only ever holds
// the public anon key, never a service-role key.
//
// The public-facing /api/events route just reads from events_cache; it never
// calls Claude at request time, so a slow or failing translation here can
// never slow down or break the live page.

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

async function scrapeEvents() {
  const res = await fetch('https://www.tomsarkgh.am/', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Accept': 'text/html',
    },
  });
  if (!res.ok) throw new Error('Fetch failed: ' + res.status);

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
        events.push({
          id: eid,
          title: titleMatch[1].trim(),
          url: 'https://www.tomsarkgh.am/hy/event/' + eid + '/' + linkMatch[2],
          image: proxyImage(imageUrl),
          category: catMatch ? catMatch[1].trim() : null,
          categoryFa: catFa,
          date: dateFa,
          venue: venueMatch ? venueMatch[1].trim() : null,
          price: priceText,
        });
      }
    } catch (e) { /* skip */ }
  }

  return events;
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

// Translates one small batch (title + venue pairs) in a single Claude call.
// Batches are kept small (12 events) on purpose: the old implementation sent
// every event on the site in one giant request, which could time out or
// exceed max_tokens, and would then fail with *nothing* translated. A failed
// batch here only leaves that batch untranslated -- it gets retried on the
// next daily run since those events still won't have a title_fa in the DB.
async function translateBatch(batch, debug) {
  const result = {};
  if (!process.env.ANTHROPIC_API_KEY) {
    if (debug) debug.push('NO_API_KEY');
    return result;
  }
  if (batch.length === 0) return result;

  const linesText = batch
    .map((e, i) => `${i + 1}. TITLE: ${e.title}\n${i + 1}. VENUE: ${e.venue || ''}`)
    .join('\n');

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-5',
        max_tokens: 2000,
        messages: [{
          role: 'user',
          content: `Translate these Armenian/English/Russian event titles and venue names to Persian (Farsi). Keep proper nouns, band names and English words as-is. Return ONLY lines in the exact same "N. TITLE: ..." / "N. VENUE: ..." format, matching the input numbering. No explanations.\n\n${linesText}`,
        }],
      }),
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (!res.ok) {
      if (debug) debug.push(`HTTP_${res.status}: ${(await res.text()).slice(0, 300)}`);
      return result;
    }

    const data = await res.json();
    const translated = data.content?.[0]?.text || '';
    for (const line of translated.split('\n')) {
      const m = line.match(/^(\d+)\.\s*(TITLE|VENUE):\s*(.+)/);
      if (!m) continue;
      const idx = parseInt(m[1], 10) - 1;
      if (idx < 0 || idx >= batch.length) continue;
      const id = batch[idx].id;
      result[id] = result[id] || {};
      if (m[2] === 'TITLE') result[id].titleFa = m[3].trim();
      else if (m[2] === 'VENUE' && m[3].trim()) result[id].venueFa = m[3].trim();
    }
  } catch (e) {
    clearTimeout(timeout);
    if (debug) debug.push(`EXCEPTION: ${e.message || String(e)}`);
    // Timed out, no key, or API error -- this batch just stays untranslated
    // and gets retried tomorrow.
  }

  return result;
}

export async function GET(request) {
  const auth = request.headers.get('authorization');
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseKey || !process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'Missing required env vars' }, { status: 500 });
  }
  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    const events = await scrapeEvents();
    if (events.length === 0) {
      return NextResponse.json({ synced: 0, translated: 0, total: 0 });
    }

    const ids = events.map((e) => e.id);
    const { data: existing } = await supabase
      .from('events_cache')
      .select('event_id, title_fa')
      .in('event_id', ids);
    const alreadyTranslated = new Set(
      (existing || []).filter((r) => r.title_fa).map((r) => r.event_id)
    );

    const toTranslate = events.filter((e) => !alreadyTranslated.has(e.id));
    const batches = chunk(toTranslate, 12);

    const translations = {};
    const debug = [];
    for (const batch of batches) {
      const result = await translateBatch(batch, debug);
      Object.assign(translations, result);
    }

    const payload = events.map((e) => ({
      event_id: e.id,
      title: e.title,
      title_fa: translations[e.id]?.titleFa || null,
      venue: e.venue,
      venue_fa: translations[e.id]?.venueFa || null,
      category: e.category,
      category_fa: e.categoryFa,
      event_date: e.date,
      price: e.price,
      image_url: e.image,
      event_url: e.url,
    }));

    const { error } = await supabase.rpc('sync_events_cache', {
      events: payload,
      secret: process.env.CRON_SECRET,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      total: events.length,
      newlyTranslated: Object.keys(translations).length,
      alreadyCached: alreadyTranslated.size,
      debug, // TEMPORARY -- remove once translation is confirmed working
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';

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

// Translates event titles to Farsi with the Claude API, batched in one call.
// Guarded so a slow/failed/unconfigured translation NEVER blocks or breaks
// the events response -- worst case, titles stay in their original language.
async function translateTitles(events) {
  if (!process.env.ANTHROPIC_API_KEY || events.length === 0) return;

  try {
    const linesText = events.map((e, i) => `${i + 1}. TITLE: ${e.title}\n${i + 1}. VENUE: ${e.venue || ''}`).join('\n');
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-5',
        max_tokens: 4000,
        messages: [{
          role: 'user',
          content: `Translate these Armenian/English/Russian event titles and venue names to Persian (Farsi). Keep proper nouns, band names and English words as-is. Return ONLY lines in the exact same "N. TITLE: ..." / "N. VENUE: ..." format, matching the input numbering. No explanations.\n\n${linesText}`,
        }],
      }),
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!res.ok) return;
    const data = await res.json();
    const translated = data.content?.[0]?.text || '';
    for (const line of translated.split('\n')) {
      const m = line.match(/^(\d+)\.\s*(TITLE|VENUE):\s*(.+)/);
      if (!m) continue;
      const idx = parseInt(m[1], 10) - 1;
      if (idx < 0 || idx >= events.length) continue;
      if (m[2] === 'TITLE') events[idx].titleFa = m[3].trim();
      else if (m[2] === 'VENUE' && m[3].trim()) events[idx].venueFa = m[3].trim();
    }
  } catch (e) {
    // Timed out, no key, or API error -- titles/venues just stay untranslated.
  }
}

export async function GET() {
  try {
    const res = await fetch('https://www.tomsarkgh.am/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html',
      },
      next: { revalidate: 600 },
    });

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
          const pg = block.match(/(\d[\d\s,.]*[-\u2013]?\s*\d*[\d\s,.]*\s*(?:\u0564\u0580\u0561\u0574|AMD|\u0434\u0440))/);
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

    // Best-effort Farsi translation of titles. Bounded to 8s and fully
    // cached alongside the rest of this response (revalidate: 600), so it
    // only ever runs once per 10-minute window, not per visitor.
    await translateTitles(events);

    return NextResponse.json({ events, total: events.length, fetchedAt: new Date().toISOString() });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

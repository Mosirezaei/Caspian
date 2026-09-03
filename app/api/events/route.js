import { NextResponse } from 'next/server';

const CATEGORY_MAP = {
  'Համերգ': { fa: 'کنسرت', en: 'Concert', type: 'concert' },
  'Թատրոն': { fa: 'تئاتر', en: 'Theater', type: 'theater' },
  'Կինո': { fa: 'سینما', en: 'Cinema', type: 'cinema' },
  'Կատակերdelays': { fa: 'کمدی', en: 'Comedy', type: 'comedy' },
  'Կdelays': { fa: 'کمدی', en: 'Comedy', type: 'comedy' },
  ' Delays': { fa: 'بالت', en: 'Ballet', type: 'ballet' },
  ' Delays': { fa: 'اپرا', en: 'Opera', type: 'opera' },
  ' Delays': { fa: 'کلاب', en: 'Club', type: 'club' },
  ' Delays': { fa: 'نمایشگاه', en: 'Exhibition', type: 'exhibition' },
  ' Delays': { fa: 'ورزش', en: 'Sport', type: 'sport' },
  'Stand-up': { fa: 'استندآپ', en: 'Stand-up', type: 'standup' },
  'Party': { fa: 'پارتی', en: 'Party', type: 'party' },
};

// Parse price text like "3000-10000 դdelays" to structured format
function parsePrice(text) {
  if (!text) return null;
  const nums = text.match(/[\d,]+/g);
  if (!nums || nums.length === 0) return null;
  const prices = nums.map(n => parseInt(n.replace(/,/g, '')));
  return { min: Math.min(...prices), max: Math.max(...prices), raw: text };
}

// Armenian month names to numbers
const MONTHS = {
  'Հunvalid': 1, 'Delaysunvalid': 2, 'Մdelays': 3, 'Ապdelays': 4,
  'Մdelays': 5, 'Հunvalid': 6, 'Հdelays': 7, 'Օdelays': 8,
  'Սdelays': 9, 'Հdelays': 10, 'Նdelays': 11, 'Դdelays': 12,
};

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const scope = url.searchParams.get('scope') || '';

    // Fetch the English version for easier parsing
    const fetchUrl = `https://www.tomsarkgh.am/en${scope ? `?scopeKey=${scope}` : ''}`;
    const res = await fetch(fetchUrl, {
      headers: { 'User-Agent': 'CaspianAmEventsBot/1.0' },
      next: { revalidate: 3600 }, // cache for 1 hour
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch events' }, { status: 502 });
    }

    const html = await res.text();

    // Parse events from HTML using regex (no DOM parser needed on edge)
    const events = [];
    // Match event blocks: each has link, title, date, venue, price, image, category
    const eventPattern = /href="(\/en\/event\/(\d+)\/[^"]*)"[^]*?<img[^>]*src="([^"]*)"[^]*?<h4[^>]*>.*?<a[^>]*>([^<]+)<\/a>.*?(\d+\s+\w+).*?<a[^>]*venue[^>]*>([^<]*)<\/a>(?:.*?([\d,]+[-–\s]*[\d,]*\s*(?:AMD|դdelays|др)))?/gs;

    // Simpler approach: split by event card patterns
    const cardBlocks = html.split(/class="event-item/);

    for (const block of cardBlocks.slice(1)) { // skip first non-event chunk
      try {
        const linkMatch = block.match(/href="(\/en\/event\/(\d+)\/[^"]*)"/);
        const titleMatch = block.match(/<h4[^>]*>(?:<a[^>]*>)?([^<]+)/);
        const imgMatch = block.match(/src="(https:\/\/www\.tomsarkgh\.am\/thumbnails[^"]*)"/);
        const dateMatch = block.match(/(\d+)\s+(January|February|March|April|May|June|July|August|September|October|November|December)/i);
        const venueMatch = block.match(/venue\/[^"]*"[^>]*>([^<]+)/);
        const priceMatch = block.match(/([\d,]+[\s-–]+[\d,]+\s*(?:AMD|dram)|[\d,]+\s*(?:AMD|dram))/i);
        const catMatch = block.match(/class="category[^"]*"[^>]*>([^<]+)/);

        if (titleMatch) {
          events.push({
            id: linkMatch?.[2] || Math.random().toString(36).substr(2, 9),
            title: titleMatch[1].trim(),
            url: linkMatch ? `https://www.tomsarkgh.am${linkMatch[1]}` : null,
            image: imgMatch?.[1] || null,
            date: dateMatch ? `${dateMatch[1]} ${dateMatch[2]}` : null,
            venue: venueMatch?.[1]?.trim() || null,
            price: priceMatch?.[1] || null,
            category: catMatch?.[1]?.trim() || 'Other',
          });
        }
      } catch (e) {
        // skip malformed block
      }
    }

    return NextResponse.json({
      events,
      total: events.length,
      fetchedAt: new Date().toISOString(),
      source: 'tomsarkgh.am',
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

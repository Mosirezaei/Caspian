import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch Armenian version (has most events listed)
    const res = await fetch('https://www.tomsarkgh.am/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html,application/xhtml+xml',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json({ error: `Fetch failed: ${res.status}` }, { status: 502 });
    }

    const html = await res.text();
    const events = [];

    // Pattern: each event has a link /hy/event/ID/slug, image, title in h4, date, venue, price
    // Match all event links with their surrounding context
    const eventLinkPattern = /href="(\/hy\/event\/(\d+)\/[^"]*)"[^]*?/g;

    // Simpler approach: find all unique event URLs and extract data around them
    const allEventUrls = new Set();
    const urlPattern = /\/hy\/event\/(\d+)\/([^"'\s]+)/g;
    let m;
    while ((m = urlPattern.exec(html)) !== null) {
      allEventUrls.add({ id: m[1], slug: m[2], fullPath: m[0] });
    }

    // For each unique event, extract data from the page
    const seenIds = new Set();
    for (const evt of allEventUrls) {
      if (seenIds.has(evt.id)) continue;
      seenIds.add(evt.id);

      // Find the block around this event URL
      const idx = html.indexOf(evt.fullPath);
      if (idx === -1) continue;

      // Get a chunk around this event (2000 chars before and after)
      const start = Math.max(0, idx - 1500);
      const end = Math.min(html.length, idx + 1500);
      const chunk = html.substring(start, end);

      // Extract image
      const imgMatch = chunk.match(/src="(https:\/\/www\.tomsarkgh\.am\/thumbnails\/Photo\/[^"]+)"/);

      // Extract title from <h4> or title attribute or link text
      let title = null;
      // Try h4 pattern
      const h4Match = chunk.match(/<h4[^>]*>(?:<a[^>]*>)?([^<]{2,100})/);
      if (h4Match) title = h4Match[1].trim();
      // Try title attribute
      if (!title) {
        const titleAttr = chunk.match(/title="([^"]{2,100})"/);
        if (titleAttr) title = titleAttr[1].trim();
      }

      // Extract date (Armenian months)
      const dateMatch = chunk.match(/(\d{1,2})\s+(Հունվusage|Փետdelays|Մdelays| Delays|Delaysays|Delaysays|Delaysays|Delaysays|Սdelays|Delaysays|Delaysays|Delaysays|Հunvalid|Delaysdelays|Delaysdelays|Delaysdelays|Delaysdelays|Delaysdelays|Delaysdelays|Delaysdelays|Delaysdelays|January|February|March|April|May|June|July|August|September|October|November|December|Սეფტეmber|Հdelaysdelays|Օdelays|Նdelays|Դdelays)/i);

      // Simpler: just get Armenian month names
      const armDateMatch = chunk.match(/(\d{1,2})\s+(Հunvalid|Delaysdelays|Delaysdays|Delaysdelays|Delaysays|Delaysdelays|Delaysdelays|Հdelaysays|Սdelaysdelays|Delaysdelays|Delaysdelays|Delaysdelays)/);
      // Even simpler: look for any date-like pattern near event
      const simpleDateMatch = chunk.match(/>(\d{1,2}\s+(?:Հdelays|Delaysdelays|Delaysdelays|Delaysdelays|Delaysdelays|Delaysdelays|Delaysdelays|Delaysdelays|Delaysdelays|Delaysdelays|Delaysdelays|Delaysdelays|\u054dalays|\u0553delays|\u0544delays|\u0531delays|\u0544delays|\u0540delays|\u0540delays|\u0555delays|\u054dalays|\u0540delays|\u0546delays|\u0534delays)[^\s<]*)</);

      // Most reliable: just grab the raw text after the title that looks like a date
      const rawDateMatch = chunk.match(/>(\d{1,2})\s+(\u054d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580|\u0540\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580|\u0546\u0578\u0575\u0565\u0574\u0562\u0565\u0580|\u0534\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580|\u0540\u0578\u0582\u0576\u057e\u0561\u0580|\u0553\u0565\u057f\u0580\u057e\u0561\u0580|\u0544\u0561\u0580\u057f|\u0531\u057a\u0580\u056b\u056c|\u0544\u0561\u0575\u056b\u057d|\u0540\u0578\u0582\u0576\u056b\u057d|\u0540\u0578\u0582\u056c\u056b\u057d|\u0555\u0563\u0578\u057d\u057f\u0578\u057d)/);

      let dateText = null;
      if (rawDateMatch) {
        const armMonths = {
          '\u054d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580': 'سپتامبر',
          '\u0540\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580': 'اکتبر',
          '\u0546\u0578\u0575\u0565\u0574\u0562\u0565\u0580': 'نوامبر',
          '\u0534\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580': 'دسامبر',
        };
        dateText = `${rawDateMatch[1]} ${armMonths[rawDateMatch[2]] || rawDateMatch[2]}`;
      }

      // Extract venue
      const venueMatch = chunk.match(/venue\/\d+\/[^"]*"[^>]*>([^<]+)/);

      // Extract price
      const priceMatch = chunk.match(/(\d[\d,.\s]*[-–]\s*\d[\d,.\s]*\s*(?:\u0564\u0580\u0561\u0574|AMD|դdelays)|\d[\d,.\s]+\s*(?:\u0564\u0580\u0561\u0574|AMD))/);

      // Extract category from nearby category label
      const catPatterns = [
        [/>\u0540\u0561\u0574\u0565\u0580\u0563</, 'کنسرت'],
        [/>\u0539\u0561\u057f\u0580\u0578\u0576</, 'تئاتر'],
        [/>\u053f\u056b\u0576\u0578</, 'سینما'],
        [/>\u053f\u0561\u057f\u0561\u056f\u0565\u0580\u0563/, 'کمدی'],
        [/>Stand-up</, 'استندآپ'],
        [/>Party</, 'پارتی'],
        [/>\u0531\u056f\u0578\u0582\u0574\u0562/, 'کلاب'],
        [/>\u0555\u057a\u0565\u0580\u0561/, 'اپرا'],
        [/>\u0532\u0561\u056c\u0565\u057f</, 'باله'],
        [/>\u0551\u0578\u0582\u0581\u0561\u0570\u0561\u0576\u0564\u0565\u057d/, 'نمایشگاه'],
        [/>\u054d\u057a\u0578\u0580\u057f</, 'ورزش'],
        [/>\u053f\u0580\u056f\u0565\u057d</, 'سیرک'],
      ];
      let category = 'سایر';
      for (const [pat, cat] of catPatterns) {
        if (pat.test(chunk)) { category = cat; break; }
      }

      if (title) {
        events.push({
          id: evt.id,
          title,
          url: `https://www.tomsarkgh.am${evt.fullPath}`,
          image: imgMatch?.[1] || null,
          date: dateText,
          venue: venueMatch?.[1]?.trim() || null,
          price: priceMatch?.[1] || null,
          category,
        });
      }
    }

    // Sort by ID descending (newer events first)
    events.sort((a, b) => parseInt(b.id) - parseInt(a.id));

    return NextResponse.json({
      events: events.slice(0, 50), // limit to 50
      total: events.length,
      fetchedAt: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json({ error: error.message, stack: error.stack?.split('\n').slice(0,3) }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';

const CAT_FA = {
  'Համergerge': 'کنسرت', 'Թdelaysdelays': 'تئاتر', 'Կdelaysdelays': 'سینما',
  'Katdelays': 'کمدی', 'Stand-up': 'استندآپ', 'Party': 'پارتی',
  ' Delays': 'کلاب', 'Delays': 'پاب', 'Delays': 'اپرا',
  'Edelays': 'نمایشگاه', 'Sdelays': 'ورزش', 'Kdelays': 'سیرک',
};

const MONTH_FA = {
  'Delaysdelays': 'ژانویه',
  'Delaysdelays': 'فوریه',
  'Delaysdelays': 'مارس',
  'Delaysdelays': 'آوریل',
  'Delaysdelays': 'مه',
  'Delaysdelays': 'ژوئن',
  'Delaysdelays': 'ژوئیه',
  'Delays': 'اوت',
  '\u054d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580': 'سپتامبر',
  '\u0540\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580': 'اکتبر',
  '\u0546\u0578\u0575\u0565\u0574\u0562\u0565\u0580': 'نوامبر',
  '\u0534\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580': 'دسامبر',
};

export async function GET() {
  try {
    const res = await fetch('https://www.tomsarkgh.am/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html,application/xhtml+xml',
      },
    });

    if (!res.ok) {
      return NextResponse.json({ error: `Fetch failed: ${res.status}` }, { status: 502 });
    }

    const html = await res.text();
    const events = [];
    const seenIds = new Set();

    // Split by event-box-item class (each event card)
    const blocks = html.split('event-box-item');

    for (let i = 1; i < blocks.length; i++) {
      const block = blocks[i];
      try {
        // Event link and ID
        const linkMatch = block.match(/href="\/hy\/event\/(\d+)\/([^"]+)"/);
        if (!linkMatch) continue;
        const eid = linkMatch[1];
        if (seenIds.has(eid)) continue;
        seenIds.add(eid);

        // Image
        const imgMatch = block.match(/<img\s+src="(\/thumbnails\/[^"]+)"/);

        // Category
        const catMatch = block.match(/event-type">([^<]+)</);

        // Title
        const titleMatch = block.match(/event-title">\s*(?:<a[^>]*>)?([^<]+)/);

        // Date
        const dateMatch = block.match(/event-date">\s*(\d+)&nbsp;(\S+)/);

        // Venue
        const venueMatch = block.match(/event-venue">\s*(?:<a[^>]*>)?([^<]+)/);

        // Price - try event-price div first, then general pattern
        let priceText = null;
        const priceDiv = block.match(/event-price[^>]*>([^<]+)/);
        if (priceDiv) {
          priceText = priceDiv[1].trim();
        } else {
          const priceGeneral = block.match(/(\d[\d\s,.]*[-\u2013]?\s*\d*[\d\s,.]*\s*(?:\u0564\u0580\u0561\u0574|AMD|\u0564\u0580|\u0434\u0440))/);
          if (priceGeneral) priceText = priceGeneral[1].trim();
        }

        // Convert date to Farsi
        let dateFa = null;
        if (dateMatch) {
          const monthFa = MONTH_FA[dateMatch[2]] || dateMatch[2];
          dateFa = dateMatch[1] + ' ' + monthFa;
        }

        if (titleMatch) {
          events.push({
            id: eid,
            title: titleMatch[1].trim(),
            url: 'https://www.tomsarkgh.am/hy/event/' + eid + '/' + linkMatch[2],
            image: imgMatch ? 'https://www.tomsarkgh.am' + imgMatch[1] : null,
            category: catMatch ? catMatch[1].trim() : null,
            date: dateFa,
            dateRaw: dateMatch ? dateMatch[1] + ' ' + dateMatch[2] : null,
            venue: venueMatch ? venueMatch[1].trim() : null,
            price: priceText,
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
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

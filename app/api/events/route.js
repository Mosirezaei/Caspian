import { NextResponse } from 'next/server';

const CAT_FA = {
  '\u0540\u0561\u0574\u0565\u0580\u0563': '\u06a9\u0646\u0633\u0631\u062a',
  '\u0539\u0561\u057f\u0580\u0578\u0576': '\u062a\u0626\u0627\u062a\u0631',
  '\u053f\u056b\u0576\u0578': '\u0633\u06cc\u0646\u0645\u0627',
  '\u053f\u0561\u057f\u0561\u056f\u0565\u0580\u0563\u0578\u0582\u0569\u0575\u0578\u0582\u0576': '\u06a9\u0645\u062f\u06cc',
  'Stand-up': '\u0627\u0633\u062a\u0646\u062f\u0622\u067e',
  'Party': '\u067e\u0627\u0631\u062a\u06cc',
  '\u0531\u056f\u0578\u0582\u0574\u0562': '\u06a9\u0644\u0627\u0628',
  '\u0553\u0561\u0562': '\u067e\u0627\u0628',
  '\u0555\u057a\u0565\u0580\u0561 \u0587 \u0562\u0561\u056c\u0565\u057f': '\u0627\u067e\u0631\u0627 \u0648 \u0628\u0627\u0644\u0647',
  '\u0551\u0578\u0582\u0581\u0561\u0570\u0561\u0576\u0564\u0565\u057d': '\u0646\u0645\u0627\u06cc\u0634\u06af\u0627\u0647',
  '\u054d\u057a\u0578\u0580\u057f': '\u0648\u0631\u0632\u0634',
  '\u053f\u0580\u056f\u0565\u057d': '\u0633\u06cc\u0631\u06a9',
  '\u0531\u056f\u0578\u0582\u0574\u0562 \u0587 \u0583\u0561\u0562': '\u06a9\u0644\u0627\u0628 \u0648 \u067e\u0627\u0628',
  '\u0531\u0575\u056c': '\u0633\u0627\u06cc\u0631',
};

const MONTH_FA = {
  '\u054d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580': '\u0633\u067e\u062a\u0627\u0645\u0628\u0631',
  '\u0540\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580': '\u0627\u06a9\u062a\u0628\u0631',
  '\u0546\u0578\u0575\u0565\u0574\u0562\u0565\u0580': '\u0646\u0648\u0627\u0645\u0628\u0631',
  '\u0534\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580': '\u062f\u0633\u0627\u0645\u0628\u0631',
  '\u0540\u0578\u0582\u0576\u057e\u0561\u0580': '\u0698\u0627\u0646\u0648\u06cc\u0647',
  '\u0553\u0565\u057f\u0580\u057e\u0561\u0580': '\u0641\u0648\u0631\u06cc\u0647',
  '\u0544\u0561\u0580\u057f': '\u0645\u0627\u0631\u0633',
  '\u0531\u057a\u0580\u056b\u056c': '\u0622\u0648\u0631\u06cc\u0644',
  '\u0544\u0561\u0575\u056b\u057d': '\u0645\u0647',
  '\u0540\u0578\u0582\u0576\u056b\u057d': '\u0698\u0648\u0626\u0646',
  '\u0540\u0578\u0582\u056c\u056b\u057d': '\u0698\u0648\u0626\u06cc\u0647',
  '\u0555\u0563\u0578\u057d\u057f\u0578\u057d': '\u0627\u0648\u062a',
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

        // Use bigger image (replace small thumbnail size with 400x225)
        let imageUrl = null;
        if (imgMatch) {
          const path = imgMatch[1].replace(/\/\d+_\d+_center_[A-F0-9]+\//, '/400_225_center_FF0000/');
          imageUrl = 'https://www.tomsarkgh.am' + path;
        }

        let dateFa = null;
        if (dateMatch) {
          const monthFa = MONTH_FA[dateMatch[2]] || dateMatch[2];
          dateFa = dateMatch[1] + ' ' + monthFa;
        }

        const catFa = catMatch ? (CAT_FA[catMatch[1].trim()] || catMatch[1].trim()) : null;

        if (titleMatch) {
          events.push({
            id: eid,
            title: titleMatch[1].trim(),
            url: 'https://www.tomsarkgh.am/hy/event/' + eid + '/' + linkMatch[2],
            image: imageUrl,
            category: catMatch ? catMatch[1].trim() : null,
            categoryFa: catFa,
            date: dateFa,
            venue: venueMatch ? venueMatch[1].trim() : null,
            price: priceText,
          });
        }
      } catch (e) { /* skip */ }
    }

    // Now translate titles to Farsi using Claude API
    if (events.length > 0) {
      try {
        const titlesText = events.map((e, i) => `${i+1}. ${e.title}`).join('\n');
        const transRes = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: 'claude-sonnet-4-6',
            max_tokens: 4000,
            messages: [{
              role: 'user',
              content: `Translate these Armenian/English event titles to Persian (Farsi). Keep proper nouns, band names and English words as-is. Return ONLY numbered translations, one per line, matching the input numbering. No explanations.\n\n${titlesText}`
            }],
          }),
        });
        const transData = await transRes.json();
        const translated = transData.content?.[0]?.text || '';
        const lines = translated.split('\n').filter(l => l.trim());
        for (const line of lines) {
          const m = line.match(/^(\d+)\.\s*(.+)/);
          if (m) {
            const idx = parseInt(m[1]) - 1;
            if (idx >= 0 && idx < events.length) {
              events[idx].titleFa = m[2].trim();
            }
          }
        }
      } catch (e) {
        // Translation failed — titles stay in Armenian
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

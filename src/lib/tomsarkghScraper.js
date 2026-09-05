// Scrapes events directly from tomsarkgh.am's own category-listing pages --
// NOT the homepage. The homepage only teases a handful of events per
// category, which is why previous versions of this scraper returned an
// incomplete/truncated list. Reading each category's dedicated page (and
// following its own "more" pagination) gives the full, current listing.
//
// Only three category groups are scraped, matching what the site
// (Caspian) actually wants to show:
//   - Համերգ (Concert)     -- includes its subtypes Rock/Jazz/Classical/
//                             Dance/Folk, since tomsarkgh.am's "Բոլորը"
//                             (All) listing for Concert already contains
//                             every subtype, including Dance ("Պար").
//   - Ցուցահանդես (Exhibition)
//   - Բալետ (Ballet)        -- scraped on its own because Ballet lives
//                             under the separate "Օպերա և բալետ" (Opera &
//                             Ballet) group on the source site, not under
//                             Concert. Opera itself is intentionally left
//                             out.
// Everything else (cinema, theater, comedy, stand-up, party, clubs, pubs,
// sport, circus, IT, opera, operetta, ...) is left out on purpose.
//
// "Festival" isn't a real category on tomsarkgh.am -- events like
// "Coca-Cola Fest" are just regular Concert entries. We detect these by
// title keyword (festival/fest/փառատոն) and tag them as a festival
// instead of whatever raw category they came in under.

const CATEGORY_SLUGS = ['Համերգ', 'Ցուցահանդես', 'Բալետ'];

// Maps every raw Armenian category/subtype label we might see on these
// three category pages to a Persian tab label. Anything NOT in this map
// is dropped rather than shown as raw untranslated Armenian text (this is
// exactly what happened before with the leaked "Պար" label).
const CAT_FA = {
  'Համերգ': 'کنسرت',
  'Ռոք': 'کنسرت',
  'Ջազ': 'کنسرت',
  'Դասական': 'کنسرت',
  'Ժողովրդական': 'کنسرت',
  'Փոփ': 'کنسرت',
  'Պար': 'رقص و باله',
  'Բալետ': 'رقص و باله',
  'Ցուցահանդես': 'نمایشگاه',
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

const FESTIVAL_RE = /festival|fest\b|փառատոն/i;

function proxyImage(url) {
  if (!url) return null;
  const origUrl = url.replace(/\/\d+_\d+_center_[A-F0-9]+\//, '/orig/');
  return `/api/image-proxy?src=${encodeURIComponent(origUrl)}`;
}

function parseEventBlocks(html) {
  const events = [];
  const blocks = html.split('event-box-item');

  for (let i = 1; i < blocks.length; i++) {
    const block = blocks[i];
    try {
      const linkMatch = block.match(/href="\/hy\/event\/(\d+)\/([^"]+)"/);
      if (!linkMatch) continue;
      const eid = linkMatch[1];

      const imgMatch = block.match(/<img\s+src="(\/thumbnails\/Photo\/[^"]+)"/);
      const imageUrl = imgMatch ? 'https://www.tomsarkgh.am' + imgMatch[1] : null;

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

      const title = titleMatch ? titleMatch[1].trim() : null;
      if (!title) continue;

      const rawCat = catMatch ? catMatch[1].trim() : null;
      const isFestival = FESTIVAL_RE.test(title);
      const catFa = isFestival ? 'فستیوال' : (rawCat ? CAT_FA[rawCat] : null);

      // Drop anything we can't confidently place into one of our four
      // buckets (concert / dance-and-ballet / exhibition / festival)
      // instead of letting raw Armenian text leak through as a category.
      if (!catFa) continue;

      events.push({
        id: eid,
        title,
        url: 'https://www.tomsarkgh.am/hy/event/' + eid + '/' + linkMatch[2],
        image: proxyImage(imageUrl),
        category: rawCat,
        categoryFa: catFa,
        date: dateFa,
        venue: venueMatch ? venueMatch[1].trim() : null,
        price: priceText,
      });
    } catch (e) { /* skip this block */ }
  }

  return events;
}

// Fetches one category's complete listing by following tomsarkgh.am's own
// pagination (scopeKey groups events into "today/weekend", "next week" and
// "everything further out"; page paginates within each). We stop paging a
// given scopeKey as soon as a page adds no event we haven't already seen,
// and cap pages defensively in case that never happens.
async function fetchCategoryFull(slug) {
  const seen = new Set();
  const all = [];
  const scopeKeys = ['today', 0, 1];

  for (const scopeKey of scopeKeys) {
    for (let page = 1; page <= 20; page++) {
      const url = `https://www.tomsarkgh.am/hy/category/${encodeURIComponent(slug)}?scopeKey=${scopeKey}&page=${page}&view=list4x`;
      let html;
      try {
        const res = await fetch(url, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            'Accept': 'text/html',
          },
        });
        if (!res.ok) break;
        html = await res.text();
      } catch (e) {
        break;
      }

      const pageEvents = parseEventBlocks(html);
      if (pageEvents.length === 0) break;

      const fresh = pageEvents.filter((e) => !seen.has(e.id));
      fresh.forEach((e) => {
        seen.add(e.id);
        all.push(e);
      });
      if (fresh.length === 0) break; // this page had nothing new -- done with this scope
    }
  }

  return all;
}

// Scrapes Concert, Exhibition and Ballet category pages in full and merges
// them into one deduplicated list (an event can only ever show up under
// one of these three source pages, but we dedupe defensively anyway).
export async function scrapeAllEvents() {
  const seenIds = new Set();
  const events = [];

  for (const slug of CATEGORY_SLUGS) {
    const catEvents = await fetchCategoryFull(slug);
    for (const e of catEvents) {
      if (seenIds.has(e.id)) continue;
      seenIds.add(e.id);
      events.push(e);
    }
  }

  return events;
}

export { proxyImage, CAT_FA, MONTH_FA };

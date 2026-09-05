import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { scrapeAllEvents } from '@/lib/tomsarkghScraper';

// Cache the whole response for 10 minutes. Without this, Next.js 15
// re-scrapes tomsarkgh.am's category pages and re-parses them on every
// single page view, which is the main reason the page felt slow.
export const revalidate = 600;

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

// Extracts every number group out of a raw price string (Armenian/Russian/
// English digits are identical, only the currency word differs) and turns
// it into one consistent "X AMD" / "X-Y AMD" string. Filters out anything
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

export async function GET() {
  try {
    const events = await scrapeAllEvents();

    for (const event of events) {
      event.priceDisplay = normalizePrice(event.price) || event.price;
    }

    // Merge in any Farsi translations we already have cached. This is a
    // single fast Supabase read -- no dependency on Claude API latency or
    // uptime at request time. Precedence for display purposes ends up:
    // titleFa (cached Farsi) > title (raw Armenian, until the next sync).
    await mergeFarsiTranslations(events);

    return NextResponse.json({ events, total: events.length, fetchedAt: new Date().toISOString() });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

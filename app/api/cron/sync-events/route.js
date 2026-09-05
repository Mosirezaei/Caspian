import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { scrapeAllEvents } from '@/lib/tomsarkghScraper';

// Runs once a day (see vercel.json -- Vercel Hobby caps cron jobs at one run
// per day). Scrapes tomsarkgh.am's Concert/Exhibition/Ballet category pages
// (via the SAME scraper used by /api/events, so the two routes can never
// disagree about which categories/events exist), translates whichever
// events aren't already cached, and upserts everything into Supabase
// through a SECURITY DEFINER RPC (sync_events_cache) gated by CRON_SECRET --
// this route only ever holds the public anon key, never a service-role key.
//
// Translation uses MyMemory (api.mymemory.translated.net), a free,
// keyless translation API -- NOT the Claude API. This was switched from
// Claude after discovering the Anthropic API key on this project has no
// remaining credit balance, which silently failed every single batch.
// MyMemory's free anonymous tier (~5,000 words/day) comfortably covers a
// once-daily sync of ~100-150 short titles/venue names, and needs no
// billing or API key at all. Quality is a notch below an LLM for nuanced
// phrasing, but is more than adequate for short event titles and venue
// names.
//
// The public-facing /api/events route just reads from events_cache; it
// never calls any translation API at request time, so a slow or failing
// translation here can never slow down or break the live page.

// MyMemory needs a source language hint. Armenian and Russian have
// non-overlapping Unicode blocks, so a quick character-range check is
// enough to pick the right one. Already-Latin text (band names, English
// titles) is left untouched -- there's nothing to translate.
function detectSourceLang(text) {
  if (!text) return null;
  if (/[\u0530-\u058F]/.test(text)) return 'hy';
  if (/[\u0400-\u04FF]/.test(text)) return 'ru';
  return null;
}

async function translateText(text) {
  const lang = detectSourceLang(text);
  if (!lang) return null;

  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${lang}|fa`;
    const res = await fetch(url, { signal: AbortSignal.timeout(10000) });
    if (!res.ok) return null;

    const data = await res.json();
    const translated = data?.responseData?.translatedText;
    if (!translated) return null;
    // MyMemory returns the request text back (sometimes wrapped in a
    // quota-warning string) when it can't translate or the daily quota is
    // hit -- treat that as "no translation" rather than caching garbage.
    if (translated.trim() === text.trim()) return null;
    if (/MYMEMORY WARNING|QUERY LENGTH LIMIT/i.test(translated)) return null;
    return translated.trim();
  } catch (e) {
    return null;
  }
}

async function translateEvent(event) {
  const [titleFa, venueFa] = await Promise.all([
    translateText(event.title),
    translateText(event.venue),
  ]);
  return { titleFa, venueFa };
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
    // Same scraper as /api/events: reads the Concert/Exhibition/Ballet
    // category pages in full (not the homepage), and already tags
    // festival-by-title events as categoryFa: 'فستیوال'. Keeping this in
    // sync with /api/events is the whole point of sharing the function --
    // previously this route had its own separate homepage-based scraper
    // that included theater/cinema/sport/etc. and never detected festivals.
    const events = await scrapeAllEvents();
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

    const translations = {};
    for (const event of toTranslate) {
      translations[event.id] = await translateEvent(event);
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

    const newlyTranslated = Object.values(translations).filter(
      (t) => t.titleFa || t.venueFa
    ).length;

    return NextResponse.json({
      total: events.length,
      attempted: toTranslate.length,
      newlyTranslated,
      alreadyCached: alreadyTranslated.size,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

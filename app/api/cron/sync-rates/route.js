import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Runs periodically (see vercel.json comment -- Vercel Hobby's built-in
// cron only fires once a day, so this route is actually triggered by an
// external scheduler such as cron-job.org or a GitHub Actions workflow,
// hitting this URL once an hour with the CRON_SECRET bearer token). Once an
// hour also happens to match alan chand's free-tier rate limit (1 request
// per hour per token) -- see https://alanchand.com/media/api. If/when the
// unlimited paid plan is purchased, this can be scheduled more frequently
// (e.g. every 5 minutes) without changing anything else here.
//
// Pricing logic: our published USD sell price is the source's USD sell
// price plus a flat MARKUP_TOMAN. Every other currency is NOT bumped by
// that same flat amount -- instead we compute the ratio that flat markup
// represents on USD, and apply that same ratio (percentage) to every other
// currency so the whole board stays internally consistent with the USD
// markup, exactly as requested.
const MARKUP_TOMAN = 6000;

export async function GET(request) {
  const auth = request.headers.get('authorization');
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const alanchandToken = process.env.ALANCHAND_API_TOKEN;
  if (!supabaseUrl || !supabaseKey || !process.env.CRON_SECRET || !alanchandToken) {
    return NextResponse.json({ error: 'Missing required env vars' }, { status: 500 });
  }
  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    const res = await fetch(
      `https://api.alanchand.com/?type=currencies&token=${alanchandToken}`,
      { headers: { Accept: 'application/json' }, signal: AbortSignal.timeout(10000) }
    );
    if (!res.ok) {
      return NextResponse.json({ error: `alanchand responded ${res.status}` }, { status: 502 });
    }
    const data = await res.json();
    const usd = data?.usd;
    if (!usd?.sell) {
      return NextResponse.json({ error: 'no usd rate in alanchand response' }, { status: 502 });
    }

    const ratio = (usd.sell + MARKUP_TOMAN) / usd.sell;

    const rates = Object.values(data)
      .filter((d) => d && typeof d.sell === 'number' && typeof d.buy === 'number' && d.slug)
      .map((d) => ({
        symbol: d.slug,
        name: d.name || d.slug,
        source_sell: d.sell,
        source_buy: d.buy,
        sell: Math.round(d.sell * ratio),
        buy: Math.round(d.buy * ratio),
        ratio,
      }));

    if (rates.length === 0) {
      return NextResponse.json({ error: 'no usable rates parsed from alanchand response' }, { status: 502 });
    }

    const { error } = await supabase.rpc('sync_exchange_rates', {
      rates,
      secret: process.env.CRON_SECRET,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      synced: rates.length,
      ratio,
      usd_sell_source: usd.sell,
      usd_sell_published: Math.round(usd.sell * ratio),
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

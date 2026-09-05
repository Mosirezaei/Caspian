import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Runs every minute, around the clock (see the cron-job.org job configured
// for this endpoint, which pings this URL every minute with the
// CRON_SECRET bearer token -- Vercel Hobby's own cron only fires once a
// day, so it can't drive this on its own, and GitHub Actions' shortest
// interval is 5 minutes, so neither could hit the requested 1-minute
// cadence on their own).
//
// Request budget: the paid alanchand plan allows up to 15,000 requests
// PER DAY (not per month, as originally assumed). Running every minute,
// 24/7, is 1,440 requests/day -- under 10% of that budget -- so there's
// no need for a peak/off-peak throttle here; every invocation just calls
// alanchand directly.
//
// Pricing logic: MARKUP_TOMAN is 0 -- published rates are the source's
// rates exactly as-is, no markup added. (Previously this added a flat
// markup to USD and scaled every other currency by the same ratio; the
// user decided the raw source rate should be shown untouched instead.)
const MARKUP_TOMAN = 0;

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
        dolar_rate: typeof d.dolar_rate === 'number' ? d.dolar_rate : null,
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

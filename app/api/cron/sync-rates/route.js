import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Runs periodically (see .github/workflows/sync-rates.yml, which now pings
// this URL every 5 minutes -- GitHub Actions' shortest supported cron
// interval -- with the CRON_SECRET bearer token; Vercel Hobby's own cron
// only fires once a day, so it can't drive this on its own). The account
// is now on a paid alanchand plan (~15,000 requests/month), so the real
// request budgeting happens below via the peak/off-peak throttle, not via
// the schedule itself.
//
// Pricing logic: MARKUP_TOMAN is 0 -- published rates are the source's
// rates exactly as-is, no markup added. (Previously this added a flat
// markup to USD and scaled every other currency by the same ratio; the
// user decided the raw source rate should be shown untouched instead.)
const MARKUP_TOMAN = 0;

// Request budget: the paid alanchand plan allows up to 15,000 requests
// (assumed monthly). Most people check rates during business hours, so we
// spend the budget refreshing every 5 minutes (GitHub Actions' shortest
// supported cron interval) during 08:00-20:00 Yerevan time, and only once
// an hour outside that window. This workflow now pings this route every
// 5 minutes around the clock (see .github/workflows/sync-rates.yml); the
// off-peak throttle below is what keeps quota usage down outside the
// 08:00-20:00 window instead of also calling alanchand every 5 minutes.
//
// Budget check: peak = 12h * 12 pings/hour = 144 calls/day.
// off-peak = 12h / 60min throttle = 12 calls/day.
// Daily total 156 -> ~4,680/month for a 30-day month, comfortably under
// the 15,000 cap with plenty of headroom (e.g. to tighten the off-peak
// throttle further, or shorten it, without ever approaching the limit).
const PEAK_START_HOUR = 8; // 08:00 Yerevan
const PEAK_END_HOUR = 20; // 20:00 Yerevan
const OFF_PEAK_MIN_GAP_MINUTES = 60;

function currentYerevanHour() {
  return parseInt(
    new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Yerevan',
      hour: 'numeric',
      hour12: false,
    }).format(new Date()),
    10
  );
}

function isPeakHour() {
  const hour = currentYerevanHour();
  return hour >= PEAK_START_HOUR && hour < PEAK_END_HOUR;
}

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

  if (!isPeakHour()) {
    // Off-peak: only refresh once per OFF_PEAK_MIN_GAP_MINUTES so we don't
    // burn through the monthly request quota overnight when almost nobody
    // is checking rates. usd's updated_at stands in for "when did we last
    // actually sync" since every row is written together in one batch.
    const { data: existing } = await supabase
      .from('exchange_rates_cache')
      .select('updated_at')
      .eq('symbol', 'usd')
      .maybeSingle();

    if (existing?.updated_at) {
      const ageMinutes = (Date.now() - new Date(existing.updated_at).getTime()) / 60000;
      if (ageMinutes < OFF_PEAK_MIN_GAP_MINUTES) {
        return NextResponse.json({
          skipped: true,
          reason: 'off-peak throttle',
          ageMinutes: Math.round(ageMinutes),
        });
      }
    }
  }

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

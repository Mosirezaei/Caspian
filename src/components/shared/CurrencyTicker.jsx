'use client';
import React, { useEffect, useState } from 'react';
import { useLang } from '@/lib/LanguageContext';
import { supabase } from '@/api/supabaseClient';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';

// Shared, reusable "how much is X worth" ticker. Reads from the
// exchange_rates_cache table (kept fresh by app/api/cron/sync-rates), NOT
// directly from any external API -- so it's safe to drop this on as many
// pages as needed without adding any extra load on the rate source.
const SYMBOLS = ['usd', 'eur', 'gbp', 'amd'];

const LABELS = {
  usd: { fa: 'دلار آمریکا', en: 'US Dollar', ru: 'Доллар США', icon: '💵' },
  eur: { fa: 'یورو', en: 'Euro', ru: 'Евро', icon: '💶' },
  gbp: { fa: 'پوند انگلیس', en: 'British Pound', ru: 'Фунт стерлингов', icon: '💷' },
  amd: { fa: 'درام ارمنستان', en: 'Armenian Dram', ru: 'Армянский драм', icon: '🇦🇲' },
};

// The source quotes AMD per 100 units (it's a small-value currency); every
// other symbol here is already per single unit.
const PER_UNIT_DIVISOR = { amd: 100 };

function directionOf(current, prev) {
  if (prev == null || current == null) return 'none';
  if (current > prev) return 'up';
  if (current < prev) return 'down';
  return 'none';
}

export default function CurrencyTicker() {
  const { lang } = useLang();
  const [rows, setRows] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState('');

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const { data, error } = await supabase
          .from('exchange_rates_cache')
          .select('symbol, sell, prev_sell, updated_at')
          .in('symbol', SYMBOLS);

        if (!cancelled && !error && data?.length) {
          const bySymbol = Object.fromEntries(data.map((r) => [r.symbol, r]));
          setRows(bySymbol);
          setLastUpdate(new Date(data[0].updated_at).toLocaleTimeString('fa-IR'));
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    const iv = setInterval(load, 5 * 60 * 1000);
    return () => {
      cancelled = true;
      clearInterval(iv);
    };
  }, []);

  const label =
    lang === 'fa' ? 'نرخ لحظه‌ای ارز (تومان) در بازار آزاد ایران' : lang === 'ru' ? 'Курс валют (туман)' : 'Live Exchange Rates (Toman)';

  return (
    <section className="mb-6">
      <div className="glass-panel rounded-2xl p-5 border border-primary/20">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-bold text-primary">{label}</span>
          {lastUpdate && (
            <span className="text-xs text-foreground/40">
              {lang === 'fa'
                ? `بروزرسانی: ${lastUpdate}`
                : lang === 'ru'
                ? `Обновлено: ${lastUpdate}`
                : `Updated: ${lastUpdate}`}
            </span>
          )}
        </div>

        {loading ? (
          <div className="flex justify-center py-4">
            <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {SYMBOLS.map((sym) => {
              const row = rows?.[sym];
              const divisor = PER_UNIT_DIVISOR[sym] || 1;
              const value = row?.sell != null ? Math.round(row.sell / divisor) : null;
              const prevValue = row?.prev_sell != null ? Math.round(row.prev_sell / divisor) : null;
              const dir = directionOf(value, prevValue);
              const info = LABELS[sym];

              return (
                <div key={sym} className="text-center p-3 rounded-xl bg-white/3">
                  <div className="text-xl mb-1">{info.icon}</div>
                  <div className="text-xs text-foreground/50 mb-1">{info[lang] || info.fa}</div>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-base font-black gold-gradient-text">
                      {value != null ? value.toLocaleString('fa-IR') : '—'}
                    </span>
                    {dir === 'up' && <ArrowUp className="w-3.5 h-3.5 text-green-400" />}
                    {dir === 'down' && <ArrowDown className="w-3.5 h-3.5 text-red-400" />}
                    {dir === 'none' && prevValue != null && <Minus className="w-3.5 h-3.5 text-foreground/30" />}
                  </div>
                  <div className="text-xs text-foreground/30">
                    {lang === 'fa' ? 'تومان' : lang === 'ru' ? 'туман' : 'Toman'}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

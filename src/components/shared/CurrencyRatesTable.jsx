'use client';
import { useEffect, useState } from 'react';
import { useLang } from '@/lib/LanguageContext';
import { supabase } from '@/api/supabaseClient';

// The exact set and order of currencies the user wants shown, matching
// alanchand.com's own site (not just the compact 4-currency ticker).
// Symbols must match alanchand's `slug` field exactly.
const ORDER = [
  'usd', 'usd-ist', 'eur', 'aed', 'try', 'gbp', 'cny', 'cad', 'aud', 'rub',
  'iqd', 'myr', 'gel', 'azn', 'amd', 'thb', 'omr', 'inr', 'jpy', 'afn',
];

const HEADERS = {
  fa: { name: 'نام ارز', buy: 'خرید', sell: 'فروش', usdRate: 'نرخ به دلار', toman: 'تومان' },
  en: { name: 'Currency', buy: 'Buy', sell: 'Sell', usdRate: 'USD Rate', toman: 'Toman' },
  ru: { name: 'Валюта', buy: 'Покупка', sell: 'Продажа', usdRate: 'Курс к USD', toman: 'Туман' },
};

const DISCLAIMER = {
  fa: 'برای استعلام لحظه‌ای و نرخ حواله ارز از همکاران ما استعلام بگیرید.',
  en: 'For real-time quotes and money-transfer rates, please check with our partners.',
  ru: 'Для получения актуального курса и условий денежного перевода уточняйте у наших партнёров.',
};

const WHATSAPP_BUTTON_LABEL = {
  fa: 'استعلام لحظه‌ای و نرخ حواله در واتساپ',
  en: 'Get Live Rates & Transfer Info on WhatsApp',
  ru: 'Узнать курс и условия перевода в WhatsApp',
};

const WHATSAPP_MESSAGE = {
  fa: 'سلام، برای استعلام نرخ لحظه‌ای و حواله ارز پیام دادم.',
  en: "Hi, I'm messaging for a live exchange rate and money-transfer quote.",
  ru: 'Здравствуйте, хочу узнать актуальный курс и условия перевода.',
};

function openWhatsApp(lang) {
  const text = WHATSAPP_MESSAGE[lang] || WHATSAPP_MESSAGE.fa;
  window.open(`https://wa.me/37433149327?text=${encodeURIComponent(text)}`, '_blank');
}

export default function CurrencyRatesTable() {
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
          .select('symbol, name, buy, sell, dolar_rate, updated_at')
          .in('symbol', ORDER);

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

  const h = HEADERS[lang] || HEADERS.fa;
  const dir = lang === 'fa' ? 'rtl' : lang === 'en' ? 'ltr' : 'ltr';

  return (
    <section className="mb-10">
      <div className="glass-panel rounded-2xl p-5 border border-primary/20 overflow-x-auto">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-bold text-primary">
            {lang === 'fa' ? 'جدول کامل نرخ ارز' : lang === 'ru' ? 'Полный курс валют' : 'Full Exchange Rate Table'}
          </span>
          {lastUpdate && (
            <span className="text-xs text-foreground/40">
              {lang === 'fa' ? `بروزرسانی: ${lastUpdate}` : lang === 'ru' ? `Обновлено: ${lastUpdate}` : `Updated: ${lastUpdate}`}
            </span>
          )}
        </div>

        {loading ? (
          <div className="flex justify-center py-8">
            <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
          </div>
        ) : (
          <table className="w-full text-sm" dir={dir}>
            <thead>
              <tr className="text-foreground/50 text-xs border-b border-white/10">
                <th className="text-start py-2 px-2 font-normal">{h.name}</th>
                <th className="text-center py-2 px-2 font-normal">{h.buy}</th>
                <th className="text-center py-2 px-2 font-normal">{h.sell}</th>
                <th className="text-center py-2 px-2 font-normal">{h.usdRate}</th>
              </tr>
            </thead>
            <tbody>
              {ORDER.map((sym) => {
                const row = rows?.[sym];
                if (!row) return null;
                return (
                  <tr key={sym} className="border-b border-white/5 hover:bg-white/3">
                    <td className="py-2.5 px-2 font-bold text-foreground/90">{row.name}</td>
                    <td className="py-2.5 px-2 text-center text-foreground/70">
                      {row.buy != null ? Number(row.buy).toLocaleString('en-US') : '—'}
                    </td>
                    <td className="py-2.5 px-2 text-center gold-gradient-text font-bold">
                      {row.sell != null ? Number(row.sell).toLocaleString('en-US') : '—'}
                    </td>
                    <td className="py-2.5 px-2 text-center text-foreground/50 text-xs">
                      {sym === 'usd' || sym === 'usd-ist' ? '—' : (row.dolar_rate ?? '—')}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}

        <p className="text-xs text-foreground/40 mt-4 pt-4 border-t border-white/10 text-center leading-relaxed">
          {DISCLAIMER[lang] || DISCLAIMER.fa}
        </p>

        <button
          onClick={() => openWhatsApp(lang)}
          className="mt-3 w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-primary text-black font-black rounded-xl hover:bg-yellow-500 transition"
        >
          {WHATSAPP_BUTTON_LABEL[lang] || WHATSAPP_BUTTON_LABEL.fa}
        </button>
      </div>
    </section>
  );
}

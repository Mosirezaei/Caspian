'use client';
import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { ServicePageLayout } from '@/components/shared/ServicePageLayout';
import { ArrowLeftRight, TrendingUp, Loader2 } from 'lucide-react';

const CURRENCIES = ['USD', 'EUR', 'RUB', 'TRY', 'AED', 'AMD', 'GBP', 'CAD', 'CHF', 'JPY', 'GEL'];
const API_KEY = process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_KEY;

function CurrencyConverter() {
  const langContext = useLang();
  const lang = langContext?.lang || 'fa';

  const [amount, setAmount] = useState('100');
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('AMD');
  const [result, setResult] = useState('');
  const [rates, setRates] = useState(null);
  const [rateTime, setRateTime] = useState(null);
  const [ratesLoading, setRatesLoading] = useState(true);

  const labels = {
    fa: { from: 'از', to: 'به', amount: 'مقدار', note: 'نرخ‌های صرافی کاسپین', updated: 'آخرین به‌روزرسانی' },
    en: { from: 'From', to: 'To', amount: 'Amount', note: 'Caspian Exchange Rates', updated: 'Last updated' },
    ru: { from: 'Из', to: 'В', amount: 'Сумма', note: 'Курсы валют Caspian', updated: 'Обновлено' },
  };
  const lbl = labels[lang] || labels.fa;

  useEffect(() => {
    if (!API_KEY) {
      setRatesLoading(false);
      return;
    }
    let isMounted = true;
    setRatesLoading(true);
    
    fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`)
      .then(r => r.json())
      .then(data => {
        if (isMounted && data && data.result === 'success') {
          let adjustedRates = { ...data.conversion_rates };
          // اعمال اختلاف نرخ مورد نظر شما برای صرافی (در صورت نیاز)
          setRates(adjustedRates);
          setRateTime(data.time_last_update_utc);
        }
      })
      .catch(() => {})
      .finally(() => {
        if (isMounted) setRatesLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (rates && rates[from] && rates[to] && amount && !isNaN(Number(amount))) {
      const usd = parseFloat(amount) / rates[from];
      const res = (usd * rates[to]).toFixed(4);
      setResult(res);
    } else {
      setResult('');
    }
  }, [amount, from, to, rates]);

  const swap = () => { 
    setFrom(to); 
    setTo(from); 
  };

  return (
    <div className="glass-panel rounded-2xl p-6 mb-6 bg-secondary/20 border border-border">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-primary" />
        <h3 className="font-bold text-foreground">
          {lang === 'fa' ? 'ماشین‌حساب نرخ صرافی کاسپین' : 'Caspian Exchange Calculator'}
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-xs text-muted-foreground mb-1 block">{lbl.amount}</label>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground text-sm outline-none focus:border-primary"
          />
        </div>
        <div>
          <label className="text-xs text-muted-foreground mb-1 block">{lbl.from}</label>
          <select 
            value={from} 
            onChange={e => setFrom(e.target.value)}
            className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground text-sm outline-none focus:border-primary cursor-pointer"
          >
            {CURRENCIES.map(c => <option key={c} value={c} className="bg-background text-foreground">{c}</option>)}
          </select>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1">
          <label className="text-xs text-muted-foreground mb-1 block">{lbl.to}</label>
          <select 
            value={to} 
            onChange={e => setTo(e.target.value)}
            className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground text-sm outline-none focus:border-primary cursor-pointer"
          >
            {CURRENCIES.map(c => <option key={c} value={c} className="bg-background text-foreground">{c}</option>)}
          </select>
        </div>
        <button 
          onClick={swap} 
          type="button"
          className="mt-6 p-3 rounded-xl border border-border hover:border-primary text-muted-foreground hover:text-primary transition-colors cursor-pointer bg-secondary/50 flex items-center justify-center"
        >
          <ArrowLeftRight className="w-4 h-4" />
        </button>
      </div>

      {ratesLoading ? (
        <div className="flex items-center justify-center py-4 text-muted-foreground text-sm gap-2 bg-secondary/30 rounded-xl mb-4">
          <Loader2 className="w-4 h-4 animate-spin text-primary" />
          {lang === 'fa' ? 'در حال دریافت نرخ‌های به‌روز صرافی...' : 'Loading live rates...'}
        </div>
      ) : (
        <div className="mb-4 p-4 rounded-xl bg-primary/10 border border-primary/30 text-center">
          <p className="text-2xl font-black text-primary">
            {result ? `${parseFloat(result).toLocaleString(undefined, { maximumFractionDigits: 2 })} ${to}` : '---'}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {amount || 0} {from} ≈ {result ? parseFloat(result).toLocaleString(undefined, { maximumFractionDigits: 2 }) : '0'} {to}
          </p>
        </div>
      )}

      <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/50">
        <p className="text-xs text-muted-foreground">{lbl.note}</p>
        {rateTime && <p className="text-xs text-muted-foreground">{lbl.updated}: {new Date(rateTime).toLocaleDateString()}</p>}
      </div>
    </div>
  );
}

function Content() {
  const langContext = useLang();
  const lang = langContext?.lang || 'fa';

  useSEO({
    title: lang === 'fa' ? 'صرافی و تبدیل ارز | کاسپین گروپ' : 'Currency Exchange | Caspian Group',
    description: 'Caspian Group currency exchange — best rates in Yerevan.',
  });

  return (
    <ServicePageLayout
      titleFa="صرافی و تبدیل ارز"
      titleEn="Currency Exchange"
      titleRu="Обмен валюты"
      subtitleFa="بهترین نرخ‌های ارز در ایروان — دلار، یورو، روبل، درهم و بیشتر"
      subtitleEn="Best exchange rates in Yerevan"
      subtitleRu="Лучшие курсы обмена в Ереване"
      heroImage="https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=1200&q=80"
      serviceType="exchange">
      <CurrencyConverter />
    </ServicePageLayout>
  );
}

export default function Exchange() {
  return (
    <LanguageProvider>
      <Content />
    </LanguageProvider>
  );
}

'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';

// نکته: این لیست باید همیشه با src/data/siteLinks.js (SERVICE_LINKS) و روت‌های واقعی app/ هماهنگ باشه.
const sitePages = [
  { fa: 'صفحه اصلی', en: 'Home', ru: 'Главная', href: '/' },
  { fa: 'اقامت کاری ارمنستان', en: 'Armenia Work Residency', ru: 'Рабочий ВНЖ Армении', href: '/residency/work' },
  { fa: 'ثبت شرکت ارمنستان', en: 'Armenia Company Registration', ru: 'Регистрация компании в Армении', href: '/residency/business' },
  { fa: 'اقامت تحصیلی ارمنستان', en: 'Armenia Student Residency', ru: 'Учебный ВНЖ Армении', href: '/residency/student' },
  { fa: 'اقامت از طریق تولد فرزند', en: 'Residency via Child Birth', ru: 'ВНЖ через рождение ребёнка', href: '/residency/child-birth' },
  { fa: 'اقامت از طریق سرمایه‌گذاری', en: 'Residency via Investment', ru: 'ВНЖ через инвестиции', href: '/residency/investment' },
  { fa: 'ویزای توریستی روسیه', en: 'Russia Tourist Visa', ru: 'Туристическая виза в Россию', href: '/visa/russia' },
  { fa: 'ویزای تجاری روسیه', en: 'Russia Business Visa', ru: 'Деловая виза в Россию', href: '/visa/russia/business' },
  { fa: 'ویزای مولتی روسیه', en: 'Russia Multi-Entry Visa', ru: 'Многократная виза в Россию', href: '/visa/russia/multi' },
  { fa: 'ویزای تحصیلی روسیه', en: 'Russia Student Visa', ru: 'Студенческая виза России', href: '/student-visa/russia' },
  { fa: 'تور ارمنستان', en: 'Armenia Tours', ru: 'Туры по Армении', href: '/travel/tour' },
  { fa: 'رزرو هتل ایروان', en: 'Yerevan Hotel Booking', ru: 'Бронирование отеля в Ереване', href: '/travel/hotel' },
  { fa: 'اجاره آپارتمان مبله', en: 'Furnished Apartment Rental', ru: 'Аренда квартиры в Ереване', href: '/travel/apartment' },
  { fa: 'بلیط هوایی و زمینی', en: 'Flight & Ground Tickets', ru: 'Авиа и наземные билеты', href: '/travel/flight-bus' },
  { fa: 'ترانسفر فرودگاهی ایروان', en: 'Yerevan Airport Transfer', ru: 'Трансфер из аэропорта Еревана', href: '/travel/transfer' },
  { fa: 'صرافی ارزی کاسپین', en: 'Caspian Currency Exchange', ru: 'Обмен валют Caspian', href: '/travel/exchange' },
  { fa: 'وبلاگ', en: 'Blog', ru: 'Блог', href: '/blog' },
  { fa: 'رویدادها و کنسرت‌ها', en: 'Events & Concerts', ru: 'События и концерты', href: '/events' },
  { fa: 'کنسرت رترو (Disko Legend)', en: 'Retro Concert (Disko Legend)', ru: 'Концерт Retro (Disko Legend)', href: '/retro' },
  { fa: 'درباره ما', en: 'About Us', ru: 'О нас', href: '/about' },
  { fa: 'تماس با ما', en: 'Contact Us', ru: 'Контакты', href: '/contact' },
];

const labels = {
  fa: { placeholder: 'جستجو در سایت...', noResult: 'نتیجه‌ای پیدا نشد' },
  en: { placeholder: 'Search the site...', noResult: 'No results found' },
  ru: { placeholder: 'Поиск по сайту...', noResult: 'Ничего не найдено' },
};

export default function NavSearch() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const l = labels[lang] || labels.fa;

  const siteResults = query.trim().length >= 2
    ? sitePages.filter(p =>
        (p[lang] || p.fa).toLowerCase().includes(query.toLowerCase()) ||
        p.fa.includes(query) || p.en.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  useEffect(() => {
    const handler = (e) => { if (containerRef.current && !containerRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
    else setQuery('');
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button onClick={() => setOpen(v => !v)}
        aria-label="جستجو در سایت"
        className="p-2 rounded-lg hover:bg-white/10 transition-colors text-foreground/60 hover:text-primary">
        <Search className="w-4 h-4" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full mt-2 right-0 w-80 glass-panel border border-white/10 rounded-2xl shadow-2xl z-[100] overflow-hidden"
            dir={lang === 'fa' ? 'rtl' : 'ltr'}
          >
            <div className="flex items-center gap-2 px-3 py-2.5 border-b border-white/10">
              <Search className="w-4 h-4 text-foreground/40 flex-shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder={l.placeholder}
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-foreground/30 outline-none"
              />
              {query && (
                <button onClick={() => setQuery('')} className="text-foreground/30 hover:text-foreground/60">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {query.trim().length >= 2 && (
              <div className="max-h-80 overflow-y-auto">
                {siteResults.length > 0 ? (
                  siteResults.map((p, i) => (
                    <Link
                      key={i}
                      href={p.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/5 transition-colors border-b border-white/5 last:border-b-0"
                    >
                      <Search className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{p[lang] || p.fa}</span>
                    </Link>
                  ))
                ) : (
                  <p className="px-4 py-4 text-sm text-foreground/30 text-center">{l.noResult}</p>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
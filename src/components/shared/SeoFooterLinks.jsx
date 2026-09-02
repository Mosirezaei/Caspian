'use client';
/**
 * SeoFooterLinks — HTML sitemap footer برای SEO
 *
 * این کامپوننت لینک‌های داخلی کلیدی را با تگ‌های <a> واقعی (نه Link از react-router)
 * رندر می‌کند تا Googlebot بدون نیاز به اجرای JavaScript بتواند تمام صفحات مهم
 * سایت را کشف و ایندکس کند. PageRank از صفحه اصلی به صفحات مهم منتقل می‌شود.
 *
 * این کامپوننت در ServicePageLayout و Home نمایش داده می‌شود.
 */
import React from 'react';
import { useLang } from '@/lib/LanguageContext';

const LINKS = {
  fa: {
    sections: [
      {
        title: 'رزرو اقامتگاه',
        links: [
          { label: 'رزرو هتل در ایروان', href: '/travel/hotel' },
          { label: 'اجاره آپارتمان مبله در ایروان', href: '/travel/apartment' },
          { label: 'رزرو پرواز', href: '/travel/flight' },
          { label: 'ترانسفر فرودگاهی', href: '/travel/transfer' },
        ],
      },
      {
        title: 'اقامت و مهاجرت',
        links: [
          { label: 'اقامت کاری ارمنستان', href: '/residency/work' },
          { label: 'اقامت بیزینسی — ثبت شرکت', href: '/residency/business' },
          { label: 'اقامت تحصیلی ارمنستان', href: '/residency/student' },
        ],
      },
      {
        title: 'روسیه',
        links: [
          { label: 'ویزای توریستی روسیه', href: '/visa/russia' },
          { label: 'ویزای تحصیلی روسیه', href: '/student-visa/russia' },
        ],
      },
      {
        title: 'تور و فستیوال',
        links: [
          { label: 'تورهای ارمنستان', href: '/travel/tour' },
          { label: 'درباره کاسپین گروپ', href: '/about' },
          { label: 'تماس با ما', href: '/contact' },
        ],
      },
    ],
  },
  en: {
    sections: [
      {
        title: 'Accommodation',
        links: [
          { label: 'Hotel Booking in Yerevan', href: '/travel/hotel' },
          { label: 'Furnished Apartment Rental in Yerevan', href: '/travel/apartment' },
          { label: 'Flight Booking', href: '/travel/flight' },
          { label: 'Airport Transfer', href: '/travel/transfer' },
        ],
      },
      {
        title: 'Residency & Immigration',
        links: [
          { label: 'Work Residency Armenia', href: '/residency/work' },
          { label: 'Business Residency / Company Registration', href: '/residency/business' },
          { label: 'Student Residency Armenia', href: '/residency/student' },
        ],
      },
      {
        title: 'Russia',
        links: [
          { label: 'Russia Tourist Visa', href: '/visa/russia' },
          { label: 'Russia Student Visa', href: '/student-visa/russia' },
        ],
      },
      {
        title: 'Tours & Festivals',
        links: [
          { label: 'Armenia Tours', href: '/travel/tour' },
          { label: 'About Caspian Group', href: '/about' },
        ],
      },
    ],
  },
  ru: {
    sections: [
      {
        title: 'Жильё',
        links: [
          { label: 'Бронирование отелей в Ереване', href: '/travel/hotel' },
          { label: 'Аренда квартир в Ереване', href: '/travel/apartment' },
          { label: 'Бронирование авиабилетов', href: '/travel/flight' },
          { label: 'Трансфер из аэропорта', href: '/travel/transfer' },
        ],
      },
      {
        title: 'ВНЖ и миграция',
        links: [
          { label: 'Рабочий ВНЖ Армении', href: '/residency/work' },
          { label: 'Бизнес ВНЖ — регистрация компании', href: '/residency/business' },
          { label: 'Учебный ВНЖ Армении', href: '/residency/student' },
        ],
      },
      {
        title: 'Россия',
        links: [
          { label: 'Туристическая виза в Россию', href: '/visa/russia' },
          { label: 'Студенческая виза России', href: '/student-visa/russia' },
        ],
      },
      {
        title: 'Туры и фестивали',
        links: [
          { label: 'Туры по Армении', href: '/travel/tour' },
          { label: 'О нас', href: '/about' },
        ],
      },
    ],
  },
};

export default function SeoFooterLinks({ variant = 'default' }) {
  const { lang } = useLang();
  const data = LINKS[lang] || LINKS.fa;
  const label = lang === 'fa' ? 'لینک‌های مفید' : lang === 'ru' ? 'Полезные ссылки' : 'Useful Links';

  if (variant === 'sidebar') {
    return (
      <nav aria-label={label}>
        <h3 className="text-sm font-bold text-foreground mb-3">{label}</h3>
        <div className="space-y-4">
          {data.sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-[11px] font-bold text-foreground/40 mb-1.5 uppercase tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-1">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}
                      className="text-xs text-foreground/60 hover:text-primary transition-colors leading-relaxed block">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>
    );
  }

  return (
    <nav
      aria-label={lang === 'fa' ? 'نقشه سایت' : lang === 'ru' ? 'Карта сайта' : 'Site Map'}
      className="border-t border-white/6 pt-10 pb-6 px-4 mt-6"
    >
      <p className="text-xs text-foreground/60 text-center mb-6 font-medium tracking-widest uppercase">
        {lang === 'fa' ? 'لینک‌های مفید' : lang === 'ru' ? 'Полезные ссылки' : 'Useful Links'}
      </p>
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
        {data.sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-xs font-bold text-foreground/50 mb-3 uppercase tracking-wide">
              {section.title}
            </h3>
            <ul className="space-y-1.5">
              {section.links.map((link) => (
                <li key={link.href}>
                  {/* تگ <a> واقعی (نه Link از React Router) — Googlebot این رو می‌فهمه */}
                  <a
                    href={link.href}
                    className="text-xs text-foreground/65 hover:text-primary transition-colors leading-relaxed block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}

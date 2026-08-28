import React from 'react';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { ServicePageLayout } from '@/components/shared/ServicePageLayout';
import { CalendarDays, Flame, Star } from 'lucide-react';

// رویدادهای مهم سالانه + ۳ ماه آینده (به‌روزرسانی دستی توصیه می‌شود)
const ANNUAL_EVENTS = {
  fa: [
    { month: 'اردیبهشت-خرداد (مه)', name: 'جشنواره وردجور (Vardavar)', desc: 'بزرگ‌ترین جشن آب‌پاشی جهان — شادترین رویداد سالانه ایروان. مردم در خیابان‌ها به یکدیگر آب می‌پاشند. ۵۰ روز پس از عید پاک.' },
    { month: 'خرداد (ژوئن)', name: 'روز جمهوری ارمنستان', desc: 'مراسم رسمی در میدان جمهوری، کنسرت‌های رایگان و آتش‌بازی روی پله‌های کاسکاد.' },
    { month: 'مرداد-شهریور (ژوئیه-آگوست)', name: 'فستیوال‌های موسیقی تابستان', desc: 'کنسرت‌های متعدد در سالن کارن دمیرچیان و Aura by Adana. فصل اوج اجراهای بین‌المللی در ارمنستان.' },
    { month: 'شهریور (سپتامبر)', name: 'جشنواره انار (Areni Wine Fest)', desc: 'در روستای آرنی نزدیک ایروان، جشنواره شراب و انار برگزار می‌شود — یکی از معروف‌ترین رویدادهای فرهنگی ارمنستان.' },
    { month: 'مهر (اکتبر)', name: 'هفته طراحی ایروان (Yerevan Design Week)', desc: 'نمایشگاه‌های هنری، نمایشگاه مد و معماری در سرتاسر شهر. دسترسی به گالری‌های خصوصی.' },
    { month: 'آذر (دسامبر)', name: 'کریسمس و سال نو ارمنستانی', desc: 'بازارهای سنتی کریسمس در میدان جمهوری، تزئینات خیابانی شگفت‌انگیز و جشن سال نو ارمنستانی (۱۳ ژانویه).' },
  ],
  en: [
    { month: 'May', name: 'Vardavar Festival', desc: 'World\'s largest water fight — Yerevan\'s most joyful annual event. People drench each other in the streets, 50 days after Easter.' },
    { month: 'June', name: 'Armenia Republic Day', desc: 'Official ceremonies at Republic Square, free concerts, and fireworks on the Cascade steps.' },
    { month: 'July–August', name: 'Summer Music Festivals', desc: 'Numerous concerts at Karen Demirchyan Complex and Aura by Adana. Peak season for international performances in Armenia.' },
    { month: 'September', name: 'Areni Wine & Pomegranate Festival', desc: 'Held in the village of Areni near Yerevan — one of Armenia\'s most famous cultural events celebrating local wine and pomegranate.' },
    { month: 'October', name: 'Yerevan Design Week', desc: 'Art exhibitions, fashion and architecture shows across the city. Access to private galleries.' },
    { month: 'December', name: 'Christmas & Armenian New Year', desc: 'Traditional Christmas markets at Republic Square, stunning street decorations, and Armenian New Year celebration (January 13).' },
  ],
  ru: [
    { month: 'Май', name: 'Вардавар', desc: 'Крупнейший водный праздник в мире — самый радостный ежегодный праздник Еревана. Люди обливают друг друга водой на улицах, через 50 дней после Пасхи.' },
    { month: 'Июнь', name: 'День Республики Армения', desc: 'Официальные церемонии на площади Республики, бесплатные концерты и фейерверки на ступенях Каскада.' },
    { month: 'Июль–август', name: 'Летние музыкальные фестивали', desc: 'Многочисленные концерты в комплексе Карена Демирчяна и Aura by Adana. Пик международных выступлений в Армении.' },
    { month: 'Сентябрь', name: 'Фестиваль вина и граната в Арени', desc: 'В деревне Арени близ Еревана — один из самых известных культурных событий Армении.' },
    { month: 'Октябрь', name: 'Ереванская неделя дизайна', desc: 'Художественные выставки, показы мод и архитектуры по всему городу.' },
    { month: 'Декабрь', name: 'Рождество и армянский Новый год', desc: 'Традиционные рождественские ярмарки на площади Республики, великолепные украшения и армянский Новый год (13 января).' },
  ],
};

// رویدادهای ۳ ماه آینده — به‌روز شده برای پاییز ۲۰۲۶
const UPCOMING = {
  fa: [
    { date: '۱۶ سپتامبر ۲۰۲۶ (۲۵ شهریور)', name: 'کنسرت ابی — تور «پوست شیر»', place: 'سالن کارن دمیرچیان، ایروان', tag: '🎤 موسیقی' },
    { date: '۲۰ سپتامبر ۲۰۲۶ (۲۹ شهریور)', name: 'Disco Legends Fest — Haddaway، Dr. Alban، Boney M', place: 'Aura by Adana، حومه ایروان', tag: '🎉 فستیوال' },
    { date: 'اوایل اکتبر ۲۰۲۶ (مهر)', name: 'هفته طراحی ایروان — Yerevan Design Week', place: 'گالری‌های متعدد در سراسر ایروان', tag: '🎨 هنر' },
    { date: 'اواسط اکتبر ۲۰۲۶ (مهر)', name: 'جشنواره انار آرنی', place: 'دهکده آرنی، ۸۰ کیلومتری جنوب ایروان', tag: '🍷 فرهنگی' },
    { date: 'نوامبر ۲۰۲۶ (آبان)', name: 'جشن‌های خیابانی Yerevan Jazz Festival', place: 'کافه‌ها و باشگاه‌های ایروان', tag: '🎷 جاز' },
    { date: 'دسامبر ۲۰۲۶ (آذر)', name: 'بازار کریسمس میدان جمهوری', place: 'میدان جمهوری، ایروان', tag: '🎄 زمستانی' },
  ],
  en: [
    { date: 'September 16, 2026', name: 'Ebi Concert — "Pooste Shir" Tour', place: 'Karen Demirchyan Complex, Yerevan', tag: '🎤 Music' },
    { date: 'September 20, 2026', name: 'Disco Legends Fest — Haddaway, Dr. Alban, Boney M', place: 'Aura by Adana, near Yerevan', tag: '🎉 Festival' },
    { date: 'Early October 2026', name: 'Yerevan Design Week', place: 'Multiple galleries across Yerevan', tag: '🎨 Art' },
    { date: 'Mid-October 2026', name: 'Areni Wine & Pomegranate Festival', place: 'Areni village, 80km south of Yerevan', tag: '🍷 Cultural' },
    { date: 'November 2026', name: 'Yerevan Jazz Festival', place: 'Cafes and clubs across Yerevan', tag: '🎷 Jazz' },
    { date: 'December 2026', name: 'Christmas Market at Republic Square', place: 'Republic Square, Yerevan', tag: '🎄 Winter' },
  ],
  ru: [
    { date: '16 сентября 2026', name: 'Концерт Эби — тур «Поост Шир»', place: 'Комплекс Карена Демирчяна, Ереван', tag: '🎤 Музыка' },
    { date: '20 сентября 2026', name: 'Disco Legends Fest — Haddaway, Dr. Alban, Boney M', place: 'Aura by Adana, пригород Еревана', tag: '🎉 Фестиваль' },
    { date: 'Начало октября 2026', name: 'Ереванская неделя дизайна', place: 'Галереи по всему Еревану', tag: '🎨 Искусство' },
    { date: 'Середина октября 2026', name: 'Фестиваль граната в Арени', place: 'Деревня Арени, 80 км к югу от Еревана', tag: '🍷 Культура' },
    { date: 'Ноябрь 2026', name: 'Ереванский джазовый фестиваль', place: 'Кафе и клубы Еревана', tag: '🎷 Джаз' },
    { date: 'Декабрь 2026', name: 'Рождественский рынок на пл. Республики', place: 'Площадь Республики, Ереван', tag: '🎄 Зима' },
  ],
};

function FestivalsContent() {
  const { lang } = useLang();
  const isFa = lang === 'fa';
  const isRu = lang === 'ru';

  useSEO({
    title: isFa ? 'فستیوال‌ها و کنسرت‌های ایروان ۲۰۲۶ | رویدادهای ارمنستان — کاسپین گروپ' :
           isRu ? 'Фестивали и концерты Еревана 2026 | Мероприятия Армении — Caspian Group' :
           'Yerevan Festivals & Concerts 2026 | Armenia Events — Caspian Group',
    description: isFa ? 'کامل‌ترین راهنمای فستیوال‌ها و کنسرت‌های ایروان ۲۰۲۶ — رویدادهای سالانه و برنامه‌های ۳ ماه آینده. تور ویژه فستیوال با هماهنگی کاسپین.' :
                 isRu ? 'Полный гид по фестивалям и концертам Еревана 2026 — ежегодные события и ближайшие 3 месяца. Специальный фестивальный тур от Caspian.' :
                 'Complete guide to Yerevan festivals and concerts 2026 — annual events and upcoming 3 months. Special festival tour via Caspian Group.',
    keywords: isFa ? 'فستیوال ایروان، کنسرت ارمنستان، رویدادهای ایروان ۲۰۲۶، فستیوال وردجور، جشنواره انار ارمنستان، کنسرت ابی ایروان، تور فستیوال ارمنستان' :
              isRu ? 'фестивали Ереван 2026, концерты Армения, Вардавар, фестиваль Арени' :
              'Yerevan festivals 2026, Armenia concerts, events Yerevan, Vardavar, Areni festival',
    path: '/travel/festivals',
  });

  const annual = ANNUAL_EVENTS[lang] || ANNUAL_EVENTS.fa;
  const upcoming = UPCOMING[lang] || UPCOMING.fa;

  return (
    <ServicePageLayout
      titleFa="فستیوال‌ها و رویدادهای ایروان"
      titleEn="Yerevan Festivals & Events"
      titleRu="Фестивали и события Еревана"
      subtitleFa="رویدادهای سالانه + برنامه ۳ ماه آینده — با تور ویژه کاسپین"
      subtitleEn="Annual events + next 3 months schedule — with Caspian special tour"
      subtitleRu="Ежегодные события + расписание на 3 месяца — специальный тур Caspian"
      heroImage="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80"
      serviceType="apartment">

      {/* رویدادهای ۳ ماه آینده */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CalendarDays className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-black text-foreground">
            {isFa ? 'رویدادهای ۳ ماه آینده' : isRu ? 'Ближайшие 3 месяца' : 'Upcoming 3 Months'}
          </h2>
        </div>
        <div className="space-y-3">
          {upcoming.map((ev, i) => (
            <div key={i} className="glass-panel rounded-xl p-4 border border-white/8 hover:border-primary/30 transition-all">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs bg-primary/15 text-primary px-2 py-0.5 rounded-full font-medium">{ev.tag}</span>
                    <span className="text-xs text-foreground/50">{ev.date}</span>
                  </div>
                  <h3 className="font-bold text-foreground/90 text-sm">{ev.name}</h3>
                  <p className="text-xs text-foreground/55 mt-0.5">📍 {ev.place}</p>
                </div>
                <a href={`https://wa.me/37433149327?text=${encodeURIComponent(isFa ? `میخوام تور بگیرم برای: ${ev.name}` : `I want a tour for: ${ev.name}`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="text-xs bg-green-600 hover:bg-green-500 text-white px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors">
                  {isFa ? 'رزرو تور' : isRu ? 'Бронь тура' : 'Book Tour'}
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-foreground/40 mt-3 text-center">
          {isFa ? '* برنامه‌ها ممکن است تغییر کنند. قبل از رزرو تأیید بگیرید.' : isRu ? '* Расписание может измениться. Уточняйте перед бронированием.' : '* Schedule may change. Confirm before booking.'}
        </p>
      </div>

      {/* رویدادهای سالانه */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Star className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-black text-foreground">
            {isFa ? 'رویدادهای سالانه ارمنستان' : isRu ? 'Ежегодные события Армении' : 'Armenia Annual Events'}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {annual.map((ev, i) => (
            <div key={i} className="glass-panel rounded-xl p-4 border border-white/8">
              <div className="text-xs text-primary font-bold mb-1">{ev.month}</div>
              <h3 className="font-bold text-foreground/90 text-sm mb-1">{ev.name}</h3>
              <p className="text-xs text-foreground/60 leading-relaxed">{ev.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* بنر WhatsApp */}
      <div className="glass-panel rounded-2xl p-5 border border-green-500/30 bg-green-500/5 text-center">
        <Flame className="w-8 h-8 text-primary mx-auto mb-2" />
        <h2 className="font-black text-foreground mb-2">
          {isFa ? 'تور ویژه فستیوال بگیرید' : isRu ? 'Специальный фестивальный тур' : 'Get a Special Festival Tour'}
        </h2>
        <p className="text-sm text-foreground/65 mb-4">
          {isFa ? 'کاسپین گروپ پکیج‌های ترکیبی هتل + ترانسفر + بلیط کنسرت برای رویدادهای ایروان ترتیب می‌دهد.' : isRu ? 'Caspian Group организует комбинированные пакеты: отель + трансфер + билет на концерт.' : 'Caspian Group arranges combined hotel + transfer + concert ticket packages for Yerevan events.'}
        </p>
        <a href={`https://wa.me/37433149327?text=${encodeURIComponent(isFa ? 'میخوام تور فستیوال ارمنستان بگیرم' : 'I want a festival tour in Armenia')}`}
          target="_blank" rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl transition-colors">
          {isFa ? 'همین حالا در واتساپ پیام بده' : isRu ? 'Написать в WhatsApp' : 'Message on WhatsApp Now'}
        </a>
      </div>
    </ServicePageLayout>
  );
}

export default function Festivals() {
  return <LanguageProvider><FestivalsContent /></LanguageProvider>;
}

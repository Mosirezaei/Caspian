'use client';
import React from 'react';
import Link from 'next/link';
import { useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';
import { MessageCircle, PartyPopper, CalendarDays } from 'lucide-react';

const EVENTS = {
  fa: {
    badge: '🎉 ویژه شهریور ۱۴۰۵ — فستیوال‌ها و کنسرت‌های ایروان',
    title: 'تور ارمنستان، ویژه فستیوال‌ها و کنسرت‌های شهریور',
    intro: 'ایروان در شهریور امسال میزبان دو رویداد بزرگ موسیقی است؛ کاسپین تور بسته‌های ویژه اقامت و ترانسفر هماهنگ با این دو تاریخ را برایتان طراحی کرده است.',
    items: [
      { date: 'چهارشنبه ۲۵ شهریور ۱۴۰۵ (۱۶ سپتامبر ۲۰۲۶)', name: 'کنسرت ابی — تور «پوست شیر»', place: 'مجموعه ورزشی و کنسرت کارن دمیرچیان، ایروان' },
      { date: 'یکشنبه ۲۹ شهریور ۱۴۰۵ (۲۰ سپتامبر ۲۰۲۶)', name: 'فستیوال بزرگ Disco Legends (Retro Stars Fest)', place: 'مجموعه Aura by Adana، حومه ایروان — با اجرای هدوی، Mr. President، دکتر آلبان و بونی ام' },
    ],
    cta: 'برای بررسی تور در این تاریخ‌ها یا هر تاریخ دیگری، همین حالا به واتساپ ما پیام بدهید',
  },
  en: {
    badge: '🎉 September 2026 Special — Yerevan Festivals & Concerts',
    title: 'Armenia Tour — Special September Festivals & Concerts Edition',
    intro: "Yerevan is hosting two major music events this September. Caspian Tour has built special stay-and-transfer packages timed around both dates.",
    items: [
      { date: 'Wednesday, September 16, 2026', name: 'Ebi Concert — "Pooste Shir" Tour', place: 'Karen Demirchyan Sports & Concerts Complex, Yerevan' },
      { date: 'Sunday, September 20, 2026', name: 'Disco Legends Festival (Retro Stars Fest)', place: 'Aura by Adana Complex, near Yerevan — featuring Haddaway, Mr. President, Dr. Alban and Boney M.' },
    ],
    cta: 'Message us on WhatsApp now to check tour availability for these dates or any other date',
  },
  ru: {
    badge: '🎉 Специально к сентябрю 2026 — фестивали и концерты в Ереване',
    title: 'Тур по Армении — специальный выпуск к сентябрьским фестивалям и концертам',
    intro: 'В сентябре Ереван примет два крупных музыкальных события. Caspian Tour подготовил специальные пакеты проживания и трансфера, приуроченные к этим датам.',
    items: [
      { date: 'Среда, 16 сентября 2026', name: 'Концерт Эби — тур «Pooste Shir»', place: 'Спортивно-концертный комплекс им. Карена Демирчяна, Ереван' },
      { date: 'Воскресенье, 20 сентября 2026', name: 'Фестиваль Disco Legends (Retro Stars Fest)', place: 'Комплекс Aura by Adana, пригород Еревана — с участием Haddaway, Mr. President, Dr. Alban и Boney M.' },
    ],
    cta: 'Напишите нам в WhatsApp прямо сейчас, чтобы уточнить наличие тура на эти или любые другие даты',
  },
};

const HIGHLIGHTS = {
  fa: [
    { name: 'ایروان', desc: 'میدان جمهوری، کاسکاد و موزه تاریخ ارمنستان' },
    { name: 'دریاچه سوان', desc: 'بزرگ‌ترین دریاچه قفقاز، صومعه سواناوانک' },
    { name: 'گارنی و گقارد', desc: 'معبد یونانی گارنی و صومعه صخره‌ای گقارد (میراث یونسکو)' },
    { name: 'خور ویراپ', desc: 'صومعه تاریخی با چشم‌انداز مستقیم کوه آرارات' },
    { name: 'دیلیجان', desc: 'شهر جنگلی معروف به سوئیس ارمنستان' },
    { name: 'گیومری', desc: 'دومین شهر بزرگ ارمنستان با معماری تاریخی روسی' },
  ],
  en: [
    { name: 'Yerevan', desc: 'Republic Square, Cascade and the History Museum of Armenia' },
    { name: 'Lake Sevan', desc: 'The largest lake in the Caucasus, Sevanavank Monastery' },
    { name: 'Garni & Geghard', desc: 'Garni Greek temple and the rock-hewn Geghard Monastery (UNESCO)' },
    { name: 'Khor Virap', desc: 'Historic monastery with a direct view of Mount Ararat' },
    { name: 'Dilijan', desc: "The forest town known as Armenia's Switzerland" },
    { name: 'Gyumri', desc: "Armenia's second-largest city with historic Russian-era architecture" },
  ],
  ru: [
    { name: 'Ереван', desc: 'Площадь Республики, Каскад и Музей истории Армении' },
    { name: 'Озеро Севан', desc: 'Крупнейшее озеро Кавказа, монастырь Севанаванк' },
    { name: 'Гарни и Гегард', desc: 'Греческий храм Гарни и пещерный монастырь Гегард (ЮНЕСКО)' },
    { name: 'Хор Вирап', desc: 'Исторический монастырь с видом на гору Арарат' },
    { name: 'Дилижан', desc: 'Лесной город, известный как "армянская Швейцария"' },
    { name: 'Гюмри', desc: 'Второй по величине город Армении с исторической архитектурой' },
  ],
};

const HIGHLIGHT_IMAGES = [
  'https://images.unsplash.com/photo-1693071486458-810787f9d465?w=800&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1702675231835-ba8c6136b173?w=800&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1657968641725-deb8d1a24142?w=800&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1677864109159-34eb97228c65?w=800&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1633450077736-4195e1053002?w=800&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1584294672682-fa86591eded1?w=800&q=80&auto=format&fit=crop',
];

const HIGHLIGHT_HREFS = [
  '/travel/tour/yerevan-city',
  '/travel/tour/sevan-lake',
  '/travel/tour/garni-geghard',
  '/travel/tour/khor-virap',
  null,
  '/travel/tour/gyumri',
];

function TourContent() {
  const { lang } = useLang();
  const t = {
    fa: { why: 'چرا تور ارمنستان با کاسپین؟', whyBody: 'کاسپین تور از سال ۲۰۰۷ به‌صورت تخصصی تورهای ارمنستان را برای مسافران ایرانی برگزار می‌کند. بدون نیاز به ویزا، با پرواز کوتاه از تهران و راهنمای فارسی‌زبان، ارمنستان یکی از بهترین مقاصد برای سفر فرهنگی، طبیعت‌گردی و حتی سفرهای کاری کوتاه است.', typesTitle: 'انواع تور ارمنستان', types: ['تور گروهی — با گروه‌های ثابت و راهنمای مشترک، مقرون‌به‌صرفه‌تر', 'تور اختصاصی (خصوصی) — خودرو و برنامه اختصاصی برای خانواده یا گروه دوستانه', 'تور آخر هفته — ۲ تا ۳ شب برای بازدید سریع از ایروان و اطراف', 'تور کامل ۶-۷ شبه — پوشش کامل جاذبه‌های اصلی ارمنستان'], includesTitle: 'بسته تور شامل چه مواردی می‌شود؟', includes: ['اقامت در هتل ۳، ۴ یا ۵ ستاره منتخب', 'ترانسفر فرودگاهی رفت و برگشت', 'گشت‌های تعیین‌شده با راهنمای فارسی‌زبان', 'صبحانه در هتل', 'پشتیبانی ۲۴ ساعته در طول سفر'], highlightsTitle: 'مقاصد اصلی تور ارمنستان', cta: 'مشاوره رایگان تور از طریق واتساپ' },
    en: { why: 'Why Book an Armenia Tour with Caspian?', whyBody: 'Caspian Tour has specialized in Armenia tours for Iranian travelers since 2007. With no visa required, a short flight from Tehran, and a Persian-speaking guide, Armenia is one of the best destinations for cultural travel, nature trips, and even short business visits.', typesTitle: 'Types of Armenia Tours', types: ['Group Tour — fixed groups with a shared guide, more affordable', 'Private Tour — dedicated car and itinerary for families or friend groups', 'Weekend Tour — 2-3 nights for a quick look at Yerevan and surroundings', 'Full 6-7 Night Tour — complete coverage of Armenia\'s main attractions'], includesTitle: "What's Included in the Tour Package?", includes: ['Stay at a selected 3, 4 or 5-star hotel', 'Round-trip airport transfer', 'Scheduled excursions with a Persian-speaking guide', 'Breakfast at the hotel', '24-hour support throughout your trip'], highlightsTitle: 'Main Armenia Tour Destinations', cta: 'Free Tour Consultation via WhatsApp' },
    ru: { why: 'Почему тур по Армении с Caspian?', whyBody: 'Caspian Tour с 2007 года специализируется на турах по Армении. Виза не требуется, короткий перелёт из Тегерана и русскоговорящий/персоязычный гид делают Армению отличным направлением для культурного и природного туризма.', typesTitle: 'Виды туров по Армении', types: ['Групповой тур — фиксированные группы с общим гидом, более доступно', 'Индивидуальный тур — отдельный автомобиль и программа для семей и компаний', 'Тур выходного дня — 2-3 ночи для быстрого знакомства с Ереваном', 'Полный тур на 6-7 ночей — все главные достопримечательности Армении'], includesTitle: 'Что входит в тур?', includes: ['Проживание в отеле 3, 4 или 5 звёзд', 'Трансфер из аэропорта и обратно', 'Запланированные экскурсии с гидом', 'Завтрак в отеле', 'Поддержка 24 часа в течение поездки'], highlightsTitle: 'Главные направления тура по Армении', cta: 'Бесплатная консультация в WhatsApp' },
  }[lang] || {};
  const highlights = HIGHLIGHTS[lang] || HIGHLIGHTS.fa;
  const ev = EVENTS[lang] || EVENTS.fa;
  return (
    <ServicePageLayout titleFa="تور ارمنستان" titleEn="Armenia Tour" titleRu="Тур по Армении" subtitleFa="تور گروهی و اختصاصی به ایروان، سوان، گارنی و دیلیجان از سال ۲۰۰۷" subtitleEn="Group & private tours to Yerevan, Sevan, Garni and Dilijan since 2007" subtitleRu="Групповые и индивидуальные туры с 2007 года" heroImage="https://images.unsplash.com/photo-1693071486458-810787f9d465?w=1600&q=85&auto=format&fit=crop">
      <InfoBlock title={t.why} body={t.whyBody} />
      <InfoBlock title={t.typesTitle} body={t.types} />
      <InfoBlock title={t.includesTitle} body={t.includes} />
      <section className="mt-10"><h2 className="text-2xl font-black mb-5">{t.highlightsTitle}</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{highlights.map((h, i) => { const href = HIGHLIGHT_HREFS[i]; const inner = <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 h-full"><img src={HIGHLIGHT_IMAGES[i]} alt={h.name} className="w-full h-44 object-cover" /><div className="p-4"><h3 className="font-black">{h.name}</h3><p className="text-sm text-foreground/60 mt-1">{h.desc}</p></div></div>; return href ? <Link href={href} key={h.name}>{inner}</Link> : <div key={h.name}>{inner}</div>; })}</div></section>
      <section className="mt-10 rounded-3xl border border-primary/20 bg-primary/10 p-6"><h2 className="text-xl font-black">{ev.title}</h2><p className="mt-2 text-foreground/70">{ev.intro}</p><div className="mt-5 space-y-3">{ev.items.map((item) => <div key={item.name} className="rounded-2xl bg-black/10 p-4"><strong>{item.name}</strong><p className="text-sm mt-1">{item.date} — {item.place}</p></div>)}</div><a href="https://wa.me/37433149327" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-black text-black"><MessageCircle className="w-5 h-5" /> {ev.cta}</a></section>
    </ServicePageLayout>
  );
}

export default function Tour() { return <TourContent />; }

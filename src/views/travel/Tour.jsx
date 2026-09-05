'use client';
import React from 'react';
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
  'https://images.unsplash.com/photo-1693071486458-810787f9d465?w=800&q=80&auto=format&fit=crop', // Yerevan
  'https://images.unsplash.com/photo-1702675231835-ba8c6136b173?w=800&q=80&auto=format&fit=crop', // Lake Sevan
  'https://images.unsplash.com/photo-1657968641725-deb8d1a24142?w=800&q=80&auto=format&fit=crop', // Garni & Geghard
  'https://images.unsplash.com/photo-1677864109159-34eb97228c65?w=800&q=80&auto=format&fit=crop', // Khor Virap
  'https://images.unsplash.com/photo-1633450077736-4195e1053002?w=800&q=80&auto=format&fit=crop', // Dilijan
  'https://images.unsplash.com/photo-1584294672682-fa86591eded1?w=800&q=80&auto=format&fit=crop', // Gyumri
];

function TourContent() {
  const { lang } = useLang();


  const t = {
    fa: {
      why: 'چرا تور ارمنستان با کاسپین؟',
      whyBody: 'کاسپین تور از سال ۲۰۰۷ به‌صورت تخصصی تورهای ارمنستان را برای مسافران ایرانی برگزار می‌کند. بدون نیاز به ویزا، با پرواز کوتاه از تهران و راهنمای فارسی‌زبان، ارمنستان یکی از بهترین مقاصد برای سفر فرهنگی، طبیعت‌گردی و حتی سفرهای کاری کوتاه است.',
      typesTitle: 'انواع تور ارمنستان',
      types: ['تور گروهی — با گروه‌های ثابت و راهنمای مشترک، مقرون‌به‌صرفه‌تر', 'تور اختصاصی (خصوصی) — خودرو و برنامه اختصاصی برای خانواده یا گروه دوستانه', 'تور آخر هفته — ۲ تا ۳ شب برای بازدید سریع از ایروان و اطراف', 'تور کامل ۶-۷ شبه — پوشش کامل جاذبه‌های اصلی ارمنستان'],
      includesTitle: 'بسته تور شامل چه مواردی می‌شود؟',
      includes: ['اقامت در هتل ۳، ۴ یا ۵ ستاره منتخب', 'ترانسفر فرودگاهی رفت و برگشت', 'گشت‌های تعیین‌شده با راهنمای فارسی‌زبان', 'صبحانه در هتل', 'پشتیبانی ۲۴ ساعته در طول سفر'],
      highlightsTitle: 'مقاصد اصلی تور ارمنستان',
      cta: 'مشاوره رایگان تور از طریق واتساپ',
    },
    en: {
      why: 'Why Book an Armenia Tour with Caspian?',
      whyBody: 'Caspian Tour has specialized in Armenia tours for Iranian travelers since 2007. With no visa required, a short flight from Tehran, and a Persian-speaking guide, Armenia is one of the best destinations for cultural travel, nature trips, and even short business visits.',
      typesTitle: 'Types of Armenia Tours',
      types: ['Group Tour — fixed groups with a shared guide, more affordable', 'Private Tour — dedicated car and itinerary for families or friend groups', 'Weekend Tour — 2-3 nights for a quick look at Yerevan and surroundings', 'Full 6-7 Night Tour — complete coverage of Armenia\'s main attractions'],
      includesTitle: "What's Included in the Tour Package?",
      includes: ['Stay at a selected 3, 4 or 5-star hotel', 'Round-trip airport transfer', 'Scheduled excursions with a Persian-speaking guide', 'Breakfast at the hotel', '24-hour support throughout your trip'],
      highlightsTitle: 'Main Armenia Tour Destinations',
      cta: 'Free Tour Consultation via WhatsApp',
    },
    ru: {
      why: 'Почему тур по Армении с Caspian?',
      whyBody: 'Caspian Tour с 2007 года специализируется на турах по Армении. Виза не требуется, короткий перелёт из Тегерана и русскоговорящий/персоязычный гид делают Армению отличным направлением для культурного и природного туризма.',
      typesTitle: 'Виды туров по Армении',
      types: ['Групповой тур — фиксированные группы с общим гидом, более доступно', 'Индивидуальный тур — отдельный автомобиль и программа для семей и компаний', 'Тур выходного дня — 2-3 ночи для быстрого знакомства с Ереваном', 'Полный тур на 6-7 ночей — все главные достопримечательности Армении'],
      includesTitle: 'Что входит в тур?',
      includes: ['Проживание в отеле 3, 4 или 5 звёзд', 'Трансфер из аэропорта и обратно', 'Запланированные экскурсии с гидом', 'Завтрак в отеле', 'Поддержка 24 часа в течение поездки'],
      highlightsTitle: 'Главные направления тура по Армении',
      cta: 'Бесплатная консультация в WhatsApp',
    },
  }[lang] || {};

  const highlights = HIGHLIGHTS[lang] || HIGHLIGHTS.fa;
  const ev = EVENTS[lang] || EVENTS.fa;

  return (
    <ServicePageLayout
      titleFa="تور ارمنستان" titleEn="Armenia Tour" titleRu="Тур по Армении"
      subtitleFa="تور گروهی و اختصاصی به ایروان، سوان، گارنی و دیلیجان از سال ۲۰۰۷"
      subtitleEn="Group & private tours to Yerevan, Sevan, Garni and Dilijan since 2007"
      subtitleRu="Групповые и индивидуальные туры с 2007 года"
      heroImage="https://images.unsplash.com/photo-1609669712881-d9bc36df5ab3?w=1200&q=80"
      serviceType="tour">

      <div className="glass-panel rounded-2xl p-6 mb-6 border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent">
        <span className="inline-block text-xs font-bold text-primary bg-primary/15 rounded-full px-3 py-1 mb-3">{ev.badge}</span>
        <h2 className="text-xl font-black text-foreground mb-2 flex items-center gap-2">
          <PartyPopper className="w-5 h-5 text-primary flex-shrink-0" />
          {ev.title}
        </h2>
        <p className="text-sm text-foreground/70 leading-relaxed mb-4">{ev.intro}</p>
        <div className="space-y-3 mb-4">
          {ev.items.map((it, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
              <CalendarDays className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-foreground">{it.name}</p>
                <p className="text-xs text-foreground/60 mt-0.5">{it.date} — {it.place}</p>
              </div>
            </div>
          ))}
        </div>
        <a href="https://wa.me/37433149327" target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-primary text-black font-bold text-sm hover:bg-yellow-500 transition-all duration-300">
          <MessageCircle className="w-4 h-4" />
          {ev.cta}
        </a>
      </div>

      <InfoBlock title={t.why}>
        <p>{t.whyBody}</p>
      </InfoBlock>

      <InfoBlock title={t.highlightsTitle}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
          {highlights.map((h, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={HIGHLIGHT_IMAGES[i]}
                  alt={h.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <h3 className="absolute bottom-3 right-4 left-4 font-black text-white text-base drop-shadow-md">{h.name}</h3>
              </div>
              <p className="text-xs text-foreground/60 leading-relaxed p-4">{h.desc}</p>
            </div>
          ))}
        </div>
      </InfoBlock>

      <InfoBlock title={t.typesTitle}>
        <CheckList items={t.types} />
      </InfoBlock>

      <InfoBlock title={t.includesTitle}>
        <CheckList items={t.includes} />
      </InfoBlock>

      {lang === 'fa' && <>
        <InfoBlock title="بهترین جاذبه‌های ارمنستان که نباید از دست بدهید">
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">دریاچه سوان (Lake Sevan)</h3>
          <p className="mb-3">یکی از بزرگ‌ترین دریاچه‌های آب شیرین دنیا در ارتفاع ۱۹۰۰ متری. کلیساهای تاریخی سواناوانک روی شبه‌جزیره، ماهی ایشخان (قزل‌آلای بومی) و هوای خنک تابستانی از دلایل اصلی بازدید هستند. حدود ۶۰ کیلومتر از ایروان.</p>

          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">قرناهبد (Garni) و معبد گغارد</h3>
          <p className="mb-3">معبد یونانی-رومی قرناهبد تنها ساختمان دوره پیش از مسیحیت باقی‌مانده در ارمنستان است. معبد صخره‌ای گغارد در دل کوه کنده شده و در فهرست میراث یونسکو قرار دارد. ۳۰ کیلومتر از ایروان.</p>

          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">نوراوانک و کانیون آهنجا</h3>
          <p className="mb-3">صومعه قرن سیزدهمی نوراوانک در دل کانیون آهنجا با دیواره‌های صخره‌ای نارنجی. یکی از فتوژنیک‌ترین مناطق ارمنستان. ۱۲۰ کیلومتر از ایروان.</p>

          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">خور ویراپ (Khor Virap)</h3>
          <p>صومعه تاریخی با چشم‌انداز مستقیم به کوه آرارات — نمادین‌ترین تصویر ارمنستان. محل زندانی شدن گریگور روشن‌بخش در قرن چهارم. ۴۵ کیلومتر از ایروان.</p>
        </InfoBlock>

        <InfoBlock title="بهترین فصل برای تور ارمنستان">
          <CheckList items={[
            'بهار (اردیبهشت-خرداد) — گل‌های وحشی، دریاچه سوان آبی-سبز، قیمت متعادل. بهترین انتخاب',
            'تابستان (تیر-شهریور) — گرمای ایروان ولی آب‌وهوای کوهستان خنک. فصل اوج — هتل‌ها زودتر رزرو می‌شوند',
            'پاییز (مهر-آبان) — رنگ‌آمیزی طبیعی جنگل‌ها، جشنواره انار آرنی. توصیه‌شده',
            'زمستان (آذر-بهمن) — اسکی در تسخکاذور، ایروان آرام و ارزان. مناسب کسانی که شلوغی دوست ندارند',
          ]} />
        </InfoBlock>
      </>}

      {lang === 'en' && <>
        <InfoBlock title="Top Armenia Attractions">
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">Lake Sevan</h3>
          <p className="mb-2">One of the world's largest high-altitude lakes at 1,900m. Sevanavank monastery, fresh trout, and cool summer air. 60km from Yerevan.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">Garni Temple & Geghard Monastery</h3>
          <p className="mb-2">Armenia's only pre-Christian Greco-Roman temple, plus the UNESCO-listed rock-hewn Geghard Monastery. 30km from Yerevan.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">Noravank & Areni Canyon</h3>
          <p>13th-century monastery in a stunning orange-walled canyon. One of Armenia's most photogenic spots. 120km from Yerevan.</p>
        </InfoBlock>
      </>}

      <a href="https://wa.me/37433149327?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D9%85%DB%8C%E2%80%8C%D8%AE%D9%88%D8%A7%D9%85%20%D8%AF%D8%B1%D8%A8%D8%A7%D8%B1%D9%87%20%D8%AA%D9%88%D8%B1%20%D8%A7%D8%B1%D9%85%D9%86%D8%B3%D8%AA%D8%A7%D9%86%20%D9%85%D8%B4%D8%A7%D9%88%D8%B1%D9%87%20%D8%A8%DA%AF%DB%8C%D8%B1%D9%85"
        target="_blank" rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-primary text-black font-black hover:bg-yellow-500 transition-all duration-300 shadow-lg mt-4">
        <MessageCircle className="w-5 h-5" />
        {t.cta}
      </a>
    </ServicePageLayout>
  );
}

export default TourContent;

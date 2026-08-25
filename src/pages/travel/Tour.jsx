import React from 'react';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';
import { MessageCircle } from 'lucide-react';

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

function TourContent() {
  const { lang } = useLang();

  useSEO({
    title: lang === 'fa' ? 'تور ارمنستان | تور گروهی و اختصاصی از ایروان - کاسپین گروپ' :
           lang === 'ru' ? 'Тур по Армении | Групповые и индивидуальные туры - Caspian Group' :
           'Armenia Tour | Group & Private Tours | Caspian Group',
    description: lang === 'fa' ? 'تور ارمنستان با کاسپین — تورهای گروهی و اختصاصی به ایروان، دریاچه سوان، گارنی-گقارد، خور ویراپ و دیلیجان با راهنمای فارسی‌زبان از سال ۲۰۰۷.' :
                 lang === 'ru' ? 'Тур по Армении с Caspian — групповые и индивидуальные туры в Ереван, озеро Севан, Гарни-Гегард, Хор Вирап и Дилижан с 2007 года.' :
                 'Armenia tours with Caspian — group and private tours to Yerevan, Lake Sevan, Garni-Geghard, Khor Virap and Dilijan with a Persian-speaking guide since 2007.',
    keywords: lang === 'fa' ? 'تور ارمنستان، تور ایروان، تور گروهی ارمنستان، تور اختصاصی ارمنستان، سفر به ارمنستان، تور دریاچه سوان، کاسپین تور' :
              lang === 'ru' ? 'тур по Армении, тур в Ереван, групповой тур Армения, индивидуальный тур Армения' :
              'Armenia tour, Yerevan tour, Armenia group tour, private Armenia tour, Lake Sevan tour',
    ogImage: 'https://images.unsplash.com/photo-1609669712881-d9bc36df5ab3?w=1200&q=80',
    path: '/travel/tour',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: lang === 'fa' ? 'تور ارمنستان' : 'Armenia Tour',
      description: lang === 'fa' ? 'تورهای گروهی و اختصاصی ارمنستان شامل ایروان، دریاچه سوان، گارنی-گقارد، خور ویراپ و دیلیجان' : 'Group and private Armenia tours covering Yerevan, Lake Sevan, Garni-Geghard, Khor Virap and Dilijan',
      touristType: lang === 'fa' ? 'گردشگران ایرانی' : 'Iranian tourists',
      provider: { '@type': 'TravelAgency', name: 'Caspian Business Group', url: 'https://caspian.am' },
      itinerary: {
        '@type': 'ItemList',
        itemListElement: (HIGHLIGHTS[lang] || HIGHLIGHTS.fa).map((h, i) => ({
          '@type': 'ListItem', position: i + 1, name: h.name,
        })),
      },
    },
  });

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

  return (
    <ServicePageLayout
      titleFa="تور ارمنستان" titleEn="Armenia Tour" titleRu="Тур по Армении"
      subtitleFa="تور گروهی و اختصاصی به ایروان، سوان، گارنی و دیلیجان از سال ۲۰۰۷"
      subtitleEn="Group & private tours to Yerevan, Sevan, Garni and Dilijan since 2007"
      subtitleRu="Групповые и индивидуальные туры с 2007 года"
      heroImage="https://images.unsplash.com/photo-1609669712881-d9bc36df5ab3?w=1200&q=80"
      serviceType="tour">

      <InfoBlock title={t.why}>
        <p>{t.whyBody}</p>
      </InfoBlock>

      <InfoBlock title={t.highlightsTitle}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          {highlights.map((h, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-bold text-primary text-sm mb-1">{h.name}</h3>
              <p className="text-xs text-foreground/60 leading-relaxed">{h.desc}</p>
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

      <a href="https://wa.me/37433149327?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D9%85%DB%8C%E2%80%8C%D8%AE%D9%88%D8%A7%D9%85%20%D8%AF%D8%B1%D8%A8%D8%A7%D8%B1%D9%87%20%D8%AA%D9%88%D8%B1%20%D8%A7%D8%B1%D9%85%D9%86%D8%B3%D8%AA%D8%A7%D9%86%20%D9%85%D8%B4%D8%A7%D9%88%D8%B1%D9%87%20%D8%A8%DA%AF%DB%8C%D8%B1%D9%85"
        target="_blank" rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-primary text-black font-black hover:bg-yellow-500 transition-all duration-300 shadow-lg mt-4">
        <MessageCircle className="w-5 h-5" />
        {t.cta}
      </a>
    </ServicePageLayout>
  );
}

export default function Tour() {
  return <LanguageProvider><TourContent /></LanguageProvider>;
}

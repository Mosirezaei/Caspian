'use client';
import React from 'react';
import { useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock } from '@/components/shared/ServicePageLayout';
import { MapPin, Clock, Sun } from 'lucide-react';

const PLACES = {
  fa: [
    {
      img: '/images/armenia/yerevan-republic-square.webp',
      name: 'ایروان — میدان جمهوری و کاسکاد',
      desc: 'قلب پایتخت ارمنستان. میدان جمهوری با نمای توفی صورتی و آب‌نماهای موزیکال شبانه، و کاسکاد؛ پله‌های عظیم سنگی با مجسمه و گالری هنری که از بالای آن کل شهر و کوه آرارات دیده می‌شود.',
      distance: 'مرکز شهر',
      time: 'همه‌ی سال، آب‌نمای موزیکال از اردیبهشت تا مهر',
    },
    {
      img: '/images/armenia/garni-temple.webp',
      name: 'معبد گارنی',
      desc: 'تنها معبد یونانی-رومی پیش از مسیحی در ارمنستان، روی صخره‌ای مشرف به دره‌ای دیدنی. نمونه‌ای نادر از معماری کلاسیک در قفقاز.',
      distance: '۳۰ کیلومتر از ایروان',
      time: 'بهار تا پاییز بهترین است',
    },
    {
      img: '/images/armenia/geghard-monastery.webp',
      name: 'صومعه گقارد',
      desc: 'صومعه‌ای قرون‌وسطایی که بخشی از آن مستقیم داخل صخره کنده شده. ثبت میراث جهانی یونسکو و یکی از معنوی‌ترین مکان‌های ارمنستان.',
      distance: '۴۰ کیلومتر از ایروان (نزدیک گارنی)',
      time: 'همه‌ی سال',
    },
    {
      img: '/images/armenia/khor-virap.webp',
      name: 'خور ویراپ',
      desc: 'صومعه‌ای تاریخی با معروف‌ترین منظره‌ی کوه آرارات در سراسر ارمنستان. محل زندانی شدن گریگور روشنگر، مقدس‌ترین نقطه برای کلیسای ارمنی.',
      distance: '۴۵ کیلومتر از ایروان',
      time: 'صبح زود برای بهترین دید آرارات',
    },
    {
      img: '/images/armenia/lake-sevan.webp',
      name: 'دریاچه سوان',
      desc: 'یکی از بزرگ‌ترین دریاچه‌های آب‌شیرین کوهستانی جهان در ارتفاع ۱۹۰۰ متری. صومعه سوانانک، ماهی ایشخان تازه، و هوای خنک تابستانی.',
      distance: '۶۰ کیلومتر از ایروان',
      time: 'تیر تا شهریور برای شنا و پیک‌نیک',
    },
    {
      img: '/images/armenia/dilijan.webp',
      name: 'دیلیجان',
      desc: 'شهرکی جنگلی و رمانتیک که به «سوئیس ارمنستان» معروف است. خانه‌های قدیمی چوبی، مسیرهای پیاده‌روی و کافه‌های دنج.',
      distance: '۱۰۰ کیلومتر از ایروان',
      time: 'تابستان برای طبیعت، پاییز برای رنگ برگ‌ها',
    },
    {
      img: '/images/armenia/tatev.webp',
      name: 'تاتف و تله‌کابین بال‌های تاتف',
      desc: 'صومعه‌ی قرن نهم روی صخره‌ای مرتفع، قابل دسترسی با طولانی‌ترین تله‌کابین برگشتی جهان (بیش از ۵ کیلومتر) با منظره‌ی خیره‌کننده دره ورتاناتزور.',
      distance: '۲۸۰ کیلومتر از ایروان (استان سیونیک)',
      time: 'بهار تا پاییز، تله‌کابین معمولاً چهارشنبه تا یکشنبه فعال است',
    },
  ],
  en: [
    { img: '/images/armenia/yerevan-republic-square.webp', name: 'Yerevan — Republic Square & Cascade', desc: "The heart of Armenia's capital. Republic Square, framed by pink tuff buildings and a nightly musical fountain show, and the Cascade — a giant stone stairway with sculpture gardens and a rooftop view over the city to Mount Ararat.", distance: 'City center', time: 'Year-round; musical fountains run May–September' },
    { img: '/images/armenia/garni-temple.webp', name: 'Garni Temple', desc: "Armenia's only pre-Christian Greco-Roman temple, perched above a dramatic gorge — a rare piece of classical architecture in the Caucasus.", distance: '30 km from Yerevan', time: 'Best spring through autumn' },
    { img: '/images/armenia/geghard-monastery.webp', name: 'Geghard Monastery', desc: 'A medieval monastery partly carved directly into the cliff face. UNESCO World Heritage listed and one of the most spiritual sites in Armenia.', distance: '40 km from Yerevan (near Garni)', time: 'Year-round' },
    { img: '/images/armenia/khor-virap.webp', name: 'Khor Virap', desc: "A historic monastery with Armenia's most iconic view of Mount Ararat. Where Gregory the Illuminator was imprisoned — the holiest site for the Armenian Church.", distance: '45 km from Yerevan', time: 'Early morning for the clearest Ararat views' },
    { img: '/images/armenia/lake-sevan.webp', name: 'Lake Sevan', desc: "One of the world's largest high-altitude freshwater lakes at 1,900m. Sevanavank Monastery, fresh trout, and cool summer air.", distance: '60 km from Yerevan', time: 'June–September for swimming and picnics' },
    { img: '/images/armenia/dilijan.webp', name: 'Dilijan', desc: "A forested, romantic town known as Armenia's Switzerland — old wooden houses, hiking trails, and cozy cafés.", distance: '100 km from Yerevan', time: 'Summer for nature, autumn for fall colors' },
    { img: '/images/armenia/tatev.webp', name: 'Tatev & the Wings of Tatev cable car', desc: "A 9th-century monastery on a high cliff, reached by the world's longest reversible cable car (over 5 km), with stunning views over the Vorotan Gorge.", distance: '280 km from Yerevan (Syunik province)', time: 'Spring through autumn; the cable car usually runs Wed–Sun' },
  ],
  ru: [
    { img: '/images/armenia/yerevan-republic-square.webp', name: 'Ереван — Площадь Республики и Каскад', desc: 'Сердце армянской столицы. Площадь Республики с розовыми туфовыми фасадами и вечерним музыкальным фонтаном, и Каскад — гигантская каменная лестница со скульптурами и видом на город и гору Арарат.', distance: 'Центр города', time: 'Круглый год; музыкальные фонтаны — с мая по сентябрь' },
    { img: '/images/armenia/garni-temple.webp', name: 'Храм Гарни', desc: 'Единственный дохристианский греко-римский храм в Армении, на скале над живописным ущельем.', distance: '30 км от Еревана', time: 'Лучшее время — весна–осень' },
    { img: '/images/armenia/geghard-monastery.webp', name: 'Монастырь Гегард', desc: 'Средневековый монастырь, частично высеченный прямо в скале. Объект Всемирного наследия ЮНЕСКО.', distance: '40 км от Еревана (рядом с Гарни)', time: 'Круглый год' },
    { img: '/images/armenia/khor-virap.webp', name: 'Хор Вирап', desc: 'Исторический монастырь с самым знаменитым видом на гору Арарат. Место заточения Григория Просветителя.', distance: '45 км от Еревана', time: 'Раннее утро — для лучшего вида на Арарат' },
    { img: '/images/armenia/lake-sevan.webp', name: 'Озеро Севан', desc: 'Одно из крупнейших высокогорных пресноводных озёр мира на высоте 1900 м. Монастырь Севанаванк, свежая форель.', distance: '60 км от Еревана', time: 'Июнь–сентябрь для купания и пикников' },
    { img: '/images/armenia/dilijan.webp', name: 'Дилижан', desc: 'Лесной городок, известный как «армянская Швейцария» — старые деревянные дома, тропы и уютные кафе.', distance: '100 км от Еревана', time: 'Лето — для природы, осень — для красоок листвы' },
    { img: '/images/armenia/tatev.webp', name: 'Татев и канатная дорога «Крылья Татева»', desc: 'Монастырь IX века на высокой скале, куда ведёт самая длинная в мире реверсивная канатная дорога (более 5 км).', distance: '280 км от Еревана (область Сюник)', time: 'Весна–осень; канатная дорога обычно работает со среды по воскресенье' },
  ],
};

const HEAD = {
  fa: {
    title: 'ارمنستان کجا برم؟ راهنمای کامل جاهای دیدنی ایروان و ارمنستان',
    intro: 'اگر برای اولین‌بار به ارمنستان سفر می‌کنید یا دنبال برنامه‌ریزی دقیق‌تری هستید، این راهنما مهم‌ترین جاهای دیدنی ایروان و اطراف ارمنستان را با فاصله، بهترین زمان بازدید و توضیح کوتاه معرفی می‌کند.',
    listTitle: 'جاهای دیدنی و مهم ارمنستان',
    tipsTitle: 'چند نکته برای برنامه‌ریزی سفر',
    tips: [
      'ایروان، گارنی، گقارد و خور ویراپ را می‌توان در یک یا دو روز با تور روزانه پوشش داد.',
      'برای سوان و دیلیجان حداقل یک شب اقامت در نظر بگیرید.',
      'تاتف نیاز به یک سفر جداگانه (حداقل ۲ روز) دارد چون فاصله زیادی از ایروان دارد.',
      'بهترین فصل سفر به ارمنستان اردیبهشت تا مهر است؛ تابستان‌ها گرم و خشک، پاییز رنگارنگ و خنک.',
    ],
  },
  en: {
    title: 'Where to Go in Armenia: A Complete Guide to Yerevan & Armenia Sights',
    intro: "Planning your first trip to Armenia or want a tighter itinerary? Here are the country's must-see sights around Yerevan and beyond, with distances, best visiting times and a short description of each.",
    listTitle: 'Top Places to Visit in Armenia',
    tipsTitle: 'Trip Planning Tips',
    tips: [
      'Yerevan, Garni, Geghard and Khor Virap can be covered in a single day tour.',
      'Plan at least one overnight stay for Sevan and Dilijan.',
      'Tatev needs its own trip (at least 2 days) since it is far from Yerevan.',
      'The best season to visit Armenia is May–October; summers are warm and dry, autumn is cool and colorful.',
    ],
  },
  ru: {
    title: 'Куда поехать в Армении: полный гид по Еревану и достопримечательностям',
    intro: 'Планируете первую поездку в Армению или хотите составить точный маршрут? Это гид по главным достопримечательностям Еревана и всей страны.',
    listTitle: 'Главные места для посещения в Армении',
    tipsTitle: 'Советы по планированию поездки',
    tips: [
      'Ереван, Гарни, Гегард и Хор Вирап можно посетить за один день.',
      'Для Севана и Дилижана запланируйте минимум одну ночь.',
      'Татев требует отдельной поездки (минимум 2 дня).',
      'Лучший сезон — май–октябрь; лето тёплое и сухое, осень прохладная и красоочная.',
    ],
  },
};

export default function ArmeniaGuide() {
  const { lang } = useLang();
  const places = PLACES[lang] || PLACES.fa;
  const h = HEAD[lang] || HEAD.fa;

  return (
    <ServicePageLayout
      titleFa="ارمنستان کجا برم؟ راهنمای جاهای دیدنی"
      titleEn="Where to Go in Armenia"
      titleRu="Куда поехать в Армении"
      subtitleFa="راهنمای کامل جاهای دیدنی ایروان و ارمنستان با عکس، فاصله و بهترین زمان بازدید"
      subtitleEn="A complete guide to Yerevan & Armenia's top sights — with photos, distances and best time to visit"
      subtitleRu="Полный гид по главным достопримечательностям Еревана и Армении"
      heroImage="/images/armenia/yerevan-cascade.webp"
      serviceType="tour"
    >
      <InfoBlock title={h.title}>
        <p>{h.intro}</p>
      </InfoBlock>

      <InfoBlock title={h.listTitle}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
          {places.map((p, i) => (
            <div key={i} className="rounded-xl overflow-hidden bg-white/5 border border-white/10">
              <img src={p.img} alt={p.name} loading="lazy" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-primary text-sm mb-1">{p.name}</h3>
                <p className="text-xs text-foreground/70 leading-relaxed mb-3">{p.desc}</p>
                <div className="flex items-center gap-1 text-[11px] text-foreground/60 mb-1">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{p.distance}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-foreground/60">
                  <Sun className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{p.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </InfoBlock>

      <InfoBlock title={h.tipsTitle}>
        <ul className="space-y-2 mt-2">
          {h.tips.map((t, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
              <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </InfoBlock>
    </ServicePageLayout>
  );
}

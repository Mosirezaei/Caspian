'use client';
import { MapPin, Clock, Sparkles } from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import RelatedContent from '@/components/shared/RelatedContent.jsx';
import { useSEO } from '@/hooks/useSEO';

const bigMalls = [
  {
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Dalma%20Garden%20Mall%20-%208%20-%20Yerevan.JPG?width=700',
    alt: 'نمای بیرونی مرکز خرید دالما گاردن مال در ایروان، اولین مال ارمنستان',
    title: 'دالما گاردن مال (Dalma Garden Mall)',
    address: 'بزرگراه تسیسرناکابرد، نزدیک تپه تسیسرناکابرد',
    hours: '۱۰ صبح تا ۱۰ شب',
    body: 'اولین مرکز خرید سرپوشیده‌ی ارمنستان که پاییز ۲۰۱۲ افتتاح شد و هنوز یکی از محبوب‌ترین مقصدهای خرید ایروانه. در سه طبقه‌ی این مجموعه حدود ۱۱۶ فروشگاه جا گرفته، از زارا و منگو تا استرادیواریوس، برشکا، مارک اند اسپنسر و کارپیسا. هایپرمارکت زنجیره‌ای «ایروان سیتی»، سینمای چندسالنی «سینما استار»، بولینگ و یک فودکورت بزرگ هم داخل مجموعه‌ست، بنابراین می‌شه یه نیم‌روز کامل رو بدون خارج شدن از ساختمان گذروند.',
  },
  {
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Arshakunyats%20Avenue%2C%20Yerevan%20(1).jpg?width=700',
    alt: 'نمای مرکز خرید ایروان مال در خیابان آرشاکونیاتس ایروان',
    title: 'ایروان مال (Yerevan Mall)',
    address: 'خیابان آرشاکونیاتس، منطقه شنگاویت',
    hours: '۱۰ صبح تا ۱۰ شب',
    body: 'با حدود ۵۹ هزار مترمربع فضای خرده‌فروشی و بیش از ۱۲۵ فروشگاه، ایروان مال از نظر مساحت و تعداد مغازه بزرگ‌ترین مرکز خرید کشوره. فوریه ۲۰۱۴ افتتاح شد و از سال ۲۰۱۵ تنها شعبه‌ی هایپرمارکت فرانسوی کارفور در کل ارمنستان هم همین‌جاست. «جزیره‌ی گنج کاپیتان کید» بزرگ‌ترین مرکز بازی سرپوشیده‌ی کشور و سینمای کینوپارک از جاذبه‌های جانبی‌شن. زارا، منگو، برشکا، آلدو و لیوایز از برندهای ثابت این مجموعه‌ان.',
  },
  {
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/A%C4%89etcentro%20Rossia%20Mall%2004.jpg?width=700',
    alt: 'ورودی مرکز خرید روسیا مال در خیابان تیگران متس ایروان',
    title: 'روسیا مال (Rossia Mall)',
    address: 'خیابان تیگران متس، چند قدمی میدان جمهوری',
    hours: '۱۰ صبح تا ۱۰ شب',
    body: 'موقعیتش دقیقاً همون چیزیه که روسیا مال رو جذاب می‌کنه: فاصله‌ی پیاده تا میدان جمهوری و چشم‌انداز مستقیم به کلیسای معروف سنت گریگور روشنگر. در کنار برندهای بین‌المللی مثل او‌وی‌اس و ال‌سی‌وایکیکی، بوتیک‌های طراحان و تولیدکنندگان محلی هم غرفه دارن. رستوران‌ها و فودکورت مجموعه با انواع غذای بین‌المللی و ارمنی، توقف اینجا رو برای یه استراحت میان‌روز هم مناسب می‌کنه.',
  },
];

const otherMalls = [
  { title: 'مترونوم (Metronom)', note: 'مرکز خرید دوطبقه‌ی زیرزمینی نزدیک ایستگاه مترو یریتاسارداکان، با فواره‌ی مرکزی، آمفی‌تئاتر و برندهایی مثل ال‌سی‌وایکیکی و مگوس هوم.' },
  { title: 'تاشیر استریت (Tashir Street)', note: 'مرکز خرید زیرزمینی زیر خیابان شمالی (نورترن اونیو)، پارکینگ اختصاصی و فروشگاه‌های تخصصی کفش و طلا و جواهر.' },
  { title: 'مگامال ارمنستان (Megamall)', note: 'بزرگ‌ترین مرکز خرید و تفریحی قفقاز، افتتاح ۲۰۱۹ در منطقه نور نورک؛ ۶ طبقه، حدود ۱۰۰ برند و پارکینگ زیرزمینی سه‌طبقه برای ۱۸۰۰ خودرو.' },
  { title: 'ریو مال (RIO Mall)', note: 'نسبتاً تازه‌تأسیس در خیابان وهرام پاپازیان، با چند برند بین‌المللی که فقط همین‌جا در ایروان نمایندگی دارن.' },
  { title: 'اربونی مال (Erebuni Mall)', note: 'جدیدترین مال ایروان (۲۰۲۰)، نزدیک قلعه‌ی ۳۰۰۰ ساله‌ی اربونی؛ خلوت‌تر از بقیه و مناسب یه روز خرید آروم خانوادگی.' },
  { title: 'ریچ پلازا (Rich Plaza)', note: 'مرکز خریدی کوچک‌تر در خیابان سوان، نزدیک بازار پتاک؛ قیمت‌ها معمولاً پایین‌تر از مال‌های بزرگ‌تره.' },
];

const markets = [
  {
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Yerevan%20Vernissage%20hats.jpg?width=700',
    alt: 'غرفه‌های صنایع دستی در بازار سنتی ورنیساژ ایروان',
    title: 'بازار ورنیساژ (Vernissage)',
    body: 'بزرگ‌ترین بازار روباز منطقه، در امتداد خیابان‌های آرام و بوزاند، بین میدان جمهوری و مجسمه واردان ماماکونیان. از دهه‌ی ۱۹۸۰ هنرمندان محلی اینجا آثارشون رو عرضه می‌کردن و امروز صدها غرفه‌ی فرش، منبت‌کاری، سکه‌های عتیقه، جواهرات دست‌ساز و آلات موسیقی سنتی داره. بهترین روزهای بازدید، آخر هفته‌هاست که تعداد غرفه‌ها و رونق بازار به اوج می‌رسه؛ چانه‌زدن هم اینجا کاملاً معموله.',
  },
  {
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Yerevan%20Central%20Covered%20Market%20known%20as%20Pak%20Shuka.jpg?width=700',
    alt: 'داخل بازار سرپوشیده مرکزی (پاک شوکا) ایروان با غرفه‌های میوه خشک و ادویه',
    title: 'پاک شوکا — بازار سرپوشیده مرکزی',
    body: 'بازار سنتی سرپوشیده در خیابان ماشتوتس که محل اصلی خرید خوراکی محلی‌هاست: میوه‌های تازه و خشک، ادویه، عسل، پنیرهای سنتی و شیرینی‌های خانگی. برای کسی که دنبال سوغات خوراکیه، این بازار معمولاً انتخاب بهتری نسبت به مال‌هاست چون قیمت‌ها به تولیدکننده نزدیک‌تره.',
  },
];

export default function YerevanShoppingMalls() {
  useSEO({
    title: 'مراکز خرید ایروان ارمنستان | راهنمای کامل مال‌ها و بازارها',
    description: 'دالما گاردن مال، ایروان مال، روسیا مال و بازار ورنیساژ؛ آدرس، ساعت کاری، برندها و بهترین سوغات ارمنستان در یک راهنمای کامل خرید ایروان.',
    keywords: 'مراکز خرید ایروان, خرید در ارمنستان, دالما گاردن مال, ایروان مال, بازار ورنیساژ, سوغات ارمنستان',
    path: '/blog/yerevan-shopping-malls-guide',
  });

  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />
      <main className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">

        {/* Header */}
        <div className="mb-8">
          <span className="text-xs text-primary/70 font-semibold bg-primary/8 px-3 py-1 rounded-full">
            خرید در ارمنستان
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-4 leading-tight">
            مراکز خرید ایروان ارمنستان — راهنمای کامل
          </h1>
          <p className="text-foreground/60 mt-3 text-lg">
            از مال‌های مدرن با برندهای بین‌المللی تا بازارهای سنتی صنایع‌دستی — همه‌ی نقاط اصلی خرید ایروان با آدرس، ساعت کاری و توضیح کامل
          </p>
          <p className="text-xs text-foreground/40 mt-2">آپدیت: شهریور ۱۴۰۵</p>
        </div>

        {/* Intro */}
        <div className="p-5 rounded-2xl border border-primary/15 bg-primary/5 mb-10 text-sm text-foreground/70 leading-relaxed">
          خرید یکی از تجربه‌های محبوب مسافران ایرانی در سفر به ارمنستانه؛ نه فقط به‌خاطر قیمت‌ها، بلکه به‌خاطر تنوع برندهای بین‌المللی، صنایع‌دستی محلی و فضای دلچسب مال‌های ایروان که معمولاً سینما، شهربازی و فودکورت رو هم کنار فروشگاه‌ها دارن.
          نزدیکی جغرافیایی ارمنستان به ایران و نبود محدودیت زمانی سخت‌گیرانه برای سفر، باعث شده خیلی از گردشگرها بخشی از برنامه‌ی سفرشون رو به گشت‌وگذار در مال‌ها و بازارهای سنتی ایروان اختصاص بدن.
        </div>

        {/* Big malls with images */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" /> بزرگ‌ترین مراکز خرید ایروان
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {bigMalls.map((m, i) => (
              <div key={i} className={`rounded-2xl overflow-hidden bg-white/5 border border-white/10 ${i === 2 ? 'sm:col-span-2' : ''}`}>
                <img src={m.img} alt={m.alt} className="w-full h-56 object-cover" loading="lazy" />
                <div className="p-5">
                  <h3 className="font-bold text-foreground mb-2">{m.title}</h3>
                  <span className="inline-flex items-center gap-1 text-[11px] text-primary/70 font-semibold mb-1">
                    <MapPin className="w-3 h-3" /> {m.address}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-foreground/40 mb-2">
                    <Clock className="w-3 h-3" /> {m.hours}
                  </span>
                  <p className="text-foreground/60 text-sm leading-6">{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other malls, compact */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-5">دیگر مراکز خرید ایروان</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {otherMalls.map((m, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h3 className="font-bold text-foreground text-sm mb-1.5">{m.title}</h3>
                <p className="text-foreground/55 text-xs leading-6">{m.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Traditional markets */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-5">بازارهای سنتی ایروان</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {markets.map((m, i) => (
              <div key={i} className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                <img src={m.img} alt={m.alt} className="w-full h-52 object-cover" loading="lazy" />
                <div className="p-5">
                  <h3 className="font-bold text-foreground mb-2">{m.title}</h3>
                  <p className="text-foreground/60 text-sm leading-6">{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Souvenirs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" /> چه سوغاتی از ارمنستان بخریم؟
          </h2>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-sm text-foreground/65 leading-relaxed space-y-3">
            <p>
              نماد ملی ارمنستان انار است و همین موتیف رو روی خیلی از صنایع‌دستی این کشور می‌بینید: از سفال و ظروف سرامیکی گرفته تا جواهرات نقره. دودوک (سازبادی سنتی ارمنی)، عروسک‌های پارچه‌ای، قالی‌های دست‌باف و ماکت‌های کوچک خاچکار (سنگ‌های صلیب‌دار) هم از پرطرفدارترین سوغات فرهنگی‌ان — بیشترشون رو هم توی مال‌ها پیدا می‌کنید هم توی بازار ورنیساژ.
            </p>
            <p>
              برای سوغات خوراکی، میوه‌خشک‌های شکلاتی، قهوه و مربای گردو از محبوب‌ترین انتخاب‌هاست که بازار پاک شوکا و فروشگاه‌های داخل مال‌ها هر دو تهیه می‌کنن. اگه دنبال برندهای پوشاک شناخته‌شده‌اید، زارا، منگو، برشکا، پوما، آدیداس، نکست، مکس مارا و اسکادا در بیشتر مال‌های بزرگ ایروان شعبه دارن.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center">
          <h3 className="text-lg font-bold text-foreground mb-2">
            برای خرید بهتر، قبلش پول رو با نرخ مناسب تبدیل کن
          </h3>
          <p className="text-sm text-foreground/60 mb-4">
            کاسپین گروپ خدمات صرافی ریال و تتر به درام و دلار رو همون روز و بدون واسطه انجام می‌ده تا با بهترین نرخ سراغ خریدت بری.
          </p>
          <a href="https://wa.me/37433149327" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition text-sm">
            درخواست تبدیل ارز
          </a>
        </div>

        </div>

          <PageSidebar tags={['shopping', 'malls', 'yerevan', 'souvenirs', 'armenia']} currentPath="/blog/yerevan-shopping-malls-guide" />
        </div>

        <RelatedServices currentPath="/blog/yerevan-shopping-malls-guide" />
      </main>
    </div>
  );
}

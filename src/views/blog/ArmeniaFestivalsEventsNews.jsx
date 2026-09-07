'use client';
import { useState } from 'react';
import { PartyPopper, Music, Newspaper, CalendarDays, Info, ArrowLeft, MapPin, Star } from 'lucide-react';
import Link from 'next/link';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import RelatedContent from '@/components/shared/RelatedContent.jsx';
import { useSEO } from '@/hooks/useSEO';
import { FESTIVAL_MONTHS, FESTIVALS } from '@/data/festivalsData';

const concerts = [
  { date: '۵ سپتامبر ۲۰۲۶', name: 'LXST CXNTURY, Onyx, Gio Pika و همراهان', venue: 'RA Yerevan' },
  { date: '۱۰ سپتامبر ۲۰۲۶', name: 'Blockhead, Proleter, Arms and Sleepers', venue: 'Tonelab' },
  { date: '۱۲ سپتامبر ۲۰۲۶', name: 'بوریس نیکولایف', venue: 'مجتمع کارن دمیرچیان' },
  { date: '۱۳ سپتامبر ۲۰۲۶', name: '«بزرگ\u200cترین عدد اول» (گروه روسی)', venue: 'Yans Music Hall' },
  { date: '۱ تا ۸ اکتبر ۲۰۲۶', name: 'های\u200cفست — جشنواره\u200cی بین\u200cالمللی هنرهای نمایشی', venue: 'سالن\u200cهای مختلف ایروان' },
  { date: '۱۱ اکتبر ۲۰۲۶', name: 'جشن اربونی-ایروان با موسیقی زنده و اجرای پایانی', venue: 'میدان جمهوری' },
  { date: '۱۰ اکتبر ۲۰۲۶', name: 'Дурной Вкус (گروه روسی)', venue: 'Muha Bar' },
];

const TOP_PICKS = [
  { label: '🎄 کریسمس', when: 'ژانویه' }, { label: '🔥 ترندز', when: 'فوریه' }, { label: '✝️ عید پاک (زاتیک)', when: 'مارس–آوریل' },
  { label: '🍷 روزهای شراب ایروان', when: 'ژوئن' }, { label: '🌿 HayBuis', when: 'ژوئن' }, { label: '🐑 پشم\u200cچینی گوسفند', when: 'ژوئن' },
  { label: '💦 وارداوار', when: 'ژوئیه' }, { label: '🎬 زردآلوی طلایی', when: 'ژوئیه' }, { label: '🍺 روزهای آبجو', when: 'ژوئیه/اوت' },
  { label: '👘 تاراز فست', when: 'اوت' }, { label: '🍖 جشنواره کباب آختالا', when: 'اوت' }, { label: '🥮 جشنواره گاتا', when: 'سپتامبر' },
  { label: '🇦🇲 روز استقلال', when: 'سپتامبر' }, { label: '🍷 جشنواره شراب آرنی', when: 'اکتبر' }, { label: '🎭 های\u200cفست', when: 'اکتبر' },
  { label: '🎈 جشنواره بالن هوای گرم', when: 'پاییز' }, { label: '🏛️ اربونی-ایروان', when: 'اکتبر' },
];

function Stars({ n }) {
  return (
    <span className="inline-flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-3 h-3 ${i < n ? 'fill-primary text-primary' : 'text-foreground/15'}`} />
      ))}
    </span>
  );
}

export default function ArmeniaFestivalsEventsNews() {
  const [activeMonth, setActiveMonth] = useState('all');

  useSEO({
    title: 'تقویم کامل فستیوال\u200cها و جشن\u200cهای ارمنستان | راهنمای ماه\u200cبه\u200cماه ۲۰۲۶',
    description: 'کامل\u200cترین تقویم فستیوال\u200cها و جشن\u200cهای ارمنستان؛ از کریسمس و ترندز تا وارداوار، روزهای شراب، جشنواره گاتا، آرنی و رویدادهای فرهنگی ارمنستان به تفکیک ماه.',
    keywords: 'فستیوال ارمنستان, تقویم جشن های ارمنستان, وارداوار, ترندز, روزهای شراب ایروان, جشنواره آرنی, رویدادهای ایروان',
    path: '/blog/armenia-festivals-events-news',
  });

  const visibleFestivals = activeMonth === 'all' ? FESTIVALS : FESTIVALS.filter(f => f.month === activeMonth);

  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />
      <main className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">

        <div className="mb-8">
          <span className="text-xs text-primary/70 font-semibold bg-primary/8 px-3 py-1 rounded-full">
            اخبار و فستیوال\u200cها
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-4 leading-tight">
            تقویم کامل فستیوال\u200cها و جشن\u200cهای سالانه ارمنستان
          </h1>
          <p className="text-foreground/60 mt-3 text-lg">
            از جشن\u200cهای باستانی مثل ترندز و وارداوار تا فستیوال\u200cهای مدرن مثل Yerevan Wine Days و Golden Apricot — راهنمای ماه\u200cبه\u200cماه جشن\u200cهای مذهبی، فرهنگی، غذایی و هنری ارمنستان
          </p>
          <p className="text-xs text-foreground/40 mt-2">آپدیت: شهریور ۱۴۰۵</p>

          <div className="mt-6 flex justify-center">
            <Link
              href="/events"
              className="group inline-flex items-center gap-2.5 bg-primary text-black font-bold px-7 py-4 rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 text-sm sm:text-base animate-pulse hover:animate-none"
            >
              <CalendarDays className="w-5 h-5" />
              بررسی فستیوال\u200cها و کنسرت\u200cهای پیش رو در ارمنستان
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>

        {/* هشدار مهم درباره‌ی تاریخ‌های متغیر */}
        <div className="mb-8 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 text-sm text-foreground/75 flex items-start gap-2">
          <Info className="w-4 h-4 mt-0.5 shrink-0 text-amber-400" />
          <span>تاریخ فستیوال\u200cها ممکن است هر سال تغییر کند. تاریخ\u200cهای ثابت و تاریخ\u200cهای اعلام\u200cشده رسمی از منابع رسمی ارمنستان درج شده\u200cاند؛ برای رویدادهای متغیر، تاریخ نهایی هر سال پس از اعلام برگزارکنندگان به\u200cروزرسانی می\u200cشود.</span>
        </div>

        {/* مهم‌ترین فستیوال‌ها برای گردشگران */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Star className="w-4.5 h-4.5 text-primary fill-primary" /> مهم\u200cترین فستیوال\u200cهای ارمنستان برای گردشگران
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {TOP_PICKS.map((p, i) => (
              <div key={i} className="flex items-center justify-between text-sm px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-foreground/85">{p.label}</span>
                <span className="text-[11px] text-primary/70 font-semibold">{p.when}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Annual Festivals — با فیلتر ماه */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-2">
            <PartyPopper className="w-5 h-5 text-primary" /> تقویم کامل فستیوال\u200cها به تفکیک ماه
          </h2>

          <div className="flex flex-wrap gap-2 mb-6">
            <button onClick={() => setActiveMonth('all')}
              className={`text-xs font-bold px-3.5 py-1.5 rounded-full border transition-colors ${activeMonth === 'all' ? 'bg-primary text-black border-primary' : 'bg-white/5 text-foreground/60 border-white/10 hover:bg-white/10'}`}>
              همه ماه\u200cها
            </button>
            {FESTIVAL_MONTHS.map(m => (
              <button key={m.id} onClick={() => setActiveMonth(m.id)}
                className={`text-xs font-bold px-3.5 py-1.5 rounded-full border transition-colors ${activeMonth === m.id ? 'bg-primary text-black border-primary' : 'bg-white/5 text-foreground/60 border-white/10 hover:bg-white/10'}`}>
                {m.fa}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {visibleFestivals.map((f) => (
              <div key={f.id} className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
                {f.image && (
                  <img src={f.image.url} alt={`${f.nameEn} in Armenia`} title={f.nameEn} loading="lazy" className="w-full h-40 object-cover" />
                )}
                <div className="p-4">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-bold text-primary/80 bg-primary/10 px-2 py-1 rounded-full">
                      {FESTIVAL_MONTHS.find(m => m.id === f.month)?.fa}
                    </span>
                    <Stars n={f.star} />
                  </div>
                  <h3 className="font-bold text-foreground text-sm mb-1">{f.nameFa} <span className="text-foreground/40 font-normal">— {f.nameEn}</span></h3>
                  <p className="text-foreground/60 text-sm leading-6 mb-2">{f.desc}</p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-foreground/45">
                    <span className="flex items-center gap-1"><CalendarDays className="w-3.5 h-3.5" /> {f.date}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {f.location}</span>
                  </div>
                  {f.image && (
                    <p className="text-[10px] text-foreground/30 mt-2">عکس: {f.image.credit}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-foreground/40 mt-3 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 shrink-0" /> تاریخ دقیق برخی جشن\u200cها (مثل وارداوار که وابسته به تقویم مذهبی است) هرسال کمی جابه\u200cجا می\u200cشود؛ نزدیک به موعد با ما تماس بگیرید تا تاریخ امسال را تأیید کنیم.
          </p>
        </section>

        {/* Upcoming concerts (next 3 months) */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-2">
            <Music className="w-5 h-5 text-primary" /> کنسرت\u200cها و رویدادهای پیش رو (تا ۳ ماه آینده)
          </h2>
          <div className="space-y-3">
            {concerts.map((c, i) => (
              <div key={i} className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/15 flex items-center gap-4">
                <CalendarDays className="w-5 h-5 text-primary shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-primary/70 font-semibold">{c.date}</div>
                  <h3 className="font-bold text-foreground text-sm mt-0.5">{c.name}</h3>
                  <p className="text-foreground/50 text-xs mt-0.5">{c.venue}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-foreground/40 mt-3 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 shrink-0" /> تقویم کنسرت\u200cهای ایروان مدام آپدیت می\u200cشود و رویدادهای جدید هرهفته اضافه می\u200cشوند؛ برای آخرین لیست و کمک در خرید بلیط با ما در تماس باشید.
          </p>
        </section>

        {/* Immigration & EU news */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-2">
            <Newspaper className="w-5 h-5 text-primary" /> اخبار مهاجرتی و روابط ارمنستان با اتحادیه اروپا
          </h2>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4 text-sm text-foreground/70 leading-7">
            <p>
              گفت\u200cوگوی لغو ویزای ارمنستان با اتحادیه اروپا در سال ۲۰۲۶ وارد فاز فعالی شده. طبق اعلام کمیسیون اروپا، ارمنستان تنها کشوری\u200cست که در حال حاضر گفت\u200cوگوی فعال لغو ویزا با اتحادیه اروپا دارد — نخستین اجلاس رسمی ارمنستان-اتحادیه اروپا در ماه مه ۲۰۲۶ در ایروان برگزار شد و گزارش پیشرفت اولیه هم همان\u200cجا ارائه شد.
            </p>
            <p>
              اتحادیه اروپا ۵۳ توصیه\u200cی مشخص به دولت ارمنستان ارائه داده که به ۱۱۷ اقدام اجرایی تفکیک شده؛ طبق آخرین اعلام مقامات ارمنی، بیش از نیمی از این اقدام\u200cها تا تابستان ۲۰۲۶ تکمیل شده. یک هیئت ارزیابی اتحادیه اروپا هم پاییز امسال برای بررسی میزان پیشرفت به ارمنستان سفر می\u200cکند.
            </p>
            <p>
              اورسولا فون\u200cدرلاین، رئیس کمیسیون اروپا، پیشرفت ارمنستان را «چشمگیر» توصیف کرده، هرچند هیچ\u200cکدام از طرفین هنوز جدول زمانی قطعی برای تکمیل فرآیند اعلام نکرده\u200cاند. این روند به معنای لغو فوری ویزا نیست، اما نشانه\u200cی روشنی از نزدیک\u200cتر شدن روابط ارمنستان و اروپاست که می\u200cتواند در سال\u200cهای آینده سفر به شنگن را برای شهروندان ارمنی ساده\u200cتر کند.
            </p>
            <p className="text-xs text-foreground/50 pt-2 border-t border-white/10">
              نکته\u200cی مهم برای متقاضیان ایرانی: این گفت\u200cوگو مربوط به شهروندان ارمنی و لغو ویزای اتحادیه اروپاست، نه تغییری مستقیم در قوانین اقامت ارمنستان برای اتباع خارجی. با این حال، نزدیک\u200cشدن ارمنستان به اروپا می\u200cتواند در بلندمدت روی فرصت\u200cهای اقتصادی و ارزش اقامت ارمنستان اثر بگذارد. برای آخرین وضعیت دقیق قوانین اقامت، همیشه با کارشناسان گروه کاسپین هماهنگ کنید — این حوزه به\u200cسرعت در حال تغییر است.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center">
          <h3 className="text-lg font-bold text-foreground mb-2">
            برای برنامه\u200cریزی سفر یا مشاوره\u200cی اقامت آماده\u200cاید؟
          </h3>
          <p className="text-sm text-foreground/60 mb-4">
            گروه کاسپین برای هماهنگی سفر همزمان با فستیوال\u200cها و مشاوره\u200cی به\u200cروز اقامت و مهاجرت در کنارتان است.
          </p>
          <a href="https://wa.me/37433149327" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition text-sm">
            تماس با کارشناسان
          </a>
        </div>

        </div>

          <PageSidebar tags={['festivals', 'events', 'concerts', 'news', 'eu', 'armenia']} currentPath="/blog/armenia-festivals-events-news" />
        </div>

        <RelatedServices currentPath="/blog/armenia-festivals-events-news" />
      </main>
    </div>
  );
}

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
  { date: '۱۳ سپتامبر ۲۰۲۶', name: '«بزرگ‌ترین عدد اول» (گروه روسی)', venue: 'Yans Music Hall' },
  { date: '۱ تا ۸ اکتبر ۲۰۲۶', name: 'های‌فست — جشنواره‌ی بین‌المللی هنرهای نمایشی', venue: 'سالن‌های مختلف ایروان' },
  { date: '۱۱ اکتبر ۲۰۲۶', name: 'جشن اربونی-ایروان با موسیقی زنده و اجرای پایانی', venue: 'میدان جمهوری' },
  { date: '۱۰ اکتبر ۲۰۲۶', name: 'Дурной Вкус (گروه روسی)', venue: 'Muha Bar' },
];

const TOP_PICKS = [
  { id: 'christmas', month: 1, label: '🎄 کریسمس', when: 'ژانویه' },
  { id: 'trndez', month: 2, label: '🔥 ترندز', when: 'فوریه' },
  { id: 'easter', month: 4, label: '✝️ عید پاک (زاتیک)', when: 'مارس–آوریل' },
  { id: 'wine-days', month: 6, label: '🍷 روزهای شراب ایروان', when: 'ژوئن' },
  { id: 'haybuis', month: 6, label: '🌿 HayBuis', when: 'ژوئن' },
  { id: 'sheep-shearing', month: 6, label: '🐑 پشم‌چینی گوسفند', when: 'ژوئن' },
  { id: 'vardavar', month: 7, label: '💦 وارداوار', when: 'ژوئیه' },
  { id: 'golden-apricot', month: 7, label: '🎬 زردآلوی طلایی', when: 'ژوئیه' },
  { id: 'beer-days', month: 7, label: '🍺 روزهای آبجو', when: 'ژوئیه/اوت' },
  { id: 'taraz-fest', month: 8, label: '👘 تاراز فست', when: 'اوت' },
  { id: 'barbecue-akhtala', month: 8, label: '🍖 جشنواره کباب آختالا', when: 'اوت' },
  { id: 'gata-fest', month: 9, label: '🥮 جشنواره گاتا', when: 'سپتامبر' },
  { id: 'independence-day', month: 9, label: '🇦🇲 روز استقلال', when: 'سپتامبر' },
  { id: 'areni-wine', month: 10, label: '🍷 جشنواره شراب آرنی', when: 'اکتبر' },
  { id: 'high-fest', month: 10, label: '🎭 های‌فست', when: 'اکتبر' },
  { id: 'balloon-fest', month: 10, label: '🎈 جشنواره بالن هوای گرم', when: 'پاییز' },
  { id: 'erebuni-yerevan', month: 10, label: '🏛️ اربونی-ایروان', when: 'اکتبر' },
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

  const goToFestival = (id, month) => {
    setActiveMonth(month);
    setTimeout(() => {
      const el = document.getElementById(`festival-${id}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('ring-2', 'ring-primary/60');
        setTimeout(() => el.classList.remove('ring-2', 'ring-primary/60'), 2000);
      }
    }, 50);
  };

  useSEO({
    title: 'تقویم کامل فستیوال‌ها و جشن‌های ارمنستان | راهنمای ماه‌به‌ماه ۲۰۲۶',
    description: 'کامل‌ترین تقویم فستیوال‌ها و جشن‌های ارمنستان؛ از کریسمس و ترندز تا وارداوار، روزهای شراب، جشنواره گاتا، آرنی و رویدادهای فرهنگی ارمنستان به تفکیک ماه.',
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
            اخبار و فستیوال‌ها
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-4 leading-tight">
            تقویم کامل فستیوال‌ها و جشن‌های سالانه ارمنستان
          </h1>
          <p className="text-foreground/60 mt-3 text-lg">
            از جشن‌های باستانی مثل ترندز و وارداوار تا فستیوال‌های مدرن مثل Yerevan Wine Days و Golden Apricot — راهنمای ماه‌به‌ماه جشن‌های مذهبی، فرهنگی، غذایی و هنری ارمنستان
          </p>
          <p className="text-xs text-foreground/40 mt-2">آپدیت: شهریور ۱۴۰۵</p>

          <div className="mt-6 flex justify-center">
            <Link
              href="/events"
              className="group inline-flex items-center gap-2.5 bg-primary text-black font-bold px-7 py-4 rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 text-sm sm:text-base animate-pulse hover:animate-none"
            >
              <CalendarDays className="w-5 h-5" />
              بررسی فستیوال‌ها و کنسرت‌های پیش رو در ارمنستان
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>

        {/* هشدار مهم درباره‌ی تاریخ‌های متغیر */}
        <div className="mb-8 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 text-sm text-foreground/75 flex items-start gap-2">
          <Info className="w-4 h-4 mt-0.5 shrink-0 text-amber-400" />
          <span>تاریخ فستیوال‌ها ممکن است هر سال تغییر کند. تاریخ‌های ثابت و تاریخ‌های اعلام‌شده رسمی از منابع رسمی ارمنستان درج شده‌اند؛ برای رویدادهای متغیر، تاریخ نهایی هر سال پس از اعلام برگزارکنندگان به‌روزرسانی می‌شود.</span>
        </div>

        {/* مهم‌ترین فستیوال‌ها برای گردشگران */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Star className="w-4.5 h-4.5 text-primary fill-primary" /> مهم‌ترین فستیوال‌های ارمنستان برای گردشگران
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {TOP_PICKS.map((p) => (
              <button key={p.id} type="button" onClick={() => goToFestival(p.id, p.month)}
                className="flex items-center justify-between text-sm px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-colors text-right">
                <span className="text-foreground/85">{p.label}</span>
                <span className="text-[11px] text-primary/70 font-semibold">{p.when}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Annual Festivals — با فیلتر ماه */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-2">
            <PartyPopper className="w-5 h-5 text-primary" /> تقویم کامل فستیوال‌ها به تفکیک ماه
          </h2>

          <div className="flex flex-wrap gap-2 mb-6">
            <button onClick={() => setActiveMonth('all')}
              className={`text-xs font-bold px-3.5 py-1.5 rounded-full border transition-colors ${activeMonth === 'all' ? 'bg-primary text-black border-primary' : 'bg-white/5 text-foreground/60 border-white/10 hover:bg-white/10'}`}>
              همه ماه‌ها
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
              <div key={f.id} id={`festival-${f.id}`} className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden scroll-mt-24 transition-shadow">
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
            <Info className="w-3.5 h-3.5 shrink-0" /> تاریخ دقیق برخی جشن‌ها (مثل وارداوار که وابسته به تقویم مذهبی است) هرسال کمی جابه‌جا می‌شود؛ نزدیک به موعد با ما تماس بگیرید تا تاریخ امسال را تأیید کنیم.
          </p>
        </section>

        {/* Upcoming concerts (next 3 months) */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-2">
            <Music className="w-5 h-5 text-primary" /> کنسرت‌ها و رویدادهای پیش رو (تا ۳ ماه آینده)
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
            <Info className="w-3.5 h-3.5 shrink-0" /> تقویم کنسرت‌های ایروان مدام آپدیت می‌شود و رویدادهای جدید هرهفته اضافه می‌شوند؛ برای آخرین لیست و کمک در خرید بلیط با ما در تماس باشید.
          </p>
        </section>

        {/* Immigration & EU news */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-2">
            <Newspaper className="w-5 h-5 text-primary" /> اخبار مهاجرتی و روابط ارمنستان با اتحادیه اروپا
          </h2>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4 text-sm text-foreground/70 leading-7">
            <p>
              گفت‌وگوی لغو ویزای ارمنستان با اتحادیه اروپا در سال ۲۰۲۶ وارد فاز فعالی شده. طبق اعلام کمیسیون اروپا، ارمنستان تنها کشوری‌ست که در حال حاضر گفت‌وگوی فعال لغو ویزا با اتحادیه اروپا دارد — نخستین اجلاس رسمی ارمنستان-اتحادیه اروپا در ماه مه ۲۰۲۶ در ایروان برگزار شد و گزارش پیشرفت اولیه هم همان‌جا ارائه شد.
            </p>
            <p>
              اتحادیه اروپا ۵۳ توصیه‌ی مشخص به دولت ارمنستان ارائه داده که به ۱۱۷ اقدام اجرایی تفکیک شده؛ طبق آخرین اعلام مقامات ارمنی، بیش از نیمی از این اقدام‌ها تا تابستان ۲۰۲۶ تکمیل شده. یک هیئت ارزیابی اتحادیه اروپا هم پاییز امسال برای بررسی میزان پیشرفت به ارمنستان سفر می‌کند.
            </p>
            <p>
              اورسولا فون‌درلاین، رئیس کمیسیون اروپا، پیشرفت ارمنستان را «چشمگیر» توصیف کرده، هرچند هیچ‌کدام از طرفین هنوز جدول زمانی قطعی برای تکمیل فرآیند اعلام نکرده‌اند. این روند به معنای لغو فوری ویزا نیست، اما نشانه‌ی روشنی از نزدیک‌تر شدن روابط ارمنستان و اروپاست که می‌تواند در سال‌های آینده سفر به شنگن را برای شهروندان ارمنی ساده‌تر کند.
            </p>
            <p className="text-xs text-foreground/50 pt-2 border-t border-white/10">
              نکته‌ی مهم برای متقاضیان ایرانی: این گفت‌وگو مربوط به شهروندان ارمنی و لغو ویزای اتحادیه اروپاست، نه تغییری مستقیم در قوانین اقامت ارمنستان برای اتباع خارجی. با این حال، نزدیک‌شدن ارمنستان به اروپا می‌تواند در بلندمدت روی فرصت‌های اقتصادی و ارزش اقامت ارمنستان اثر بگذارد. برای آخرین وضعیت دقیق قوانین اقامت، همیشه با کارشناسان گروه کاسپین هماهنگ کنید — این حوزه به‌سرعت در حال تغییر است.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center">
          <h3 className="text-lg font-bold text-foreground mb-2">
            برای برنامه‌ریزی سفر یا مشاوره‌ی اقامت آماده‌اید؟
          </h3>
          <p className="text-sm text-foreground/60 mb-4">
            گروه کاسپین برای هماهنگی سفر همزمان با فستیوال‌ها و مشاوره‌ی به‌روز اقامت و مهاجرت در کنارتان است.
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

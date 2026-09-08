'use client';
import { Music, Newspaper, CalendarDays, ArrowLeft, Info, PartyPopper } from 'lucide-react';
import Link from 'next/link';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import RelatedContent from '@/components/shared/RelatedContent.jsx';
import { useSEO } from '@/hooks/useSEO';

const concerts = [
  { date: '۵ سپتامبر ۲۰۲۶', name: 'LXST CXNTURY, Onyx, Gio Pika و همراهان', venue: 'RA Yerevan' },
  { date: '۱۰ سپتامبر ۲۰۲۶', name: 'Blockhead, Proleter, Arms and Sleepers', venue: 'Tonelab' },
  { date: '۱۲ سپتامبر ۲۰۲۶', name: 'بوریس نیکولایف', venue: 'مجتمع کارن دمیرچیان' },
  { date: '۱۳ سپتامبر ۲۰۲۶', name: '«بزرگ‌ترین عدد اول» (گروه روسی)', venue: 'Yans Music Hall' },
  { date: '۱ تا ۸ اکتبر ۲۰۲۶', name: 'های‌فست — جشنواره‌ی بین‌المللی هنرهای نمایشی', venue: 'سالن‌های مختلف ایروان' },
  { date: '۱۱ اکتبر ۲۰۲۶', name: 'جشن اربونی-ایروان با موسیقی زنده و اجرای پایانی', venue: 'میدان جمهوری' },
  { date: '۱۰ اکتبر ۲۰۲۶', name: 'Дурной Вкус (گروه روسی)', venue: 'Muha Bar' },
];


const upcomingFestivals = [
  { id: 'gata-fest', name: 'جشنواره گاتا', date: 'سپتامبر', location: 'خاچیک، وایوتس‌دزور' },
  { id: 'independence-day', name: 'روز استقلال ارمنستان', date: '۲۱ سپتامبر', location: 'سراسر کشور' },
  { id: 'areni-wine', name: 'جشنواره شراب آرنی', date: 'اوایل اکتبر', location: 'روستای آرنی، وایوتس‌دزور' },
  { id: 'balloon-fest', name: 'جشنواره بالن هوای گرم', date: 'پاییز', location: 'ایروان، گارنی و آپاران' },
];

export default function ArmeniaFestivalsEventsNews() {
  useSEO({
    title: 'تقویم کامل فستیوال‌ها و جشن‌های ارمنستان | راهنمای ماه‌به‌ماه ۲۰۲۶',
    description: 'کامل‌ترین تقویم فستیوال‌ها و جشن‌های ارمنستان؛ از کریسمس و ترندز تا وارداوار، روزهای شراب، جشنواره گاتا، آرنی و رویدادهای فرهنگی ارمنستان به تفکیک ماه.',
    keywords: 'فستیوال ارمنستان, تقویم جشن های ارمنستان, وارداوار, ترندز, روزهای شراب ایروان, جشنواره آرنی, رویدادهای ایروان',
    path: '/blog/armenia-festivals-events-news',
  });


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

        {/* خلاصه‌ی چند فستیوال نزدیک -- تقویم کامل و همه‌ی جشن‌های سال عمداً اینجا
            تکرار نمی‌شه، چون همون محتوا کامل تو تب «فستیوال‌ها»ی /events هست؛
            نگه‌داشتن دو نسخه‌ی کامل و یکسان از تقویم رو دو تا URL جدا باعث
            محتوای تکراری و رقابت سئو با خودمون می‌شد. */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-2">
            <PartyPopper className="w-5 h-5 text-primary" /> نزدیک‌ترین فستیوال‌ها
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {upcomingFestivals.map((f) => (
              <div key={f.id} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs text-primary/70 font-semibold">{f.date}</div>
                <h3 className="font-bold text-foreground text-sm mt-1">{f.name}</h3>
                <p className="text-foreground/50 text-xs mt-1">{f.location}</p>
              </div>
            ))}
          </div>
          <Link
            href="/events"
            className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary font-semibold hover:underline"
          >
            دیدن تقویم کامل فستیوال‌های سال <ArrowLeft className="w-3.5 h-3.5" />
          </Link>
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

'use client';
import { PartyPopper, Music, Newspaper, CalendarDays, Info } from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import RelatedContent from '@/components/shared/RelatedContent.jsx';
import { useSEO } from '@/hooks/useSEO';

const festivals = [
  { month: 'خرداد – ژوئن', name: 'جشنواره باله ایروان', body: 'جشنواره‌ی بین‌المللی باله که هنرمندان ارمنی و مهمانان خارجی رو روی صحنه‌ی تئاتر اپرای ایروان کنار هم می‌آره.' },
  { month: 'خرداد – ژوئن', name: 'روزهای شراب ایروان', body: 'جشن خیابانی شراب در خیابان‌های ساریان، تومانیان و مسکوویان مرکز ایروان؛ اولین آخر هفته‌ی ژوئن، با غرفه‌های شرابی از سراسر ارمنستان و جمعیتی نزدیک ۲۰۰ هزار نفر.' },
  { month: 'تیر', name: 'وردووار (جشن آب)', body: 'قدیمی‌ترین جشن ارمنی که ریشه در آیین‌های باستانی داره؛ مردم به هم آب می‌پاشن. تاریخ دقیقش هرسال متغیره (حدود ۹۸ روز بعد از عید پاک).' },
  { month: 'تیر', name: 'جشنواره بین‌المللی فیلم زردآلوی طلایی (Golden Apricot)', body: 'مهم‌ترین جشنواره‌ی فیلم قفقاز جنوبی؛ نمایش فیلم‌های ارمنی و بین‌المللی در سینماهای ایروان با حضور کارگردان‌های مطرح.' },
  { month: 'شهریور', name: 'جشنواره کتاب ایروان', body: 'نمایشگاه و رویداد فرهنگی کتاب که هرسال دوبار (بهار و شهریور) در میدان‌های مرکزی ایروان برگزار می‌شه.' },
  { month: 'شهریور', name: 'روز استقلال ارمنستان (۲۱ سپتامبر)', body: 'رژه، کنسرت و آتش‌بازی در میدان جمهوری به مناسبت استقلال ارمنستان از شوروی در سال ۱۹۹۱.' },
  { month: 'مهر', name: 'های‌فست (HIGH FEST)', body: 'جشنواره‌ی بین‌المللی هنرهای نمایشی؛ تئاتر و اجراهای زنده از گروه‌های ارمنی و بین‌المللی در سالن‌های مختلف ایروان.' },
  { month: 'مهر', name: 'جشن اربونی-ایروان', body: 'جشن سالگرد تأسیس ایروان (یکی از قدیمی‌ترین شهرهای مسکونی جهان)؛ موسیقی زنده، اجراهای فرهنگی و جشن پایانی در میدان جمهوری.' },
  { month: 'مهر – آبان', name: 'هفته مد ایروان', body: 'رویداد مد و طراحی لباس با حضور برندهای ارمنی و منطقه‌ای.' },
  { month: 'آبان', name: 'هفته جاز پاییزی', body: 'رویدادهای جاز در سالن کنسرت خاچاطوریان و کلاب‌های خیابان آبویان؛ ترکیبی از موسیقی ارمنی (دودوک) با جاز و بداهه‌نوازی.' },
  { month: 'آبان', name: 'متال‌فرانت فست (MetalFront Fest)', body: 'تنها جشنواره‌ی راک و متال ارمنستان؛ دو روز اجرای زنده با گروه‌های ارمنی و مهمان خارجی.' },
  { month: 'آذر', name: 'جشنواره تولما (Dolma Festival)', body: 'جشن غذایی دورمه/تولمای ارمنی؛ رستوران‌ها و آشپزهای خانگی برای بهترین تولما رقابت می‌کنن.' },
  { month: 'دی', name: 'جشن سال نو', body: 'میدان جمهوری و خیابان‌های مرکزی ایروان با چراغانی، بازارچه‌های کریسمس و برنامه‌های خانوادگی تزیین می‌شن.' },
];

const concerts = [
  { date: '۵ سپتامبر ۲۰۲۶', name: 'LXST CXNTURY, Onyx, Gio Pika و همراهان', venue: 'RA Yerevan' },
  { date: '۱۰ سپتامبر ۲۰۲۶', name: 'Blockhead, Proleter, Arms and Sleepers', venue: 'Tonelab' },
  { date: '۱۲ سپتامبر ۲۰۲۶', name: 'بوریس نیکولایف', venue: 'مجتمع کارن دمیرچیان' },
  { date: '۱۳ سپتامبر ۲۰۲۶', name: '«بزرگ‌ترین عدد اول» (گروه روسی)', venue: 'Yans Music Hall' },
  { date: '۱ تا ۸ اکتبر ۲۰۲۶', name: 'های‌فست — جشنواره‌ی بین‌المللی هنرهای نمایشی', venue: 'سالن‌های مختلف ایروان' },
  { date: '۱۱ اکتبر ۲۰۲۶', name: 'جشن اربونی-ایروان با موسیقی زنده و اجرای پایانی', venue: 'میدان جمهوری' },
  { date: '۱۰ اکتبر ۲۰۲۶', name: 'Дурной Вкус (گروه روسی)', venue: 'Muha Bar' },
];

export default function ArmeniaFestivalsEventsNews() {
  useSEO({
    title: 'فستیوال‌های سالانه ارمنستان، کنسرت‌های پیش‌رو و اخبار مهاجرت | کاسپین گروپ',
    description: 'تقویم کامل فستیوال‌های سالانه ارمنستان، کنسرت‌های تا سه ماه آینده در ایروان، و آخرین اخبار روابط اروپا و ارمنستان.',
    keywords: 'فستیوال ارمنستان, رویدادهای ایروان, کنسرت ایروان, اخبار ارمنستان, ارمنستان اروپا',
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
            فستیوال‌های سالانه ارمنستان، کنسرت‌های پیش رو و اخبار مهاجرتی
          </h1>
          <p className="text-foreground/60 mt-3 text-lg">
            تقویم کامل جشن‌های سالانه، رویدادهای موسیقی تا سه ماه آینده در ایروان، و آخرین وضعیت روابط ارمنستان و اتحادیه اروپا
          </p>
          <p className="text-xs text-foreground/40 mt-2">آپدیت: شهریور ۱۴۰۵</p>
        </div>

        {/* Annual Festivals */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-2">
            <PartyPopper className="w-5 h-5 text-primary" /> تقویم کامل فستیوال‌های سالانه ارمنستان
          </h2>
          <div className="space-y-3">
            {festivals.map((f, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex gap-4">
                <div className="shrink-0 w-20 sm:w-24 text-center">
                  <span className="text-[11px] font-bold text-primary/80 bg-primary/10 px-2 py-1 rounded-full inline-block">{f.month}</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-sm mb-1">{f.name}</h3>
                  <p className="text-foreground/60 text-sm leading-6">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-foreground/40 mt-3 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 shrink-0" /> تاریخ دقیق برخی جشن‌ها (مثل وردووار که وابسته به تقویم مذهبیه) هرسال کمی جابه‌جا می‌شه؛ نزدیک به موعد با ما تماس بگیرید تا تاریخ امسال رو تأیید کنیم.
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
            <Info className="w-3.5 h-3.5 shrink-0" /> تقویم کنسرت‌های ایروان مدام آپدیت می‌شه و رویدادهای جدید هرهفته اضافه می‌شن؛ برای آخرین لیست و کمک در خرید بلیط با ما در تماس باشید.
          </p>
        </section>

        {/* Immigration & EU news */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-2">
            <Newspaper className="w-5 h-5 text-primary" /> اخبار مهاجرتی و روابط ارمنستان با اتحادیه اروپا
          </h2>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4 text-sm text-foreground/70 leading-7">
            <p>
              گفت‌وگوی لغو ویزای ارمنستان با اتحادیه اروپا در سال ۲۰۲۶ وارد فاز فعالی شده. طبق اعلام کمیسیون اروپا، ارمنستان تنها کشوری‌ست که در حال حاضر گفت‌وگوی فعال لغو ویزا با اتحادیه اروپا داره — نخستین اجلاس رسمی ارمنستان-اتحادیه اروپا در ماه مه ۲۰۲۶ در ایروان برگزار شد و گزارش پیشرفت اولیه هم همون‌جا ارائه شد.
            </p>
            <p>
              اتحادیه اروپا ۵۳ توصیه‌ی مشخص به دولت ارمنستان ارائه داده که به ۱۱۷ اقدام اجرایی تفکیک شده؛ طبق آخرین اعلام مقامات ارمنی، بیش از نیمی از این اقدام‌ها تا تابستان ۲۰۲۶ تکمیل شده. یک هیئت ارزیابی اتحادیه اروپا هم پاییز امسال برای بررسی میزان پیشرفت به ارمنستان سفر می‌کنه.
            </p>
            <p>
              اورسولا فون‌درلاین، رئیس کمیسیون اروپا، پیشرفت ارمنستان رو «چشمگیر» توصیف کرده، هرچند هیچ‌کدوم از طرفین هنوز جدول زمانی قطعی برای تکمیل فرآیند اعلام نکردن. این روند به معنای لغو فوری ویزا نیست، اما نشونه‌ی روشنی از نزدیک‌تر شدن روابط ارمنستان و اروپاست که می‌تونه در سال‌های آینده سفر به شنگن رو برای شهروندان ارمنی ساده‌تر کنه.
            </p>
            <p className="text-xs text-foreground/50 pt-2 border-t border-white/10">
              نکته‌ی مهم برای متقاضیان ایرانی: این گفت‌وگو مربوط به شهروندان ارمنی و لغو ویزای اتحادیه اروپاست، نه تغییری مستقیم در قوانین اقامت ارمنستان برای اتباع خارجی. با این حال، نزدیک‌شدن ارمنستان به اروپا می‌تونه در بلندمدت روی فرصت‌های اقتصادی و ارزش اقامت ارمنستان اثر بذاره. برای آخرین وضعیت دقیق قوانین اقامت، همیشه با کارشناسان گروه کاسپین هماهنگ کنید — این حوزه به‌سرعت در حال تغییره.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center">
          <h3 className="text-lg font-bold text-foreground mb-2">
            برای برنامه‌ریزی سفر یا مشاوره‌ی اقامت آماده‌اید؟
          </h3>
          <p className="text-sm text-foreground/60 mb-4">
            گروه کاسپین برای هماهنگی سفر همزمان با فستیوال‌ها و مشاوره‌ی به‌روز اقامت و مهاجرت در کنارتونه.
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

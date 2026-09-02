'use client';
import { MapPin, Clock } from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import BlogSidebar from '@/components/shared/BlogSidebar';
import SeoFooterLinks from '@/components/shared/SeoFooterLinks.jsx';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import RelatedContent from '@/components/shared/RelatedContent.jsx';

const sights = [
  {
    img: 'geghard-monastery', title: 'صومعه گقارد (Geghard)', distance: '۴۰ کیلومتر از ایروان',
    body: 'صومعه‌ای قرون‌وسطایی که بخشی از آن مستقیم در دل صخره تراشیده شده و در فهرست میراث جهانی یونسکو ثبت شده. معماری صخره‌ای و فضای معنوی خاصش، گقارد رو به یکی از پربازدیدترین بناهای مذهبی ارمنستان تبدیل کرده.',
  },
  {
    img: 'khor-virap', title: 'خور ویراپ (Khor Virap)', distance: '۴۵ کیلومتر از ایروان',
    body: 'صومعه‌ای روی تپه با بهترین منظره‌ی کوه آرارات (نماد ملی ارمنستان که امروز در خاک ترکیه قرار داره). گفته می‌شه گریگور روشنگر، مبلغ مسیحیت در ارمنستان، ۱۳ سال در چاهی زیر این صومعه زندانی بوده.',
  },
  {
    img: 'garni-temple', title: 'معبد گارنی (Garni)', distance: '۲۸ کیلومتر از ایروان',
    body: 'تنها بنای ستوندار یونانی-رومی باقی‌مانده در قفقاز و اتحاد جماهیر شوروی سابق. این معبد بت‌پرستی در قرن اول میلادی ساخته شده و امروز نمایی خیره‌کننده روی دره‌ای صخره‌ای داره.',
  },
  {
    img: 'lake-sevan', title: 'دریاچه سوان (Lake Sevan)', distance: '۶۰ کیلومتر از ایروان',
    body: 'یکی از بزرگ‌ترین دریاچه‌های آب شیرین کوهستانی جهان، در ارتفاع حدود ۱۹۰۰ متری. تابستان‌ها مقصد محبوب شنا و آبتنی ارمنی‌هاست و صومعه‌ی سواناوانک روی شبه‌جزیره‌اش دیدنیه.',
  },
  {
    img: 'tatev-monastery', title: 'صومعه تاتو و تله‌کابین بال‌های تاتو', distance: '۲۸۰ کیلومتر از ایروان (استان سیونیک)',
    body: 'صومعه‌ای قرن نهمی روی صخره‌ای مشرف به دره‌ی ورهاون. برای رسیدن بهش می‌تونید سوار طولانی‌ترین تله‌کابین برگشت‌پذیر جهان («بال‌های تاتو») بشید که خودش یکی از جذاب‌ترین تجربه‌های گردشگری ارمنستانه.',
  },
  {
    img: 'noravank-monastery', title: 'صومعه نوراوانک (Noravank)', distance: '۱۲۰ کیلومتر از ایروان (استان وایوتس‌ذور)',
    body: 'صومعه‌ای قرن سیزدهمی در دل دره‌ای با صخره‌های سرخ عمودی. کلیسای دوطبقه‌ی سورب آستواتساتسین با پله‌های باریک بیرونیش یکی از عکس‌یادگاری‌ترین نقاط ارمنستانه.',
  },
  {
    img: 'dilijan', title: 'دیلیجان (Dilijan)', distance: '۱۰۰ کیلومتر از ایروان (استان تاووش)',
    body: 'شهرکی جنگلی و کوهستانی که بهش «سوئیس ارمنستان» می‌گن. خانه‌های چوبی سنتی، مسیرهای پیاده‌روی در پارک ملی دیلیجان و دریاچه‌های کوچکی مثل پارز لیچ ازش مقصد محبوب طبیعت‌گردی ساخته.',
  },
  {
    img: 'echmiadzin-cathedral', title: 'کلیسای جامع اچمیادزین', distance: '۲۰ کیلومتر از ایروان (شهر واقارشاپات)',
    body: 'مرکز روحانی کلیسای رسولی ارمنستان و یکی از قدیمی‌ترین کلیساهای جهان که بنیانش به قرن چهارم میلادی برمی‌گرده. مجموعه در فهرست میراث جهانی یونسکو ثبت شده و مقر کاتولیکوس همه‌ی ارامنه‌ست.',
  },
];

export default function ArmeniaTourism() {
  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />
      <main className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">

        {/* Header */}
        <div className="mb-8">
          <span className="text-xs text-primary/70 font-semibold bg-primary/8 px-3 py-1 rounded-full">
            گردشگری و دیدنی‌ها
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-4 leading-tight">
            راهنمای کامل جاهای دیدنی ارمنستان
          </h1>
          <p className="text-foreground/60 mt-3 text-lg">
            از میدان‌ها و کاسکید ایروان تا صومعه‌های صخره‌ای و دریاچه سوان — همه‌ی جاذبه‌های اصلی ارمنستان در یک راهنما
          </p>
          <p className="text-xs text-foreground/40 mt-2">آپدیت: شهریور ۱۴۰۵</p>
        </div>

        {/* Intro */}
        <div className="p-5 rounded-2xl border border-primary/15 bg-primary/5 mb-10 text-sm text-foreground/70 leading-relaxed">
          ارمنستان با وجود مساحت کوچیکش، تراکم بالایی از جاذبه‌های تاریخی و طبیعی داره: صومعه‌های سنگی هزارساله، دره‌های صخره‌ای رنگی، دریاچه‌های کوهستانی و شهری مثل ایروان که معماری شوروی، کافه‌های مدرن و بازارهای سنتی رو کنار هم داره.
          بیشتر جاذبه‌های اصلی کشور در فاصله‌ی یک تا سه ساعت رانندگی از ایروانه، پس می‌شه با اقامت در پایتخت، هرروز یک یا دو تور روزانه به اطراف رفت.
        </div>

        {/* Yerevan spotlight */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" /> ایروان، پایتخت
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <img src="/images/tourism/yerevan-cascade.webp" alt="مجموعه کاسکید ایروان و کوه آرارات" className="w-full h-56 object-cover" loading="lazy" />
              <div className="p-5">
                <h3 className="font-bold text-foreground mb-2">مجموعه کاسکید (Cascade)</h3>
                <p className="text-foreground/60 text-sm leading-6">
                  پله‌های بزرگ سنگ‌سفید که از مرکز شهر بالا می‌رن و در طبقاتش مجسمه‌های مدرن و گالری هنری دارن. از بالای کاسکید، در روزهای صاف، منظره‌ی کامل کوه آرارات دیده می‌شه.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <img src="/images/tourism/yerevan-republic-square.webp" alt="میدان جمهوری ایروان در شب" className="w-full h-56 object-cover" loading="lazy" />
              <div className="p-5">
                <h3 className="font-bold text-foreground mb-2">میدان جمهوری (Republic Square)</h3>
                <p className="text-foreground/60 text-sm leading-6">
                  میدان اصلی و قلب تشریفاتی ایروان، با بناهای دولتی از سنگ توف صورتی. هرشب نمایش موزیکال آب‌ونور روی فواره‌های مرکزی میدان برگزار می‌شه که یکی از برنامه‌های رایگان محبوب گردشگرهاست.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Other sights grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-5">جاذبه‌های اطراف ایروان و سراسر کشور</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {sights.map((s, i) => (
              <div key={i} className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                <img src={`/images/tourism/${s.img}.webp`} alt={s.title} className="w-full h-52 object-cover" loading="lazy" />
                <div className="p-5">
                  <h3 className="font-bold text-foreground mb-1.5">{s.title}</h3>
                  <span className="inline-flex items-center gap-1 text-[11px] text-primary/70 font-semibold mb-2">
                    <Clock className="w-3 h-3" /> {s.distance}
                  </span>
                  <p className="text-foreground/60 text-sm leading-6">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center">
          <h3 className="text-lg font-bold text-foreground mb-2">
            می‌خوای یه تور کامل از این جاذبه‌ها داشته باشی؟
          </h3>
          <p className="text-sm text-foreground/60 mb-4">
            گروه کاسپین تورهای روزانه و چندروزه به این مقاصد رو با راهنمای فارسی‌زبان و رزرو هتل هماهنگ می‌کنه.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition text-sm">
            درخواست برنامه‌ی سفر
          </a>
        </div>

        </div>

          <BlogSidebar currentTags={['tourism', 'yerevan', 'sightseeing', 'armenia']} currentPath="/blog/armenia-tourism-guide" />
        </div>

        <RelatedServices currentPath="/blog/armenia-tourism-guide" />
        <SeoFooterLinks />
      </main>
    </div>
  );
}

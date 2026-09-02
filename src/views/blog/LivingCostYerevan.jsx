'use client';
import { useLang } from '@/lib/LanguageContext';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import BlogSidebar from '@/components/shared/BlogSidebar';
import SeoFooterLinks from '@/components/shared/SeoFooterLinks.jsx';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import RelatedContent from '@/components/shared/RelatedContent.jsx';

const content = {
  fa: {
    title: 'هزینه زندگی در ایروان — راهنمای کامل ایرانیان',
    subtitle: 'همه چیز درباره هزینه‌های ماهانه زندگی در ارمنستان به دلار',
    updated: 'آپدیت: شهریور ۱۴۰۴',
    sections: [
      {
        title: '🏠 اجاره خانه در ایروان',
        body: `اجاره مسکن در ایروان بسته به منطقه و امکانات بسیار متفاوت است. در مناطق مرکزی مثل کنترون، اجاره یک آپارتمان یک‌خوابه بین ۶۰۰ تا ۸۰۰ دلار در ماه است. در مناطق دورتر مثل نورک یا مالاتیا، همین آپارتمان بین ۵۰۰ تا ۷۰۰ دلار می‌شود.

آپارتمان ۲ خوابه در مرکز: ۸۰۰ تا ۱۰۰۰ دلار
آپارتمان ۲ خوابه در حومه: ۷۰۰ تا ۹۰۰ دلار
استودیو (یک اتاق): ۵۰۰ تا ۷۰۰ دلار

کاسپین گروپ با بیش از ۱۵ سال سابقه انواع آپارتمان مبله روزانه و ماهانه در بهترین مناطق ایروان دارد.`,
      },
      {
        title: '🛒 هزینه خواربار و مواد غذایی',
        body: `ایروان از نظر مواد غذایی ارزان‌تر از تهران است. یک سبد خرید هفتگی برای ۲ نفر حدود ۵۰ تا ۸۰ دلار هزینه دارد.

شیر ۱ لیتر: ۱ دلار
نان تازه: ۰.۵ دلار
مرغ ۱ کیلو: ۵ دلار
گوشت گوساله ۱ کیلو: ۱۳ دلار
برنج ۱ کیلو: ۲ دلار
میوه‌جات فصلی: ۴ تا ۷ دلار
رستوران ارزان: ۷ تا ۱۵ دلار هر نفر
رستوران متوسط: ۱۵ تا ۳۰ دلار هر نفر`,
      },
      {
        title: '🚌 حمل‌ونقل',
        body: `حمل‌ونقل عمومی در ایروان بسیار مقرون‌به‌صرفه است. مترو، اتوبوس و مینی‌بوس با قیمت‌های ارزان در دسترس هستند.

بلیط مترو یا اتوبوس: ۱۵۰ درام (کمتر از ۰.۵ دلار)
تاکسی ۵ کیلومتر: ۵ تا ۸ دلار
اتوبوس ماهانه: ۲۵ دلار
کرایه ماشین: ۲۵۰ تا ۴۰۰ دلار در ماه
بنزین: ۱.۵ دلار هر لیتر`,
      },
      {
        title: '⚡ قبوض و خدمات',
        body: `هزینه قبوض در ارمنستان معقول است. اینترنت با کیفیت خوب در دسترس است.

برق (آپارتمان ۸۰ متری): ۵۰ تا ۷۰ دلار — در زمستان ۲۰ درصد افزایش بسته به مصرف
گاز: ۳۰ تا ۵۰ دلار
آب: ۳ تا ۱۰ دلار
اینترنت پرسرعت: ۱۵ تا ۲۵ دلار
بیمه درمانی پایه: ۳۰ تا ۸۰ دلار`,
      },
      {
        title: '📊 جمع‌بندی هزینه ماهانه',
        body: `جمع‌بندی هزینه ماهانه برای یک نفر در ایروان (با احتساب اجاره):

زندگی اقتصادی: ۱۰۰۰ تا ۱۴۰۰ دلار
زندگی متوسط: ۱۵۰۰ تا ۲۰۰۰ دلار
زندگی راحت: ۲۵۰۰ تا ۳۵۰۰ دلار

برای ۲ نفر، هزینه‌ها حدود ۶۰ تا ۷۰ درصد بالاتر می‌شود (نه دو برابر).

نرخ تبدیل: ۱ دلار ≈ ۳۶۵ درام ارمنی (AMD) — در صرافی‌های ایروان بهترین نرخ را می‌توانید بگیرید.`,
      },
    ],
  },
};

export default function LivingCostYerevan() {
  const { lang } = useLang();
  const t = content.fa; // فعلاً فقط فارسی

  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />
      <main className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">

        {/* Header */}
        <div className="mb-10">
          <span className="text-xs text-primary/70 font-semibold bg-primary/8 px-3 py-1 rounded-full">
            راهنمای مهاجرت
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-4 leading-tight">
            {t.title}
          </h1>
          <p className="text-foreground/60 mt-3 text-lg">{t.subtitle}</p>
          <p className="text-xs text-foreground/40 mt-2">{t.updated}</p>
        </div>

        {/* Intro */}
        <div className="p-4 rounded-2xl border border-primary/15 bg-primary/5 mb-8 text-sm text-foreground/70 leading-relaxed">
          ارمنستان در سال‌های اخیر به یکی از محبوب‌ترین مقصدهای مهاجرتی ایرانیان تبدیل شده. هزینه زندگی در ایروان نسبت به کشورهای اروپایی بسیار پایین‌تر و نسبت به ایران معقول است. در این راهنما همه هزینه‌های اصلی را با قیمت‌های واقعی سال ۱۴۰۴ بررسی می‌کنیم.
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {t.sections.map((section, i) => (
            <article key={i} className="border-r-2 border-primary/30 pr-5">
              <h2 className="text-xl font-bold text-foreground mb-3">{section.title}</h2>
              <div className="text-foreground/70 leading-8 whitespace-pre-line text-sm sm:text-base">
                {section.body}
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center">
          <h3 className="text-lg font-bold text-foreground mb-2">
            برای اقامت در ایروان آماده‌اید؟
          </h3>
          <p className="text-sm text-foreground/60 mb-4">
            کاسپین گروپ با تجربه بیش از ۵ سال در ارمنستان، خدمات اجاره آپارتمان، ثبت شرکت و مشاوره مهاجرت ارائه می‌دهد.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition text-sm">
            مشاوره رایگان بگیرید
          </a>
        </div>

        </div>

          <BlogSidebar currentTags={['yerevan', 'cost-of-living', 'residency', 'life']} currentPath="/blog/living-cost-yerevan" />
        </div>

        <RelatedServices currentPath="/blog/living-cost-yerevan" />
        <SeoFooterLinks />
      </main>
    </div>
  );
}

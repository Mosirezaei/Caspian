\'use client\';
import { Home, Calendar, MapPin } from \'lucide-react\';
import GlobalNavbar from \'@/components/shared/GlobalNavbar.jsx\';
import PageSidebar from \'@/components/shared/PageSidebar\';
import RelatedServices from \'@/components/shared/RelatedServices.jsx\';
import RelatedContent from \'@/components/shared/RelatedContent.jsx\';
import { useSEO } from \'@/hooks/useSEO\';

export default function ApartmentRentalYerevanGuide() {
  useSEO({
    title: \'اجاره آپارتمان در ایروان: راهنمای قیمت، مدت اقامت و انواع مسکن | کاسپین گروپ\',
    description: \'کوتاه‌مدت یا بلندمدت، آپارتمان یا خانه ویلایی؛ بازه قیمت اجاره، ودیعه و هزینه‌های جانبی در ایروان را با توضیح کامل کاسپین گروپ ببینید.\',
    keywords: \'اجاره آپارتمان ایروان, اجاره خانه ارمنستان, قیمت اجاره ایروان, اجاره روزانه ایروان, اجاره ماهانه ایروان\',
    path: \'/blog/apartment-rental-yerevan-guide\',
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
            زندگی در ایروان
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-4 leading-tight">
            اجاره آپارتمان در ایروان: راهنمای قیمت، مدت اقامت و انواع مسکن
          </h1>
          <p className="text-foreground/60 mt-3 text-lg">
            انتخاب مدت اقامت و محله، پیش از هر جست‌وجویی، هزینه نهایی شما را تعیین می‌کند
          </p>
          <p className="text-xs text-foreground/40 mt-2">آپدیت: شهریور ۱۴۰۵</p>
        </div>

        {/* Hero image */}
        <div className="rounded-2xl overflow-hidden mb-8">
          <img src="https://images.unsplash.com/photo-1730569000295-49a648e4f1e3?w=1200&q=80" alt="ساختمان مسکونی در ایروان" className="w-full h-56 sm:h-72 object-cover" loading="lazy" />
        </div>

        {/* Intro */}
        <div className="p-5 rounded-2xl border border-primary/15 bg-primary/5 mb-10 text-sm text-foreground/70 leading-relaxed">
          اگر برای سفر، تحصیل، کار یا مهاجرت به ارمنستان می‌روید، اولین تصمیمی که باید بگیرید مدت اقامت و محله است، نه رنگ و امکانات آپارتمان. در ایروان، مرکز شهر دسترسی و امکانات بیشتری دارد، در حالی که عربکیر، کومیتاس و محله‌های دورتر گزینه‌های متعادل‌تری برای بودجه‌های محدود‌ هستند. در این راهنما، تجربه‌ی کاسپین گروپ از کار روزانه با مستأجران ایرانی در ایروان را با شما در میان می‌گذاریم: بازه‌های قیمت واقعی، تفاوت اجاره کوتاه‌مدت و بلندمدت، و نکاتی که پیش از امضای قرارداد باید بدانید.
        </div>

        {/* Section 1: short vs long term */}
        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <Calendar className="w-5 h-5" /> اجاره کوتاه‌مدت یا بلندمدت؛ کدام انتخاب مناسب شماست؟
          </h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>برای سفر و ورود اولیه، اجاره روزانه انعطاف بیشتری دارد؛ برای کار، تحصیل و مهاجرت، اجاره ماهانه یا سالانه هزینه و ثبات بیشتری برایتان می‌سازد. مدت اقامت، تعداد افراد و نیاز شما به مبلمان، آشپزخانه و خدمات ساختمان، انتخاب مناسب را مشخص می‌کند.</p>
            <p><strong className="text-foreground/85">اجاره روزانه</strong> — برای چند شب نخست، سفر کاری یا اقامت پیش از پیدا کردن خانه بلندمدت کاربردی است. معمولاً واحد مبله، وسایل آشپزخانه و اینترنت در اختیارتان قرار می‌گیرد و هزینه‌هایی مانند شارژ یا قبوض در مبلغ اعلامی لحاظ می‌شود، هرچند بهتر است این موضوع را پیش از رزرو کتبی تأیید کنید. برای سفر گروهی، آپارتمان می‌تواند فضای بیشتری از اتاق هتل در اختیارتان بگذارد.</p>
            <p><strong className="text-foreground/85">اجاره ماهانه و سالانه</strong> — اگر قرار است چند ماه در ایروان بمانید، قرارداد مکتوب هزینه قابل‌کنترل‌تری ایجاد می‌کند. قرارداد سالانه برای درآمد ثابت یا تحصیل طولانی مناسب است؛ قرارداد ماهانه برای دوره آزمایشی، جابه‌جایی شغلی یا بررسی محله انعطاف بیشتری دارد. از ابتدا درباره امکان تمدید، افزایش اجاره، تعمیرات، تعداد ساکنان و شرایط فسخ توافق کنید.</p>
          </div>
        </section>

        {/* Section 2: villa */}
        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <Home className="w-5 h-5" /> چه زمانی خانه ویلایی انتخاب بهتری است؟
          </h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>خانه ویلایی زمانی گزینه مناسبی است که حریم خصوصی، فضای باز، تعداد اتاق بیشتر یا سکونت خانوادگی برایتان اولویت داشته باشد. برای یک یا دو نفر در مرکز ایروان، هزینه نگهداری و فاصله رفت‌وآمد خانه ویلایی معمولاً با نیاز واقعی همخوانی ندارد.</p>
            <p>در بازدید، وضعیت گرمایش، فشار آب، امنیت ورودی، مسیر دسترسی زمستانی، فضای پارک و مسئولیت نگهداری حیاط را بررسی کنید — این موارد در قراردادهای ویلایی بیشتر از آپارتمان محل اختلاف می‌شوند.</p>
          </div>
        </section>

        {/* Section 3: price table */}
        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <MapPin className="w-5 h-5" /> قیمت اجاره در ایروان چقدر است؟
          </h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>در سال ۱۴۰۵، اجاره آپارتمان در ایروان به محله، سن ساختمان، مبله بودن، کیفیت گرمایش و فاصله تا مرکز بستگی دارد. برای یک آپارتمان یک‌خوابه در مناطق متوسط شهر، بازه ماهانه معمولاً بین ۳۵۰ تا ۵۵۰ دلار است؛ در مرکز ایروان (کِنترون)، همین واحد یک‌خوابه معمولاً بین ۲۵۰ تا ۴۵۰ هزار درام در ماه اجاره داده می‌شود. این ارقام بازه‌ی تصمیم اولیه‌اند، نه قیمت قطعی بازار — ارز، فصل، کیفیت واحد و مدت قرارداد را همیشه کنار قیمت بررسی کنید.</p>
          </div>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-right border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-foreground/50">
                  <th className="py-2 pr-2 font-semibold">نوع آپارتمان</th>
                  <th className="py-2 px-2 font-semibold">برآورد ماهانه</th>
                  <th className="py-2 pl-2 font-semibold">عامل افزایش قیمت</th>
                </tr>
              </thead>
              <tbody className="text-foreground/70">
                <tr className="border-b border-white/5">
                  <td className="py-2 pr-2">یک‌خوابه</td>
                  <td className="py-2 px-2">۳۵۰ تا ۵۵۰ دلار</td>
                  <td className="py-2 pl-2">مرکز، نوساز، مبله</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 pr-2">دوخوابه</td>
                  <td className="py-2 px-2">متغیر بر اساس محله و امکانات</td>
                  <td className="py-2 pl-2">آسانسور، پارکینگ، متراژ</td>
                </tr>
                <tr>
                  <td className="py-2 pr-2">سه‌خوابه</td>
                  <td className="py-2 px-2">متغیر و وابسته به عرضه</td>
                  <td className="py-2 pl-2">ساختمان مناسب خانواده</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: deposit and cost factors */}
        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3">ودیعه و عوامل مؤثر بر اجاره</h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>آپارتمان مبله، ساختمان نوساز، طبقه مناسب، آسانسور، گرمایش مستقل و پارکینگ مبلغ اجاره را افزایش می‌دهند. در مقابل، فاصله از مرکز یا ساختمان قدیمی‌تر معمولاً قیمت پایین‌تری دارد، هرچند کیفیت عایق، آب گرم و تأسیسات را باید حضوری بسنجید.</p>
            <p>ودیعه در ایروان معمولاً حدود یک تا دو ماه اجاره است. مبلغ دقیق، زمان بازگشت و کسرهای مجاز را در قرارداد بنویسید. هزینه اینترنت را هم جداگانه محاسبه کنید — بسته‌های خانگی معمول در ایروان حدود ۱۵ تا ۳۰ دلار در ماه هستند، هرچند اپراتور، سرعت و مدت قرارداد روی رقم اثر می‌گذارد.</p>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-4 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center">
          <h3 className="text-lg font-bold text-foreground mb-2">
            دنبال آپارتمان مطمئن در ایروان می‌گردید؟
          </h3>
          <p className="text-sm text-foreground/60 mb-4">
            کاسپین گروپ آپارتمان مبله روزانه و ماهانه در بهترین مناطق ایروان دارد و در تمام مراحل بازدید و قرارداد کنار شماست.
          </p>
          <a href="https://wa.me/37433149327" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition text-sm">
            مشاوره رایگان بگیرید
          </a>
        </div>

        </div>

          <PageSidebar tags={[\'yerevan\', \'apartment\', \'rent\', \'life\', \'residency\']} currentPath="/blog/apartment-rental-yerevan-guide" />
        </div>

        <RelatedServices currentPath="/blog/apartment-rental-yerevan-guide" />
      </main>
    </div>
  );
}

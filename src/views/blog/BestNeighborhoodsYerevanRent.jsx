\'use client\';
import { MapPin, Wallet, Star } from \'lucide-react\';
import GlobalNavbar from \'@/components/shared/GlobalNavbar.jsx\';
import PageSidebar from \'@/components/shared/PageSidebar\';
import RelatedServices from \'@/components/shared/RelatedServices.jsx\';
import RelatedContent from \'@/components/shared/RelatedContent.jsx\';
import { useSEO } from \'@/hooks/useSEO\';

const neighborhoods = [
  {
    img: \'/images/tourism/yerevan-republic-square.webp\',
    title: \'کِنترون؛ دسترسی مرکزی و هزینه بالاتر\',
    body: \'کِنترون برای شما مناسب است اگر محل کار، دانشگاه، جاذبه‌های شهری یا رفت‌وآمد بدون خودروی شخصی در مرکز قرار دارد. اجاره در این محدوده به دلیل دسترسی، تقاضا و نزدیکی به خدمات، فشار بیشتری بر بودجه ایجاد می‌کند. در بازدید، صدای خیابان، وضعیت آسانسور، پارکینگ، گرمایش و فاصله واقعی تا ایستگاه حمل‌ونقل را بررسی کنید — عکس‌های آگهی در ساختمان‌های قدیمی همیشه وضعیت راه‌پله و مشاعات را نشان نمی‌دهند.\',
  },
  {
    img: \'/images/company/yerevan-city-center.webp\',
    title: \'عربکیر و کومیتاس؛ انتخاب متعادل برای زندگی روزمره\',
    body: \'عربکیر و محدوده کومیتاس گزینه‌ای متعادل میان دسترسی، خدمات محلی و هزینه اجاره فراهم می‌کنند. فروشگاه، مدرسه، درمانگاه و مسیرهای اتوبوس در تصمیم خانواده‌ها اهمیت دارد و باید در ساعات رفت‌وآمد بررسی شود. در این محله‌ها تفاوت میان خیابان اصلی و کوچه‌های داخلی محسوس است؛ هنگام بازدید، مسیر پیاده تا خرید روزانه، شیب خیابان، نورگیری و کیفیت گرمایش را یادداشت کنید.\',
  },
  {
    img: \'https://images.unsplash.com/photo-1730569000295-49a648e4f1e3?w=1200&q=80\',
    title: \'داوتاشن، آجاپنیاک و مالاتیا-سباستیا برای بودجه اقتصادی‌تر\',
    body: \'این سه محله برای شما مناسب‌تر هستند اگر فضای بزرگ‌تر یا اجاره پایین‌تر را به فاصله کمتر از مرکز ترجیح می‌دهید. هزینه رفت‌وآمد، زمان مسیر و دسترسی شبانه را هم به اجاره ماهانه اضافه کنید. در ساختمان‌های اقتصادی، سن بنا، کیفیت پنجره‌ها، فشار آب و سیستم گرمایش اهمیت بیشتری پیدا می‌کند؛ نوع ساختمان روی آسانسور، نور، گرمایش و کیفیت زندگی روزمره اثر مستقیم دارد.\',
  },
  {
    img: \'/images/tourism/yerevan-cascade.webp\',
    title: \'اقامت لوکس در محدوده کاسکاد\',
    body: \'اقامت کنار کاسکاد زمانی برایتان توجیه دارد که طراحی داخلی، منظره، دسترسی فرهنگی و خدمات ساختمان در اولویت باشد. این محدوده را با مرکز شهر از نظر فاصله مقایسه کنید، چون نام کاسکاد به‌تنهایی کیفیت همه واحدها را تضمین نمی‌کند. آسانسور، پارکینگ، نگهبانی، صدای رستوران‌ها، هزینه شارژ و شرایط نظافت را پیش از امضا بپرسید؛ واحدهای لوکس معمولاً مبله‌اند، ولی فهرست وسایل و مسئولیت تعمیر تجهیزات باید دقیقاً در قرارداد درج شود.\',
  },
];

export default function BestNeighborhoodsYerevanRent() {
  useSEO({
    title: \'بهترین محله‌های ایروان برای اجاره: کِنترون، عربکیر، کومیتاس و گزینه‌های اقتصادی | کاسپین گروپ\',
    description: \'مقایسه محله‌های ایروان برای اجاره خانه — دسترسی، هزینه و کیفیت زندگی در کِنترون، عربکیر، کومیتاس، داوتاشن و کاسکاد.\',
    keywords: \'محله‌های ایروان, بهترین محله اجاره ایروان, کِنترون, عربکیر, کومیتاس, کاسکاد ایروان\',
    path: \'/blog/best-neighborhoods-yerevan-rent\',
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
            بهترین محله‌های ایروان برای اجاره: کِنترون، عربکیر، کومیتاس و گزینه‌های اقتصادی
          </h1>
          <p className="text-foreground/60 mt-3 text-lg">
            انتخاب محله باید بر پایه مسیر روزانه، کیفیت ساختمان و بودجه کل باشد، نه نام محله به‌تنهایی
          </p>
          <p className="text-xs text-foreground/40 mt-2">آپدیت: شهریور ۱۴۰۵</p>
        </div>

        {/* Hero */}
        <div className="rounded-2xl overflow-hidden mb-8">
          <img src="/images/tourism/yerevan-republic-square.webp" alt="میدان جمهوری، کِنترون ایروان" className="w-full h-56 sm:h-72 object-cover" loading="lazy" />
        </div>

        {/* Intro */}
        <div className="p-5 rounded-2xl border border-primary/15 bg-primary/5 mb-10 text-sm text-foreground/70 leading-relaxed">
          کِنترون برای دسترسی مرکزی، عربکیر و کومیتاس برای تعادل میان رفت‌وآمد و زندگی روزمره، و داوتاشن، آجاپنیاک و مالاتیا-سباستیا برای بودجه اقتصادی‌تر مناسب‌تر هستند. در این راهنما هر محله را از نگاه کسی که سال‌هاست با مستأجران ایرانی در ایروان کار می‌کند بررسی می‌کنیم تا انتخابتان را بر پایه‌ی مسیر روزانه واقعی، کیفیت ساختمان و بودجه کل انجام دهید.
        </div>

        {/* Neighborhood sections */}
        <div className="space-y-6 mb-10">
          {neighborhoods.map((n, i) => (
            <section key={i} className="glass-panel rounded-2xl overflow-hidden">
              <img src={n.img} alt={n.title} className="w-full h-48 sm:h-56 object-cover" loading="lazy" />
              <div className="p-6">
                <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5" /> {n.title}
                </h2>
                <p className="text-sm text-foreground/70 leading-7">{n.body}</p>
              </div>
            </section>
          ))}
        </div>

        {/* Decision summary */}
        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <Wallet className="w-5 h-5" /> جمع‌بندی: کدام محله برای شما مناسب‌تر است؟
          </h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-2">
            <p>اگر اجاره آپارتمان را برای چند ماه می‌خواهید، عربکیر و کومیتاس را با کِنترون از نظر زمان رفت‌وآمد، امکانات و مبلغ مقایسه کنید. برای بودجه محدود، داوتاشن، آجاپنیاک و مالاتیا-سباستیا را بررسی کنید و هزینه رفت‌وآمد را به اجاره ماهانه اضافه کنید. اگر قصد سفرهای آخر هفته به دریاچه سوان یا مناطق اطراف را دارید، دسترسی به مسیر خروجی شهر را هم در انتخاب محله لحاظ کنید.</p>
          </div>
        </section>

        {/* CTA */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center">
          <h3 className="text-lg font-bold text-foreground mb-2">
            <Star className="w-4 h-4 inline-block ml-1 text-primary" />
            نمی‌دونید کدوم محله رو انتخاب کنید؟
          </h3>
          <p className="text-sm text-foreground/60 mb-4">
            کاسپین گروپ بر اساس بودجه، تعداد افراد و مدت اقامت شما، محله و آپارتمان مناسب رو پیشنهاد می‌ده و بازدید رو هماهنگ می‌کنه.
          </p>
          <a href="https://wa.me/37433149327" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition text-sm">
            مشاوره رایگان بگیرید
          </a>
        </div>

        </div>

          <PageSidebar tags={[\'yerevan\', \'neighborhoods\', \'apartment\', \'life\', \'kentron\']} currentPath="/blog/best-neighborhoods-yerevan-rent" />
        </div>

        <RelatedServices currentPath="/blog/best-neighborhoods-yerevan-rent" />
      </main>
    </div>
  );
}

\'use client\';
import { FileCheck2, ShieldAlert, Receipt, Camera } from \'lucide-react\';
import GlobalNavbar from \'@/components/shared/GlobalNavbar.jsx\';
import PageSidebar from \'@/components/shared/PageSidebar\';
import RelatedServices from \'@/components/shared/RelatedServices.jsx\';
import RelatedContent from \'@/components/shared/RelatedContent.jsx\';
import { useSEO } from \'@/hooks/useSEO\';

export default function RentalContractArmeniaGuide() {
  useSEO({
    title: \'قرارداد اجاره خانه در ارمنستان: مدارک، ودیعه و نکاتی که باید قبل از امضا بدانید | کاسپین گروپ\',
    description: \'از پیدا کردن آگهی معتبر تا تحویل کلید؛ مدارک لازم، بندهای ضروری قرارداد، هزینه‌های جانبی و نشانه‌های آگهی مشکوک در اجاره خانه ارمنستان.\',
    keywords: \'قرارداد اجاره ارمنستان, مدارک اجاره خانه ایروان, ودیعه اجاره ایروان, نکات اجاره خانه ارمنستان, کلاهبرداری اجاره ایروان\',
    path: \'/blog/rental-contract-armenia-guide\',
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
            قرارداد اجاره خانه در ارمنستان: مدارک، ودیعه و نکاتی که باید قبل از امضا بدانید
          </h1>
          <p className="text-foreground/60 mt-3 text-lg">
            از جست‌وجوی آگهی معتبر تا صورتجلسه تحویل کلید — مرحله‌به‌مرحله و بدون ریسک
          </p>
          <p className="text-xs text-foreground/40 mt-2">آپدیت: شهریور ۱۴۰۵</p>
        </div>

        {/* Hero */}
        <div className="rounded-2xl overflow-hidden mb-8">
          <img src="https://images.unsplash.com/photo-1722487631997-cf1e0f92c2c4?w=1200&q=80" alt="تحویل کلید خانه پس از امضای قرارداد اجاره" className="w-full h-56 sm:h-72 object-cover" loading="lazy" />
        </div>

        {/* Intro */}
        <div className="p-5 rounded-2xl border border-primary/15 bg-primary/5 mb-10 text-sm text-foreground/70 leading-relaxed">
          اجاره خانه در ارمنستان را با جست‌وجوی چندمنبعی، بازدید حضوری، احراز مالکیت، قرارداد روشن و صورتجلسه تحویل پیش ببرید. هیچ مبلغی را صرفاً بر پایه عکس، پیام‌رسان یا وعده واسطه پرداخت نکنید. در ادامه، مراحلی که به مستأجران ایرانی توصیه می‌کنیم را به‌ترتیب توضیح می‌دهیم.
        </div>

        {/* Section 1: finding listing */}
        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <FileCheck2 className="w-5 h-5" /> چگونه آگهی معتبر و آژانس قابل‌اعتماد پیدا کنیم؟
          </h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>جست‌وجو را با چند کلیدواژه فارسی، ارمنی و انگلیسی انجام دهید و آدرس، متراژ، طبقه، امکانات و مبلغ را در یک جدول شخصی ثبت کنید. نام کامل مالک یا شرکت، نشانی دفتر، شماره تماس ثابت یا قابل پیگیری و شیوه محاسبه کمیسیون را بخواهید. اگر آگهی چند بار با قیمت‌های متفاوت منتشر شده، دلیل تغییر را بپرسید و اطلاعات را با سند مالکیت یا نمایندگی قانونی تطبیق دهید.</p>
          </div>
        </section>

        {/* Section 2: viewing checklist */}
        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <Camera className="w-5 h-5" /> در بازدید آپارتمان چه مواردی را بررسی کنیم؟
          </h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>شیرهای آب، آب گرم، فشار گاز، رادیاتورها، کولر، پنجره‌ها، قفل‌ها و لوازم برقی را امتحان کنید. صدای همسایه و خیابان، بوی رطوبت، وضعیت مشاعات، آسانسور و پارکینگ را در ساعات مختلف بسنجید. از کنتورهای آب و برق عکس بگیرید و شماره قرائت را ثبت کنید. اگر پارکینگ وجود دارد، شماره جایگاه و اختصاصی یا مشاع بودن آن را در قرارداد بنویسید.</p>
          </div>
        </section>

        {/* Section 3: documents & payment */}
        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3">مدارک لازم، ودیعه و شیوه پرداخت</h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>مشخصات هویتی خود را مطابق مدرک معتبر ارائه کنید و از مالک، مدرک مالکیت یا اختیار قانونی اجاره‌دادن را بخواهید ببینید. در صورت حضور نماینده، وکالت‌نامه و حدود اختیار او را بررسی کنید. مبلغ اجاره، ودیعه، تاریخ سررسید، ارز پرداخت، حساب دریافت‌کننده و شرایط بازگشت ودیعه را مکتوب کنید. انتقال وجه را فقط پس از توافق نهایی، امضای قرارداد و دریافت رسید انجام دهید و تصویر رسید را نزد خود نگه دارید.</p>
          </div>
        </section>

        {/* Section 4: contract clauses */}
        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3">قرارداد اجاره باید چه بندهایی داشته باشد؟</h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>قرارداد باید مشخصات کامل طرفین، نشانی دقیق آپارتمان، مدت، مبلغ، ودیعه، زمان پرداخت، وضعیت قبوض و مسئولیت تعمیرات را شامل شود. شرایط فسخ، تمدید، ورود مالک، استفاده از پارکینگ، نگهداری حیوان خانگی و تعداد ساکنان را نیز روشن کنید. فهرست وسایل، وضعیت هر وسیله، تعداد کلیدها، شماره کنتورها و ایرادهای موجود را به قرارداد پیوست کنید.</p>
          </div>
        </section>

        {/* Section 5: costs */}
        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <Receipt className="w-5 h-5" /> هزینه‌های جانبی: قبوض، شارژ و کمیسیون آژانس
          </h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>بپرسید آب، برق و گاز بر اساس کنتور مستقل محاسبه می‌شوند یا سهمی از قبض ساختمان به شما تعلق می‌گیرد. مبلغ شارژ، خدمات مشاعات، نظافت، نگهبانی و تعمیرات مشترک باید مشخص باشد. کمیسیون آژانس را پیش از بازدید یا رزرو، به‌صورت مبلغ یا درصد و همراه با مالیات احتمالی بپرسید و پرداختش را در برابر رسیدی انجام دهید که نام دریافت‌کننده، تاریخ، مبلغ و علت پرداخت را نشان دهد. برای ودیعه، اجاره نخست و کمیسیون، رسیدهای جداگانه بگیرید.</p>
          </div>
        </section>

        {/* Section 6: red flags */}
        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5" /> نشانه‌های آگهی یا درخواست پرداخت مشکوک
          </h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>قیمت بسیار پایین همراه با فشار برای انتقال وجه، امتناع از بازدید حضوری، آدرس ناقص، مالک غایب و قرارداد مبهم نشانه‌های هشدار هستند. عکس‌های تکراری یا پاسخ‌های متفاوت درباره پارکینگ، ودیعه و مدت اجاره نیز نیاز به بررسی بیشتر دارند. برای رزرو، فقط مبلغی را بپردازید که شرایط بازگشت آن مکتوب شده باشد.</p>
            <p>هنگام تخلیه، از تمام اتاق‌ها، وسایل برقی، مبلمان، دیوارها، کف، پنجره‌ها و کنتورها عکس تاریخ‌دار بگیرید و ایرادهای کوچک را در صورتجلسه تحویل بنویسید تا هنگام تخلیه به شما نسبت داده نشود. تاریخ و روش بازگشت ودیعه، شرایط کسر هزینه تعمیر و شیوه محاسبه قبوض نهایی را از ابتدا در قرارداد تعیین کنید.</p>
          </div>
        </section>

        {/* CTA */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center">
          <h3 className="text-lg font-bold text-foreground mb-2">
            نگران قرارداد یا زبان اداری ارمنی هستید؟
          </h3>
          <p className="text-sm text-foreground/60 mb-4">
            کاسپین گروپ در بازدید، ترجمه و بررسی قرارداد اجاره همراه شماست تا بدون ریسک، کلید خانه‌تان را تحویل بگیرید.
          </p>
          <a href="https://wa.me/37433149327" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition text-sm">
            مشاوره رایگان بگیرید
          </a>
        </div>

        </div>

          <PageSidebar tags={[\'yerevan\', \'contract\', \'deposit\', \'life\', \'rent\']} currentPath="/blog/rental-contract-armenia-guide" />
        </div>

        <RelatedServices currentPath="/blog/rental-contract-armenia-guide" />
      </main>
    </div>
  );
}

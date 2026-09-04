'use client';
import { Sun, Snowflake, Leaf, Flower2, Gift, Thermometer } from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';

export default function BestTimeVisitArmenia() {
  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />
      <main className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
        <section className="mb-8">
          <span className="text-xs text-primary/70 font-semibold bg-primary/8 px-3 py-1 rounded-full">گردشگری و دیدنی\u200cها</span>
          <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-4 leading-tight">بهترین زمان سفر به ارمنستان و سوغاتی\u200cهای ارمنی</h1>
          <p className="text-foreground/60 mt-3 text-lg">راهنمای فصل\u200cبه\u200cفصل آب\u200cوهوا + بهترین سوغاتی\u200cها</p>
        </section>

        <div className="relative rounded-2xl overflow-hidden mb-6 h-48 sm:h-64">
          <img src="/images/tourism/noravank-monastery.webp" alt="صومعه نوراوانک" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <h2 className="text-xl font-black text-primary mb-4 flex items-center gap-2"><Thermometer className="w-5 h-5" /> آب\u200cوهوای ارمنستان فصل\u200cبه\u200cفصل</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-5 rounded-2xl bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/20">
            <div className="flex items-center gap-2 mb-2"><Flower2 className="w-5 h-5 text-pink-400" /><h3 className="font-bold text-foreground">بهار (آوریل–ژوئن)</h3></div>
            <div className="text-primary font-bold mb-1">۱۵ تا ۲۵ درجه</div>
            <p className="text-xs text-foreground/60 leading-6">بهترین فصل سفر. هوا عالیه، طبیعت سبز شده، دیدنی\u200cها خلوت\u200cتره. عید نوروز (اوایل فروردین) برای ایرانیان زمان محبوبیه. فستیوال روزهای شراب ایروان تو ژوئن برگزار می\u200cشه.</p>
          </div>
          <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20">
            <div className="flex items-center gap-2 mb-2"><Sun className="w-5 h-5 text-amber-400" /><h3 className="font-bold text-foreground">تابستان (ژوئیه–سپتامبر)</h3></div>
            <div className="text-primary font-bold mb-1">۲۸ تا ۳۸ درجه</div>
            <p className="text-xs text-foreground/60 leading-6">گرم ولی خشک. دریاچه سوان عالیه برای شنا. فستیوال\u200cهای زردآلوی طلایی و وردووار تو این فصله. شلوغ\u200cترین و گران\u200cترین فصل برای اجاره و هتل.</p>
          </div>
          <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20">
            <div className="flex items-center gap-2 mb-2"><Leaf className="w-5 h-5 text-orange-400" /><h3 className="font-bold text-foreground">پاییز (اکتبر–نوامبر)</h3></div>
            <div className="text-primary font-bold mb-1">۵ تا ۲۰ درجه</div>
            <p className="text-xs text-foreground/60 leading-6">رنگ\u200cهای پاییزی خیره\u200cکننده\u200cست، به\u200cخصوص تو دیلیجان و تاتو. قیمت هتل و آپارتمان پایین\u200cتره. جشنواره تولما (دورمه) و هفته جاز پاییزی تو این فصله.</p>
          </div>
          <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20">
            <div className="flex items-center gap-2 mb-2"><Snowflake className="w-5 h-5 text-cyan-400" /><h3 className="font-bold text-foreground">زمستان (دسامبر–مارس)</h3></div>
            <div className="text-primary font-bold mb-1">-۱۰ تا ۵ درجه</div>
            <p className="text-xs text-foreground/60 leading-6">سرد و برفی. مناسب اسکی تو تزاخکادزور. کریسمس ارمنی ۶ ژانویه جشن بزرگیه. ارزان\u200cترین فصل برای اقامت ولی بعضی جاذبه\u200cها (مثل گارنی و گغارد) سخت\u200cتر قابل\u200cدسترسه.</p>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden mb-6">
          <img src="/images/tourism/lake-sevan.webp" alt="دریاچه سوان ارمنستان" className="w-full h-48 object-cover" loading="lazy" />
          <p className="text-xs text-foreground/40 text-center py-2">دریاچه سوان — محبوب\u200cترین مقصد تابستانی</p>
        </div>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-4 flex items-center gap-2"><Gift className="w-5 h-5" /> بهترین سوغاتی\u200cهای ارمنستان</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-foreground/70">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold text-foreground mb-1">\ud83c\udf6b شکلات و شیرینی</h4>
              <p className="text-xs text-foreground/60">شکلات Grand Candy (برند ملی)، باقلوای ارمنی، گاتا (نان شیرین سنتی) و چرچخلا (سوجوخ — آجیل با آب انگور)</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold text-foreground mb-1">\ud83c\udf77 شراب و کنیاک</h4>
              <p className="text-xs text-foreground/60">کنیاک آرارات (نماد ملی)، شراب\u200cهای محلی از انگور ارنی نوآر. از فروشگاه\u200cهای معتبر بخرید نه بازار سیاه.</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold text-foreground mb-1">\ud83c\udfa8 صنایع\u200cدستی</h4>
              <p className="text-xs text-foreground/60">سنگ ابسیدیان (سنگ آتشفشانی سیاه)، فرش ارمنی دست\u200cبافت، سرامیک نقاشی\u200cشده و صلیب\u200cهای حکاکی\u200cشده (خاچکار مینیاتوری)</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold text-foreground mb-1">\ud83c\udf3f خوراکی و ادویه</h4>
              <p className="text-xs text-foreground/60">زردآلوی خشک ارمنی (بهترین دنیا!)، عسل کوهی، لواشک ارمنی، قهوه ارمنی و چای\u200cهای کوهی</p>
            </div>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-black text-primary mb-3">\u26a0\ufe0f نکات مهم گمرکی</h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-2">
            <p>\u2714 شراب و کنیاک: حداکثر ۳ لیتر مجاز برای خروج از ارمنستان (بسته\u200cبندی اصلی الزامیه)</p>
            <p>\u2714 آثار تاریخی و عتیقه: خروج آثار بالای ۱۰۰ سال بدون مجوز وزارت فرهنگ ممنوعه</p>
            <p>\u2714 خاویار: ورود خاویار ارمنی به ایران محدودیت گمرکی داره — از قبل بررسی کنید</p>
          </div>
        </section>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center mb-6">
          <h3 className="text-lg font-bold text-foreground mb-2">برنامه\u200cریزی سفر با گروه کاسپین</h3>
          <a href="https://wa.me/37433149327" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition text-sm">مشاوره رایگان</a>
        </div>
        <RelatedServices currentPath="/blog/best-time-visit-armenia-souvenirs" />
        </div>
          <PageSidebar tags={['tourism', 'armenia', 'sightseeing', 'festivals']} currentPath="/blog/best-time-visit-armenia-souvenirs" />
        </div>
      </main>
    </div>
  );
}

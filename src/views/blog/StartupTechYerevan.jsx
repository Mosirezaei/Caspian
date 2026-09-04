'use client';
import { Rocket, Code2, Building2, Globe2, Users, Zap, TrendingUp } from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';

export default function StartupTechYerevan() {
  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />
      <main className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
        <section className="mb-8">
          <span className="text-xs text-primary/70 font-semibold bg-primary/8 px-3 py-1 rounded-full">اخبار و فستیوال\u200cها</span>
          <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-4 leading-tight">اکوسیستم استارتاپ و فناوری ایروان</h1>
          <p className="text-foreground/60 mt-3 text-lg">فرصت\u200cها برای توسعه\u200cدهندگان، فریلنسرها و کارآفرینان ایرانی</p>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-black text-primary mb-3 flex items-center gap-2"><Rocket className="w-5 h-5" /> چرا ایروان «سیلیکون\u200cولی قفقاز» شده؟</h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>ایروان تو ۵ سال اخیر تبدیل به یکی از هاب\u200cهای فناوری منطقه شده. بعد از شروع جنگ اوکراین (۲۰۲۲)، هزاران متخصص روسی و بلاروسی به ایروان مهاجرت کردن و اکوسیستم تکنولوژی شهر رو منفجر کردن — شرکت\u200cهایی مثل Picsart (یونیکورن ارمنی)، ServiceTitan و DISQO از ایروان رشد کردن.</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-primary font-black text-xl">+۱,۲۰۰</div>
                <div className="text-[10px] text-foreground/50 mt-1">شرکت IT فعال</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-primary font-black text-xl">+۳۵,۰۰۰</div>
                <div className="text-[10px] text-foreground/50 mt-1">شاغل حوزه\u200cی IT</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-primary font-black text-xl">~۲۵٪</div>
                <div className="text-[10px] text-foreground/50 mt-1">سهم IT از GDP</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-primary font-black text-xl">۱٪</div>
                <div className="text-[10px] text-foreground/50 mt-1">مالیات ویژه\u200cی IT</div>
              </div>
            </div>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-black text-primary mb-3 flex items-center gap-2"><Code2 className="w-5 h-5" /> فرصت\u200cها برای ایرانیان</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
              <h4 className="font-bold text-foreground text-sm mb-2">\ud83d\udcbb فریلنسر/ریموت</h4>
              <p className="text-xs text-foreground/60 leading-6">ثبت IE (کارآفرین انفرادی) + مالیات ۵٪ + حساب بانکی SWIFT = دریافت درآمد ارزی قانونی. خیلی از ایرانی\u200cها برای فرار از تحریم\u200cهای بانکی اینجا ثبت می\u200cکنن.</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20">
              <h4 className="font-bold text-foreground text-sm mb-2">\ud83c\udfed استارتاپ</h4>
              <p className="text-xs text-foreground/60 leading-6">ثبت LLC + استخدام نیروی محلی + دسترسی به بازار CIS و اروپا. اکسلراتورهایی مثل HIVE Ventures و Orion Worldwide Innovations پذیرش بین\u200cالمللی دارن.</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20">
              <h4 className="font-bold text-foreground text-sm mb-2">\ud83d\udc65 استخدام تو شرکت\u200cهای ارمنی</h4>
              <p className="text-xs text-foreground/60 leading-6">شرکت\u200cهای IT ایروان همیشه دنبال دولوپر، دیزاینر و مارکتره. حقوق مهندس نرم\u200cافزار: $۱,۵۰۰–$۴,۰۰۰/ماه (بسته به تجربه).</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-rose-500/10 to-transparent border border-rose-500/20">
              <h4 className="font-bold text-foreground text-sm mb-2">\ud83c\udf10 دیجیتال مارکتینگ</h4>
              <p className="text-xs text-foreground/60 leading-6">آژانس\u200cهای دیجیتال مارکتینگ ایرانی\u200cها تو ایروان خیلی موفقن — خدمات سئو، تبلیغات و محتوا برای مشتریان بین\u200cالمللی.</p>
            </div>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-black text-primary mb-3 flex items-center gap-2"><Building2 className="w-5 h-5" /> فضاهای کوورکینگ ایروان</h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>ایروان پر از فضای کوورکینگ باکیفیته — از $۵۰/ماه تا $۲۰۰/ماه بسته به امکانات:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-foreground text-sm">Impact Hub Yerevan</h4>
                <p className="text-[10px] text-foreground/50 mt-1">بزرگ\u200cترین کوورکینگ — رویدادهای هفتگی، اتاق جلسه، اینترنت سریع</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-foreground text-sm">The Loft Coworking</h4>
                <p className="text-[10px] text-foreground/50 mt-1">نزدیک کاسکاد — فضای شیک، قهوه رایگان، ۲۴/۷</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-foreground text-sm">TUMO Labs</h4>
                <p className="text-[10px] text-foreground/50 mt-1">متصل به مرکز TUMO — فضای رایگان برای پروژه\u200cهای آموزشی</p>
              </div>
            </div>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-black text-primary mb-3 flex items-center gap-2"><TrendingUp className="w-5 h-5" /> مالیات ویژه\u200cی IT: واقعیت ۲۰۲۶</h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-2">
            <p>ارمنستان نرخ مالیاتی ویژه\u200cای برای شرکت\u200cهای IT داره — ولی دیگه مثل قبل «معافیت خودکار» نیست:</p>
            <p>\u2714 نرخ ترجیحی ۱٪ روی گردش مالی — فقط اگه فعالیت واقعی\u200cتون با کدهای مصوب فناوری مطابقت داشته باشه</p>
            <p>\u2714 باید درآمد از خدمات IT (توسعه نرم\u200cافزار، SaaS، مشاوره\u200cی فنی) باشه — نه تجارت عمومی</p>
            <p>\u2714 حسابدار متخصص IT الزامیه — اظهارنامه\u200cهای مالیاتی باید دقیق و مطابق کدها باشن</p>
            <p>\u26a0\ufe0f هشدار: بعضی مشاوران «مالیات صفر» وعده می\u200cدن — این دیگه درست نیست. از منابع رسمی و حسابداران معتبر مشاوره بگیرید.</p>
          </div>
        </section>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center mb-6">
          <h3 className="text-lg font-bold text-foreground mb-2">مشاوره\u200cی ثبت شرکت IT و مالیات</h3>
          <a href="https://wa.me/37433149327" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition text-sm">مشاوره واتساپ</a>
        </div>
        <RelatedServices currentPath="/blog/startup-tech-ecosystem-yerevan" />
        </div>
          <PageSidebar tags={['company', 'work', 'armenia', 'business']} currentPath="/blog/startup-tech-ecosystem-yerevan" />
        </div>
      </main>
    </div>
  );
}

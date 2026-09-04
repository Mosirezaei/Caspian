'use client';
import { Scale, Briefcase, GraduationCap, Building2, Baby, Clock, DollarSign, FileCheck2 } from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';

export default function ResidencyPathsComparison() {
  const paths = [
    { icon: Briefcase, name: 'اقامت کاری', color: 'blue', time: '۱ تا ۳ هفته', cost: '$۳۰۰–$۶۰۰', duration: '۱ ساله (قابل تمدید)', needs: ['قرارداد کار با شرکت ارمنی', 'پاسپورت معتبر', 'گواهی عدم سوءپیشینه'], pros: ['سریع\u200cترین مسیر', 'نیاز به سرمایه ندارد', 'شامل حق کار می\u200cشه'], cons: ['وابسته به کارفرمای ارمنی', 'تغییر شغل = تمدید جدید'] },
    { icon: Building2, name: 'ثبت شرکت', color: 'amber', time: '۲ تا ۴ هفته', cost: '$۱,۰۰۰–$۳,۰۰۰ (سال اول)', duration: '۱ ساله (قابل تمدید)', needs: ['ثبت LLC یا IE', 'طرح کسب\u200cوکار', 'حساب بانکی شرکتی', 'فعالیت اقتصادی واقعی'], pros: ['استقلال کامل — خودت کارفرمایی', 'دسترسی به SWIFT و کارت بین\u200cالمللی', 'مسیر به اقامت دائم'], cons: ['هزینه\u200cی بالاتر (حسابداری ماهانه)', 'نیاز به فعالیت واقعی'] },
    { icon: GraduationCap, name: 'اقامت تحصیلی', color: 'emerald', time: '۱ تا ۲ ماه', cost: '$۸۰۰–$۴,۰۰۰/سال شهریه', duration: '۱ ساله (تا پایان تحصیل)', needs: ['پذیرش دانشگاه ارمنی', 'ریزنمرات ترجمه\u200cشده', 'گواهی مالی'], pros: ['شهریه\u200cی خیلی پایین', 'مدرک بین\u200cالمللی', 'مسیر به اقامت دائم'], cons: ['حق کار محدود', 'وابسته به ادامه تحصیل'] },
    { icon: Baby, name: 'تولد فرزند', color: 'rose', time: '۲ تا ۶ هفته', cost: '$۵۰۰–$۲,۰۰۰ (زایمان)', duration: '۱ ساله (قابل تمدید)', needs: ['شناسنامه\u200cی تولد ارمنی فرزند', 'پاسپورت والدین', 'مدرک اقامت فعلی'], pros: ['هر دو والد واجد شرایط', 'نیاز به شرکت/کار ندارد'], cons: ['نیاز به تولد فرزند در ارمنستان', 'مسیر خاص — برای همه مناسب نیست'] },
  ];
  const colors = { blue: 'from-blue-500/10 border-blue-500/20', amber: 'from-amber-500/10 border-amber-500/20', emerald: 'from-emerald-500/10 border-emerald-500/20', rose: 'from-rose-500/10 border-rose-500/20' };

  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />
      <main className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
        <section className="mb-8">
          <span className="text-xs text-primary/70 font-semibold bg-primary/8 px-3 py-1 rounded-full">اقامت و مهاجرت</span>
          <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-4 leading-tight">مقایسه مسیرهای اقامت ارمنستان</h1>
          <p className="text-foreground/60 mt-3 text-lg">کاری، تحصیلی، سرمایه\u200cگذاری یا تولد فرزند — کدوم مسیر برای شما مناسب\u200cتره؟</p>
        </section>

        <div className="space-y-5 mb-6">
          {paths.map((p, i) => {
            const Icon = p.icon;
            return (
              <section key={i} className={`rounded-2xl p-5 bg-gradient-to-br ${colors[p.color]} to-transparent border`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center"><Icon className="w-5 h-5 text-primary" /></div>
                  <h2 className="text-lg font-black text-foreground">{p.name}</h2>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-white/5 text-center">
                    <Clock className="w-4 h-4 text-primary mx-auto mb-1" />
                    <div className="text-xs font-bold text-foreground">{p.time}</div>
                    <div className="text-[10px] text-foreground/40">زمان صدور</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 text-center">
                    <DollarSign className="w-4 h-4 text-primary mx-auto mb-1" />
                    <div className="text-xs font-bold text-foreground">{p.cost}</div>
                    <div className="text-[10px] text-foreground/40">هزینه تقریبی</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 text-center">
                    <FileCheck2 className="w-4 h-4 text-primary mx-auto mb-1" />
                    <div className="text-xs font-bold text-foreground">{p.duration}</div>
                    <div className="text-[10px] text-foreground/40">مدت اعتبار</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div><h4 className="font-bold text-foreground/80 mb-1.5">مدارک لازم</h4>{p.needs.map((n, j) => <p key={j} className="text-foreground/60 mb-1">\u2022 {n}</p>)}</div>
                  <div><h4 className="font-bold text-green-400 mb-1.5">مزایا</h4>{p.pros.map((pr, j) => <p key={j} className="text-foreground/60 mb-1">\u2713 {pr}</p>)}</div>
                  <div><h4 className="font-bold text-red-400 mb-1.5">معایب</h4>{p.cons.map((co, j) => <p key={j} className="text-foreground/60 mb-1">\u2717 {co}</p>)}</div>
                </div>
              </section>
            );
          })}
        </div>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2"><Scale className="w-5 h-5" /> کدوم مسیر رو انتخاب کنم؟</h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-2">
            <p>\u2714 اگه <strong>شاغل</strong> هستید و کارفرمای ارمنی دارید \u2192 اقامت کاری (سریع\u200cترین)</p>
            <p>\u2714 اگه <strong>فریلنسر یا کارآفرین</strong> هستید \u2192 ثبت شرکت (مستقل\u200cترین)</p>
            <p>\u2714 اگه <strong>جوان</strong> هستید و می\u200cخواید مدرک بین\u200cالمللی بگیرید \u2192 تحصیلی (ارزان\u200cترین)</p>
            <p>\u2714 اگه <strong>فرزندتون</strong> در ارمنستان به دنیا اومده \u2192 تولد فرزند (خاص\u200cترین)</p>
          </div>
        </section>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center mb-6">
          <h3 className="text-lg font-bold text-foreground mb-2">مشاوره رایگان انتخاب مسیر اقامت</h3>
          <a href="https://wa.me/37433149327" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition text-sm">مشاوره واتساپ</a>
        </div>
        <RelatedServices currentPath="/blog/residency-paths-comparison-armenia" />
        </div>
          <PageSidebar tags={['residency', 'armenia', 'work', 'education', 'investment', 'family']} currentPath="/blog/residency-paths-comparison-armenia" />
        </div>
      </main>
    </div>
  );
}

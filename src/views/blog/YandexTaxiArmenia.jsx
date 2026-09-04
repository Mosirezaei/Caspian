'use client';
import {
  Car, Clock, Smartphone, FileText, DollarSign, AlertTriangle,
  CheckCircle2, ChevronDown, MapPin, Zap, Shield, TrendingUp,
} from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import RelatedContent from '@/components/shared/RelatedContent.jsx';
import { useSEO } from '@/hooks/useSEO';
import Image from 'next/image';

const stats = [
  { icon: DollarSign, value: '۱۵–۳۰k', label: 'درآمد روزانه تاکسی (درام)' },
  { icon: TrendingUp, value: '۱۵–۲۵٪', label: 'کمیسیون یاندکس و ناوگان' },
  { icon: Clock, value: '۱–۳ روز', label: 'زمان ثبت‌نام و تأیید مدارک' },
  { icon: MapPin, value: 'ایروان', label: 'اصلی‌ترین بازار تاکسی یاندکس' },
];

const requirements = [
  { icon: FileText, title: 'مدارک هویتی', body: 'پاسپورت معتبر و گواهینامه معتبر ارمنستان یا بین‌المللی مطابق قوانین پلیس راهنمایی ارمنستان.' },
  { icon: Shield, title: 'کارت اقامت و Social Card', body: 'داشتن اقامت قانونی و شماره خدمات اجتماعی برای ثبت قرارداد با شرکت‌های ناوگان واسط الزامی است.' },
  { icon: Smartphone, title: 'گوشی هوشمند و Yandex Pro', body: 'تلفن هوشمند با قابلیت اجرای سریع GPS و اپلیکیشن Yandex Pro؛ اینترنت پایدار ضروری است.' },
  { icon: Car, title: 'خودروی واجد شرایط', body: 'خودروی شخصی یا اجاره‌ای که استانداردهای نظافت و سلامت فنی یاندکس را داشته باشد.' },
];

const steps = [
  { num: '۱', title: 'نصب Yandex Pro', body: 'اپلیکیشن Yandex Pro را از مارکت دانلود و با شماره همراه ارمنستان ثبت‌نام کنید.' },
  { num: '۲', title: 'انتخاب شرکت ناوگان واسط', body: 'ثبت‌نام رسمی در یاندکس معمولاً از طریق Fleet Partners محلی انجام می‌شود — مستقیماً با یاندکس قرارداد نمی‌بندید.' },
  { num: '۳', title: 'تأیید مدارک و بازرسی خودرو', body: 'ارائه کپی مدارک شناسایی، تصویر خودرو و بررسی استانداردهای فنی توسط ناوگان واسط.' },
  { num: '۴', title: 'شروع دریافت سفر', body: 'پس از تأیید، اپلیکیشن فعال می‌شود و می‌توانید سفرها را قبول کنید. پرداخت‌ها روزانه یا هفتگی از کیف پول پلتفرم انجام می‌شود.' },
];

const proscons = [
  { pro: 'انتخاب اختیاری ساعت شیفت', con: 'نوسان شدید تقاضا در روزهای آرام هفته' },
  { pro: 'پرداخت روزانه / هفتگی شفاف', con: 'استهلاک بالای خودرو و هزینه سوخت به عهده راننده' },
  { pro: 'نرخ‌های ساعات اوج و آخر هفته بالاتر', con: 'ترافیک سنگین مرکز ایروان و کمبود جای پارک' },
  { pro: 'ورود بدون نیاز به رزومه دانشگاهی', con: 'کار سخت در فصل‌های برفی و یخبندان زمستان ایروان' },
];

const faqs = [
  { q: 'آیا ایرانیان می‌توانند در یاندکس تاکسی ارمنستان کار کنند؟', a: 'بله، با داشتن اقامت قانونی، Social Card و گواهینامه معتبر می‌توانند. بدون اقامت قانونی امکان ثبت قرارداد با ناوگان واسط وجود ندارد.' },
  { q: 'آیا گواهینامه ایرانی برای یاندکس تاکسی قبول می‌شود؟', a: 'در حال حاضر بهتر است گواهینامه بین‌المللی داشته باشید یا گواهینامه ارمنستان دریافت کنید، چون قوانین پلیس راهنمایی ارمنستان در این زمینه تغییر می‌کند.' },
  { q: 'درآمد ماهانه یاندکس تاکسی چقدر است؟', a: 'در شرایط کاری منظم، درآمد ناخالص ماهانه تاکسی خودرویی بین ۲۰۰،۰۰۰ تا ۳۵۰،۰۰۰ درام برآورد می‌شود (تقریباً ۵۰۰ تا ۸۷۵ دلار).' },
];

function AccordionFAQ() {
  return (
    <div className="space-y-3">
      {faqs.map((item, i) => (
        <details key={i} className="group p-4 rounded-xl bg-white/5 border border-white/10 open:border-primary/30">
          <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-foreground text-sm sm:text-base">
            {item.q}
            <ChevronDown className="w-4 h-4 text-primary/70 transition-transform group-open:rotate-180 shrink-0 ms-3" />
          </summary>
          <p className="text-foreground/60 text-sm mt-3 leading-7">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export default function YandexTaxiArmenia() {
  useSEO({
    title: 'کار با یاندکس تاکسی در ارمنستان | شرایط، درآمد و نحوه ثبت‌نام | کاسپین',
    description: 'راهنمای جامع کار با یاندکس تاکسی در ارمنستان: مدارک لازم، شرایط ثبت‌نام، درآمد روزانه و ماهانه، کمیسیون پلتفرم و مزایا و معایب.',
    keywords: 'یاندکس تاکسی ارمنستان, کار با یاندکس ایروان, یاندکس گو ارمنستان, درآمد تاکسی ارمنستان',
    path: '/blog/yandex-taxi-armenia',
  });

  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />
      <main className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">

            {/* Hero */}
            <div className="mb-8">
              <span className="text-xs text-primary/70 font-semibold bg-primary/8 px-3 py-1 rounded-full">
                کار و اشتغال
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-4 leading-tight">
                کار با یاندکس تاکسی در ارمنستان
              </h1>
              <p className="text-foreground/60 mt-3 text-lg">
                یاندکس Go اصلی‌ترین پلتفرم تاکسی آنلاین ارمنستان است — راهنمای کامل ثبت‌نام، درآمد و الزامات قانونی.
              </p>
              <p className="text-xs text-foreground/40 mt-2">آخرین بروزرسانی: شهریور ۱۴۰۵</p>
            </div>

            {/* Hero Image */}
            <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=900&q=80"
                alt="یاندکس تاکسی در خیابان‌های ایروان ارمنستان"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 700px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute bottom-3 end-3 text-xs text-white/70 bg-black/40 px-2 py-1 rounded">
                خیابان‌های ایروان — بازار اصلی یاندکس تاکسی
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <div className="text-lg font-black text-foreground">{s.value}</div>
                    <div className="text-[11px] text-foreground/50 mt-1 leading-4">{s.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Requirements */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" /> مدارک و الزامات شروع کار
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {requirements.map((r, i) => {
                  const Icon = r.icon;
                  return (
                    <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10">
                      <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center mb-3">
                        <Icon className="w-4.5 h-4.5 text-primary" />
                      </div>
                      <h3 className="font-bold text-foreground text-sm mb-1.5">{r.title}</h3>
                      <p className="text-foreground/60 text-sm leading-6">{r.body}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Steps */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" /> فرآیند ثبت‌نام گام‌به‌گام
              </h2>
              <div className="relative border-e-2 border-primary/25 pe-6 space-y-7">
                {steps.map((step, i) => (
                  <div key={i} className="relative">
                    <span className="absolute top-0 -end-[31px] w-6 h-6 rounded-full bg-primary text-black text-xs font-black flex items-center justify-center">
                      {step.num}
                    </span>
                    <h3 className="font-bold text-foreground text-sm mb-1">{step.title}</h3>
                    <p className="text-foreground/60 text-sm leading-6">{step.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Income section */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" /> میزان درآمد و هزینه‌های جاری
              </h2>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-sm font-semibold text-foreground">درآمد روزانه ناخالص</span>
                  <span className="text-primary font-black">۱۵,۰۰۰ – ۳۰,۰۰۰ درام</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-sm font-semibold text-foreground">درآمد ماهانه (کاری منظم)</span>
                  <span className="text-primary font-black">۲۰۰k – ۳۵۰k درام</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-sm font-semibold text-foreground">کمیسیون یاندکس + ناوگان</span>
                  <span className="text-foreground/70 font-semibold">۱۵ – ۲۵٪</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-sm font-semibold text-foreground">هزینه سوخت و استهلاک</span>
                  <span className="text-foreground/70 font-semibold">به عهده راننده</span>
                </div>
              </div>
            </section>

            {/* Pros & Cons */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" /> مزایا و معایب کار در یاندکس تاکسی
              </h2>
              <div className="rounded-2xl border border-white/10 overflow-hidden">
                <div className="grid grid-cols-2 bg-white/5">
                  <div className="p-3 text-center text-sm font-bold text-primary border-b border-white/10">✅ مزایا</div>
                  <div className="p-3 text-center text-sm font-bold text-foreground/60 border-b border-white/10 border-s border-white/10">⚠️ معایب</div>
                </div>
                {proscons.map((row, i) => (
                  <div key={i} className="grid grid-cols-2 border-b border-white/5 last:border-0">
                    <div className="p-3 text-sm text-foreground/80 leading-5">{row.pro}</div>
                    <div className="p-3 text-sm text-foreground/60 leading-5 border-s border-white/10">{row.con}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Alert */}
            <div className="p-5 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 mb-12 flex gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-foreground mb-1">توجه مهم</p>
                <p className="text-sm text-foreground/70 leading-6">
                  شرکت توریستی کاسپین در زمینه کاریابی یا استخدام فعالیت نمی‌کند؛ اما یک جلسه مشاوره رایگان برای بررسی مسیرهای قانونی و آشنایی با بازار کار ارمنستان ارائه می‌دهد.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-foreground mb-5">پرسش‌های متداول</h2>
              <AccordionFAQ />
            </section>

            {/* CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center">
              <h3 className="text-lg font-bold text-foreground mb-2">
                سوالی درباره کار و اقامت در ارمنستان دارید؟
              </h3>
              <p className="text-sm text-foreground/60 mb-4">
                کارشناسان گروه کاسپین با بیش از ۱۵ سال تجربه در مهاجرت و اقامت ارمنستان آماده پاسخ‌گویی رایگان هستند.
              </p>
              <a href="https://wa.me/37433149327" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition text-sm">
                مشاوره رایگان واتساپ
              </a>
            </div>

          </div>
          <PageSidebar tags={['yandex', 'taxi', 'work', 'armenia', 'employment']} currentPath="/blog/yandex-taxi-armenia" />
        </div>
        <RelatedServices currentPath="/blog/yandex-taxi-armenia" />
      </main>
    </div>
  );
}

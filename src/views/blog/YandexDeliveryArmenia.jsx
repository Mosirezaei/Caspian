'use client';
import {
  Bike, Package, Clock, Smartphone, FileText, DollarSign, AlertTriangle,
  CheckCircle2, ChevronDown, MapPin, Zap, Thermometer,
} from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import { useSEO } from '@/hooks/useSEO';
import Image from 'next/image';

const stats = [
  { icon: DollarSign, value: '۸–۱۵k', label: 'درآمد روزانه پیک موتوری (درام)' },
  { icon: Package, value: '۲۰۰–۳۵۰k', label: 'درآمد ماهانه منظم (درام)' },
  { icon: Clock, value: 'انعطاف', label: 'انتخاب ساعت کاری آزاد' },
  { icon: MapPin, value: 'ایروان', label: 'تمرکز سفارش‌های غذایی' },
];

const vehicles = [
  { icon: Bike, title: 'موتور سیکلت / اسکوتر', body: 'سریع‌ترین گزینه برای تحویل در ترافیک ایروان. هزینه سوخت پایین‌تر و درآمد بیشتر در ساعات اوج.' },
  { icon: Bike, title: 'دوچرخه', body: 'برای مناطق مرکزی ایروان با فاصله‌های کوتاه مناسب است. هزینه صفر سوخت ولی سرعت پایین‌تر.' },
  { icon: Package, title: 'خودروی سواری', body: 'برای سفارش‌های حجیم‌تر یا شرایط آب‌وهوایی سخت؛ کمیسیون معمولاً بالاتری دریافت می‌شود.' },
];

const requirements = [
  { icon: FileText, title: 'پاسپورت و اقامت قانونی', body: 'پاسپورت معتبر و کارت اقامت قانونی ارمنستان برای ثبت قرارداد با ناوگان یاندکس الزامی است.' },
  { icon: FileText, title: 'Social Card (شماره اجتماعی)', body: 'شماره خدمات اجتماعی ارمنستان برای انعقاد قرارداد رسمی با شرکت‌های ناوگان واسط ضروری است.' },
  { icon: Smartphone, title: 'گوشی و Yandex Pro', body: 'گوشی هوشمند با اتصال اینترنت پایدار و اپلیکیشن Yandex Pro برای دریافت سفارش‌ها الزامی است.' },
  { icon: Thermometer, title: 'کیف حرارتی (Thermal Bag)', body: 'داشتن کیف عایق‌دار گرم‌نگه‌دارنده تعداد سفارش‌های غذایی دریافتی را به شکل چشمگیری افزایش می‌دهد.' },
];

const steps = [
  { num: '۱', title: 'نصب Yandex Pro', body: 'اپلیکیشن را دانلود کنید و پروفایل پیک (نه راننده تاکسی) را انتخاب کنید.' },
  { num: '۲', title: 'ثبت‌نام در ناوگان واسط', body: 'تماس با یکی از Fleet Partners معتبر یاندکس در ایروان و ارائه مدارک هویتی و اقامتی.' },
  { num: '۳', title: 'دریافت کیف حرارتی', body: 'برخی ناوگان‌ها کیف را اجاره می‌دهند؛ تهیه کیف شخصی باکیفیت سرعت تأیید سفارش را بالا می‌برد.' },
  { num: '۴', title: 'شروع دریافت سفارش', body: 'پس از تأیید، اپلیکیشن سفارش‌های رستورانی و بسته‌های پستی را نمایش می‌دهد. می‌توانید قبول یا رد کنید.' },
];

const proscons = [
  { pro: 'بدون نیاز به گواهینامه رانندگی (برای پیاده و دوچرخه)', con: 'نوسان درآمد در روزهای آرام و آخر هفته‌های غیرمعمول' },
  { pro: 'هزینه ورود بسیار پایین‌تر از تاکسی', con: 'کار فیزیکی سنگین، به‌ویژه در زمستان برفی ایروان' },
  { pro: 'پرداخت روزانه یا هفتگی شفاف', con: 'هزینه استهلاک وسیله نقلیه به عهده پیک است' },
  { pro: 'قابل انجام به‌صورت پیاده در مناطق مرکزی', con: 'رقابت بالا در ساعات عادی روز' },
];

const faqs = [
  { q: 'آیا برای پیک موتوری یاندکس گواهینامه موتور لازم است؟', a: 'بله، برای پیک با موتور سیکلت یا اسکوتر گواهینامه معتبر مطابق قوانین ارمنستان الزامی است. برای پیاده یا دوچرخه در مناطق محدود ممکن است نیاز نباشد.' },
  { q: 'تفاوت یاندکس دلیوری و یاندکس ایتس (Eats) چیست؟', a: 'یاندکس Eats بیشتر روی تحویل غذای رستورانی تمرکز دارد؛ یاندکس Delivery برای بسته‌های پستی و سفارش‌های متنوع‌تر است. اپلیکیشن Yandex Pro هر دو را پوشش می‌دهد.' },
  { q: 'درآمد ماهانه پیک موتوری یاندکس در ایروان چقدر است؟', a: 'در کار منظم، درآمد ماهانه ناخالص پیک موتوری بین ۲۰۰،۰۰۰ تا ۳۵۰،۰۰۰ درام (تقریباً ۵۰۰ تا ۸۷۵ دلار) برآورد می‌شود.' },
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

export default function YandexDeliveryArmenia() {
  useSEO({
    title: 'کار با یاندکس دلیوری در ارمنستان | پیک موتوری، درآمد و ثبت‌نام | کاسپین',
    description: 'راهنمای کامل کار با یاندکس دلیوری و یاندکس ایتس در ارمنستان: انواع وسیله نقلیه، مدارک لازم، درآمد ماهانه و مقایسه مزایا و معایب پیک.',
    keywords: 'یاندکس دلیوری ارمنستان, پیک موتوری ایروان, یاندکس ایتس ارمنستان, کار پیک ارمنستان, درآمد دلیوری ایروان',
    path: '/blog/yandex-delivery-armenia',
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
                کار با یاندکس دلیوری در ارمنستان
              </h1>
              <p className="text-foreground/60 mt-3 text-lg">
                پیک موتوری، دوچرخه یا خودرو — همه چیز درباره تحویل سفارش با یاندکس Eats و Delivery در ایروان.
              </p>
              <p className="text-xs text-foreground/40 mt-2">آخرین بروزرسانی: شهریور ۱۴۰۵</p>
            </div>

            {/* Hero Image */}
            <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden mb-8">
              <Image
                src="/images/delivery/yandex-delivery-bike-courier.webp"
                alt="پیک دوچرخه‌سوار یاندکس دلیوری در حال تحویل سفارش"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 700px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute bottom-3 end-3 text-xs text-white/70 bg-black/40 px-2 py-1 rounded">
                دلیوری سریع — بازار پررونق ایروان
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

            {/* Vehicle types */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
                <Bike className="w-5 h-5 text-primary" /> انواع وسیله نقلیه در یاندکس دلیوری
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {vehicles.map((v, i) => {
                  const Icon = v.icon;
                  return (
                    <div key={i} className="p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/15">
                      <Icon className="w-6 h-6 text-primary mb-3" />
                      <h3 className="font-bold text-foreground text-sm mb-1.5">{v.title}</h3>
                      <p className="text-foreground/60 text-sm leading-6">{v.body}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Requirements */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" /> مدارک و الزامات
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

            {/* Pros & Cons */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" /> مزایا و معایب پیک یاندکس
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
                کارشناسان گروه کاسپین با بیش از ۱۵ سال تجربه آماده پاسخ‌گویی رایگان هستند.
              </p>
              <a href="https://wa.me/37433149327" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition text-sm">
                مشاوره رایگان واتساپ
              </a>
            </div>

          </div>
          <PageSidebar tags={['yandex', 'delivery', 'work', 'armenia', 'courier']} currentPath="/blog/yandex-delivery-armenia" />
        </div>
        <RelatedServices currentPath="/blog/yandex-delivery-armenia" />
      </main>
    </div>
  );
}

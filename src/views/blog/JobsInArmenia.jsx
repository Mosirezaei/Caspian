'use client';
import {
  Search, Briefcase, Users, Globe2, FileCheck2, PlaneTakeoff,
  TrendingUp, MapPin, Code2, Hotel, Truck, Languages, HardHat,
  ChevronDown, CheckCircle2, Wallet, GraduationCap,
} from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import BlogSidebar from '@/components/shared/BlogSidebar';
import SeoFooterLinks from '@/components/shared/SeoFooterLinks.jsx';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import RelatedContent from '@/components/shared/RelatedContent.jsx';

const stats = [
  { icon: PlaneTakeoff, value: '۹۰ روز', label: 'اقامت اولیه بدون ویزا' },
  { icon: MapPin, value: '٪۹۰+', label: 'مشاغل کشور در ایروان' },
  { icon: TrendingUp, value: '$۳۵۰۰', label: 'سقف درآمد در حوزه IT' },
  { icon: Users, value: '٪۱۳', label: 'نرخ بیکاری کلی کشور' },
];

const reasons = [
  { icon: PlaneTakeoff, title: 'اقامت بدون تشریفات ویزا', body: 'اشخاص ایرانی تا نود روز بدون اخذ روادید می‌مانند و بازار را رصد می‌کنند.' },
  { icon: Wallet, title: 'تعادل هزینه و درآمد', body: 'هزینه‌های جاری پایین‌تر از اروپاست؛ با دریافتی متوسط، کیفیت زندگی قابل قبولی ممکنه.' },
  { icon: TrendingUp, title: 'اقتصادهای پویا', body: 'فناوری نوین، گردشگری خارجی و تجارت فرامرزی تشنه‌ی نیروی ماهر بین‌المللی‌اند.' },
  { icon: Users, title: 'اشتراکات فرهنگی', body: 'پیوند فرهنگی دیرینه و جمعیت فعال ایرانی ساکن ایروان، انطباق را سریع‌تر می‌کند.' },
];

const paths = [
  { icon: Search, title: 'پلتفرم‌های آنلاین', body: 'Staff.am معتبرترین درگاه کاریابی است؛ Job.am، CareerCenter.am و LinkedIn هم منابع خوبی‌اند.' },
  { icon: Briefcase, title: 'آژانس‌های کاریابی', body: 'Repat Armenia مشاوره‌ی اسکان هم می‌دهد؛ Resource Group Recruitment Agency طیف وسیعی از مشاغل را پوشش می‌دهد.' },
  { icon: Globe2, title: 'حضور میدانی', body: 'بخش بزرگی از مشاغل هیچ‌وقت آنلاین درج نمی‌شوند؛ شبکه‌سازی حضوری و رویدادهای تخصصی ایروان راه میانبرند.' },
];

const salaryData = [
  { icon: Code2, field: 'فناوری اطلاعات و کامپیوتر', min: 1200, max: 3500 },
  { icon: Hotel, field: 'گردشگری و هتلداری', min: 450, max: 1200 },
  { icon: Truck, field: 'بازرگانی و تجارت بین‌الملل', min: 500, max: 2000 },
  { icon: Languages, field: 'آموزش زبان', min: 400, max: 1100 },
  { icon: HardHat, field: 'مهندسی و ساخت‌وساز', min: 700, max: 2200 },
];
const SALARY_SCALE = 3500;

const legalSteps = [
  { title: 'مدارک شناسایی و حرفه‌ای', body: 'رزومه استاندارد (انگلیسی یا ارمنی)، ترجمه رسمی مدارک تحصیلی، پاسپورت با حداقل ۶ ماه اعتبار.' },
  { title: 'دریافت پیشنهاد شغلی', body: 'توافق رسمی با کارفرمای ارمنی و عقد قرارداد همکاری.' },
  { title: 'دریافت مجوز کار', body: 'کارفرما فرآیند اداری اخذ پروانه کار را پیگیری می‌کند — معمولاً حدود دو هفته.' },
  { title: 'صدور روادید کاری و اقامت', body: 'پس از تایید مجوز، اقامت موقت یک‌ساله (قابل تمدید) دریافت می‌شود.' },
];

const strategies = [
  { icon: Languages, title: 'یادگیری زبان', body: 'تسلط به انگلیسی برای شرکت‌های بین‌المللی کافی‌ست؛ ارمنی یا روسی تعاملات روزمره را آسان‌تر می‌کند.' },
  { icon: Wallet, title: 'مدیریت سرمایه', body: 'مصاحبه و مراحل اداری چند هفته طول می‌کشد؛ پس‌انداز دو تا سه ماه هزینه را کنار بگذارید.' },
  { icon: GraduationCap, title: 'شخصی‌سازی رزومه', body: 'رزومه را با استانداردهای منطقه تنظیم و دستاوردها را با عدد و شاهد عینی برجسته کنید.' },
];

const faqs = [
  { q: 'آیا بدون بلد بودن زبان ارمنی می‌توان شغل پیدا کرد؟', a: 'بله؛ در فناوری، استارتاپ‌ها، مجموعه‌های بین‌المللی و صنعت توریسم، تسلط کامل به انگلیسی کافی است.' },
  { q: 'کدام شهر ارمنستان برای جستجوی کار مناسب‌تر است؟', a: 'ایروان — بیش از نود درصد موقعیت‌های شغلی کشور به دلیل تمرکز دفاتر مرکزی شرکت‌ها، هتل‌ها و مراکز تجاری آنجاست.' },
  { q: 'نرخ بیکاری در ارمنستان در چه وضعیتی است؟', a: 'نرخ کلی حدود سیزده درصد؛ اما در مهندسی نرم‌افزار، حسابداری پیشرفته و بازرگانی بین‌المللی کمبود نیروی کارآمد شدید است.' },
];

function HeroArt() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-auto max-w-sm mx-auto" aria-hidden="true">
      <circle cx="330" cy="40" r="22" className="fill-primary/25" />
      <path d="M0,150 L90,55 L130,95 L215,15 L300,110 L400,70 L400,160 L0,160 Z" className="fill-primary/10" />
      <path d="M55,150 L130,95 L185,140 L245,85 L320,150 Z" className="fill-primary/20" />
      <path d="M120,90 L130,95 L138,88" className="stroke-background" strokeWidth="3" fill="none" />
      <path d="M230,80 L215,15 L200,80" className="fill-background/60" />
      <rect x="175" y="118" width="50" height="34" rx="4" className="fill-primary" />
      <rect x="190" y="108" width="20" height="10" rx="2" className="fill-primary" />
      <rect x="196" y="130" width="8" height="8" className="fill-background/70" />
    </svg>
  );
}

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

export default function JobsInArmenia() {
  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />
      <main className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">

        {/* Hero */}
        <div className="grid sm:grid-cols-2 gap-6 items-center mb-8">
          <div>
            <span className="text-xs text-primary/70 font-semibold bg-primary/8 px-3 py-1 rounded-full">
              کار و اشتغال
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-4 leading-tight">
              راهنمای جامع اشتغال و کاریابی در ارمنستان
            </h1>
            <p className="text-foreground/60 mt-3 text-lg">
              راهنمای کامل برای متقاضیان ایرانی برای ورود به بازار کار ارمنستان
            </p>
            <p className="text-xs text-foreground/40 mt-2">آپدیت: شهریور ۱۴۰۵</p>
          </div>
          <HeroArt />
        </div>

        {/* Stats bar */}
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

        {/* Why Armenia — icon cards */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
            <span className="text-2xl">🇦🇲</span> چرا بازار کار ارمنستان برای متخصصان ایرانی جذاب است؟
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => {
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

        {/* Job search paths */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
            <Search className="w-5 h-5 text-primary" /> مسیرهای اصلی برای دسترسی به فرصت‌های شغلی
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {paths.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/15">
                  <Icon className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-bold text-foreground text-sm mb-1.5">{p.title}</h3>
                  <p className="text-foreground/60 text-sm leading-6">{p.body}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Salary ranges — visual bars */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
            <Wallet className="w-5 h-5 text-primary" /> مشاغل پرتقاضا و بازه پرداختی (ماهانه، دلار)
          </h2>
          <div className="space-y-4 p-5 rounded-2xl bg-white/5 border border-white/10">
            {salaryData.map((s, i) => {
              const Icon = s.icon;
              const left = (s.min / SALARY_SCALE) * 100;
              const width = ((s.max - s.min) / SALARY_SCALE) * 100;
              return (
                <div key={i}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <Icon className="w-4 h-4 text-primary" /> {s.field}
                    </span>
                    <span className="text-xs text-foreground/50">${s.min} – ${s.max}</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-white/10 relative overflow-hidden">
                    <div
                      className="absolute top-0 h-full rounded-full bg-primary/70"
                      style={{ insetInlineStart: `${left}%`, width: `${width}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-foreground/40 mt-3">
            ارقام کاملاً شناور است و بسته به تخصص، تسلط به زبان، سوابق کاری و توانمندی فردی متغیر است.
          </p>
        </section>

        {/* Legal steps — timeline */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
            <FileCheck2 className="w-5 h-5 text-primary" /> تشریفات قانونی و مدارک لازم برای فعالیت رسمی
          </h2>
          <div className="relative border-e-2 border-primary/25 pe-6 space-y-7">
            {legalSteps.map((step, i) => (
              <div key={i} className="relative">
                <span className="absolute top-0 -end-[31px] w-6 h-6 rounded-full bg-primary text-black text-xs font-black flex items-center justify-center">
                  {i + 1}
                </span>
                <h3 className="font-bold text-foreground text-sm mb-1">{step.title}</h3>
                <p className="text-foreground/60 text-sm leading-6">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Strategies */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" /> راهبردهای کلیدی برای موفقیت
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {strategies.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-sm mb-1.5">{s.title}</h3>
                  <p className="text-foreground/60 text-sm leading-6">{s.body}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-5">پرسش‌های متداول</h2>
          <AccordionFAQ />
        </section>

        {/* CTA */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center">
          <h3 className="text-lg font-bold text-foreground mb-2">
            برای مشاوره در مورد اقامت کاری و مجوز کار آماده‌اید؟
          </h3>
          <p className="text-sm text-foreground/60 mb-4">
            کارشناسان گروه با تجربه‌ی بیش از ۵ سال در اقامت، ثبت شرکت و مشاوره کاری مهاجرت ارائه می‌دهند.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition text-sm">
            مشاوره رایگان بگیرید
          </a>
        </div>

        </div>

          <BlogSidebar currentTags={['jobs', 'employment', 'work-permit', 'armenia']} currentPath="/blog/jobs-in-armenia" />
        </div>

        <RelatedServices currentPath="/blog/jobs-in-armenia" />
        <SeoFooterLinks />
      </main>
    </div>
  );
}

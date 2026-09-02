'use client';
import React, { useState } from 'react';
import { useLang } from '@/lib/LanguageContext';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import SeoFooterLinks from '@/components/shared/SeoFooterLinks.jsx';
import RelatedServices from '@/components/shared/RelatedServices.jsx';

const toc = [
  { id: 'why', fa: 'چرا ارمنستان؟', en: 'Why Armenia?' },
  { id: 'new-law', fa: 'قانون جدید ۲۰۲۶', en: 'New Law 2026' },
  { id: 'eu', fa: 'ارمنستان و اروپا', en: 'Armenia & EU' },
  { id: 'types', fa: 'انواع اقامت', en: 'Residency Types' },
  { id: 'company', fa: 'ثبت شرکت', en: 'Company Reg.' },
  { id: 'investment', fa: 'سرمایه‌گذاری', en: 'Investment' },
  { id: 'work', fa: 'اقامت کاری', en: 'Work Route' },
  { id: 'study', fa: 'تحصیل', en: 'Study Route' },
  { id: 'family', fa: 'ازدواج و خانواده', en: 'Family Route' },
  { id: 'citizenship', fa: 'شهروندی', en: 'Citizenship' },
  { id: 'process', fa: 'مراحل و هزینه‌ها', en: 'Process & Fees' },
  { id: 'rights', fa: 'حقوق مقیمان', en: 'Residents\' Rights' },
  { id: 'compare', fa: 'مقایسه با رقبا', en: 'Comparison' },
  { id: 'faq', fa: 'سوالات متداول', en: 'FAQ' },
];

function Section({ id, title, children }) {
  return (
    <section id={id} className="mb-14 scroll-mt-24">
      <h2 className="text-xl font-black text-foreground mb-5 pb-3 border-b border-foreground/8">{title}</h2>
      {children}
    </section>
  );
}

function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-2 text-sm text-foreground/70 leading-relaxed">
      <span className="text-primary mt-0.5 shrink-0">✓</span>
      <span>{children}</span>
    </li>
  );
}

export default function ResidencyArmenia() {
  const { lang } = useLang();
  const isFa = lang === 'fa';

  return (
    <div className="min-h-screen" dir={isFa ? 'rtl' : 'ltr'}>
      <GlobalNavbar />

      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="relative max-w-5xl mx-auto px-4 pt-16 pb-10 text-center">
          <span className="text-xs text-primary/70 font-semibold bg-primary/8 px-3 py-1 rounded-full">
            {isFa ? 'راهنمای جامع — آپدیت ۲۰۲۶' : 'Complete Guide — Updated 2026'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground mt-5 leading-tight">
            {isFa ? 'اقامت ارمنستان برای ایرانیان' : 'Armenia Residency for Iranians'}
          </h1>
          <p className="text-foreground/55 mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {isFa
              ? 'همه مسیرها، مدارک، هزینه‌ها و قانون جدید نوامبر ۲۰۲۶ — اطلاعات دقیق بر اساس تجربه ۱۵ ساله کاسپین گروپ در ایروان'
              : 'All routes, documents, fees, and the new November 2026 law — accurate information based on 15 years of Caspian Group experience in Yerevan'}
          </p>
          {/* Quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 max-w-2xl mx-auto text-center">
            {[
              { fa: 'سریع‌ترین روش', en: 'Fastest route', val: isFa ? 'ثبت شرکت' : 'Company reg.' },
              { fa: 'زمان دریافت', en: 'Processing', val: isFa ? '۲۰–۳۰ روز' : '20–30 days' },
              { fa: 'هزینه دولتی', en: 'Gov. fee', val: '~$380/yr' },
              { fa: 'سابقه ما', en: 'Our experience', val: isFa ? '۱۵ سال' : '15 years' },
            ].map((s, i) => (
              <div key={i} className="p-3 rounded-2xl bg-primary/5 border border-primary/12">
                <div className="text-[10px] text-foreground/40 mb-1">{isFa ? s.fa : s.en}</div>
                <div className="text-sm font-black text-primary">{s.val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 pb-20">
        <div className="flex gap-8 items-start">

          {/* TOC sidebar — desktop */}
          <aside className="hidden lg:block w-52 shrink-0 sticky top-6 self-start">
            <div className="glass-panel rounded-2xl p-4">
              <p className="text-xs font-bold text-foreground/40 uppercase tracking-wider mb-3">
                {isFa ? 'فهرست مطالب' : 'Contents'}
              </p>
              <nav className="space-y-1">
                {toc.map(item => (
                  <a key={item.id} href={`#${item.id}`}
                    className="block text-xs text-foreground/55 hover:text-primary transition py-1 leading-snug">
                    {isFa ? item.fa : item.en}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0 pt-8">

            {/* ۱. چرا ارمنستان */}
            <Section id="why" title={isFa ? '۱. چرا ارمنستان؟' : '1. Why Armenia?'}>
              <p className="text-sm text-foreground/70 leading-8 mb-5">
                {isFa
                  ? 'ارمنستان کشوری است که سال‌ها در سایه ترکیه و گرجستان قرار داشت. اما با تصویب قانون الحاق به اتحادیه اروپا، اصلاح سیستم مهاجرتی و رشد اقتصادی قابل توجه، این کشور به یکی از جذاب‌ترین مقاصد مهاجرتی منطقه تبدیل شده.'
                  : 'Armenia sat in the shadow of Turkey and Georgia for years. But with the EU accession law, immigration reform, and notable economic growth, it has become one of the most attractive migration destinations in the region.'}
              </p>
              <ul className="space-y-2">
                {(isFa ? [
                  'مرز زمینی مستقیم با ایران — وقتی پرواز گران است، مسیر نوردوز–مگری باز است',
                  'تابعیت دوگانه بدون چون و چرا — پاسپورت ایرانی را نگه می‌دارید',
                  'ثبت شرکت ۱ تا ۳ روزه، مالکیت ۱۰۰٪ خارجی، نرخ مالیات ۱۸٪',
                  'هزینه زندگی معقول — آپارتمان دوخوابه مرکز ایروان: ۸۰۰ تا ۱۰۰۰ دلار',
                  'دسترسی به بانکداری بین‌المللی و تراکنش‌های ارزی',
                  'پس از کسب شهروندی: سفر بدون ویزا به ۵۹ کشور',
                  'مسیر رسمی الحاق به اتحادیه اروپا از مارس ۲۰۲۵',
                ] : [
                  'Direct land border with Iran — when flights are expensive, the Norduz–Meghri route stays open',
                  'Dual citizenship without conditions — keep your Iranian passport',
                  '1–3 day company registration, 100% foreign ownership, 18% tax rate',
                  'Reasonable cost of living — 2BR central Yerevan: $800–$1,000/month',
                  'Access to international banking and foreign currency transactions',
                  'After citizenship: visa-free travel to 59 countries',
                  'Official EU accession path launched March 2025',
                ]).map((item, i) => <CheckItem key={i}>{item}</CheckItem>)}
              </ul>
            </Section>

            {/* ۲. قانون جدید */}
            <Section id="new-law" title={isFa ? '۲. مهم‌ترین تغییرات قانون جدید (اوت ۲۰۲۶)' : '2. Key Changes – New Immigration Law (Aug 2026)'}>
              <div className="p-4 rounded-2xl bg-amber-400/8 border border-amber-400/25 mb-5">
                <span className="text-xs font-bold text-amber-400">
                  ⚠️ {isFa ? 'اجرای کامل از ۱ نوامبر ۲۰۲۶ — افزایش هزینه‌ها از ژانویه ۲۰۲۷' : 'Full enforcement from Nov 1, 2026 — fee increases from Jan 2027'}
                </span>
              </div>
              <ul className="space-y-2">
                {(isFa ? [
                  'فرآیند کاملاً دیجیتال از طریق سامانه permits.am — پایان صف‌های اداره مهاجرت',
                  'کارت اقامت بیومتریک — حضور فیزیکی برای ثبت اثر انگشت الزامی است',
                  'هزینه دولتی اقامت موقت یکساله: ۱۵۰٬۰۰۰ درام (~۳۸۰ دلار)',
                  'اقامت دائم ۵ساله: ۲۵۰٬۰۰۰ درام (~۶۲۵ دلار)',
                  'مسیر جدید سرمایه‌گذار: اقامت دائم ۵ساله از همان روز اول',
                  'سهمیه سالانه برای هر نوع اقامت — اقدام زودتر، رقابت کمتر',
                  'غیبت بیش از ۱۸۳ روز در سال باید اطلاع داده شود (از نوامبر ۲۰۲۶)',
                  'لغو پاسپورت ویژه ۱۰ساله — دارندگان فعلی تا انقضا وضعیت دارند',
                  'از ژانویه ۲۰۲۷: اقامت موقت ۱۵۰٬۰۰۰ → ۲۰۰٬۰۰۰ درام | اقامت دائم → ۳۰۰٬۰۰۰ درام',
                ] : [
                  'Fully digital process via permits.am — no more migration office queues',
                  'Biometric residency card — physical presence required for fingerprinting',
                  'Temporary residency fee (1 year): 150,000 AMD (~$380)',
                  'Permanent 5-year residency: 250,000 AMD (~$625)',
                  'New investor route: permanent 5-year residency from day one',
                  'Annual quotas for each residency type — apply early',
                  'Absence over 183 days per year must be reported (from Nov 2026)',
                  'Special 10-year passport abolished — current holders keep status until expiry',
                  'From Jan 2027: temporary fee 150k → 200k AMD | permanent → 300k AMD',
                ]).map((item, i) => <CheckItem key={i}>{item}</CheckItem>)}
              </ul>
            </Section>

            {/* ۳. اروپا */}
            <Section id="eu" title={isFa ? '۳. ارمنستان و اتحادیه اروپا' : '3. Armenia & the European Union'}>
              <p className="text-sm text-foreground/70 leading-8 mb-4">
                {isFa
                  ? 'پارلمان ارمنستان در مارس ۲۰۲۵ قانون الحاق رسمی به اتحادیه اروپا را تصویب کرد. اولین اجلاس تاریخی ارمنستان–EU در مه ۲۰۲۶ در ایروان برگزار شد. این مسیر چند سال طول می‌کشد، اما حرکت جدی است.'
                  : 'Armenia's parliament approved the official EU accession law in March 2025. The first historic Armenia–EU summit was held in Yerevan in May 2026. The process will take years, but the direction is serious.'}
              </p>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { icon: '✅', fa: 'قانون الحاق', en: 'Accession Law', descFa: 'تصویب مارس ۲۰۲۵ توسط پارلمان', descEn: 'Passed March 2025 by parliament' },
                  { icon: '🤝', fa: 'اجلاس EU', en: 'EU Summit', descFa: 'اولین اجلاس ارمنستان–EU در مه ۲۰۲۶', descEn: 'First Armenia–EU summit May 2026' },
                  { icon: '🔜', fa: 'آزادسازی ویزا', en: 'Visa Liberalization', descFa: 'ارائه VLAP به کمیسیون اروپا — چند سال دیگر', descEn: 'VLAP submitted to EU Commission — years away' },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl border border-foreground/8 bg-foreground/2 text-center">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-sm font-bold text-foreground">{isFa ? item.fa : item.en}</div>
                    <div className="text-xs text-foreground/50 mt-1">{isFa ? item.descFa : item.descEn}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-foreground/45 mt-4 p-3 rounded-xl bg-foreground/3 border border-foreground/8">
                💡 {isFa
                  ? 'اقامت ارمنستان در حال حاضر ویزای شنگن نمی‌دهد. اما استانداردسازی سیستم مهاجرتی و شفافیت بیشتر حقوق مقیمان از همین الان در حال اتفاق افتادن است.'
                  : 'Armenia residency does not currently provide Schengen access. But the standardization of the immigration system and stronger resident rights are happening now.'}
              </p>
            </Section>

            {/* ۴. انواع اقامت */}
            <Section id="types" title={isFa ? '۴. انواع اقامت: موقت، دائم، سرمایه‌گذار' : '4. Residency Types: Temporary, Permanent, Investor'}>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-primary/10 text-foreground/70">
                      <th className="p-3 text-start">{isFa ? 'نوع' : 'Type'}</th>
                      <th className="p-3 text-start">{isFa ? 'مدت' : 'Duration'}</th>
                      <th className="p-3 text-start">{isFa ? 'هزینه' : 'Fee'}</th>
                      <th className="p-3 text-start">{isFa ? 'شرط اصلی' : 'Main Req.'}</th>
                      <th className="p-3 text-start">{isFa ? 'نکته ۲۰۲۶' : '2026 Note'}</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground/70">
                    {(isFa ? [
                      ['موقت', '۱ سال', '~$380', 'شرکت، کار، تحصیل، خانواده', 'حداکثر ۲ بار تمدید قبل از دائم'],
                      ['دائم', '۳ سال', '~$625', '۳ سال سابقه موقت', 'کارت بیومتریک جدید'],
                      ['سرمایه‌گذار (جدید)', '۵ سال', 'متغیر', 'سرمایه‌گذاری واجد شرایط', 'اقامت دائم از روز اول'],
                    ] : [
                      ['Temporary', '1 year', '~$380', 'Company, work, study, family', 'Max 2 renewals before permanent'],
                      ['Permanent', '3 years', '~$625', '3 years temporary residency', 'New biometric card required'],
                      ['Investor (new)', '5 years', 'Varies', 'Qualifying investment', 'Permanent from day one'],
                    ]).map((row, i) => (
                      <tr key={i} className="border-b border-foreground/8 hover:bg-foreground/2">
                        {row.map((cell, j) => (
                          <td key={j} className={`p-3 ${j===0?'font-bold text-foreground':''} ${j===2?'text-primary font-bold':''}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            {/* ۵. ثبت شرکت */}
            <Section id="company" title={isFa ? '۵. اقامت از طریق ثبت شرکت — پرطرفدارترین روش' : '5. Residency via Company Registration — Most Popular'}>
              <p className="text-sm text-foreground/70 leading-8 mb-5">
                {isFa
                  ? 'ثبت شرکت نه‌فقط مسیر اقامت، بلکه یک فرصت واقعی کسب‌وکار است. مالکیت ۱۰۰٪ بدون نیاز به شریک ارمنی، ثبت ۱ تا ۳ روزه آنلاین، دسترسی به بانکداری بین‌المللی.'
                  : 'Company registration is not just a residency route — it's a real business opportunity. 100% foreign ownership, 1–3 day online registration, international banking access.'}
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div>
                  <h3 className="text-sm font-bold text-foreground mb-2">{isFa ? 'مزایا' : 'Advantages'}</h3>
                  <ul className="space-y-1.5">
                    {(isFa ? [
                      'مالکیت ۱۰۰٪ بدون شریک ارمنی',
                      'ثبت ۱–۳ روزه به‌صورت آنلاین',
                      'نرخ مالیات ۱۸٪ (یکی از پایین‌ترین منطقه)',
                      'اقامت برای مدیر، سهامداران و خانواده',
                      'حساب بانکی ارزی دلاری/یورویی',
                      'معافیت مالیاتی برای شرکت‌های IT',
                    ] : [
                      '100% foreign ownership, no Armenian partner',
                      '1–3 day online registration',
                      '18% corporate tax rate (one of lowest in region)',
                      'Residency for director, shareholders and family',
                      'USD/EUR bank accounts',
                      'Tax exemptions for IT companies',
                    ]).map((item, i) => <CheckItem key={i}>{item}</CheckItem>)}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground mb-2">{isFa ? 'مراحل' : 'Steps'}</h3>
                  <ol className="space-y-1.5 text-sm text-foreground/70">
                    {(isFa ? [
                      'انتخاب نوع شرکت (LLC یا SP) و نام تجاری',
                      'ارائه پاسپورت و ترجمه رسمی مدارک',
                      'ثبت در سامانه e-register.am',
                      'دریافت شماره ثبت و کد مالیاتی',
                      'افتتاح حساب بانکی به نام شرکت',
                      'درخواست اقامت از اداره مهاجرت',
                    ] : [
                      'Choose company type (LLC or SP) and name',
                      'Submit passport and official document translations',
                      'Register on e-register.am',
                      'Receive registration number and tax code',
                      'Open corporate bank account',
                      'Apply for residency at migration authority',
                    ]).map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary font-bold shrink-0">{i+1}.</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-amber-400/8 border border-amber-400/20 text-xs text-foreground/60">
                ⚠️ {isFa
                  ? 'شرکت باید واقعاً فعال باشد — گردش مالی، اظهارنامه مالیاتی منظم. شرکت کاغذی بدون فعالیت واقعی مبنای معتبر اقامت نیست.'
                  : 'Company must be genuinely active — real revenue and regular tax filings. A shell company without real activity is not a valid residency basis.'}
              </div>
            </Section>

            {/* ۶. سرمایه‌گذاری */}
            <Section id="investment" title={isFa ? '۶. اقامت از طریق سرمایه‌گذاری و خرید ملک' : '6. Residency via Investment & Property'}>
              <p className="text-sm text-foreground/70 leading-8 mb-4">
                {isFa
                  ? 'از اوت ۲۰۲۶ مسیر جدید سرمایه‌گذار فعال شده که اقامت دائم ۵ساله را از همان ابتدا بدون گذر از مرحله موقت می‌دهد. مالکیت کامل ملک توسط اتباع خارجی مجاز است (به‌جز زمین کشاورزی).'
                  : 'From August 2026, the new investor route provides permanent 5-year residency from day one, skipping the temporary stage. Full property ownership by foreigners is permitted (except agricultural land).'}
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-primary/10 text-foreground/70">
                      <th className="p-2.5 text-start">{isFa ? 'نوع ملک' : 'Property Type'}</th>
                      <th className="p-2.5 text-start">{isFa ? 'قیمت (دلار)' : 'Price (USD)'}</th>
                      <th className="p-2.5 text-start">{isFa ? 'مالیات سالانه' : 'Annual Tax'}</th>
                      <th className="p-2.5 text-start">{isFa ? 'اجاره ماهانه' : 'Monthly Rent'}</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground/70">
                    {[
                      [isFa?'آپارتمان ۱۰۰م² مرکز ایروان':'100m² apt. central Yerevan', '$150k–$220k', '$400–$800', '$800–$1,200'],
                      [isFa?'آپارتمان ۶۰م² حومه ایروان':'60m² apt. suburbs', '$80k–$120k', '$200–$400', '$500–$800'],
                      [isFa?'ملک تجاری کوچک':'Small commercial property', '$200k–$400k', '$1,000+', isFa?'متغیر':'Varies'],
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-foreground/8">
                        {row.map((c, j) => <td key={j} className="p-2.5">{c}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            {/* ۷. کار */}
            <Section id="work" title={isFa ? '۷. اقامت از طریق کار' : '7. Work-Based Residency'}>
              <p className="text-sm text-foreground/70 leading-8 mb-4">
                {isFa
                  ? 'برای کسانی که پیشنهاد شغلی از شرکت ارمنی دارند یا در حوزه IT، مهندسی، طراحی یا آموزش کار می‌کنند. از اوت ۲۰۲۶ ویزای کاری ورودی جدید لازم است.'
                  : 'For those with a job offer from an Armenian company, or working in IT, engineering, design or education. From August 2026, a new work entry visa is required.'}
              </p>
              <ol className="space-y-2 text-sm text-foreground/70">
                {(isFa ? [
                  'دریافت ویزای کاری ورودی (اعتبار تا ۱۲۰ روز)',
                  'امضای قرارداد کار با کارفرمای ارمنی',
                  'درخواست مجوز کار توسط کارفرما از اداره مهاجرت',
                  'ثبت‌نام در سامانه permits.am برای اقامت موقت',
                  'ثبت بیومتریک حضوری و دریافت کارت اقامت',
                ] : [
                  'Obtain new work entry visa (valid up to 120 days)',
                  'Sign employment contract with Armenian employer',
                  'Employer requests work permit from migration authority',
                  'Register on permits.am for temporary residency',
                  'In-person biometric registration and card pickup',
                ]).map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary font-bold shrink-0">{i+1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-3 p-3 rounded-xl bg-blue-400/8 border border-blue-400/20 text-xs text-foreground/60">
                💡 {isFa
                  ? 'اگر قرارداد فسخ شود، اقامت در خطر است. بسیاری از ایرانیان همزمان شرکت هم ثبت می‌کنند تا پوشش مضاعف داشته باشند.'
                  : 'If the contract is terminated, residency is at risk. Many Iranians register a company simultaneously for extra protection.'}
              </div>
            </Section>

            {/* ۸. تحصیل */}
            <Section id="study" title={isFa ? '۸. اقامت از طریق تحصیل' : '8. Study-Based Residency'}>
              <p className="text-sm text-foreground/70 leading-8 mb-4">
                {isFa
                  ? 'ارمنستان یکی از مقرون‌به‌صرفه‌ترین مقاصد تحصیلی برای ایرانیان است. شهریه ۱٬۰۰۰ تا ۲٬۵۰۰ دلار در سال — در مقایسه با ترکیه ۳٬۰۰۰ تا ۸٬۰۰۰ دلار.'
                  : 'Armenia is one of the most affordable study destinations for Iranians. Tuition: $1,000–$2,500/year — compared to $3,000–$8,000 in Turkey.'}
              </p>
              <ul className="space-y-1.5">
                {(isFa ? [
                  'نامه پذیرش از دانشگاه ارمنی',
                  'ترجمه رسمی مدارک تحصیلی قبلی',
                  'اثبات توانایی مالی',
                  'اقامت دانشجویی یکساله، قابل تمدید تا پایان دوره',
                  'امکان کار پاره‌وقت و تبدیل به اقامت کاری پس از فارغ‌التحصیلی',
                ] : [
                  'Acceptance letter from Armenian university',
                  'Official translation of prior academic credentials',
                  'Proof of financial capacity',
                  '1-year student residency, renewable until graduation',
                  'Part-time work allowed; can convert to work residency after graduation',
                ]).map((item, i) => <CheckItem key={i}>{item}</CheckItem>)}
              </ul>
            </Section>

            {/* ۹. خانواده */}
            <Section id="family" title={isFa ? '۹. اقامت از طریق ازدواج و الحاق خانواده' : '9. Marriage & Family Reunification'}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-bold text-foreground mb-2">
                    {isFa ? 'ازدواج با شهروند ارمنی' : 'Marriage to Armenian Citizen'}
                  </h3>
                  <ul className="space-y-1.5">
                    {(isFa ? [
                      'حداقل سن ۱۸ سال و ثبت رسمی در ارمنستان',
                      'حداقل ۲ سال از تاریخ ازدواج گذشته باشد',
                      'حداقل ۳۶۵ روز اقامت قانونی',
                      'داشتن فرزند مشترک، پروسه را سریع‌تر می‌کند',
                      'نیازی به تسلط به زبان ارمنی نیست',
                    ] : [
                      'Minimum age 18, official registration in Armenia',
                      'At least 2 years since marriage',
                      'At least 365 days of legal residency',
                      'Having a joint child speeds up the process',
                      'No Armenian language proficiency required',
                    ]).map((item, i) => <CheckItem key={i}>{item}</CheckItem>)}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground mb-2">
                    {isFa ? 'الحاق خانواده' : 'Family Reunification'}
                  </h3>
                  <ul className="space-y-1.5">
                    {(isFa ? [
                      'همسر و فرزندان: اثبات پشتیبانی مالی لازم است',
                      'از اوت ۲۰۲۶: اعضای خانواده گسترده (والدین، خواهر-برادر) شرایط جداگانه دارند',
                      'مسکن مناسب در ارمنستان الزامی است',
                      'اقامت موقت یکساله قابل تمدید',
                    ] : [
                      'Spouse and children: proof of financial support required',
                      'From Aug 2026: extended family (parents, siblings) have separate conditions',
                      'Suitable accommodation in Armenia required',
                      '1-year temporary residency, renewable',
                    ]).map((item, i) => <CheckItem key={i}>{item}</CheckItem>)}
                  </ul>
                </div>
              </div>
            </Section>

            {/* ۱۰. شهروندی */}
            <Section id="citizenship" title={isFa ? '۱۰. مسیر شهروندی و پاسپورت ارمنستان' : '10. Citizenship & Armenian Passport'}>
              <p className="text-sm text-foreground/70 leading-8 mb-4">
                {isFa
                  ? 'پاسپورت ارمنستان دسترسی به ۵۹ کشور بدون ویزا را می‌دهد و هدف نهایی بسیاری از ایرانیان مقیم ایروان است. تابعیت دوگانه کاملاً مجاز است.'
                  : 'Armenia's passport offers visa-free access to 59 countries and is the ultimate goal of many Iranians based in Yerevan. Dual citizenship is fully permitted.'}
              </p>
              <ul className="space-y-1.5">
                {(isFa ? [
                  'حداقل ۳ سال اقامت قانونی (موقت یا دائم) در ارمنستان',
                  'سکونت واقعی — نه صرفاً حضور کاغذی',
                  'عدم سوءپیشینه و مدارک مالی کافی',
                  'موفقیت در آزمون قانون اساسی (سطح مقدماتی زبان ارمنی)',
                  'تابعیت دوگانه مجاز — نیازی به ترک تابعیت ایرانی نیست',
                  'مسیر سرمایه‌گذار جدید: جزئیات تأثیر بر مسیر شهروندی هنوز اعلام نشده',
                ] : [
                  'At least 3 years of legal residency (temporary or permanent)',
                  'Genuine residence — not just paper presence',
                  'Clean record and sufficient financial documentation',
                  'Pass constitutional knowledge test (basic Armenian language)',
                  'Dual citizenship allowed — no need to renounce Iranian citizenship',
                  'New investor route: impact on citizenship timeline not yet announced',
                ]).map((item, i) => <CheckItem key={i}>{item}</CheckItem>)}
              </ul>
            </Section>

            {/* ۱۱. مراحل و هزینه */}
            <Section id="process" title={isFa ? '۱۱. مراحل اجرایی و هزینه‌ها' : '11. Process & Costs'}>
              <div className="overflow-x-auto mb-5">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-primary/10 text-foreground/70">
                      <th className="p-3 text-start">{isFa ? 'آیتم' : 'Item'}</th>
                      <th className="p-3 text-start">{isFa ? 'هزینه (دلار)' : 'Cost (USD)'}</th>
                      <th className="p-3 text-start">{isFa ? 'توضیح' : 'Note'}</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground/70">
                    {(isFa ? [
                      ['هزینه دولتی اقامت موقت', '~$380', '۱۵۰٬۰۰۰ درام — از ژانویه ۲۰۲۷ گران‌تر'],
                      ['هزینه دولتی اقامت دائم', '~$625', '۲۵۰٬۰۰۰ درام'],
                      ['ترجمه رسمی و آپوستیل', '$50–$150', 'به ازای هر سند'],
                      ['خدمات حقوقی و مشاوره', '$200–$600', 'بر اساس پیچیدگی پرونده'],
                      ['ثبت شرکت (هزینه دولتی)', '$50–$200', 'بدون حداقل سرمایه'],
                      ['افتتاح حساب بانکی', '$0–$50', 'بستگی به بانک'],
                    ] : [
                      ['Temporary residency gov. fee', '~$380', '150,000 AMD — increases Jan 2027'],
                      ['Permanent residency gov. fee', '~$625', '250,000 AMD'],
                      ['Official translation & apostille', '$50–$150', 'Per document'],
                      ['Legal services & consulting', '$200–$600', 'Based on case complexity'],
                      ['Company registration fee', '$50–$200', 'No minimum capital required'],
                      ['Bank account opening', '$0–$50', 'Depends on bank'],
                    ]).map((row, i) => (
                      <tr key={i} className="border-b border-foreground/8">
                        <td className="p-3 font-medium">{row[0]}</td>
                        <td className="p-3 text-primary font-bold">{row[1]}</td>
                        <td className="p-3 text-foreground/50">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <h3 className="text-sm font-bold text-foreground mb-2">{isFa ? 'زمان‌بندی واقعی' : 'Realistic Timeline'}</h3>
              <ul className="space-y-1.5">
                {(isFa ? [
                  'آماده‌سازی مدارک: ۲ تا ۴ هفته (قبل از سفر)',
                  'ثبت شرکت (در صورت نیاز): ۱ تا ۳ روز کاری در ایروان',
                  'ارائه درخواست اقامت: روز اول یا دوم حضور',
                  'صدور کارت اقامت: ۲ تا ۶ هفته پس از تأیید درخواست',
                ] : [
                  'Document preparation: 2–4 weeks (before travel)',
                  'Company registration (if needed): 1–3 working days in Yerevan',
                  'Submit residency application: day 1 or 2 of arrival',
                  'Residency card issued: 2–6 weeks after approval',
                ]).map((item, i) => <CheckItem key={i}>{item}</CheckItem>)}
              </ul>
            </Section>

            {/* ۱۲. حقوق */}
            <Section id="rights" title={isFa ? '۱۲. حقوق و امکانات دارندگان اقامت' : '12. Rights & Benefits of Residents'}>
              <ul className="space-y-1.5">
                {(isFa ? [
                  'کار: دسترسی کامل به بازار کار ارمنستان (با مجوز کار)',
                  'آموزش: ثبت‌نام فرزندان در مدارس دولتی رایگان',
                  'درمان: خدمات درمانی دولتی و خصوصی — بیمه خصوصی از ۳۰۰ دلار در سال',
                  'ملک: خرید کامل آپارتمان و ملک تجاری (نه زمین کشاورزی)',
                  'بانک: افتتاح حساب دلاری، یورویی و درامی',
                  'سفر: ورود و خروج آزاد با رعایت قانون ۱۸۳ روز',
                  'کسب‌وکار: ثبت شرکت، عقد قرارداد، صادرات و واردات',
                  'سربازی: ایرانیان مقیم ملزم به خدمت نظامی ارمنستان نیستند',
                ] : [
                  'Work: full access to Armenian labor market (with work permit)',
                  'Education: enroll children in free public schools',
                  'Healthcare: public and private services — private insurance from $300/year',
                  'Property: full purchase of apartments and commercial property (not agricultural land)',
                  'Banking: open USD, EUR and AMD accounts',
                  'Travel: free entry and exit, respecting the 183-day rule',
                  'Business: register companies, sign contracts, import/export',
                  'Military: Iranian residents are NOT subject to Armenian military service',
                ]).map((item, i) => <CheckItem key={i}>{item}</CheckItem>)}
              </ul>
            </Section>

            {/* ۱۳. مقایسه */}
            <Section id="compare" title={isFa ? '۱۳. مقایسه با ترکیه، گرجستان و اروپا' : '13. Comparison: Turkey, Georgia, Europe'}>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-primary/10 text-foreground/70">
                      <th className="p-2.5 text-start">{isFa ? 'معیار' : 'Criteria'}</th>
                      <th className="p-2.5 text-center text-primary font-bold">{isFa ? 'ارمنستان' : 'Armenia'}</th>
                      <th className="p-2.5 text-center">{isFa ? 'ترکیه' : 'Turkey'}</th>
                      <th className="p-2.5 text-center">{isFa ? 'گرجستان' : 'Georgia'}</th>
                      <th className="p-2.5 text-center">{isFa ? 'اروپا' : 'Europe'}</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground/70">
                    {[
                      [isFa?'حداقل سرمایه':'Min. capital', isFa?'۰ (شرکت)':\'0 (company)\', isFa?'$۴۰۰k (ملک)':'$400k (property)', isFa?'۰ (آزاد ۳۶۵ روز)':\'0 (free 365d)\', '€500k'],
                      [isFa?'مدت اقامت':'Processing', isFa?'۱–۲ ماه':'1–2 months', isFa?'۱–۳ ماه':'1–3 months', isFa?'فوری':'Immediate', isFa?'۳–۱۲ ماه':'3–12 months'],
                      [isFa?'مسیر شهروندی':'Citizenship', isFa?'۳ سال':'3 years', isFa?'۵ سال':'5 years', isFa?'۶–۱۰ سال':'6–10 years', isFa?'۵–۱۰ سال':'5–10 years'],
                      [isFa?'تابعیت دوگانه':'Dual citizenship', '✅', '✅', '⚠️', isFa?'بستگی دارد':'Depends'],
                      [isFa?'نزدیکی به ایران':'Proximity to Iran', isFa?'✅ مرز زمینی':'✅ Land border', isFa?'✅ پرواز':'✅ Flight', isFa?'✅ نزدیک':'✅ Near', isFa?'❌ دور':'❌ Far'],
                      [isFa?'بانکداری برای ایرانیان':'Banking for Iranians', '✅', '⚠️', '✅', '⚠️'],
                      [isFa?'هزینه زندگی ماهانه':'Monthly living cost', '$800–1,500', '$1,000–2,500', '$700–1,200', '€2,500–4,500'],
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-foreground/8">
                        <td className="p-2.5 font-medium">{row[0]}</td>
                        <td className="p-2.5 text-center text-primary font-bold">{row[1]}</td>
                        <td className="p-2.5 text-center">{row[2]}</td>
                        <td className="p-2.5 text-center">{row[3]}</td>
                        <td className="p-2.5 text-center">{row[4]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-foreground/50 p-3 rounded-xl bg-foreground/3 border border-foreground/8">
                💬 {isFa
                  ? 'گرجستان سریع‌تر و ارزان‌تر است اما مسیر شهروندی بسیار طولانی دارد. ترکیه مشکلات بانکی برای ایرانیان دارد. اروپا پاسپورت قوی‌تر می‌دهد اما چند برابر پیچیده‌تر و گران‌تر است. ارمنستان تعادل بین قیمت، سرعت و مزایای بلندمدت را دارد.'
                  : 'Georgia is faster and cheaper but has a very long citizenship path. Turkey has banking issues for Iranians. Europe offers a stronger passport but is several times more complex and expensive. Armenia balances cost, speed, and long-term benefits.'}
              </p>
            </Section>

            {/* ۱۴. FAQ */}
            <Section id="faq" title={isFa ? '۱۴. سوالات متداول' : '14. Frequently Asked Questions'}>
              <div className="space-y-3">
                {(isFa ? [
                  {q: 'آیا می‌توانم بدون داشتن شرکت، فقط با اجاره خانه اقامت بگیرم؟', a: 'خیر. اجاره خانه به‌تنهایی مبنای اقامت نیست. باید از یکی از مسیرهای رسمی (شرکت، کار، تحصیل، خانواده یا سرمایه‌گذاری) استفاده کنید.'},
                  {q: 'آیا اقامت ارمنستان ویزای شنگن می‌دهد؟', a: 'نه، در حال حاضر خیر. اما با پیشرفت مسیر الحاق ارمنستان به اتحادیه اروپا، این ممکن است در بلندمدت تغییر کند.'},
                  {q: 'اگر بیشتر از ۶ ماه خارج از ارمنستان باشم چه می‌شود؟', a: 'از نوامبر ۲۰۲۶، غیبت بیش از ۱۸۳ روز در سال باید ظرف ۱۰ روز به مقامات اطلاع داده شود. عدم اطلاع ممکن است اقامت را به خطر بیندازد.'},
                  {q: 'آیا فرزندانم هم می‌توانند اقامت بگیرند؟', a: 'بله. همسر و فرزندان می‌توانند از طریق الحاق خانواده اقامت بگیرند. از اوت ۲۰۲۶ اثبات پشتیبانی مالی فقط برای همسر و فرزندان (نه خانواده گسترده) لازم است.'},
                  {q: 'چقدر طول می‌کشد تا کارت اقامت بگیرم؟', a: 'معمولاً ۲ تا ۶ هفته پس از ارائه درخواست کامل. آماده‌سازی مدارک قبل از سفر ۲ تا ۴ هفته اضافه می‌کند.'},
                  {q: 'آیا اقامت موقت را می‌توانم به دائم تبدیل کنم؟', a: 'بله. پس از ۳ سال اقامت موقت و داشتن فعالیت اقتصادی، می‌توانید اقامت دائم ۳ساله بگیرید.'},
                ] : [
                  {q: 'Can I get residency just by renting an apartment?', a: 'No. Renting alone is not a valid residency basis. You must use one of the official routes: company, work, study, family, or investment.'},
                  {q: 'Does Armenia residency give me a Schengen visa?', a: 'Not currently. However, as Armenia advances toward EU membership, this may change in the long term.'},
                  {q: 'What happens if I'm outside Armenia for more than 6 months?', a: 'From November 2026, absence over 183 days per year must be reported within 10 days. Failure to report may put your residency at risk.'},
                  {q: 'Can my children also get residency?', a: 'Yes. Spouse and children can obtain residency through family reunification. From August 2026, financial support proof is only required for spouse and children, not extended family.'},
                  {q: 'How long does it take to receive the residency card?', a: 'Usually 2–6 weeks after submitting a complete application. Document preparation before travel adds 2–4 weeks.'},
                  {q: 'Can I convert temporary to permanent residency?', a: 'Yes. After 3 years of temporary residency with economic activity, you can apply for 3-year permanent residency.'},
                ]).map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl border border-foreground/8 bg-foreground/2">
                    <div className="text-sm font-bold text-foreground mb-2">❓ {item.q}</div>
                    <div className="text-sm text-foreground/65 leading-relaxed">💬 {item.a}</div>
                  </div>
                ))}
              </div>
            </Section>

            {/* CTA */}
            <div className="rounded-2xl p-7 bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/25 text-center">
              <h3 className="text-xl font-black text-foreground mb-2">
                {isFa ? 'آماده شروع هستید؟' : 'Ready to get started?'}
              </h3>
              <p className="text-sm text-foreground/60 mb-5 max-w-md mx-auto">
                {isFa
                  ? 'کاسپین گروپ با بیش از ۱۵ سال سابقه در ایروان، تمام مراحل اقامت، ثبت شرکت و مشاوره حقوقی را زیر یک سقف انجام می‌دهد.'
                  : 'Caspian Group, with over 15 years of experience in Yerevan, handles all residency steps, company registration, and legal consulting under one roof.'}
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a href="/contact" className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition text-sm shadow-md">
                  {isFa ? '📞 مشاوره رایگان' : '📞 Free Consultation'}
                </a>
                <a href="/residency/business" className="inline-flex items-center gap-2 border border-primary/30 text-primary font-bold px-6 py-3 rounded-xl hover:bg-primary/10 transition text-sm">
                  {isFa ? '🏢 ثبت شرکت' : '🏢 Register Company'}
                </a>
              </div>
            </div>

            <RelatedServices currentPath="/residency/armenia" />
            <SeoFooterLinks />
          </main>
        </div>
      </div>
    </div>
  );
}

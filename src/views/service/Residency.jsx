'use client';
import React from 'react';
import { useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';

function Content() {
  const { lang } = useLang();
  const isFa = lang === 'fa';
  const isRu = lang === 'ru';


  return (
    <ServicePageLayout titleFa="اقامت ارمنستان" titleEn="Armenia Residency" titleRu="ВНЖ Армении"
      subtitleFa="سریع‌ترین و مقرون‌به‌صرفه‌ترین اقامت منطقه برای ایرانیان"
      subtitleEn="The fastest and most affordable residency in the region for Iranians"
      subtitleRu="Самый быстрый и доступный ВНЖ в регионе для иранских граждан"
      heroImage="/images/Yerevan_Residency.webp"
      serviceType="residency">

      <div className="rounded-2xl overflow-hidden mb-6 aspect-video relative">
        <img src="/images/Yerevan_Residency.webp" alt={isFa ? 'ایروان ارمنستان — اقامت' : 'Yerevan Armenia Residency'} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        <div className="absolute bottom-4 start-4 flex items-center gap-2">
          <img src="/images/am.webp" alt="Armenia flag" className="h-6 rounded shadow" />
          <span className="text-sm font-bold text-white drop-shadow">{isFa ? 'ایروان، ارمنستان' : isRu ? 'Ереван, Армения' : 'Yerevan, Armenia'}</span>
        </div>
      </div>

      {/* بنر قانون جدید */}
      <div className="glass-panel rounded-2xl p-5 mb-6 border border-amber-400/40 bg-gradient-to-br from-amber-400/10 to-transparent">
        <span className="inline-block text-xs font-bold text-amber-400 bg-amber-400/15 rounded-full px-3 py-1 mb-3">
          📌 {isFa ? 'به‌روزرسانی مهم — قانون جدید اتباع خارجی' : isRu ? 'Важное обновление — новый закон об иностранцах' : 'Important Update — New Law on Foreigners'}
        </span>
        <h2 className="text-base font-black text-foreground mb-2">
          {isFa ? 'تغییرات قانون اقامت ارمنستان از ۱ نوامبر ۲۰۲۶' : isRu ? 'Изменения в законе о ВНЖ Армении с 1 ноября 2026 года' : 'Armenia Residency Law Changes from November 1, 2026'}
        </h2>
        <p className="text-sm text-foreground/70 leading-relaxed mb-3">
          {isFa ? 'دولت ارمنستان اصلاحیه جدید قانون اتباع خارجی را تصویب کرده. مهم‌ترین تغییرات:' : isRu ? 'Армения приняла поправки к Закону об иностранцах. Основные изменения:' : 'Armenia has approved amendments to its Law on Foreigners. Key changes:'}
        </p>
        <CheckList items={isFa ? [
          'ثبت‌نام کاملاً الکترونیک و صدور کارت اقامت بیومتریک',
          'هزینه دولتی: ۱۵۰٬۰۰۰ درام (حدود ۳۸۰ دلار) برای اقامت یک‌ساله | ۲۵۰٬۰۰۰ درام برای اقامت دائم ۵ساله (غیرقابل استرداد در صورت رد درخواست)',
          'سهمیه سالانه برای صدور هر نوع اقامت — اقدام زودهنگام اهمیت بیشتری پیدا کرده',
          'برای اقامت از طریق فعالیت اقتصادی/ثبت شرکت، نیاز به گردش مالی یا موجودی حساب حداقل ۱ میلیون درام',
          'غیبت بیش از ۱۸۳ روز در سال ریسک لغو اقامت دارد',
          'اقامت دائم ۵ساله جایگزین وضعیت قبلی «اقامت ویژه ۱۰ساله» شده و نیاز به ۳ سال سابقه اقامت موقت دارد',
        ] : isRu ? [
          'Полностью электронная подача и биометрические карты ВНЖ',
          'Госпошлины: 150 000 драм (~$380) за годовой ВНЖ | 250 000 драм за постоянный 5-летний ВНЖ (без возврата при отказе)',
          'Введены ежегодные квоты — раннее обращение стало важнее',
          'Для бизнес-ВНЖ — оборот или остаток не менее 1 000 000 драм',
          'Отсутствие более 183 дней в году — риск аннулирования',
          '5-летний ПМЖ требует 3 лет предыдущего ВНЖ',
        ] : [
          'Fully electronic application process and biometric residence cards',
          'Government fees: 150,000 AMD (~$380) for 1-year residency | 250,000 AMD for 5-year permanent residency (non-refundable if rejected)',
          'Annual quotas introduced for each residency category — acting early matters more now',
          'Business/entrepreneur residency requires minimum turnover or account balance of 1,000,000 AMD',
          'Absence of more than 183 days per year may result in revocation',
          '5-year permanent residency requires 3 years of prior temporary residency',
        ]} />
        <p className="text-xs text-foreground/50 mt-3 italic">
          {isFa ? 'تا پیش از اجرای قانون جدید، روند فعلی هنوز ساده‌تر است — برای برنامه‌ریزی دقیق با کارشناسان کاسپین در واتساپ مشورت کنید.' : isRu ? 'До вступления нового закона в силу текущий процесс проще — свяжитесь с командой Caspian в WhatsApp.' : 'Until the new law takes effect, the current process remains simpler — contact Caspian\'s team on WhatsApp for up-to-date guidance.'}
        </p>
      </div>

      {isFa && <>
        <InfoBlock title="چرا اقامت ارمنستان؟">
          <p>ارمنستان در سال‌های اخیر به یکی از پرطرفدارترین مقاصد مهاجرتی برای ایرانیان تبدیل شده — و دلایل خوبی هم دارد. نزدیکی جغرافیایی، ورود بدون ویزای توریستی تا ۱۸۰ روز در سال، مالیات شخصی ۱۰ درصد، هزینه زندگی پایین‌تر از اکثر کشورهای اروپایی، و از همه مهم‌تر: سرعت فرآیند اقامت — همه اینها باعث شده ارمنستان را از ترکیه، گرجستان یا امارات متمایز کند.</p>
        </InfoBlock>

        <InfoBlock title="مقایسه اقامت ارمنستان با گزینه‌های رقیب">
          <p className="mb-3">یکی از مهم‌ترین سوال‌هایی که ایرانیان دارند این است که چرا ارمنستان به جای ترکیه، گرجستان یا امارات؟ پاسخ به هدف شما بستگی دارد:</p>

          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">ارمنستان در برابر ترکیه</h3>
          <p className="mb-3">اقامت ترکیه از طریق خرید ملک حداقل ۲۰۰٬۰۰۰ دلار نیاز دارد. اقامت ارمنستان از طریق ثبت شرکت در ۳ روز و با هزینه‌ای بسیار کمتر ممکن است. مالیات شرکت‌ها در ارمنستان ۱۸٪ (یا ۵٪ ساده‌شده) در مقابل ۲۰٪ ترکیه است.</p>

          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">ارمنستان در برابر گرجستان</h3>
          <p className="mb-3">گرجستان هم گزینه خوبی است اما از اوایل ۲۰۲۴ قوانین سخت‌گیرانه‌تری برای اتباع ایرانی اعمال کرده. ارمنستان از نظر روابط سیاسی با ایران موضع بهتری دارد و کمونیتی فارسی‌زبان بزرگ‌تری در آن مستقر است.</p>

          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">ارمنستان در برابر امارات</h3>
          <p>امارات هزینه زندگی بالاتری دارد و وابستگی شدید به ویزای کاری/تجاری ایجاد می‌کند. ارمنستان برای کسانی که به دنبال اقامت باثبات‌تر و هزینه کمتر هستند انتخاب بهتری است.</p>
        </InfoBlock>

        <InfoBlock title="روش‌های دریافت اقامت ارمنستان">
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">۱. ثبت شرکت (سریع‌ترین روش — توصیه‌شده)</h3>
          <p className="mb-3">ثبت LLC در ارمنستان در ۳ روز کاری انجام می‌شود. پس از ثبت شرکت به‌عنوان مدیر یا سهامدار، می‌توانید برای کارت اقامت موقت یک‌ساله اقدام کنید. این روش برای کسانی که می‌خواهند همزمان کسب‌وکار داشته باشند و اقامت بگیرند، بهترین انتخاب است.</p>

          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">۲. سرمایه‌گذاری</h3>
          <p className="mb-3">سرمایه‌گذاری مستقیم در اقتصاد ارمنستان (ملک با رویکرد درآمدزایی، سهام شرکت‌های ارمنی) یکی از روش‌های شناخته‌شده برای اقامت است. خرید ملک به‌تنهایی کافی نیست — باید از ملک درآمدی مشخص داشته باشید.</p>

          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">۳. اشتغال در شرکت ارمنستانی</h3>
          <p className="mb-3">کار برای یک شرکت ارمنی که برایتان مجوز کار صادر کند، پایه اقامت است. برای کسانی که در حوزه IT، پزشکی یا مهندسی مهارت دارند، این مسیر گزینه‌ای واقعی است.</p>

          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">۴. تحصیل</h3>
          <p className="mb-3">پذیرش در دانشگاه‌های ارمنستان (YSU، YSMU، Slavonic) پایه ویزای تحصیلی و اقامت دانشجویی است. شهریه سالانه از ۱۵۰۰ تا ۸۰۰۰ دلار متفاوت است.</p>

          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">۵. ازدواج با شهروند ارمنستانی</h3>
          <p>بعد از ۳ سال ازدواج با شهروند ارمنستانی می‌توان برای اقامت دائم اقدام کرد.</p>
        </InfoBlock>

        <InfoBlock title="هزینه واقعی اخذ اقامت ارمنستان (شفاف و کامل)">
          <p className="mb-3">یکی از رایج‌ترین شکایات متقاضیان اقامت این است که هیچ‌جا هزینه واقعی را شفاف نمی‌نویسند. ما اینجا سعی می‌کنیم صادقانه هزینه‌ها را بنویسیم:</p>
          <CheckList items={[
            'هزینه دولتی کارت اقامت یک‌ساله: ۱۵۰٬۰۰۰ درام (حدود ۳۸۰ دلار) — پس از اجرای قانون جدید نوامبر ۲۰۲۶',
            'هزینه ثبت شرکت LLC: ۱۰۰ تا ۱۵۰ دلار هزینه رسمی دولتی',
            'هزینه ترجمه و تأیید مدارک (اسناد هویتی، پاسپورت): ۵۰ تا ۱۵۰ دلار',
            'اجاره آپارتمان برای ثبت آدرس محل سکونت: ضروری — هزینه‌اش بستگی به محله دارد',
            'هزینه حسابداری ماهانه شرکت: ۵۰ تا ۱۵۰ دلار در ماه',
            'هزینه خدمات مشاوره و پیگیری کاسپین: برای قیمت دقیق مشاوره رایگان بگیرید',
          ]} />
          <p className="text-xs text-foreground/50 mt-3">توجه: هزینه‌ها بر اساس قانون جدید نوامبر ۲۰۲۶ محاسبه شده‌اند. قبل از این تاریخ هزینه دولتی پایین‌تر بود.</p>
        </InfoBlock>

        <InfoBlock title="مدارک لازم برای اقامت از طریق ثبت شرکت">
          <CheckList items={[
            'پاسپورت معتبر (حداقل ۶ ماه اعتبار باقیمانده)',
            'عکس پرسنلی زمینه سفید',
            'گواهی عدم سوء پیشینه (از ایران) — ترجمه رسمی به ارمنی یا روسی',
            'گواهی سلامت (در برخی موارد)',
            'مدرک آدرس محل سکونت در ارمنستان (قرارداد اجاره)',
            'مدارک ثبت شرکت (پس از ثبت)',
          ]} />
        </InfoBlock>

        <InfoBlock title="مراحل گام‌به‌گام اقامت با کاسپین گروپ">
          <ol className="space-y-3 list-decimal list-inside text-sm text-foreground/70">
            <li><strong className="text-foreground/85">مشاوره رایگان:</strong> بررسی وضعیت فردی، انتخاب بهترین روش اقامت و برآورد هزینه دقیق</li>
            <li><strong className="text-foreground/85">آماده‌سازی مدارک:</strong> راهنمایی برای تهیه، ترجمه و تأیید رسمی مدارک ایرانی</li>
            <li><strong className="text-foreground/85">ثبت شرکت:</strong> ثبت LLC در ۳ روز کاری — حضور شما الزامی است یا می‌توان با وکالت‌نامه از راه دور انجام داد</li>
            <li><strong className="text-foreground/85">ثبت آدرس سکونت:</strong> تنظیم قرارداد اجاره رسمی (لازمه دریافت کارت اقامت)</li>
            <li><strong className="text-foreground/85">درخواست کارت اقامت:</strong> ارسال مدارک به اداره مهاجرت ارمنستان</li>
            <li><strong className="text-foreground/85">دریافت کارت اقامت:</strong> معمولاً ۲۰ تا ۴۰ روز پس از درخواست کامل</li>
          </ol>
        </InfoBlock>

        <InfoBlock title="بعد از اقامت چه کنم؟ — راهنمای عملی">
          <p className="mb-3">اقامت گرفتن شروع کار است، نه پایان آن. کاسپین گروپ در تمام مراحل بعدی هم همراه شماست:</p>

          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">افتتاح حساب بانکی</h3>
          <p className="mb-3">با داشتن کارت اقامت می‌توانید در بانک‌های ارمنستان حساب چندارزی (درام، دلار، یورو) باز کنید. این حساب می‌تواند کارت‌های ویزا و مسترکارت بین‌المللی صادر کند.</p>

          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">بیمه درمانی</h3>
          <p className="mb-3">نظام بهداشتی ارمنستان هزینه مراقبت‌های اولیه را برای مقیمان پوشش می‌دهد. بیمه تکمیلی خصوصی نیز از ۵۰ تا ۲۰۰ دلار در ماه موجود است.</p>

          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">ثبت‌نام فرزندان در مدرسه</h3>
          <p className="mb-3">فرزندان مقیمان می‌توانند در مدارس دولتی ارمنستان (رایگان)، مدارس بین‌المللی یا مدارس با زبان تدریس روسی ثبت‌نام کنند.</p>

          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">اخذ گواهینامه رانندگی ارمنستان</h3>
          <p>دارندگان گواهینامه ایرانی با ارائه مدارک کافی می‌توانند گواهینامه ارمنستانی دریافت کنند — که برای رانندگی در اروپا کاربردی‌تر است.</p>
        </InfoBlock>

        <InfoBlock title="اشتباهات رایج در اخذ اقامت ارمنستان — از آنها پرهیز کنید">
          <CheckList items={[
            'اجاره آپارتمان بدون قرارداد رسمی: برای ثبت آدرس محل سکونت، قرارداد کتبی و ترجیحاً ثبت‌شده الزامی است — اجاره شفاهی یا از طریق دوست قابل قبول نیست',
            'محاسبه نکردن ۱۸۳ روز حضور: قانون جدید غیبت بیش از این مدت را ریسک لغو اقامت می‌داند — تاریخ‌های ورود و خروج را ثبت کنید',
            'ثبت شرکت بدون حسابداری فعال: شرکت بدون فعالیت مالی ثبت‌شده ممکن است پایه اقامت را تضعیف کند',
            'تأخیر در تمدید: کارت اقامت یک‌ساله باید پیش از انقضا تمدید شود — تمدید دیرهنگام ممکن است جریمه داشته باشد',
            'انتظار برای اطمینان کامل: با اجرای قانون جدید نوامبر ۲۰۲۶ و سهمیه‌های سالانه، اقدام زودهنگام اهمیت بیشتری پیدا کرده',
          ]} />
        </InfoBlock>

        <InfoBlock title="هزینه زندگی واقعی در ایروان ۲۰۲۶">
          <p className="mb-3">دانستن هزینه واقعی زندگی در ایروان برای تصمیم‌گیری درست ضروری است:</p>
          <CheckList items={[
            'هزینه زندگی یک نفر بدون اجاره: ۲۸۰٬۰۰۰ تا ۳۳۰٬۰۰۰ درام (حدود ۷۰۰ تا ۸۳۰ دلار) در ماه',
            'اجاره آپارتمان یک‌خوابه مرکز شهر: ۵۰۰ تا ۷۰۰ دلار در ماه',
            'اجاره آپارتمان یک‌خوابه محلات دورتر: ۳۰۰ تا ۵۰۰ دلار در ماه',
            'هزینه ماهانه یک خانواده ۴ نفره (بدون اجاره): حدود ۲٬۴۰۰ دلار',
            'حمل‌ونقل عمومی: ارزان و قابل قبول — بلیط مترو حدود ۰.۲۵ دلار',
            'خرید ملک در مرکز ایروان: متری ۳٬۵۰۰ تا ۴٬۰۰۰ دلار',
          ]} />
          <p className="text-xs text-foreground/50 mt-3">منبع: داده‌های Numbeo و بازار واقعی ایروان — ۲۰۲۶</p>
        </InfoBlock>

        <InfoBlock title="مزایای اقامت ارمنستان">
          <CheckList items={[
            'کارت اقامت معتبر برای افتتاح حساب‌های بانکی بین‌المللی (ویزا، مسترکارت)',
            'دریافت اقامت در کمتر از ۳۰ روز — سریع‌تر از اکثر کشورهای منطقه',
            'مالیات شخصی ۱۰٪ — یکی از پایین‌ترین نرخ‌های منطقه',
            'مالیات شرکت: ۱۸٪ عمومی یا ۵٪ ساده‌شده برای کسب‌وکارهای کوچک',
            'دسترسی به بازارهای اروپایی از طریق CEPA (موافقتنامه شراکت جامع با اتحادیه اروپا)',
            'محیط امن، مردم مهمان‌نواز و کمونیتی فارسی‌زبان قابل توجه',
            'تحصیل رایگان فرزندان در مدارس دولتی ارمنستان',
            'پل ارتباطی برای اقامت‌های بزرگ‌تر در آینده (اروپا، CIS)',
          ]} />
        </InfoBlock>
      </>}

      {lang === 'en' && <>
        <InfoBlock title="Why Armenia Residency?">
          <p>Armenia has become one of the most popular migration destinations for Iranians — with good reason. Geographic proximity, visa-free entry for up to 180 days per year, 10% personal income tax, lower cost of living than most European countries, and above all: the speed of the residency process — all of these set Armenia apart from Turkey, Georgia, or the UAE.</p>
        </InfoBlock>

        <InfoBlock title="Armenia vs. Competing Residency Destinations">
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">Armenia vs. Turkey</h3>
          <p className="mb-3">Turkey's property-based residency requires a minimum $200,000 purchase. Armenia's company registration route takes 3 days at a fraction of the cost. Armenia's corporate tax (18% or 5% simplified) is also competitive against Turkey's 20%.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">Armenia vs. Georgia</h3>
          <p className="mb-3">Georgia is a solid option but has imposed stricter rules for Iranian nationals since early 2024. Armenia has better political relations with Iran and a larger Persian-speaking expat community.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">Armenia vs. UAE</h3>
          <p>UAE has a higher cost of living and heavy dependence on employment/business visas. Armenia is better for those seeking more stable, lower-cost residency.</p>
        </InfoBlock>

        <InfoBlock title="How to Obtain Armenia Residency">
          <CheckList items={[
            'Company registration (fastest — 3 working days)',
            'Investment in Armenia (property with income, company shares)',
            'Employment at an Armenian company',
            'Study at an Armenian university',
            'Marriage to an Armenian citizen (permanent residency after 3 years)',
          ]} />
        </InfoBlock>

        <InfoBlock title="Real Costs — Transparent Breakdown">
          <CheckList items={[
            'Government fee for 1-year residency card: 150,000 AMD (~$380) — from November 2026',
            'LLC company registration government fee: $100–$150',
            'Document translation and notarization: $50–$150',
            'Monthly company accounting: $50–$150/month',
            'Rental apartment for residence registration: required — cost depends on neighborhood',
          ]} />
        </InfoBlock>

        <InfoBlock title="After Residency — Practical Guide">
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">Bank Account Opening</h3>
          <p className="mb-3">With a residency card, you can open multi-currency accounts (AMD, USD, EUR) at Armenian banks with international Visa and Mastercard debit cards.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">Health Insurance</h3>
          <p className="mb-3">Armenia's health system covers basic care for residents. Private supplemental insurance runs $50–$200/month.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">Children's Schooling</h3>
          <p>Children of residents can enroll in free Armenian state schools, international schools, or Russian-medium schools.</p>
        </InfoBlock>

        <InfoBlock title="Common Mistakes to Avoid">
          <CheckList items={[
            'Renting without an official contract: A written lease is required for residence registration — verbal agreements are not accepted',
            'Ignoring the 183-day presence requirement: The new law treats absence beyond 183 days/year as a revocation risk',
            'Registering a company without active accounting: An inactive company may weaken your residency basis',
            'Delaying renewal: The 1-year card must be renewed before expiry',
          ]} />
        </InfoBlock>

        <InfoBlock title="Benefits of Armenia Residency">
          <CheckList items={[
            'Residency card enables international bank accounts (Visa, Mastercard)',
            'Residency in under 30 days — faster than most countries in the region',
            '10% personal income tax — one of the lowest in the region',
            'Corporate tax: 18% standard or 5% simplified for small businesses',
            'Access to European markets via the EU-Armenia CEPA agreement',
            'Safe environment, welcoming locals, and a sizable Persian-speaking community',
            'Free schooling for children in Armenian state schools',
          ]} />
        </InfoBlock>
      </>}

      {isRu && <>
        <InfoBlock title="Почему ВНЖ Армении?">
          <p>Армения стала одним из самых популярных направлений для иранских мигрантов. Географическая близость, безвизовый въезд до 180 дней в год, подоходный налог 10%, низкая стоимость жизни и высокая скорость процесса — всё это выделяет Армению среди Турции, Грузии или ОАЭ.</p>
        </InfoBlock>

        <InfoBlock title="Способы получения ВНЖ Армении">
          <CheckList items={[
            'Регистрация компании (самый быстрый — 3 рабочих дня)',
            'Инвестиции (недвижимость с доходом, акции армянских компаний)',
            'Трудоустройство в армянской компании',
            'Обучение в университете Армении',
            'Брак с гражданином Армении (ПМЖ через 3 года)',
          ]} />
        </InfoBlock>

        <InfoBlock title="Реальные расходы">
          <CheckList items={[
            'Госпошлина за годовой ВНЖ: 150 000 драм (~$380) — с ноября 2026',
            'Регистрация ООО: $100–$150 госпошлина',
            'Перевод и нотариальное заверение документов: $50–$150',
            'Ежемесячное бухгалтерское обслуживание: $50–$150/месяц',
          ]} />
        </InfoBlock>

        <InfoBlock title="После получения ВНЖ">
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">Открытие банковского счёта</h3>
          <p className="mb-3">С картой ВНЖ можно открыть мультивалютные счета в армянских банках с международными картами Visa и Mastercard.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">Школы для детей</h3>
          <p>Дети резидентов могут учиться в бесплатных государственных школах, международных или русскоязычных школах.</p>
        </InfoBlock>

        <InfoBlock title="Преимущества ВНЖ Армении">
          <CheckList items={[
            'ВНЖ за менее чем 30 дней — быстрее большинства стран региона',
            'Подоходный налог 10% — один из самых низких',
            'Налог на прибыль: 18% общий или 5% упрощённый',
            'Доступ к европейским рынкам через CEPA с ЕС',
            'Безопасная среда и русскоязычное сообщество',
          ]} />
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}

export default Content;

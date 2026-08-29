'use client';
import React from 'react';
import { useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';

function Content() {
  const { lang } = useLang();
  const isFa = lang === 'fa';
  const isRu = lang === 'ru';

  return (
    <ServicePageLayout
      titleFa="ثبت شرکت در ارمنستان"
      titleEn="Company Registration in Armenia"
      titleRu="Регистрация компании в Армении"
      subtitleFa="LLC در ۳ روز کاری — مالیات ۵٪ یا ۱۸٪ — حساب بانکی بین‌المللی"
      subtitleEn="LLC in 3 working days — 5% or 18% tax — international bank account"
      subtitleRu="ООО за 3 рабочих дня — налог 5% или 18% — международный счёт"
      heroImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80"
      serviceType="company-registration">

      <div className="rounded-2xl overflow-hidden mb-6 aspect-video relative">
        <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80"
          alt={isFa ? 'ثبت شرکت در ارمنستان' : 'Company Registration Armenia'}
          className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        <div className="absolute bottom-4 start-4 flex items-center gap-2">
          <img src="https://flagcdn.com/w80/am.webp" alt="Armenia flag" className="h-6 rounded shadow" />
          <span className="text-sm font-bold text-white drop-shadow">
            {isFa ? 'ایروان، ارمنستان' : isRu ? 'Ереван, Армения' : 'Yerevan, Armenia'}
          </span>
        </div>
      </div>

      {isFa && <>
        <InfoBlock title="چرا ثبت شرکت در ارمنستان؟">
          <p>ارمنستان در سال‌های اخیر به یکی از جذاب‌ترین مقاصد برای کارآفرینان ایرانی تبدیل شده — نه فقط به‌خاطر نزدیکی جغرافیایی، بلکه به‌خاطر ترکیبی از مزایایی که در کمتر کشور منطقه‌ای همزمان پیدا می‌شود: ثبت سریع، مالیات پایین، مالکیت صددرصد خارجی بدون نیاز به شریک ارمنی، و دسترسی به حساب بانکی بین‌المللی با کارت ویزا و مسترکارت. شرکت ثبت‌شده در ارمنستان می‌تواند پایه‌ای برای اقامت قانونی و گسترش فعالیت تجاری به بازارهای اروپایی باشد.</p>
        </InfoBlock>

        <InfoBlock title="انواع شرکت — کدام برای ایرانیان مناسب‌تر است؟">
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">LLC (شرکت با مسئولیت محدود) — توصیه‌شده</h3>
          <p className="mb-3">رایج‌ترین و ساده‌ترین نوع برای اتباع خارجی. سرمایه اولیه حداقلی، مسئولیت محدود به سرمایه شرکت، و ساختار حقوقی شفاف. اکثر ایرانیانی که شرکت در ارمنستان ثبت می‌کنند این نوع را انتخاب می‌کنند.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">شخص حقیقی (Sole Proprietorship — IE)</h3>
          <p>برای فریلنسرها و کسب‌وکارهای کوچک. ساده‌ترین ساختار، مالیات ۵٪ ساده‌شده، ولی مسئولیت شخصی کامل.</p>
        </InfoBlock>

        <InfoBlock title="هزینه واقعی ثبت شرکت — شفاف و کامل">
          <CheckList items={[
            'هزینه دولتی ثبت LLC: حدود ۱۵٬۰۰۰ درام (کمتر از ۴۰ دلار)',
            'ترجمه و تأیید رسمی پاسپورت: ۵۰ تا ۱۰۰ دلار',
            'آدرس ثبت شرکت (اگر دفتر واقعی ندارید): ۱۰۰ تا ۲۵۰ دلار در سال',
            'هزینه خدمات مشاوره و پیگیری: ۵۰۰ تا ۱٬۵۰۰ دلار',
            'حسابداری ماهانه (اجباری): ۵۰ تا ۱۵۰ دلار در ماه',
            'مجموع تخمینی برای سال اول: ۱٬۰۰۰ تا ۲٬۵۰۰ دلار',
          ]} />
        </InfoBlock>

        <InfoBlock title="سیستم مالیاتی — مهم‌ترین مزیت مالی">
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">مالیات ساده‌شده — ۵٪</h3>
          <p className="mb-3">برای شرکت‌هایی با گردش مالی سالانه کمتر از ۱۱۵ میلیون درام (~۲۹۰٬۰۰۰ دلار). ۵٪ از کل درآمد — ساده‌ترین گزینه برای استارتاپ‌ها و کسب‌وکارهای کوچک.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">مالیات عمومی — ۱۸٪</h3>
          <p className="mb-3">مالیات بر درآمد شرکت ۱۸٪. برای شرکت‌های بزرگ‌تر که می‌خواهند هزینه‌ها را کسر کنند.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">مالیات شخصی</h3>
          <p>۱۰٪ — یکی از پایین‌ترین نرخ‌های منطقه. حقوق مدیر از شرکت مشمول این نرخ است.</p>
        </InfoBlock>

        <InfoBlock title="حساب بانکی بین‌المللی — بعد از ثبت شرکت چه می‌شود؟">
          <CheckList items={[
            'بانک‌های معتبر ارمنستان (ACBA، Converse، Ameriabank، IDBank) حساب شرکتی با کارت ویزا/مسترکارت افتتاح می‌کنند',
            'امکان دریافت پرداخت از مشتریان اروپایی، آمریکایی و CIS',
            'انتقال وجه بین‌المللی بدون محدودیت',
            'افتتاح حساب نیاز به حضور شخصی دارد — معمولاً ۱ تا ۳ روز کاری',
            'کاسپین با بانک‌هایی که برای ایرانیان کمتر سخت‌گیری می‌کنند آشنایی دارد',
          ]} />
        </InfoBlock>

        <InfoBlock title="ثبت حضوری در برابر غیرحضوری">
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">ثبت حضوری — توصیه‌شده</h3>
          <p className="mb-3">شما در ارمنستان حضور دارید و مدارک را شخصاً تحویل می‌دهید. سریع‌تر (۳ تا ۵ روز)، خطا کمتر، و امکان افتتاح حساب بانکی بلافاصله. اگر قصد اقامت هم دارید، حضور اجباری است.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">ثبت غیرحضوری (با وکالت‌نامه)</h3>
          <p>نماینده کاسپین در ارمنستان مراحل را پیگیری می‌کند. زمان بیشتر (۷ تا ۱۵ روز). توجه: افتتاح حساب بانکی نیاز به حضور شخصی دارد.</p>
        </InfoBlock>

        <InfoBlock title="مراحل ثبت شرکت با کاسپین گروپ">
          <ol className="space-y-2 list-decimal list-inside text-sm text-foreground/70">
            <li><strong className="text-foreground/85">مشاوره رایگان:</strong> بررسی نوع فعالیت، انتخاب ساختار مالیاتی و برآورد هزینه</li>
            <li><strong className="text-foreground/85">انتخاب نام شرکت:</strong> بررسی در سامانه Armstat</li>
            <li><strong className="text-foreground/85">آماده‌سازی مدارک:</strong> ترجمه رسمی پاسپورت، تنظیم اساسنامه</li>
            <li><strong className="text-foreground/85">ثبت در Armstat:</strong> معمولاً ۱ روز کاری</li>
            <li><strong className="text-foreground/85">ثبت مالیاتی:</strong> دریافت شماره مالیاتی</li>
            <li><strong className="text-foreground/85">افتتاح حساب بانکی:</strong> حضوری در بانک</li>
            <li><strong className="text-foreground/85">قرارداد حسابداری:</strong> اجباری برای گزارش‌های ماهانه</li>
          </ol>
        </InfoBlock>

        <InfoBlock title="مدارک لازم">
          <CheckList items={[
            'پاسپورت معتبر تمام اعضای شرکت (حداقل ۶ ماه اعتبار)',
            'ترجمه رسمی پاسپورت به ارمنی',
            'آدرس محل سکونت در ارمنستان یا آدرس ثبت مجازی',
            'انتخاب نام شرکت (حداقل ۳ گزینه)',
            'تعیین موضوع فعالیت شرکت',
            'برای ثبت غیرحضوری: وکالت‌نامه رسمی ترجمه‌شده',
          ]} />
        </InfoBlock>

        <InfoBlock title="اشتباهات رایجی که باعث تأخیر می‌شود">
          <CheckList items={[
            'انتخاب نام تکراری — بررسی قبلی در Armstat اجباری است',
            'عدم ثبت مالیاتی در مهلت ۲۰ روزه از ثبت شرکت',
            'نداشتن حسابدار — حتی شرکت بدون فعالیت باید گزارش صفر ارسال کند',
            'آدرس ثبت‌شده‌ای که در واقعیت وجود ندارد',
            'فراموش کردن تمدید — شرکت بدون گزارش مالیاتی ممکن است لغو شود',
          ]} />
        </InfoBlock>

        <InfoBlock title="ثبت شرکت و اقامت ارمنستان">
          <p>به‌عنوان مدیر یا سهامدار شرکت ثبت‌شده می‌توانید برای کارت اقامت موقت یک‌ساله اقدام کنید. با توجه به قانون جدید نوامبر ۲۰۲۶، نیاز به گردش مالی یا موجودی حساب حداقل ۱ میلیون درام شرکت است. تمدید اقامت منوط به فعال بودن شرکت و ارسال گزارش‌های مالیاتی است.</p>
        </InfoBlock>
      </>}

      {lang === 'en' && <>
        <InfoBlock title="Why Register a Company in Armenia?">
          <p>Armenia offers a rare combination: fast registration, low taxes, 100% foreign ownership without an Armenian partner, and access to international bank accounts with Visa and Mastercard. A registered company can serve as a base for legal residency and market access to Europe via the EU-Armenia CEPA agreement.</p>
        </InfoBlock>
        <InfoBlock title="Real Costs — Transparent Breakdown">
          <CheckList items={[
            'Government LLC registration fee: ~15,000 AMD (under $40)',
            'Passport translation and notarization: $50–$100',
            'Registered address (if no physical office): $100–$250/year',
            'Advisory/agent service: $500–$1,500',
            'Monthly accounting (mandatory): $50–$150/month',
            'Estimated total for year one: $1,000–$2,500',
          ]} />
        </InfoBlock>
        <InfoBlock title="Tax System">
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">Simplified Tax — 5%</h3>
          <p className="mb-2">For turnover under 115M AMD (~$290K). 5% of revenue — simplest option for small businesses.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">Standard Corporate Tax — 18%</h3>
          <p>For larger companies wanting to deduct expenses. Personal income tax: 10%.</p>
        </InfoBlock>
        <InfoBlock title="Registration Steps with Caspian Group">
          <ol className="space-y-2 list-decimal list-inside text-sm text-foreground/70">
            <li>Free consultation — activity type, tax structure, cost estimate</li>
            <li>Company name check in Armstat registry</li>
            <li>Document preparation — passport translation, articles of association</li>
            <li>Registration at Armstat — typically 1 business day</li>
            <li>Tax registration — obtaining Tax ID</li>
            <li>Bank account opening — in person at the bank</li>
            <li>Accounting contract — mandatory for monthly filings</li>
          </ol>
        </InfoBlock>
      </>}

      {isRu && <>
        <InfoBlock title="Зачем регистрировать компанию в Армении?">
          <p>Армения предлагает уникальное сочетание: быстрая регистрация, низкие налоги, 100% иностранная собственность, международный банковский счёт. Компания открывает путь к ВНЖ и рынкам Европы через CEPA.</p>
        </InfoBlock>
        <InfoBlock title="Реальные расходы">
          <CheckList items={[
            'Госпошлина ООО: ~15 000 драм (менее $40)',
            'Перевод паспорта: $50–$100',
            'Юридический адрес: $100–$250/год',
            'Агентские услуги: $500–$1 500',
            'Бухгалтерия: $50–$150/месяц',
            'Итого первый год: $1 000–$2 500',
          ]} />
        </InfoBlock>
        <InfoBlock title="Этапы регистрации">
          <ol className="space-y-2 list-decimal list-inside text-sm text-foreground/70">
            <li>Бесплатная консультация</li>
            <li>Проверка названия в Armstat</li>
            <li>Подготовка документов</li>
            <li>Регистрация в Armstat — 1 рабочий день</li>
            <li>Налоговый учёт</li>
            <li>Открытие счёта — лично</li>
            <li>Договор с бухгалтером</li>
          </ol>
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}

export default Content;

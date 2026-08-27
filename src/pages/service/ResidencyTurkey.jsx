import React from 'react';
import { Helmet } from 'react-helmet-async';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';

function Content() {
  const { lang } = useLang();
  return (
    <ServicePageLayout
      titleFa="اقامت ترکیه" titleEn="Turkey Residency" titleRu="ВНЖ Турции"
      subtitleFa="اقامت معتبر اروپایی با هزینه مناسب و موقعیت استراتژیک"
      subtitleEn="Reputable residency with affordable cost and strategic location"
      subtitleRu="Престижный ВНЖ с доступной стоимостью и стратегическим расположением"
      heroImage="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&q=80"
      serviceType="residency-turkey"
    >
      {/* اضافه کردن تگ‌های سئو چندزبانه با Helmet */}
      <Helmet>
        <title>{lang === 'fa' ? 'اخذ اقامت ترکیه و خرید ملک | کاسپین گروه' : 'Turkey Residency & Property Investment | Caspian Group'}</title>
        <meta name="description" content={lang === 'fa' ? 'راهنمای جامع اخذ اقامت ترکیه، خرید ملک، اقامت توریستی و مزایای قانونی با پشتیبانی تخصصی کاسپین گروه.' : 'Complete guide to obtaining Turkey residency, property purchase, and benefits with Caspian Group.'} />
        <link rel="canonical" href="https://caspian.am/residency/turkey" />
      </Helmet>

      {/* Turkey flag & Istanbul image */}
      <div className="rounded-2xl overflow-hidden mb-6 aspect-video relative">
        <img src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1200&q=80" alt="Istanbul Turkey" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        <div className="absolute bottom-4 start-4 flex items-center gap-2">
          <img src="https://flagcdn.com/w80/tr.webp" alt="Turkey flag" className="h-6 rounded shadow" />
          <span className="text-sm font-bold text-white drop-shadow">استانبول، ترکیه</span>
        </div>
      </div>

      {lang === 'fa' && <>
        <InfoBlock title="چرا اقامت ترکیه؟">
          <p>ترکیه با موقعیت جغرافیایی منحصربه‌فرد، اقتصاد پویا و روابط گسترده بین‌المللی، یکی از محبوب‌ترین مقاصد برای اقامت خارجی‌ها است. هزینه زندگی معقول، زیرساخت‌های مدرن و قوانین نسبتاً ساده اقامتی، ترکیه را به گزینه‌ای جذاب تبدیل کرده است.</p>
        </InfoBlock>
        <InfoBlock title="انواع اقامت ترکیه">
          <CheckList items={[
            'اقامت توریستی کوتاه‌مدت (Short-term Residence)',
            'اقامت بلندمدت از طریق سرمایه‌گذاری',
            'اقامت از طریق خرید ملک — حداقل ارزش ملک ۲۰۰,۰۰۰ دلار آمریکا که باید در سند رسمی (تاپو) ثبت شود',
            'اقامت دانشجویی',
            'اقامت خانوادگی (Family Residence)',
            'اقامت از طریق کار و اشتغال',
          ]} />
        </InfoBlock>
        <InfoBlock title="نکته مهم درباره اقامت از طریق ملک (به‌روز ۲۰۲۶)">
          <p>در برخی محله‌های پرتقاضا (برای مثال بخش‌هایی از آلانیا، آنتالیا و استانبول)، وقتی نسبت جمعیت خارجی از ۲۰٪ عبور کند، آن محله برای ثبت اقامت جدید بسته می‌شود — حتی برای کسانی که از قبل ملک دارند. پیش از خرید ملک برای اقامت، حتماً وضعیت محله موردنظر را از طریق کاسپین گروه استعلام بگیرید.</p>
        </InfoBlock>
        <InfoBlock title="مزایای اقامت ترکیه">
          <CheckList items={[
            'سفر بدون ویزا به بیش از ۱۱۰ کشور با پاسپورت ترکیه',
            'سیستم بهداشت و درمان با کیفیت',
            'امکان شهروندی پس از ۵ سال اقامت',
            'بازار اقتصادی پویا و فرصت‌های کاری',
            'فرهنگ نزدیک به ایران و تشابهات زبانی',
          ]} />
        </InfoBlock>
        <InfoBlock title="مدارک مورد نیاز">
          <CheckList items={[
            'پاسپورت معتبر با حداقل ۶ ماه اعتبار',
            'بیمه درمانی معتبر در ترکیه',
            'اثبات توان مالی (حساب بانکی یا درآمد)',
            'محل اقامت در ترکیه (اجاره یا ملک)',
            'عکس پرسنلی',
            'فرم درخواست اقامت',
          ]} />
        </InfoBlock>
        <InfoBlock title="مراحل اخذ اقامت از طریق کاسپین گروه">
          <CheckList items={[
            'مشاوره رایگان و بررسی شرایط',
            'آماده‌سازی و ترجمه مدارک',
            'تعیین وقت و هماهنگی با ادارات ترکیه',
            'ثبت درخواست اقامت',
            'پیگیری پرونده تا دریافت کارت اقامت',
          ]} />
        </InfoBlock>
      </>}
      {lang === 'en' && <>
        <InfoBlock title="Why Turkey Residency?">
          <p>Turkey, with its unique geographical position, dynamic economy and extensive international relations, is one of the most popular destinations for foreign residency. Reasonable living costs, modern infrastructure and relatively simple residency laws make Turkey an attractive option.</p>
        </InfoBlock>
        <InfoBlock title="Types of Turkey Residency">
          <CheckList items={[
            'Short-term Tourist Residence Permit',
            'Long-term Residency through Investment',
            'Residency through Property Purchase — minimum property value USD 200,000, recorded on the official title deed (tapu)',
            'Student Residence Permit',
            'Family Residence Permit',
            'Work Permit and Residency',
          ]} />
        </InfoBlock>
        <InfoBlock title="Important Note on Property-Based Residency (2026 Update)">
          <p>In some high-demand neighborhoods (parts of Alanya, Antalya, and Istanbul, for example), once the share of foreign residents exceeds 20%, that district closes to new residency registrations — even for existing property owners. Always check the current status of a neighborhood with Caspian Group before purchasing property for residency purposes.</p>
        </InfoBlock>
        <InfoBlock title="Benefits of Turkey Residency">
          <CheckList items={[
            'Visa-free travel to 110+ countries with Turkish passport',
            'High-quality healthcare system',
            'Path to citizenship after 5 years of residency',
            'Dynamic economy and job opportunities',
          ]} />
        </InfoBlock>
        <InfoBlock title="Required Documents">
          <CheckList items={[
            'Valid passport with at least 6 months validity',
            'Valid health insurance in Turkey',
            'Proof of financial means',
            'Accommodation in Turkey (rental or property)',
            'Passport photos',
            'Residence application form',
          ]} />
        </InfoBlock>
      </>}
      {lang === 'ru' && <>
        <InfoBlock title="Почему ВНЖ Турции?">
          <p>Турция благодаря уникальному географическому положению, динамичной экономике и развитым международным связям является одним из самых популярных направлений для получения ВНЖ иностранцами.</p>
        </InfoBlock>
        <InfoBlock title="Виды ВНЖ Турции">
          <CheckList items={[
            'Краткосрочный туристический ВНЖ',
            'Долгосрочный ВНЖ через инвестиции',
            'ВНЖ через покупку недвижимости — минимальная стоимость объекта 200 000 USD, зафиксированная в тапу',
            'Студенческий ВНЖ',
            'Семейный ВНЖ',
            'ВНЖ через трудоустройство',
          ]} />
        </InfoBlock>
        <InfoBlock title="Преимущества ВНЖ Турции">
          <CheckList items={[
            'Безвизовый въезд в 110+ стран с турецким паспортом',
            'Качественная система здравоохранения',
            'Путь к гражданству через 5 лет',
            'Динамичная экономика и возможности для бизнеса',
          ]} />
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}

export default function ResidencyTurkey() {
  return <LanguageProvider><Content /></LanguageProvider>;
}

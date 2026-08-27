import React from 'react';
import { Helmet } from 'react-helmet-async';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';

function Content() {
  const { lang } = useLang();
  return (
    <ServicePageLayout
      titleFa="ویزای تحصیلی ترکیه" titleEn="Turkey Student Visa" titleRu="Студенческая виза Турции"
      subtitleFa="تحصیل در ترکیه با مدرک معتبر بین‌المللی"
      subtitleEn="Study in Turkey with internationally recognized degrees"
      subtitleRu="Учёба в Турции с международно признанными дипломами"
      heroImage="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&q=80"
      serviceType="student-visa"
    >
      {/* اضافه کردن تگ‌های سئو چندزبانه با Helmet */}
      <Helmet>
        <title>{lang === 'fa' ? 'اخذ ویزای تحصیلی ترکیه و بورسیه دولتی | کاسپین گروه' : 'Turkey Student Visa & Scholarships | Caspian Group'}</title>
        <meta name="description" content={lang === 'fa' ? 'راهنمای دریافت ویزای تحصیلی ترکیه، بورسیه Türkiye Bursları و تحصیل در دانشگاه‌های برتر استانبول و آنکارا با کاسپین گروه.' : 'Guide to obtaining a Turkey student visa, Türkiye Bursları scholarships, and studying at top universities with Caspian Group.'} />
        <link rel="canonical" href="https://caspian.am/services/student-visa/turkey" />
      </Helmet>

      {lang === 'fa' && <>
        <InfoBlock title="چرا تحصیل در ترکیه؟">
          <p>ترکیه با بیش از ۲۰۰ دانشگاه دولتی و خصوصی، یکی از مراکز مهم آموزش عالی در منطقه است. بسیاری از دانشگاه‌های ترکیه برنامه‌های تحصیلی به زبان انگلیسی ارائه می‌دهند. قرابت فرهنگی با ایران و هزینه‌های معقول، ترکیه را به گزینه جذابی تبدیل کرده است.</p>
        </InfoBlock>
        <InfoBlock title="دانشگاه‌های برتر ترکیه">
          <CheckList items={['دانشگاه استانبول', 'دانشگاه فنی خاورمیانه (ODTÜ)', 'دانشگاه بغازیچی', 'دانشگاه سابانجی', 'دانشگاه کوچ', 'دانشگاه آنکارا']} />
        </InfoBlock>
        <InfoBlock title="رشته‌های محبوب">
          <CheckList items={['پزشکی و دندانپزشکی', 'مهندسی', 'معماری و شهرسازی', 'مدیریت و MBA', 'هنر و طراحی', 'علوم کامپیوتر']} />
        </InfoBlock>
        <InfoBlock title="بورسیه ترکیه (Türkiye Bursları)">
          <CheckList items={[
            'پوشش کامل شهریه',
            'خوابگاه دولتی رایگان',
            'کمک هزینه ماهانه: ۴,۵۰۰ لیر برای کارشناسی، ۶,۵۰۰ لیر برای کارشناسی‌ارشد و ۹,۰۰۰ لیر برای دکتری (رقم به‌روز)',
            'بلیط رفت و برگشت سالانه',
            'بیمه درمانی',
            'یک سال دوره آموزش زبان ترکی (تافل)',
            'زمان ثبت‌نام معمولاً ۱۰ ژانویه تا ۲۰ فوریه هر سال از طریق سامانه tbbs.turkiyeburslari.gov.tr',
          ]} />
        </InfoBlock>
        <InfoBlock title="مدارک مورد نیاز">
          <CheckList items={[
            'پاسپورت معتبر',
            'دیپلم دبیرستان و معدل بالای ۷۰٪',
            'نمره آزمون YÖS یا SAT',
            'گواهی زبان انگلیسی (برای برنامه‌های انگلیسی)',
            'نامه انگیزه',
            'عکس پرسنلی',
          ]} />
        </InfoBlock>
      </>}
      {lang === 'en' && <>
        <InfoBlock title="Why Study in Turkey?">
          <p>Turkey has over 200 public and private universities and is an important higher education hub in the region. Many Turkish universities offer English-language programs. Cultural proximity to Iran and reasonable costs make Turkey an attractive option.</p>
        </InfoBlock>
        <InfoBlock title="Top Turkish Universities">
          <CheckList items={['Istanbul University', 'Middle East Technical University (METU)', 'Bogazici University', 'Sabanci University', 'Koc University']} />
        </InfoBlock>
        <InfoBlock title="Turkey Scholarship (Türkiye Bursları)">
          <CheckList items={['Full tuition coverage', 'Free state dormitory', 'Monthly stipend: 4,500 TL (bachelor), 6,500 TL (master), 9,000 TL (PhD) — current rates', 'Annual round-trip ticket', 'Health insurance', 'One-year Turkish language course', 'Applications typically open January 10 - February 20 each year via tbbs.turkiyeburslari.gov.tr']} />
        </InfoBlock>
      </>}
      {lang === 'ru' && <>
        <InfoBlock title="Почему учиться в Турции?">
          <p>Турция располагает более чем 200 государственными и частными университетами. Многие из них предлагают программы на английском языке.</p>
        </InfoBlock>
        <InfoBlock title="Стипендия Турции (Türkiye Bursları)">
          <CheckList items={['Полное покрытие обучения', 'Бесплатное общежитие', 'Ежемесячная стипендия: 4 500 TL (бакалавриат), 6 500 TL (магистратура), 9 000 TL (докторантура)', 'Авиабилет туда-обратно ежегодно', 'Медицинская страховка', 'Приём заявок обычно с 10 января по 20 февраля через tbbs.turkiyeburslari.gov.tr']} />
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}

export default function StudentVisaTurkey() {
  return <LanguageProvider><Content /></LanguageProvider>;
}

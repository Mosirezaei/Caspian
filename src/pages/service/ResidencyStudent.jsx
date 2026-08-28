import React from 'react';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';

function Content() {
  const { lang } = useLang();
  const isFa = lang === 'fa';
  const isRu = lang === 'ru';

  useSEO({
    title: isFa ? 'اقامت تحصیلی ارمنستان | پذیرش دانشگاه + کارت اقامت دانشجویی — کاسپین گروپ' :
           isRu ? 'Учебный ВНЖ Армении | Поступление в вуз + студенческий ВНЖ — Caspian Group' :
           'Armenia Student Residency | University Admission + Student Residency Card — Caspian Group',
    description: isFa ? 'اقامت تحصیلی ارمنستان از طریق پذیرش در دانشگاه‌های معتبر. شهریه از ۱۵۰۰ دلار، مدارک لازم، دانشگاه‌های توصیه‌شده. مشاوره رایگان.' :
                 isRu ? 'Учебный ВНЖ Армении через поступление в вузы. Плата от $1500, необходимые документы, рекомендованные вузы.' :
                 'Armenia student residency via university admission. Tuition from $1,500, required documents, recommended universities. Free consultation.',
    path: '/residency/student',
  });

  return (
    <ServicePageLayout
      titleFa="اقامت تحصیلی ارمنستان" titleEn="Armenia Student Residency" titleRu="Учебный ВНЖ Армении"
      subtitleFa="پذیرش دانشگاه + کارت اقامت دانشجویی"
      subtitleEn="University admission + student residency card"
      subtitleRu="Поступление в вуз + студенческий ВНЖ"
      heroImage="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80"
      serviceType="residency">

      {isFa && <>
        <InfoBlock title="اقامت تحصیلی ارمنستان">
          <p>پذیرش در دانشگاه‌های ارمنستان یکی از راه‌های اخذ کارت اقامت دانشجویی این کشور است. این نوع اقامت برای مدت تحصیل صادر می‌شود و پس از فارغ‌التحصیلی می‌توان به اقامت کاری یا از طریق ثبت شرکت تبدیل کرد.</p>
        </InfoBlock>

        <InfoBlock title="دانشگاه‌های معتبر ارمنستان">
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">دانشگاه دولتی ایروان (YSU)</h3>
          <p className="mb-3">بزرگ‌ترین و معتبرترین دانشگاه ارمنستان. بیش از ۱۰۰ رشته از جمله حقوق، اقتصاد، علوم و مهندسی. شهریه سالانه ۱٬۵۰۰ تا ۴٬۰۰۰ دلار.</p>

          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">دانشگاه علوم پزشکی ارمنستان (YSMU)</h3>
          <p className="mb-3">یکی از معتبرترین دانشکده‌های پزشکی منطقه. برنامه‌های پزشکی به زبان انگلیسی و روسی. شهریه ۵٬۰۰۰ تا ۸٬۰۰۰ دلار در سال — همچنان بسیار ارزان‌تر از اروپا.</p>

          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">دانشگاه اسلاوی روسیه-ارمنستان (RAU)</h3>
          <p className="mb-3">مدرک دوگانه روسی-ارمنستانی، آموزش به زبان روسی. مناسب برای کسانی که به بازار کار روسیه یا CIS نظر دارند.</p>

          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">دانشگاه آمریکایی ارمنستان (AUA)</h3>
          <p>آموزش به زبان انگلیسی با سیستم آمریکایی. مدرک مورد تأیید در آمریکا و اروپا. شهریه ۶٬۰۰۰ تا ۱۰٬۰۰۰ دلار در سال.</p>
        </InfoBlock>

        <InfoBlock title="مدارک لازم برای پذیرش دانشگاه و اقامت تحصیلی">
          <CheckList items={[
            'دیپلم دبیرستان یا مدرک دانشگاهی قبلی — ترجمه رسمی به انگلیسی یا ارمنی',
            'ریزنمرات (Transcript) — ترجمه رسمی',
            'پاسپورت معتبر',
            'عکس پرسنلی',
            'نامه انگیزه (برای برخی رشته‌ها)',
            'نتیجه آزمون زبان انگلیسی برای دانشگاه AUA (TOEFL/IELTS)',
            'پس از پذیرش: نامه پذیرش رسمی از دانشگاه برای اخذ کارت اقامت دانشجویی',
          ]} />
        </InfoBlock>

        <InfoBlock title="مزایای تحصیل در ارمنستان">
          <CheckList items={[
            'شهریه بسیار پایین‌تر از اروپا، کانادا یا آمریکا',
            'امکان تحصیل پزشکی، دندانپزشکی و داروسازی به زبان انگلیسی',
            'هزینه زندگی مناسب (۵۰۰ تا ۸۰۰ دلار در ماه برای یک دانشجو)',
            'امکان کار پاره‌وقت در حین تحصیل',
            'مدارک برخی دانشگاه‌ها در کشورهای اروپایی و CIS معتبر است',
            'پس از فارغ‌التحصیلی، امکان تبدیل به اقامت کاری یا بیزینسی',
          ]} />
        </InfoBlock>

        <InfoBlock title="مراحل اخذ اقامت تحصیلی با کاسپین">
          <ol className="space-y-2 list-decimal list-inside text-sm text-foreground/70">
            <li>انتخاب دانشگاه و رشته با کمک کاسپین</li>
            <li>ترجمه و تأیید رسمی مدارک تحصیلی</li>
            <li>ارسال درخواست پذیرش به دانشگاه</li>
            <li>دریافت نامه پذیرش رسمی</li>
            <li>درخواست کارت اقامت دانشجویی در اداره مهاجرت</li>
            <li>دریافت کارت اقامت و ثبت‌نام نهایی در دانشگاه</li>
          </ol>
        </InfoBlock>
      </>}

      {lang === 'en' && <>
        <InfoBlock title="Armenia Student Residency">
          <p>University admission in Armenia is a path to a student residency card. This residency is valid for the duration of your studies and can be converted to work or business residency after graduation.</p>
        </InfoBlock>
        <InfoBlock title="Top Armenian Universities">
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">Yerevan State University (YSU)</h3>
          <p className="mb-2">Armenia's largest and most prestigious university. 100+ programs including law, economics, science, and engineering. Tuition: $1,500–$4,000/year.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">Armenian Medical University (YSMU)</h3>
          <p className="mb-2">One of the region's most respected medical schools. English and Russian programs. Tuition: $5,000–$8,000/year — still far below European costs.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">American University of Armenia (AUA)</h3>
          <p>US-accredited, English instruction. Tuition: $6,000–$10,000/year.</p>
        </InfoBlock>
        <InfoBlock title="Benefits">
          <CheckList items={[
            'Tuition far lower than Europe, Canada, or the US',
            'Medicine, dentistry, and pharmacy available in English',
            'Affordable living ($500–$800/month for one student)',
            'Part-time work permitted during studies',
            'Convert to work or business residency after graduation',
          ]} />
        </InfoBlock>
      </>}

      {isRu && <>
        <InfoBlock title="Учебный ВНЖ Армении">
          <p>Поступление в вузы Армении — путь к студенческому ВНЖ. Действует на весь срок обучения и может быть конвертирован в рабочий или бизнес-ВНЖ после окончания.</p>
        </InfoBlock>
        <InfoBlock title="Ведущие вузы Армении">
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">ЕГУ (Ереванский государственный университет)</h3>
          <p className="mb-2">Крупнейший вуз, 100+ специальностей. Плата: $1 500–$4 000/год.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">Медицинский университет (АГМУ)</h3>
          <p>Медицина на английском и русском. $5 000–$8 000/год.</p>
        </InfoBlock>
        <InfoBlock title="Преимущества">
          <CheckList items={[
            'Стоимость обучения значительно ниже, чем в Европе',
            'Медицина на английском языке',
            'Проживание $500–$800/месяц',
            'Конвертация в рабочий или бизнес-ВНЖ после учёбы',
          ]} />
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}

export default function ResidencyStudent() {
  return <LanguageProvider><Content /></LanguageProvider>;
}

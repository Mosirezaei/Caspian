'use client';
import React from 'react';
import { useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';

function Content() {
  const { lang } = useLang();
  const isFa = lang === 'fa';
  const isRu = lang === 'ru';


  return (
    <ServicePageLayout titleFa="پذیرش دانشجویی" titleEn="Student Admission" titleRu="Поступление в вузы" serviceType="student-visa"
      subtitleFa="پذیرش، ویزای دانشجویی و اقامت تحصیلی در دانشگاه‌های معتبر ایروان"
      subtitleEn="Admission, student visa and residency at reputable Yerevan universities"
      subtitleRu="Поступление, студенческая виза и вид на жительство в Ереване"
      heroImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80">

      <div className="rounded-2xl overflow-hidden mb-6 aspect-video relative">
        <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80" alt="University campus Armenia" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        <div className="absolute bottom-4 start-4 flex items-center gap-2">
          <img src="https://flagcdn.com/w80/am.webp" alt="Armenia flag" className="h-6 rounded shadow" />
          <span className="text-sm font-bold text-white drop-shadow">دانشگاه‌های ایروان</span>
        </div>
      </div>

      {isFa && <>
        <InfoBlock title="چرا تحصیل در ارمنستان انتخاب خوبی است؟">
          <p>ارمنستان طی چند سال اخیر به یکی از مقاصد اصلی دانشجویان ایرانی، به‌خصوص در رشته‌های پزشکی و دندانپزشکی، تبدیل شده است. دلیل اصلی، ترکیب نادری از سه عامل است: شهریه‌ای که در مقایسه با اروپای غربی بسیار پایین‌تر است، مدارکی که در بسیاری از کشورها (از جمله در آزمون‌های ارزشیابی وزارت بهداشت ایران) قابل قبول و ارزشیابی‌پذیرند، و فاصله‌ی جغرافیایی و فرهنگی کم با ایران که تطبیق زندگی دانشجویی را آسان‌تر می‌کند. ایروان همچنین جامعه‌ی نسبتاً بزرگی از دانشجویان ایرانی دارد که خودش باعث شده فضای دانشجویی برای تازه‌واردان دلهره کمتری داشته باشد.</p>
        </InfoBlock>

        <InfoBlock title="رشته‌ها و شهریه‌ی تقریبی سالانه">
          <p className="mb-3">شهریه بسته به دانشگاه، رشته و زبان تدریس متفاوت است. رقم‌های زیر بازه‌ی رایج بازار را نشان می‌دهد و برای برنامه‌ریزی دقیق باید در مشاوره‌ی رایگان با کاسپین تأیید شود:</p>
          <CheckList items={[
            'پزشکی عمومی — معمولاً ۴٬۰۰۰ تا ۸٬۰۰۰ دلار در سال، دوره ۶ ساله',
            'دندانپزشکی — حدود ۵٬۰۰۰ تا ۷٬۵۰۰ دلار در سال',
            'داروسازی — حدود ۳٬۵۰۰ تا ۶٬۰۰۰ دلار در سال',
            'مهندسی کامپیوتر و IT — از ۱٬۵۰۰ دلار در سال',
            'معماری — از ۲٬۰۰۰ دلار در سال',
            'مدیریت و MBA — از ۲٬۵۰۰ دلار در سال',
            'حقوق، هنر و طراحی — از ۱٬۵۰۰ دلار در سال',
          ]} />
        </InfoBlock>

        <InfoBlock title="دانشگاه‌های معتبر ایروان و تخصص هرکدام">
          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">Yerevan State Medical University (YSMU)</h3>
          <p className="mb-3">شناخته‌شده‌ترین دانشگاه پزشکی منطقه با سابقه‌ی طولانی پذیرش دانشجویان بین‌المللی و برنامه‌های انگلیسی‌زبان برای پزشکی و دندانپزشکی.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">American University of Armenia (AUA)</h3>
          <p className="mb-3">مدرک آمریکایی، تدریس کامل به انگلیسی، قوی در رشته‌های کسب‌وکار، مهندسی و علوم کامپیوتر.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">Yerevan State University (YSU)</h3>
          <p className="mb-3">بزرگ‌ترین و قدیمی‌ترین دانشگاه دولتی ارمنستان با طیف گسترده‌ای از رشته‌ها از حقوق تا علوم پایه.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">State Engineering University of Armenia (SEUA)</h3>
          <p>مرجع اصلی رشته‌های فنی‌مهندسی، برق، مکانیک و معماری در ارمنستان.</p>
        </InfoBlock>

        <InfoBlock title="مراحل پذیرش، از انتخاب رشته تا ورود به کلاس">
          <ol className="space-y-2 list-decimal list-inside text-sm text-foreground/70">
            <li>مشاوره‌ی رایگان انتخاب رشته و دانشگاه بر اساس مدرک تحصیلی و بودجه</li>
            <li>ترجمه‌ی رسمی و برابر با اصل مدارک تحصیلی (دیپلم یا مدرک قبلی) و ریزنمرات</li>
            <li>ارسال پرونده به دانشگاه و پیگیری تأیید پذیرش (Acceptance Letter)</li>
            <li>پرداخت شهریه‌ی ترم اول و دریافت مدارک لازم برای ویزای دانشجویی</li>
            <li>اخذ ویزای دانشجویی از طریق سفارت ارمنستان یا در بدو ورود</li>
            <li>هماهنگی خوابگاه دانشگاه یا آپارتمان مستقل پیش از سفر</li>
            <li>ثبت‌نام حضوری در دانشگاه و شروع ترم</li>
          </ol>
        </InfoBlock>

        <InfoBlock title="اقامت تحصیلی و ادامه‌ی مسیر پس از فارغ‌التحصیلی">
          <p>دانشجویان بین‌المللی پس از ثبت‌نام قطعی می‌توانند برای کارت اقامت موقت اقدام کنند که هم‌زمان با دوره‌ی تحصیل تمدید می‌شود. این اقامت امکان اجاره‌ی قانونی آپارتمان، افتتاح حساب بانکی و کار پاره‌وقت را فراهم می‌کند. مدرک دانشگاه‌های ارمنستان در بسیاری از کشورها (از جمله ایران، برای رشته‌های پزشکی از طریق آزمون ارزشیابی) قابل تبدیل به فعالیت حرفه‌ای است؛ برای رشته‌های غیرپزشکی نیز فارغ‌التحصیلان می‌توانند مسیر ادامه‌ی تحصیل در مقطع بالاتر در اروپا را از همین‌جا هموارتر کنند، چون سابقه‌ی تحصیلی در یک کشور اروپایی همسایه‌ی اتحادیه اروپا برای پرونده‌ی ویزای تحصیلات تکمیلی امتیاز محسوب می‌شود.</p>
        </InfoBlock>

        <InfoBlock title="خدمات کاسپین گروپ برای دانشجویان و خانواده‌ها">
          <CheckList items={[
            'مشاوره رایگان و بی‌طرفانه انتخاب رشته و دانشگاه متناسب با مدرک و بودجه',
            'ترجمه رسمی و تأیید مدارک تحصیلی',
            'پیگیری پرونده تا دریافت Acceptance Letter رسمی دانشگاه',
            'اخذ ویزای دانشجویی و در ادامه کارت اقامت تحصیلی',
            'یافتن خوابگاه دانشگاه یا آپارتمان مستقل نزدیک محل تحصیل',
            'همراهی خانواده‌هایی که همراه دانشجو به ایروان سفر می‌کنند',
            'پشتیبانی مستمر تا پایان دوره تحصیل',
          ]} />
        </InfoBlock>
      </>}

      {lang === 'en' && <>
        <InfoBlock title="Why Study in Armenia?">
          <p>Over the past few years Armenia has become a leading destination for Iranian students, particularly in medicine and dentistry. Tuition is significantly lower than in Western Europe, degrees are recognized and eligible for evaluation in many countries, and the short geographic and cultural distance from Iran makes settling in easier. Yerevan also has a sizeable Iranian student community, which helps newcomers adapt quickly.</p>
        </InfoBlock>

        <InfoBlock title="Popular Fields & Approximate Annual Tuition">
          <CheckList items={[
            'General Medicine — typically $4,000–8,000/year, 6-year program',
            'Dentistry — around $5,000–7,500/year',
            'Pharmacy — around $3,500–6,000/year',
            'Computer Engineering & IT — from $1,500/year',
            'Architecture — from $2,000/year',
            'Management & MBA — from $2,500/year',
          ]} />
        </InfoBlock>

        <InfoBlock title="Top Universities in Yerevan">
          <CheckList items={[
            'Yerevan State Medical University (YSMU) — the region\'s best-known medical school',
            'American University of Armenia (AUA) — US degree, fully English-taught',
            'Yerevan State University (YSU) — Armenia\'s largest and oldest public university',
            'State Engineering University of Armenia (SEUA) — the reference for engineering programs',
          ]} />
        </InfoBlock>

        <InfoBlock title="Admission Process">
          <ol className="space-y-2 list-decimal list-inside text-sm text-foreground/70">
            <li>Free consultation on major and university selection</li>
            <li>Certified translation of academic documents and transcripts</li>
            <li>Application submitted and Acceptance Letter secured</li>
            <li>First-term tuition payment and student visa document preparation</li>
            <li>Student visa processing</li>
            <li>Dormitory or independent apartment arranged before travel</li>
            <li>In-person university registration and term start</li>
          </ol>
        </InfoBlock>

        <InfoBlock title="Caspian Services for Students & Families">
          <CheckList items={[
            'Free, unbiased consultation on major and university choice',
            'Certified document translation and verification',
            'Application follow-up through to the official Acceptance Letter',
            'Student visa and residency card processing',
            'Dormitory or apartment near campus',
            'Support for families traveling with the student',
          ]} />
        </InfoBlock>
      </>}

      {isRu && <>
        <InfoBlock title="Почему стоит учиться в Армении?">
          <p>Армения стала одним из ведущих направлений для иранских студентов, особенно на медицинских специальностях. Стоимость обучения значительно ниже, чем в Западной Европе, а дипломы признаются во многих странах.</p>
        </InfoBlock>

        <InfoBlock title="Популярные специальности и стоимость обучения">
          <CheckList items={[
            'Общая медицина — $4 000–8 000 в год, программа 6 лет',
            'Стоматология — $5 000–7 500 в год',
            'Фармацевтика — $3 500–6 000 в год',
            'Компьютерная инженерия и IT — от $1 500 в год',
            'Менеджмент и MBA — от $2 500 в год',
          ]} />
        </InfoBlock>

        <InfoBlock title="Ведущие университеты Еревана">
          <CheckList items={[
            'Ереванский государственный медицинский университет (YSMU)',
            'Американский университет Армении (AUA)',
            'Ереванский государственный университет (YSU)',
            'Государственный инженерный университет Армении (SEUA)',
          ]} />
        </InfoBlock>

        <InfoBlock title="Услуги Caspian для студентов">
          <CheckList items={[
            'Бесплатная консультация по выбору специальности и вуза',
            'Перевод и заверение документов об образовании',
            'Сопровождение до получения официального письма о зачислении',
            'Оформление студенческой визы и вида на жительство',
            'Подбор общежития или квартиры рядом с университетом',
          ]} />
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}

export default Content;

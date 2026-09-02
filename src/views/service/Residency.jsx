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
      titleFa="اقامت ارمنستان"
      titleEn="Armenia Residency"
      titleRu="ВНЖ Армении"
      subtitleFa="راهنمای کامل اقامت ارمنستان برای ایرانیان — با قوانین جدید ۲۰۲۶"
      subtitleEn="Complete guide to Armenia residency for Iranians — updated for 2026 laws"
      subtitleRu="Полное руководство по ВНЖ Армении для иранцев — по законам 2026 года"
      heroImage="/images/Yerevan_Residency.webp"
      serviceType="residency"
    >

      {/* تصویر */}
      <div className="rounded-2xl overflow-hidden mb-6 aspect-video relative">
        <img
          src="/images/Yerevan_Residency.webp"
          alt={isFa ? 'اقامت ارمنستان' : 'Armenia Residency'}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        <div className="absolute bottom-4 start-4 flex items-center gap-2">
          <img src="/images/am.webp" alt="Armenia flag" className="h-6 rounded shadow" />
          <span className="text-sm font-bold text-white drop-shadow">
            {isFa ? 'ایروان، ارمنستان' : isRu ? 'Ереван, Армения' : 'Yerevan, Armenia'}
          </span>
        </div>
      </div>

      {/* خلاصه سریع */}
      <InfoBlock icon="📋" titleFa="خلاصه اقامت ارمنستان" titleEn="Armenia Residency Overview" titleRu="Обзор ВНЖ Армении">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
          {[
            { labelFa: 'سریع‌ترین مسیر', labelEn: 'Fastest route', valueEn: 'Company reg.', valueFa: 'ثبت شرکت', labelRu: 'Быстрый путь', valueRu: 'Регистрация' },
            { labelFa: 'زمان دریافت', labelEn: 'Processing time', valueEn: '20–30 days', valueFa: '۲۰ تا ۳۰ روز', labelRu: 'Срок', valueRu: '20–30 дней' },
            { labelFa: 'هزینه دولتی', labelEn: 'Gov. fee', valueEn: '~$380/year', valueFa: '~۳۸۰ دلار/سال', labelRu: 'Госпошлина', valueRu: '~$380/год' },
            { labelFa: 'اقامت دائم', labelEn: 'Permanent ВНЖ', valueEn: 'After 3 years', valueFa: 'پس از ۳ سال', labelRu: 'Постоянный ВНЖ', valueRu: 'Через 3 года' },
          ].map((item, i) => (
            <div key={i} className="text-center p-3 rounded-xl bg-primary/5 border border-primary/10">
              <div className="text-xs text-foreground/50 mb-1">
                {isFa ? item.labelFa : isRu ? item.labelRu : item.labelEn}
              </div>
              <div className="text-sm font-bold text-primary">
                {isFa ? item.valueFa : isRu ? item.valueRu : item.valueEn}
              </div>
            </div>
          ))}
        </div>
      </InfoBlock>

      {/* بنر قانون جدید */}
      <div className="glass-panel rounded-2xl p-5 mb-6 border border-amber-400/40 bg-gradient-to-br from-amber-400/10 to-transparent">
        <span className="inline-block text-xs font-bold text-amber-400 bg-amber-400/15 rounded-full px-3 py-1 mb-3">
          ⚠️ {isFa ? 'قانون جدید — نوامبر ۲۰۲۶' : isRu ? 'Новый закон — ноябрь 2026' : 'New Law — November 2026'}
        </span>
        <h2 className="text-base font-black text-foreground mb-3">
          {isFa ? 'مهم‌ترین تغییرات قانون اقامت ارمنستان' : isRu ? 'Ключевые изменения в законе о ВНЖ' : 'Key Changes to Armenia Residency Law'}
        </h2>
        <CheckList items={isFa ? [
          'فرآیند کاملاً دیجیتال از طریق سامانه permits.am — دیگر نیازی به صف‌های طولانی اداره مهاجرت نیست',
          'کارت اقامت بیومتریک — حضور فیزیکی برای ثبت اثر انگشت الزامی است',
          'هزینه دولتی اقامت موقت: ۱۵۰٬۰۰۰ درام (~۳۸۰ دلار) | اقامت دائم ۵ساله: ۲۵۰٬۰۰۰ درام',
          'مسیر جدید سرمایه‌گذار: اقامت دائم ۵ساله از همان ابتدا بدون نیاز به مرحله موقت',
          'سهمیه سالانه برای هر نوع اقامت — اقدام زودتر، شانس بیشتر',
          'غیبت بیش از ۱۸۳ روز در سال باید به اداره مهاجرت اطلاع داده شود',
          'از ژانویه ۲۰۲۷ هزینه‌های دولتی افزایش می‌یابد — اقدام در ۲۰۲۶ مقرون‌به‌صرفه‌تر است',
        ] : isRu ? [
          'Полностью цифровой процесс через платформу permits.am',
          'Биометрическая карта ВНЖ — необходимо личное присутствие',
          'Госпошлина временного ВНЖ: 150 000 драм (~$380) | постоянного: 250 000 драм',
          'Новый путь для инвесторов: постоянный ВНЖ на 5 лет сразу',
          'Годовые квоты на каждый тип ВНЖ',
          'Отсутствие более 183 дней требует уведомления властей',
        ] : [
          'Fully digital process via permits.am platform — no more long queues',
          'Biometric residency card — physical presence required for fingerprinting',
          'Temporary residency fee: 150,000 AMD (~$380) | Permanent 5-year: 250,000 AMD',
          'New investor route: permanent 5-year residency from day one',
          'Annual quotas for each residency type — apply early',
          'Absence over 183 days per year must be reported to authorities',
        ]} />
      </div>

      {/* ۴ مسیر اقامت */}
      <h2 className="text-xl font-black text-foreground mb-4">
        {isFa ? '۴ مسیر اصلی اقامت ارمنستان' : isRu ? '4 основных пути получения ВНЖ' : '4 Main Routes to Armenia Residency'}
      </h2>

      {/* مسیر ۱: ثبت شرکت */}
      <InfoBlock icon="🏢" titleFa="۱. ثبت شرکت — پرطرفدارترین روش" titleEn="1. Company Registration — Most Popular" titleRu="1. Регистрация компании — Самый популярный">
        <p className="text-sm text-foreground/70 leading-relaxed mb-4">
          {isFa
            ? 'ثبت شرکت نه‌تنها مسیر اقامت، بلکه یک فرصت واقعی کسب‌وکار است. مالکیت ۱۰۰٪ توسط ایرانی، ثبت ۱ تا ۳ روزه، دسترسی به بانکداری بین‌المللی و امکان ارائه خدمات به بازارهای جهانی.'
            : isRu
            ? 'Регистрация компании — не только путь к ВНЖ, но и реальная бизнес-возможность. 100% иностранное владение, регистрация за 1–3 дня, международный банкинг.'
            : 'Company registration is not just a residency route — it is a real business opportunity. 100% foreign ownership, 1–3 day registration, international banking access.'}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <CheckList items={isFa ? [
            'مالکیت ۱۰۰٪ بدون نیاز به شریک ارمنی',
            'ثبت ۱ تا ۳ روزه به‌صورت آنلاین',
            'نرخ مالیات شرکتی ۱۸٪',
            'اقامت برای مدیر، سهامداران و خانواده',
            'دسترسی به حساب بانکی ارزی',
            'معافیت مالیاتی برای شرکت‌های IT',
          ] : isRu ? [
            '100% иностранное владение',
            'Регистрация за 1–3 дня онлайн',
            'Налог на прибыль 18%',
            'ВНЖ для директора и семьи',
            'Доступ к валютному счёту',
            'Налоговые льготы для IT-компаний',
          ] : [
            '100% foreign ownership, no Armenian partner needed',
            'Online registration in 1–3 working days',
            '18% corporate tax rate',
            'Residency for director, shareholders and family',
            'Access to international bank accounts',
            'Tax exemptions for IT companies',
          ]} />
        </div>
        <div className="p-3 rounded-xl bg-amber-400/8 border border-amber-400/20 text-xs text-foreground/60">
          ⚠️ {isFa
            ? 'شرکت باید فعال باشد — گردش مالی واقعی و اظهارنامه مالیاتی منظم. شرکت کاغذی بدون فعالیت مبنای اقامت نیست.'
            : isRu
            ? 'Компания должна быть активной — реальный оборот и налоговая отчётность. Фиктивная компания не является основанием для ВНЖ.'
            : 'Company must be active — real turnover and regular tax filings. A shell company without activity is not a valid residency basis.'}
        </div>
      </InfoBlock>

      {/* مسیر ۲: سرمایه‌گذاری */}
      <InfoBlock icon="💰" titleFa="۲. سرمایه‌گذاری و خرید ملک" titleEn="2. Investment & Property Purchase" titleRu="2. Инвестиции и покупка недвижимости">
        <p className="text-sm text-foreground/70 leading-relaxed mb-4">
          {isFa
            ? 'از اوت ۲۰۲۶ مسیر جدید سرمایه‌گذار فعال شده که از همان ابتدا اقامت دائم ۵ساله می‌دهد — بدون نیاز به گذراندن مرحله موقت.'
            : isRu
            ? 'С августа 2026 года действует новый инвесторский путь — постоянный ВНЖ на 5 лет сразу, без временного этапа.'
            : 'From August 2026, the new investor route offers permanent 5-year residency from day one — skipping the temporary stage entirely.'}
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-primary/10 text-foreground/70">
                <th className="p-2 text-start rounded-ts-lg">{isFa ? 'نوع ملک' : isRu ? 'Тип' : 'Property Type'}</th>
                <th className="p-2 text-start">{isFa ? 'قیمت تقریبی' : isRu ? 'Цена' : 'Approx. Price'}</th>
                <th className="p-2 text-start rounded-te-lg">{isFa ? 'اجاره ماهانه' : isRu ? 'Аренда/мес.' : 'Monthly Rent'}</th>
              </tr>
            </thead>
            <tbody className="text-foreground/70">
              <tr className="border-b border-foreground/8">
                <td className="p-2">{isFa ? 'آپارتمان ۱۰۰م² مرکز ایروان' : isRu ? 'Квартира 100м² центр' : '100m² apt. central Yerevan'}</td>
                <td className="p-2">$150k–$220k</td>
                <td className="p-2">$800–$1,200</td>
              </tr>
              <tr className="border-b border-foreground/8">
                <td className="p-2">{isFa ? 'آپارتمان ۶۰م² حومه ایروان' : isRu ? 'Квартира 60м² пригород' : '60m² apt. suburbs'}</td>
                <td className="p-2">$80k–$120k</td>
                <td className="p-2">$500–$800</td>
              </tr>
              <tr>
                <td className="p-2">{isFa ? 'ملک تجاری کوچک' : isRu ? 'Коммерческая недвижимость' : 'Small commercial property'}</td>
                <td className="p-2">$200k–$400k</td>
                <td className="p-2">{isFa ? 'متغیر' : isRu ? 'Varies' : 'Varies'}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-foreground/50 mt-2">
          ✅ {isFa ? 'اتباع خارجی مجاز به مالکیت کامل ملک هستند — به جز زمین‌های کشاورزی.' : isRu ? 'Иностранцы могут владеть недвижимостью полностью — кроме сельхозземель.' : 'Foreign nationals can fully own property in Armenia — except agricultural land.'}
        </p>
      </InfoBlock>

      {/* مسیر ۳: کار */}
      <InfoBlock icon="💼" titleFa="۳. اقامت از طریق کار" titleEn="3. Work-Based Residency" titleRu="3. ВНЖ на основе работы">
        <CheckList items={isFa ? [
          'دریافت ویزای کاری ورودی جدید (اعتبار تا ۱۲۰ روز)',
          'امضای قرارداد کار با کارفرمای ارمنی',
          'درخواست مجوز کار توسط کارفرما از اداره مهاجرت',
          'ثبت‌نام در سامانه permits.am و دریافت اقامت موقت',
          'ثبت بیومتریک حضوری و دریافت کارت',
        ] : isRu ? [
          'Получение новой рабочей въездной визы (до 120 дней)',
          'Подписание трудового договора с армянским работодателем',
          'Запрос разрешения на работу работодателем',
          'Онлайн заявка через permits.am',
          'Биометрическая регистрация и получение карты',
        ] : [
          'Obtain new work entry visa (valid up to 120 days)',
          'Sign employment contract with Armenian employer',
          'Employer applies for work permit from migration authority',
          'Register online via permits.am for temporary residency',
          'In-person biometric registration and card pickup',
        ]} />
        <div className="mt-3 p-3 rounded-xl bg-blue-400/8 border border-blue-400/20 text-xs text-foreground/60">
          💡 {isFa
            ? 'توجه: اگر قرارداد کار فسخ شد، اقامت در معرض لغو است. بسیاری از ایرانیان همزمان شرکت هم ثبت می‌کنند تا پوشش مضاعف داشته باشند.'
            : isRu ? 'Внимание: расторжение контракта ставит ВНЖ под угрозу. Многие регистрируют компанию параллельно для дополнительной защиты.'
            : 'Note: if your employment contract is terminated, residency may be revoked. Many Iranians register a company simultaneously for extra protection.'}
        </div>
      </InfoBlock>

      {/* مسیر ۴: تحصیل */}
      <InfoBlock icon="🎓" titleFa="۴. اقامت از طریق تحصیل" titleEn="4. Study-Based Residency" titleRu="4. ВНЖ на основе учёбы">
        <p className="text-sm text-foreground/70 leading-relaxed mb-3">
          {isFa
            ? 'ارمنستان یکی از مقرون‌به‌صرفه‌ترین مقاصد تحصیلی برای ایرانیان است. شهریه دانشگاه‌های دولتی سالانه ۱۰۰۰ تا ۲۵۰۰ دلار، با شرایط پذیرش قابل قبول.'
            : isRu ? 'Армения — одно из самых доступных учебных направлений. Годовая плата в государственных вузах — $1,000–$2,500.'
            : 'Armenia is one of the most affordable study destinations for Iranians. State university tuition ranges from $1,000 to $2,500 per year.'}
        </p>
        <CheckList items={isFa ? [
          'نامه پذیرش از دانشگاه ارمنی',
          'پاسپورت معتبر + ترجمه رسمی مدارک تحصیلی',
          'اثبات توانایی مالی',
          'گواهی عدم سوء‌پیشینه',
          'اقامت موقت برای مدت تحصیل — قابل تمدید',
        ] : isRu ? [
          'Письмо о зачислении от армянского вуза',
          'Действующий паспорт + официальный перевод документов',
          'Подтверждение финансовых средств',
          'Справка об отсутствии судимости',
          'Временный ВНЖ на срок обучения — продлеваемый',
        ] : [
          'Acceptance letter from Armenian university',
          'Valid passport + official translation of academic documents',
          'Proof of financial capacity',
          'Police clearance certificate',
          'Temporary residency for study duration — renewable',
        ]} />
      </InfoBlock>

      {/* جدول مقایسه */}
      <div className="mb-6">
        <h3 className="text-base font-black text-foreground mb-3">
          {isFa ? 'مقایسه انواع اقامت' : isRu ? 'Сравнение типов ВНЖ' : 'Residency Types Comparison'}
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-primary/10 text-foreground/70">
                <th className="p-2.5 text-start">{isFa ? 'نوع' : isRu ? 'Тип' : 'Type'}</th>
                <th className="p-2.5 text-start">{isFa ? 'مدت' : isRu ? 'Срок' : 'Duration'}</th>
                <th className="p-2.5 text-start">{isFa ? 'هزینه' : isRu ? 'Стоимость' : 'Fee'}</th>
                <th className="p-2.5 text-start">{isFa ? 'مسیر' : isRu ? 'Путь' : 'Route'}</th>
              </tr>
            </thead>
            <tbody className="text-foreground/70">
              {[
                { type: isFa ? 'موقت' : isRu ? 'Временный' : 'Temporary', duration: isFa ? '۱ سال' : '1 year', fee: '~$380', route: isFa ? 'شرکت، کار، تحصیل' : isRu ? 'Компания, работа, учёба' : 'Company, work, study' },
                { type: isFa ? 'دائم' : isRu ? 'Постоянный' : 'Permanent', duration: isFa ? '۳ سال' : '3 years', fee: '~$625', route: isFa ? 'پس از ۳ سال موقت' : isRu ? 'После 3 лет временного' : 'After 3 years temporary' },
                { type: isFa ? 'سرمایه‌گذار (جدید)' : isRu ? 'Инвесторский (новый)' : 'Investor (new)', duration: isFa ? '۵ سال' : '5 years', fee: isFa ? 'متغیر' : 'Varies', route: isFa ? 'سرمایه‌گذاری واجد شرایط' : isRu ? 'Квалифицированные инвестиции' : 'Qualifying investment' },
              ].map((row, i) => (
                <tr key={i} className="border-b border-foreground/8">
                  <td className="p-2.5 font-medium">{row.type}</td>
                  <td className="p-2.5">{row.duration}</td>
                  <td className="p-2.5 text-primary font-bold">{row.fee}</td>
                  <td className="p-2.5">{row.route}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* حقوق مقیمان */}
      <InfoBlock icon="✅" titleFa="حقوق و امکانات دارندگان اقامت" titleEn="Rights & Benefits of Residents" titleRu="Права и возможности резидентов">
        <CheckList items={isFa ? [
          'زندگی و کار قانونی در ارمنستان بدون محدودیت',
          'افتتاح حساب بانکی به نام شخصی یا شرکت',
          'ثبت‌نام فرزندان در مدارس دولتی',
          'دسترسی به خدمات درمانی دولتی با هزینه پایین',
          'پس از ۵ سال اقامت دائم، امکان درخواست تابعیت',
          'تابعیت مضاعف مجاز — پاسپورت ایرانی حفظ می‌شود',
          'سفر بدون ویزا به بیش از ۶۰ کشور با پاسپورت ارمنستان',
        ] : isRu ? [
          'Законное проживание и работа в Армении без ограничений',
          'Открытие банковского счёта лично или на компанию',
          'Запись детей в государственные школы',
          'Доступ к государственным медуслугам',
          'После 5 лет постоянного ВНЖ — право на гражданство',
          'Двойное гражданство разрешено',
          'Безвизовый въезд в 60+ стран с паспортом Армении',
        ] : [
          'Legal residence and work in Armenia without restrictions',
          'Open personal or corporate bank accounts',
          'Enroll children in public schools',
          'Access to subsidized public healthcare',
          'After 5 years permanent residency — eligible for citizenship',
          'Dual citizenship allowed — keep your Iranian passport',
          'Visa-free travel to 60+ countries with Armenian passport',
        ]} />
      </InfoBlock>

      {/* سوالات متداول */}
      <div className="mb-6">
        <h3 className="text-base font-black text-foreground mb-4">
          {isFa ? 'سوالات متداول' : isRu ? 'Частые вопросы' : 'Frequently Asked Questions'}
        </h3>
        <div className="space-y-3">
          {(isFa ? [
            { q: 'آیا می‌توانم به‌تنهایی اقامت بگیرم یا حتماً به مشاور نیاز دارم؟', a: 'بله، امکان اقدام مستقل وجود دارد. اما با توجه به تغییرات قانونی ۲۰۲۶ و نیاز به ثبت‌نام در سامانه permits.am، استفاده از یک مشاور باتجربه زمان و خطر خطا را به‌شدت کاهش می‌دهد.' },
            { q: 'آیا اقامت ارمنستان ویزای شنگن می‌دهد؟', a: 'خیر، در حال حاضر اقامت ارمنستان به‌خودی‌خود ویزای شنگن نمی‌دهد. اما با پیشروی ارمنستان به سمت اتحادیه اروپا، این وضعیت در بلندمدت ممکن است تغییر کند.' },
            { q: 'اگر خارج از ارمنستان زندگی کنم، اقامتم لغو می‌شود؟', a: 'از نوامبر ۲۰۲۶، غیبت بیش از ۱۸۳ روز در سال باید به اداره مهاجرت اطلاع داده شود. عدم اطلاع‌رسانی می‌تواند اقامت را در معرض خطر قرار دهد.' },
            { q: 'آیا خانواده‌ام هم می‌توانند اقامت بگیرند؟', a: 'بله، همسر و فرزندان شما از طریق الحاق خانواده می‌توانند اقامت بگیرند. از اوت ۲۰۲۶ اثبات پشتیبانی مالی فقط برای همسر و فرزندان لازم است (نه سایر اعضای خانواده).' },
          ] : isRu ? [
            { q: 'Могу ли я самостоятельно получить ВНЖ?', a: 'Да, возможно. Но учитывая изменения 2026 года и систему permits.am, опытный консультант значительно сократит время и риски.' },
            { q: 'Даёт ли ВНЖ Армении шенгенскую визу?', a: 'Нет, на данный момент нет. Но по мере сближения Армении с ЕС это может измениться в долгосрочной перспективе.' },
            { q: 'Может ли моя семья тоже получить ВНЖ?', a: 'Да, супруг(а) и дети могут получить ВНЖ через воссоединение семьи.' },
          ] : [
            { q: 'Can I apply for residency independently?', a: 'Yes, independent applications are possible. However, given the 2026 legal changes and the new permits.am system, an experienced advisor significantly reduces time and error risk.' },
            { q: 'Does Armenia residency give me a Schengen visa?', a: 'No, Armenia residency does not currently provide Schengen access. However, as Armenia moves closer to the EU, this may change in the long term.' },
            { q: 'Can my family also get residency?', a: 'Yes. Spouse and children can obtain residency through family reunification. From August 2026, financial support proof is only required for spouse and children (not extended family).' },
          ]).map((item, i) => (
            <div key={i} className="p-4 rounded-2xl border border-foreground/8 bg-foreground/2">
              <div className="text-sm font-bold text-foreground mb-2">❓ {item.q}</div>
              <div className="text-sm text-foreground/65 leading-relaxed">💬 {item.a}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA نهایی */}
      <div className="rounded-2xl p-6 bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/25 text-center">
        <h3 className="text-lg font-black text-foreground mb-2">
          {isFa ? 'آماده شروع فرآیند اقامت هستید؟' : isRu ? 'Готовы начать процесс ВНЖ?' : 'Ready to start your residency process?'}
        </h3>
        <p className="text-sm text-foreground/60 mb-5 max-w-md mx-auto">
          {isFa
            ? 'کاسپین گروپ با بیش از ۱۵ سال سابقه در ارمنستان، تمام مراحل اقامت، ثبت شرکت و مشاوره حقوقی را زیر یک سقف ارائه می‌دهد.'
            : isRu
            ? 'Caspian Group с более чем 15-летним опытом в Армении предоставляет полный спектр услуг по ВНЖ, регистрации компании и юридическим консультациям.'
            : 'Caspian Group, with over 15 years of experience in Armenia, provides residency, company registration and legal consulting — all under one roof.'}
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a href="/contact" className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition text-sm shadow-md">
            {isFa ? '📞 مشاوره رایگان' : isRu ? '📞 Бесплатная консультация' : '📞 Free Consultation'}
          </a>
          <a href="/residency/business" className="inline-flex items-center gap-2 border border-primary/30 text-primary font-bold px-6 py-3 rounded-xl hover:bg-primary/10 transition text-sm">
            {isFa ? '🏢 ثبت شرکت' : isRu ? '🏢 Регистрация компании' : '🏢 Register Company'}
          </a>
        </div>
      </div>

    </ServicePageLayout>
  );
}

export default function Residency() {
  return <Content />;
}

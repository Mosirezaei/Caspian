'use client';
import { useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';
import CurrencyTicker from '@/components/shared/CurrencyTicker';
import CurrencyRatesTable from '@/components/shared/CurrencyRatesTable';

function ExchangeContent() {
  const { lang } = useLang();
  const isFa = lang === 'fa';
  const isRu = lang === 'ru';

  const handleWhatsApp = () => {
    const text = 'سلام، برای استعلام نرخ لحظه‌ای صرافی (ریال، دلار، یورو، تتر) پیام دادم.';
    window.open(`https://wa.me/37433149327?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <ServicePageLayout
      titleFa="صرافی ارزی کاسپین در ایروان" titleEn="Caspian Currency Exchange in Yerevan" titleRu="Обмен валют Caspian в Ереване"
      subtitleFa="تبدیل ریال، دلار، یورو، روبل و تتر با نرخ شفاف و رقابتی"
      subtitleEn="Rial, USD, EUR, RUB & USDT exchange with transparent, competitive rates"
      subtitleRu="Обмен риала, доллара, евро, рубля и USDT по прозрачному курсу"
      heroImage="https://images.unsplash.com/photo-1629339938591-ec5e73815e47?w=1200&q=80"
      serviceType="exchange">

      <CurrencyTicker />
      <CurrencyRatesTable />

      {isFa && <>
        <InfoBlock title="چرا مدیریت ارز در سفر به ارمنستان مهم است؟">
          <p>سفر به ارمنستان، چه با هدف گردشگری، چه تحصیل، تجارت یا اقامت کاری، همواره با یک دغدغه کلیدی همراه است: مدیریت هزینه‌ها و نحوه انتقال و تبدیل ارز. در کشوری که واحد رسمی آن «درام» (AMD) است و مسافران ایرانی نیز اغلب با ریال، دلار، یورو یا ارزهای دیجیتال سروکار دارند، دسترسی به یک صرافی معتبر، خوش‌نام و با نرخ منصفانه اهمیت دوچندانی پیدا می‌کند. گروه کاسپین با استقرار در مرکز ایروان، بستری امن و سریع برای پاسخ به تمامی نیازهای ارزی شما فراهم کرده است.</p>
        </InfoBlock>

        <InfoBlock title="پوشش کامل انواع خدمات تبدیل ارز">
          <h3 className="text-base font-bold text-foreground/90 mt-2 mb-1">تبدیل ریال به درام و دلار (نقدی و آنی)</h3>
          <p className="mb-3">بزرگ‌ترین چالش مسافران ایرانی، خرید درام پیش از سفر یا تبدیل مانده ریال به واحد پول ارمنستان است.</p>

          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">خرید و فروش انواع ارزهای فیات</h3>
          <p className="mb-3">تبدیل درام به دلار برای خروج از کشور، یا چنج‌کردن یورو و روبل به درام، با کارمزد رقابتی و نرخ‌های کاملاً شفاف انجام می‌شود.</p>

          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">خرید و فروش تتر (USDT) و رمزارزها</h3>
          <p className="mb-3">با توجه به محدودیت‌های جابه‌جایی مبالغ بالا به‌صورت نقد، تتر (به‌ویژه در شبکه TRC-20) بهترین ابزار نقل‌وانتقال مالی است: تبدیل تتر به نقد (ارسال تتر، دریافت آنی اسکناس)، یا خرید تتر با درام یا ریال برای شارژ کیف پول دیجیتال.</p>

          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">حواله‌های تجاری، دانشجویی و مهاجرتی</h3>
          <p>پرداخت شهریه دانشگاه‌های ارمنستان، پیش‌پرداخت اجاره ملک، هزینه‌های اداری اقامت یا ثبت شرکت — کارشناسان ارزی کاسپین هماهنگی انتقال مستقیم مبالغ از ایران به ارمنستان را با رسید معتبر و تضمین سلامت انتقال انجام می‌دهند.</p>
        </InfoBlock>

        <InfoBlock title="چرا کاسپین گروپ را انتخاب کنیم؟">
          <CheckList items={[
            'دفتر فیزیکی و اعتبار رسمی — فعالیت کاملاً متمرکز با پاسخ‌گویی حضوری در مرکز ایروان',
            'نرخ شفاف و رقابتی — بر اساس تغییرات لحظه‌ای، بدون هزینه پنهان یا کارمزد غیرمعقول',
            'سرعت بالا — نقدشوندگی سریع چه در پرداخت ریالی و چه در تراکنش کریپتو',
            'پشتیبانی فارسی‌زبان و مشاوره مالی برای انتخاب بهترین مسیر جابه‌جایی مالی',
          ]} />
        </InfoBlock>

        <InfoBlock title="فراتر از یک صرافی">
          <p>گروه کاسپین تنها یک صرافی نیست؛ این مجموعه به‌عنوان پلی میان ایران و ارمنستان، خدمات گردشگری (رزرو هتل، ترانسفر فرودگاهی، تور)، هماهنگی بلیت کنسرت‌ها و رویدادها، و خدمات مهاجرتی و ثبت شرکت را نیز به مسافران و فعالان اقتصادی ارائه می‌دهد.</p>
        </InfoBlock>
      </>}

      {lang === 'en' && <>
        <InfoBlock title="Why Currency Matters When Traveling to Armenia">
          <p>Whether you're visiting Armenia for tourism, study, business, or work residency, managing your money and currency conversion is a key concern. Armenia's official currency is the Dram (AMD), while Iranian travelers usually deal with Rial, USD, EUR, or digital currencies. Caspian Group, based in central Yerevan, provides a fast and secure exchange service covering all of these needs.</p>
        </InfoBlock>

        <InfoBlock title="Full Range of Currency Exchange Services">
          <CheckList items={[
            'Rial to Dram/USD conversion — cash pickup in Yerevan via Iranian bank transfer, at the best daily rate',
            'Fiat currency exchange — USD, EUR, RUB and AMD with competitive fees and transparent rates',
            'USDT & crypto exchange — instant cash for USDT (TRC-20) or buying USDT with Dram/Rial',
            'Business, student & immigration transfers — university tuition, rent deposits, residency and company registration fees, transferred directly from Iran with a verified receipt',
          ]} />
        </InfoBlock>

        <InfoBlock title="Why Choose Caspian Group?">
          <CheckList items={[
            'A physical office in central Yerevan with in-person support',
            'Transparent, competitive rates with no hidden fees',
            'Fast turnaround for both cash and crypto transactions',
            'Persian-speaking support and financial guidance',
          ]} />
        </InfoBlock>
      </>}

      {isRu && <>
        <InfoBlock title="Почему важен обмен валют в Армении">
          <p>Официальная валюта Армении — драм (AMD), а иранские путешественники чаще всего имеют дело с риалом, долларом, евро или криптовалютой. Caspian Group, офис в центре Еревана, предоставляет быстрый и надёжный обмен по всем этим направлениям.</p>
        </InfoBlock>

        <InfoBlock title="Полный спектр валютных услуг">
          <CheckList items={[
            'Обмен риала на драм/доллар — наличные в Ереване после перевода с иранского счёта, по лучшему курсу дня',
            'Обмен фиатных валют — доллар, евро, рубль и драм с прозрачным курсом',
            'Обмен USDT и криптовалют — мгновенная наличность за USDT (TRC-20) или покупка USDT за драм/риал',
            'Бизнес-, студенческие и миграционные переводы — оплата обучения, аренды, ВНЖ и регистрации компании напрямую из Ирана',
          ]} />
        </InfoBlock>

        <InfoBlock title="Почему Caspian Group?">
          <CheckList items={[
            'Физический офис в центре Еревана',
            'Прозрачный и конкурентный курс без скрытых комиссий',
            'Быстрое обслуживание для наличных и криптоплатежей',
            'Персоязычная поддержка и финансовые консультации',
          ]} />
        </InfoBlock>
      </>}

      <div className="glass-panel p-6 rounded-2xl border border-primary/30 mb-10 bg-black/40 backdrop-blur-md text-center">
        <p className="text-sm text-foreground/70 mb-4">
          {isFa ? 'برای اطلاع از نرخ لحظه‌ای ارزها یا هماهنگی حواله و تبدیل حضوری، همین حالا در واتساپ پیام بدهید.' :
            isRu ? 'Напишите нам в WhatsApp, чтобы узнать актуальный курс или согласовать перевод.' :
            'Message us on WhatsApp for today\'s exchange rates or to arrange a transfer.'}
        </p>
        <button onClick={handleWhatsApp} className="py-4 px-8 bg-primary text-black font-black rounded-xl hover:bg-yellow-500">
          {isFa ? 'استعلام نرخ در واتساپ' : isRu ? 'Узнать курс в WhatsApp' : 'Get Rates on WhatsApp'}
        </button>
      </div>
    </ServicePageLayout>
  );
}

export default ExchangeContent;

import React from 'react';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';

function Content() {
  const { lang } = useLang();
  const isFa = lang === 'fa';
  const isRu = lang === 'ru';

  useSEO({
    title: isFa ? 'ویزای روسیه برای ایرانیان از ایروان | دعوتنامه رسمی و پردازش ۵ تا ۱۰ روزه' :
           isRu ? 'Виза в Россию для иранцев | Оформление в Ереване с приглашением' :
           'Russia Visa for Iranians from Yerevan | Official Invitation, 5–10 Day Processing',
    description: isFa ? 'اخذ ویزای توریستی و تجاری روسیه برای اتباع ایرانی با دعوتنامه رسمی از سفارت روسیه در ایروان. مدارک کامل، هزینه دقیق و پردازش ۵ تا ۱۰ روز کاری.' :
                 isRu ? 'Оформление туристической и деловой визы в Россию для граждан Ирана через посольство в Ереване. Официальное приглашение, полный список документов.' :
                 'Tourist and business Russia visas for Iranian citizens via the embassy in Yerevan, with an official invitation and full document support. Processing in 5–10 business days.',
    keywords: isFa ? 'ویزای روسیه، ویزای روسیه برای ایرانیان، اخذ ویزای روسیه از ارمنستان، ویزای توریستی روسیه، ویزای تجاری روسیه، دعوتنامه روسیه، سفارت روسیه در ایروان، مدارک ویزای روسیه' :
              isRu ? 'виза в Россию, виза в Россию для иранцев, туристическая виза Россия, деловая виза Россия, приглашение в Россию' :
              'Russia visa, Russia visa for Iranians, tourist visa Russia, business visa Russia, Russian invitation letter, Russian embassy Yerevan',
    ogImage: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=1200&q=80',
    path: '/visa/russia',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: isFa ? 'ویزای روسیه' : 'Russia Visa',
      description: isFa ? 'خدمات اخذ ویزای توریستی و تجاری روسیه برای ایرانیان از ایروان' : 'Tourist and business Russia visa services for Iranians from Yerevan',
      provider: { '@type': 'Organization', name: 'Caspian Business Group', url: 'https://caspian.am' },
      areaServed: 'Iran',
    }
  });

  return (
    <ServicePageLayout titleFa="ویزای روسیه" titleEn="Russia Visa" titleRu="Виза в Россию"
      subtitleFa="ویزای توریستی و تجاری روسیه با دعوتنامه رسمی و پشتیبانی کامل از ایروان"
      subtitleEn="Tourist and business Russia visas with an official invitation, fully handled from Yerevan"
      subtitleRu="Туристические и деловые визы в Россию с официальным приглашением"
      heroImage="https://images.unsplash.com/photo-1513326738677-b964603b136d?w=1200&q=80"
      serviceType="visa-russia">

      <div className="rounded-2xl overflow-hidden mb-6 aspect-video relative">
        <img src="https://images.unsplash.com/photo-1513326738677-b964603b136d?w=1200&q=80" alt="Moscow Red Square Russia" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        <div className="absolute bottom-4 start-4 flex items-center gap-2">
          <img src="https://flagcdn.com/w80/ru.webp" alt="Russia flag" className="h-6 rounded shadow" />
          <span className="text-sm font-bold text-white drop-shadow">مسکو، روسیه</span>
        </div>
      </div>

      {isFa && <>
        <InfoBlock title="آیا ایرانیان برای سفر به روسیه به ویزا نیاز دارند؟">
          <p>بله. برخلاف تصور رایج، رابطه‌ی خوب دیپلماتیک ایران و روسیه به معنای لغو ویزا نیست و اتباع ایرانی همچنان برای هر نوع سفر به روسیه — چه گردشگری، چه تجاری — باید ویزای معتبر دریافت کنند. نکته‌ی مثبت این است که سفارت روسیه در ایروان یکی از فعال‌ترین و سریع‌ترین نمایندگی‌های روسیه در منطقه است، و همین موضوع باعث شده بسیاری از ایرانیان اقدام برای ویزای روسیه را از ارمنستان انجام دهند تا از صف‌های طولانی و بروکراسی داخل ایران فاصله بگیرند.</p>
        </InfoBlock>

        <InfoBlock title="انواع ویزای روسیه و کاربرد هرکدام">
          <p className="mb-3">انتخاب نوع ویزای درست به هدف سفر شما بستگی دارد. رایج‌ترین انواعی که کاسپین گروپ برای مشتریان ایرانی صادر می‌کند عبارت‌اند از:</p>
          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">ویزای توریستی</h3>
          <p className="mb-3">برای گردشگری و دیدار خانوادگی، معمولاً یک یا دو بار ورود و اعتبار اقامت تا ۳۰ روز. پرتقاضاترین نوع ویزا در بین مسافران ایرانی است.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">ویزای تجاری</h3>
          <p className="mb-3">برای شرکت در نمایشگاه، مذاکره یا بازدید از شرکای تجاری. نیاز به دعوتنامه از یک شرکت روسی ثبت‌شده دارد و می‌تواند به‌صورت چندبار ورود (Multiple Entry) صادر شود که برای فعالان تجاری با سفرهای مکرر بسیار به‌صرفه است.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">ویزای ترانزیت</h3>
          <p className="mb-3">برای عبور از خاک روسیه به مقصد کشور سوم، اعتبار کوتاه‌مدت (معمولاً تا ۱۰ روز) دارد و مدارک آن ساده‌تر از انواع دیگر است.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">ویزای کاری و تحصیلی</h3>
          <p>برای اشتغال یا ثبت‌نام در دانشگاه‌های روسیه صادر می‌شود و نیازمند دعوتنامه از کارفرما یا دانشگاه پذیرنده است؛ فرآیندی طولانی‌تر و پیچیده‌تر از ویزای توریستی دارد.</p>
        </InfoBlock>

        <InfoBlock title="دعوتنامه (ووچر) روسیه چیست و چرا الزامی است؟">
          <p>برخلاف ویزای شینگن که رزرو هتل معمولاً کافی است، برای ویزای روسیه یک سند رسمی به نام دعوتنامه یا ووچر لازم است که تنها توسط هتل‌ها و آژانس‌های مسافرتی دارای مجوز از وزارت خارجه روسیه صادر می‌شود. این سند تضمین می‌کند که محل اقامت شما در روسیه از قبل مشخص و تأییدشده است. کاسپین گروپ از طریق شرکای معتبر و دارای مجوز در روسیه، این دعوتنامه را در کوتاه‌ترین زمان برای شما صادر می‌کند — بدون نیاز به رزرو و پرداخت واقعی هتل.</p>
        </InfoBlock>

        <InfoBlock title="مدارک لازم برای ویزای روسیه">
          <CheckList items={[
            'پاسپورت معتبر با حداقل ۶ ماه اعتبار از تاریخ ورود و حداقل دو صفحه‌ی سفید',
            'دعوتنامه رسمی (ووچر) از هتل یا آژانس روسی — تهیه‌شده توسط کاسپین گروپ',
            'فرم الکترونیکی درخواست ویزا (سامانه رسمی وزارت خارجه روسیه)',
            'یک قطعه عکس بیومتریک با زمینه سفید و استاندارد اروپایی',
            'بیمه مسافرتی معتبر با پوشش درمانی حداقل ۳۰,۰۰۰ یورو یا معادل آن',
            'برای ویزای تجاری: دعوتنامه از شرکت روسی طرف قرارداد',
            'برای اتباع زیر ۱۸ سال: شناسنامه و در صورت سفر با یک والد، رضایت‌نامه رسمی از والد دیگر',
          ]} />
        </InfoBlock>

        <InfoBlock title="مراحل اخذ ویزای روسیه با کاسپین گروپ">
          <ol className="space-y-2 list-decimal list-inside text-sm text-foreground/70">
            <li>تماس با کاسپین در واتساپ و اعلام نوع سفر (توریستی/تجاری) و تاریخ مدنظر</li>
            <li>ارسال اسکن پاسپورت و مدارک پایه برای تهیه‌ی دعوتنامه رسمی</li>
            <li>صدور دعوتنامه توسط شریک مجاز کاسپین در روسیه (معمولاً ۲ تا ۳ روز کاری)</li>
            <li>تکمیل فرم آنلاین درخواست ویزا و هماهنگی نوبت سفارت روسیه در ایروان</li>
            <li>تحویل مدارک و در صورت نیاز بیومتریک در سفارت</li>
            <li>دریافت پاسپورت با ویزای صادرشده، معمولاً طی ۵ تا ۱۰ روز کاری از تاریخ ثبت‌نام</li>
          </ol>
        </InfoBlock>

        <InfoBlock title="هزینه و مدت اعتبار">
          <p>هزینه‌ی کنسولی ویزای روسیه بسته به نوع ویزا و تعداد دفعات ورود متفاوت است و جدا از هزینه‌ی خدمات کاسپین گروپ (دعوتنامه، پیگیری و مشاوره) محاسبه می‌شود. اعتبار ویزای توریستی معمولاً تا ۹۰ روز از تاریخ صدور است با امکان اقامت پیوسته تا ۳۰ روز؛ ویزای تجاری چندبار ورود می‌تواند تا یک سال اعتبار داشته باشد. برای قیمت دقیق و به‌روز، از طریق واتساپ با تیم کاسپین در تماس باشید چون نرخ کنسولی بسته به سیاست‌های سفارت ممکن است تغییر کند.</p>
        </InfoBlock>

        <InfoBlock title="نکاتی که پیش از اقدام باید بدانید">
          <CheckList items={[
            'ثبت‌نام در سامانه Gosuslugi (سامانه رسمی درخواست ویزای الکترونیکی روسیه) باید با اطلاعات دقیقاً منطبق با پاسپورت انجام شود؛ کوچک‌ترین اختلاف املایی می‌تواند باعث تأخیر شود',
            'اثر انگشت و بیومتریک برای اکثر متقاضیان روسیه الزامی است و باید حضوری در سفارت انجام شود',
            'نقطه‌ی ورود ذکرشده در فرم ویزا لازم نیست دقیقاً همان مسیر واقعی سفر باشد، اما بهتر است با آن هماهنگ باشد',
            'برای سفر خانوادگی، دعوتنامه و فرم هر یک از اعضا — حتی کودکان — باید جداگانه تهیه شود',
          ]} />
        </InfoBlock>
      </>}

      {lang === 'en' && <>
        <InfoBlock title="Do Iranians Need a Visa to Travel to Russia?">
          <p>Yes. Despite the strong diplomatic relationship between Iran and Russia, this does not translate into visa-free travel — Iranian citizens still need a valid visa for any trip to Russia, whether tourist or business. The good news is that the Russian embassy in Yerevan is one of the most active and efficient Russian missions in the region, which is why many Iranians choose to apply from Armenia rather than deal with longer queues at home.</p>
        </InfoBlock>

        <InfoBlock title="Types of Russian Visas">
          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">Tourist Visa</h3>
          <p className="mb-3">For sightseeing and family visits, typically single or double entry with stays of up to 30 days. The most commonly requested type among Iranian travelers.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">Business Visa</h3>
          <p className="mb-3">For exhibitions, negotiations, or visiting business partners. Requires an invitation from a registered Russian company and can be issued as multiple-entry — ideal for frequent business travelers.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">Transit Visa</h3>
          <p>For passing through Russian territory to a third country, with a short validity (usually up to 10 days) and simpler documentation.</p>
        </InfoBlock>

        <InfoBlock title="What Is a Russian Invitation Letter (Voucher)?">
          <p>Unlike a Schengen visa where a hotel booking is often enough, a Russian visa requires a formal invitation letter issued only by hotels and travel agencies licensed by Russia's Ministry of Foreign Affairs. Caspian Group works with licensed partners inside Russia to issue this invitation quickly, without requiring an actual paid hotel reservation.</p>
        </InfoBlock>

        <InfoBlock title="Required Documents">
          <CheckList items={[
            'Passport valid for at least 6 months from entry date, with at least two blank pages',
            'Official invitation letter (voucher) from a Russian hotel or agency — arranged by Caspian Group',
            'Completed electronic visa application (official Russian MFA portal)',
            'One biometric photo on a white background, European standard',
            'Valid travel insurance with minimum €30,000 medical coverage',
            'For business visas: invitation letter from the partner Russian company',
          ]} />
        </InfoBlock>

        <InfoBlock title="Process & Timeline with Caspian Group">
          <ol className="space-y-2 list-decimal list-inside text-sm text-foreground/70">
            <li>Contact Caspian via WhatsApp and specify trip type and travel dates</li>
            <li>Send passport scan for the official invitation letter</li>
            <li>Invitation issued by Caspian's licensed Russian partner (usually 2–3 business days)</li>
            <li>Complete the online visa form and book an embassy appointment in Yerevan</li>
            <li>Submit documents and biometrics at the embassy</li>
            <li>Receive your passport with the visa, typically within 5–10 business days</li>
          </ol>
        </InfoBlock>
      </>}

      {isRu && <>
        <InfoBlock title="Нужна ли иранцам виза для поездки в Россию?">
          <p>Да. Несмотря на тёплые дипломатические отношения между Ираном и Россией, безвизового режима не существует — гражданам Ирана требуется действующая виза для любой поездки, туристической или деловой. Посольство России в Ереване — одно из самых активных в регионе, поэтому многие иранцы оформляют визу именно через Ереван.</p>
        </InfoBlock>

        <InfoBlock title="Виды российских виз">
          <CheckList items={[
            'Туристическая — обычно на срок до 30 дней',
            'Деловая — по приглашению российской компании, возможна многократная',
            'Транзитная — для проезда через территорию России',
          ]} />
        </InfoBlock>

        <InfoBlock title="Необходимые документы">
          <CheckList items={[
            'Паспорт, действительный минимум 6 месяцев, с двумя чистыми страницами',
            'Официальное приглашение от отеля или агентства в России',
            'Электронная анкета на визу',
            'Фотография европейского стандарта',
            'Медицинская страховка на сумму не менее 30 000 €',
          ]} />
        </InfoBlock>

        <InfoBlock title="Этапы оформления">
          <p>Caspian Group организует приглашение через лицензированного партнёра в России (2–3 рабочих дня), затем сопровождает подачу документов в посольство в Ереване. Полный срок оформления обычно составляет 5–10 рабочих дней.</p>
        </InfoBlock>
      </>}

    </ServicePageLayout>
  );
}

export default function VisaRussia() {
  return <LanguageProvider><Content /></LanguageProvider>;
}

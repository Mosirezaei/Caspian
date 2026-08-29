'use client';
import React, { useState, useRef } from 'react';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';

// لیست شهرها
const ALL_CITIES = [
  { fa: 'ایروان', en: 'Yerevan' }, { fa: 'تهران', en: 'Tehran' }, { fa: 'دبی', en: 'Dubai' },
  { fa: 'استانبول', en: 'Istanbul' }, { fa: 'تفلیس', en: 'Tbilisi' }, { fa: 'مسکو', en: 'Moscow' },
  { fa: 'لندن', en: 'London' }, { fa: 'پاریس', en: 'Paris' }, { fa: 'برلین', en: 'Berlin' }, { fa: 'رم', en: 'Rome' },
  { fa: 'بارسلون', en: 'Barcelona' }, { fa: 'آمستردام', en: 'Amsterdam' }, { fa: 'وین', en: 'Vienna' }, { fa: 'پراگ', en: 'Prague' },
  { fa: 'بوداپست', en: 'Budapest' }, { fa: 'میلان', en: 'Milan' }, { fa: 'مادرید', en: 'Madrid' }, { fa: 'مونیخ', en: 'Munich' },
  { fa: 'زوریخ', en: 'Zurich' }, { fa: 'استکهلم', en: 'Stockholm' }, { fa: 'اسلو', en: 'Oslo' }, { fa: 'کپنهاگ', en: 'Copenhagen' },
  { fa: 'بروکسل', en: 'Brussels' }, { fa: 'لیسبون', en: 'Lisbon' }, { fa: 'آتن', en: 'Athens' }, { fa: 'ورشو', en: 'Warsaw' },
  { fa: 'بخارست', en: 'Bucharest' }, { fa: 'صوفیه', en: 'Sofia' }, { fa: 'بلگراد', en: 'Belgrade' }, { fa: 'زاگرب', en: 'Zagreb' },
  { fa: 'آنکارا', en: 'Ankara' }, { fa: 'باکو', en: 'Baku' }, { fa: 'تاشکند', en: 'Tashkent' }, { fa: 'آلماتی', en: 'Almaty' },
  { fa: 'بیشکک', en: 'Bishkek' }, { fa: 'کوالالامپور', en: 'Kuala Lumpur' }, { fa: 'بانکوک', en: 'Bangkok' }, { fa: 'سنگاپور', en: 'Singapore' },
  { fa: 'توکیو', en: 'Tokyo' }, { fa: 'سئول', en: 'Seoul' }, { fa: 'پکن', en: 'Beijing' }, { fa: 'شانگهای', en: 'Shanghai' },
  { fa: 'دهلی', en: 'Delhi' }, { fa: 'بمبئی', en: 'Mumbai' }, { fa: 'کراچی', en: 'Karachi' }, { fa: 'دوحه', en: 'Doha' },
  { fa: 'ریاض', en: 'Riyadh' }, { fa: 'ابوظبی', en: 'Abu Dhabi' }, { fa: 'مسقط', en: 'Muscat' }, { fa: 'کویت', en: 'Kuwait City' },
  { fa: 'بیروت', en: 'Beirut' }, { fa: 'امان', en: 'Amman' }, { fa: 'قاهره', en: 'Cairo' }, { fa: 'بوینس آیرس', en: 'Buenos Aires' },
  { fa: 'سائوپائولو', en: 'Sao Paulo' }, { fa: 'مکزیکو سیتی', en: 'Mexico City' }
];

// تصاویر نمونه — چون موجودی آپارتمان‌ها هرروز تغییر می‌کند، این تصاویر برای نمایش استایل و کیفیت کلی است
const GALLERY = [
  { src: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=75', altFa: 'نمونه فضای نشیمن آپارتمان مبله در ایروان', altEn: 'Sample furnished living room in Yerevan' },
  { src: 'https://images.unsplash.com/photo-1697700257503-1b6e2034eb37?w=800&q=75', altFa: 'ساختمان و فواره در نزدیکی میدان جمهوری ایروان', altEn: 'Building and fountain near Republic Square, Yerevan' },
  { src: 'https://images.unsplash.com/photo-1675279200694-8529c73b1fd0?w=800&q=75', altFa: 'نمونه آشپزخانه مجهز آپارتمان‌های اجاره‌ای ایروان', altEn: 'Sample equipped kitchen in a Yerevan rental apartment' },
  { src: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=75', altFa: 'نمونه اتاق خواب آپارتمان مبله', altEn: 'Sample bedroom in a furnished apartment' },
];

function ApartmentContent() {
  const { lang } = useLang();
  const isFa = lang === 'fa';
  const isRu = lang === 'ru';

  useSEO({
    title: isFa ? 'اجاره آپارتمان مبله در ایروان (روزانه و ماهانه) | کاسپین گروپ' :
           isRu ? 'Аренда меблированных квартир в Ереване | Посуточно и помесячно' :
           'Furnished Apartment Rental in Yerevan | Daily & Monthly | Caspian Group',
    description: isFa ? 'رزرو آپارتمان مبله در ایروان با عکس واقعی، پرداخت ریالی/دلاری/USDT و ترانسفر فرودگاهی. قیمت از ۳۰ دلار در شب — همین حالا در واتساپ رزرو کنید.' :
                 isRu ? 'Аренда меблированных квартир посуточно и помесячно в Ереване по лучшим ценам. Реальные фото, трансфер из аэропорта.' :
                 'Furnished apartments for daily and monthly rent in Yerevan. Real photos before booking, flexible payment, airport transfer included.',
    keywords: isFa ? 'اجاره آپارتمان ایروان، اجاره آپارتمان روزانه ایروان، اجاره سوئیت ارمنستان، اجاره ماهانه ایروان، سوئیت مبله ایروان، اجاره خانه در ارمنستان، بهترین محله ایروان برای اجاره، قیمت اجاره آپارتمان ایروان' :
              isRu ? 'аренда квартиры Ереван, посуточная аренда Армения, меблированная квартира Ереван' :
              'apartment rental Yerevan, daily apartment Yerevan, monthly apartment Armenia, furnished suite Yerevan',
    ogImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80',
    path: '/travel/apartment',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          name: isFa ? 'اجاره آپارتمان در ایروان' : 'Apartment Rental in Yerevan',
          description: isFa ? 'اجاره آپارتمان مبله روزانه و ماهانه در ایروان و سایر شهرهای ارمنستان' : 'Daily and monthly furnished apartment rental in Yerevan and across Armenia',
          provider: { '@type': 'Organization', name: 'Caspian Business Group', url: 'https://caspian.am' },
          areaServed: { '@type': 'Country', name: 'Armenia' },
        },
        isFa ? {
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'قیمت اجاره آپارتمان در ایروان چقدر است؟', acceptedAnswer: { '@type': 'Answer', text: 'استودیو از ۳۰ دلار، یک‌خوابه از ۴۵ دلار و دوخوابه از ۶۵ دلار در شب شروع می‌شود. برای اقامت ماهانه تخفیف قابل توجهی اعمال می‌شود.' } },
            { '@type': 'Question', name: 'چطور مطمئن شویم آپارتمان واقعی و بدون کلاهبرداری است؟', acceptedAnswer: { '@type': 'Answer', text: 'قبل از تأیید نهایی رزرو، عکس و ویدیوی واقعی از همان واحد در دسترس برای شما در واتساپ ارسال می‌شود و پرداخت کامل تنها پس از تأیید شما انجام می‌گیرد.' } },
            { '@type': 'Question', name: 'آیا پرداخت از ایران ممکن است؟', acceptedAnswer: { '@type': 'Answer', text: 'بله، از طریق واریز ریالی، دلار نقد یا رمزارز USDT؛ نیازی به کارت بانکی بین‌المللی نیست.' } },
          ]
        } : null,
      ].filter(Boolean)
    }
  });

  const [formData, setFormData] = useState({ destination: '', checkIn: '', checkOut: '', adults: 1, childWithBed: 0, childNoBed: 0, bedrooms: '' });
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showGuests, setShowGuests] = useState(false);

  const dateRef1 = useRef(null);
  const dateRef2 = useRef(null);
  const today = new Date().toISOString().split('T')[0];

  const filteredCities = ALL_CITIES.filter(c =>
    c.fa.includes(formData.destination) || c.en.toLowerCase().includes(formData.destination.toLowerCase())
  );

  const handleWhatsAppBooking = () => {
    const text = `رزرو اقامتگاه در ${formData.destination}:
    📅 ${formData.checkIn} تا ${formData.checkOut}
    🛏 ${formData.bedrooms}
    👥 بزرگسال: ${formData.adults} | 🧸 با تخت: ${formData.childWithBed} | 👶 بدون تخت: ${formData.childNoBed}`;
    window.open(`https://wa.me/37433149327?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <ServicePageLayout
      titleFa="اجاره آپارتمان مبله در ایروان" titleEn="Furnished Apartment Rental in Yerevan" titleRu="Аренда меблированных квартир в Ереване"
      subtitleFa="اقامتگاه روزانه و ماهانه با آشپزخانه کامل، عکس واقعی و بهترین قیمت"
      subtitleEn="Daily & monthly stays with a full kitchen at the best price"
      subtitleRu="Посуточное и помесячное проживание с полной кухней"
      heroImage="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80"
      serviceType="apartment">

      {/* گالری تصاویر نمونه */}
      <div className="grid grid-cols-2 gap-2 mb-2 rounded-2xl overflow-hidden">
        {GALLERY.map((img, i) => (
          <div key={i} className={`overflow-hidden rounded-xl ${i === 0 ? 'col-span-2 aspect-[2/1]' : 'aspect-square'}`}>
            <img src={img.src} alt={isFa ? img.altFa : img.altEn} className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
      <p className="text-xs text-foreground/40 text-center mb-8">
        {isFa ? '* تصاویر بالا نمونه‌ای از استایل و کیفیت آپارتمان‌ها هستند. چون وضعیت موجودی هر روز تغییر می‌کند، عکس و ویدیوی دقیق واحد آزاد هنگام تماس در واتساپ برای شما ارسال می‌شود.' :
          isRu ? '* Фото выше — примеры стиля и качества квартир. Точные фото и видео свободной квартиры отправляются в WhatsApp при обращении.' :
          '* Photos above show the general style and quality of our apartments. Since availability changes daily, exact photos and video of the actual free unit are sent via WhatsApp when you reach out.'}
      </p>

      {isFa && <>
        <InfoBlock title="چرا اجاره آپارتمان به‌جای هتل؟">
          <p>برای اکثر مسافران ایرانی که به ایروان سفر می‌کنند، اجاره آپارتمان مبله گزینه‌ای اقتصادی‌تر و راحت‌تر از هتل است — چه سفر شما یک سفر گردشگری چندروزه باشد، چه اقامتی طولانی‌تر برای کار، تحصیل یا پیگیری امور اقامت و ثبت شرکت. برخلاف اتاق هتل، یک آپارتمان مبله آشپزخانه کامل، ماشین لباسشویی، فضای بیشتر برای خانواده و حریم خصوصی واقعی در اختیار شما می‌گذارد. برای اقامت بیش از سه شب، معمولاً هزینه کل آپارتمان از یک اتاق هتل هم‌رده پایین‌تر تمام می‌شود، به‌خصوص اگر سفر با همراه یا خانواده باشد.</p>
        </InfoBlock>

        <InfoBlock title="بهترین محله‌های ایروان برای اجاره آپارتمان">
          <p className="mb-3">قیمت اجاره در ایروان به‌شدت به محله بستگی دارد — گاهی تفاوت بین مرکز شهر و حومه تا دو یا سه برابر می‌رسد. انتخاب محله را بر اساس اولویت واقعی خودتان (دسترسی، آرامش یا صرفه‌جویی) انجام دهید:</p>

          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">کنترون (مرکز شهر) و میدان جمهوری</h3>
          <p className="mb-3">قلب تپنده ایروان و گران‌ترین منطقه شهر. دسترسی پیاده به کافه‌ها، رستوران‌ها، موزه‌ها و مراکز خرید. استودیوی مبله در این منطقه معمولاً بین ۷۰۰ تا ۹۰۰ دلار در ماه است. برای کسانی که ماشین ندارند و می‌خواهند همه‌چیز در دسترس پیاده باشد، بهترین انتخاب است.</p>

          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">کاسکاد</h3>
          <p className="mb-3">در امتداد مجموعه تاریخی کاسکاد (هزار پله ایروان)، فاصله کوتاه تا خیابان شمالی و میدان جمهوری. محله‌ای پرتردد با گالری‌های هنری و کافه‌های معروف، مناسب کسانی که به زندگی شبانه و فضای توریستی اهمیت می‌دهند.</p>

          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">آرابکیر</h3>
          <p className="mb-3">محله‌ای خانوادگی و مدرن، کمی دورتر از مرکز اما با مراکز خرید و امکانات کامل. قیمت‌ها نسبت به کنترون حدود ۲۰ تا ۳۰ درصد پایین‌تر است و برای اقامت‌های میان‌مدت با خانواده گزینه متعادلی محسوب می‌شود.</p>

          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">مالاتیا-سباستیا</h3>
          <p className="mb-3">دسترسی مناسب به حمل‌ونقل عمومی و قیمت معقول‌تر نسبت به مرکز، بدون این‌که خیلی از شهر دور باشد.</p>

          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">نورنورک، آوان و داواتاشن</h3>
          <p>اقتصادی‌ترین گزینه‌ها؛ یک استودیوی مشابه که در کنترون ۷۰۰ تا ۹۰۰ دلار است، در این محله‌ها معمولاً ۳۰۰ تا ۴۰۰ دلار در ماه پیدا می‌شود. مناسب کسانی که بودجه محدودتری دارند و مشکلی با ۱۵ تا ۲۵ دقیقه فاصله تا مرکز شهر ندارند.</p>
        </InfoBlock>

        <InfoBlock title="چطور مطمئن شویم آپارتمان واقعی و بدون کلاهبرداری است؟">
          <p>یکی از بزرگ‌ترین نگرانی‌های کسانی که از راه دور و بدون بازدید حضوری آپارتمان اجاره می‌کنند، ریسک آگهی‌های تقلبی یا آپارتمان‌هایی است که در واقعیت شبیه عکس‌های تبلیغاتی نیستند. برای جلوگیری از این مشکل:</p>
          <CheckList items={[
            'پیش از تأیید نهایی و پرداخت، عکس و ویدیوی واقعی از همان واحد آزاد (نه عکس تبلیغاتی قدیمی) برای شما ارسال می‌شود',
            'موقعیت دقیق آپارتمان روی نقشه و فاصله تا نقاط مهم شهر مشخص می‌شود',
            'هیچ پرداخت کاملی پیش از تأیید نهایی شما دریافت نمی‌شود',
            'در صورت هرگونه مغایرت بین عکس ارسالی و آپارتمان واقعی، جایگزینی رایگان انجام می‌شود',
          ]} />
        </InfoBlock>

        <InfoBlock title="روش‌های پرداخت اجاره برای ایرانیان">
          <p>با توجه به محدودیت‌های بانکی موجود، پرداخت اجاره از ایران معمولاً بزرگ‌ترین دغدغه مسافران است. کاسپین گروپ سه روش پرداخت را بدون نیاز به کارت بانکی بین‌المللی می‌پذیرد:</p>
          <CheckList items={[
            'واریز ریالی به حساب داخل ایران — بدون نیاز به تبدیل ارز از سوی شما',
            'پرداخت دلاری نقد یا کارت‌های دلاری معتبر',
            'رمزارز USDT برای پرداخت سریع و بدون واسطه بانکی',
          ]} />
        </InfoBlock>

        <InfoBlock title="هزینه‌های جانبی که باید بدانید">
          <p>در بیشتر آپارتمان‌های معرفی‌شده توسط کاسپین، اینترنت پرسرعت و شارژ ساختمان در قیمت اعلام‌شده لحاظ شده است. هزینه‌های جداگانه‌ای که ممکن است بسته به آپارتمان و فصل متفاوت باشد شامل قبض آب و برق مصرفی در اقامت‌های ماهانه (معمولاً ۲۰ تا ۴۰ دلار در ماه برای یک استودیو) و هزینه گرمایش زمستانی است. پیش از نهایی‌شدن رزرو، این جزئیات دقیقاً به شما اعلام می‌شود تا هیچ هزینه غیرمنتظره‌ای وجود نداشته باشد.</p>
        </InfoBlock>

        <InfoBlock title="انواع آپارتمان و متراژ">
          <CheckList items={[
            'استودیو (تک‌فضایی) — مناسب مسافر تکی یا زوج، از ۳۰ دلار در شب',
            'یک‌خوابه — مناسب زوج یا خانواده کوچک، از ۴۵ دلار در شب',
            'دوخوابه — مناسب خانواده تا ۴-۵ نفر، از ۶۵ دلار در شب',
            'سه‌خوابه و بیشتر — مناسب گروه‌ها و خانواده‌های بزرگ، قیمت بر اساس درخواست',
          ]} />
        </InfoBlock>

        <InfoBlock title="مراحل رزرو آپارتمان با کاسپین گروپ">
          <p className="mb-3">فرآیند رزرو ساده و کاملاً شفاف است:</p>
          <ol className="space-y-2 list-decimal list-inside text-sm text-foreground/70">
            <li>تاریخ سفر، منطقه مورد نظر و تعداد نفرات را در واتساپ اعلام می‌کنید</li>
            <li>تیم کاسپین گزینه‌های موجود را همراه با عکس و ویدیوی واقعی همان زمان برایتان ارسال می‌کند</li>
            <li>پس از انتخاب و تأیید نهایی شما، رزرو با پیش‌پرداخت مشخص تثبیت می‌شود</li>
            <li>در روز ورود، در صورت درخواست، ترانسفر از فرودگاه زوارتنوتس تا درِ آپارتمان هماهنگ می‌شود</li>
            <li>کلید و راهنمای کامل استفاده از امکانات آپارتمان تحویل داده می‌شود</li>
          </ol>
        </InfoBlock>

        <InfoBlock title="مدارک لازم برای اجاره">
          <p>برخلاف اجاره بلندمدت که معمولاً به ضامن یا قرارداد رسمی نیاز دارد، برای اجاره کوتاه‌مدت و میان‌مدت از طریق کاسپین تنها داشتن پاسپورت معتبر کافی است. برای اقامت‌های بیش از یک ماه، امکان تنظیم قرارداد اجاره رسمی نیز فراهم است — موضوعی که برای کسانی که همزمان به دنبال اقامت ارمنستان هستند اهمیت دارد.</p>
        </InfoBlock>
      </>}

      {lang === 'en' && <>
        <InfoBlock title="Why Rent an Apartment Instead of a Hotel?">
          <p>For most Iranian travelers visiting Yerevan, a furnished apartment is a more affordable and comfortable option than a hotel room — whether it's a short tourist trip or a longer stay for work, study, or handling residency and company registration matters. Unlike a hotel room, a furnished apartment gives you a full kitchen, a washing machine, more space for families, and real privacy. For stays longer than three nights, the total cost is usually lower than an equivalent hotel room, especially when traveling with family.</p>
        </InfoBlock>

        <InfoBlock title="Best Neighborhoods in Yerevan for Apartment Rental">
          <p className="mb-3">Rental prices in Yerevan vary sharply by neighborhood — the gap between the city center and the outskirts can be two to three times. Choose based on your real priority: access, quiet, or savings.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">Kentron (City Center) & Republic Square</h3>
          <p className="mb-3">Yerevan's beating heart and the most expensive district. Walking distance to cafés, restaurants, museums and shopping. A furnished studio here typically runs $700–900/month.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">Cascade</h3>
          <p className="mb-3">Along the famous Cascade complex, close to Northern Avenue and Republic Square. Lively, with art galleries and well-known cafés — ideal for those who value nightlife and a touristy atmosphere.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">Arabkir</h3>
          <p className="mb-3">A family-friendly, modern district a bit further from the center but with full amenities. Prices run roughly 20–30% lower than Kentron — a balanced choice for mid-term family stays.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">Nor Nork, Avan & Davtashen</h3>
          <p>The most budget-friendly options — a studio that costs $700–900 in Kentron typically runs $300–400/month here. Good for travelers on a tighter budget who don't mind a 15–25 minute commute to the center.</p>
        </InfoBlock>

        <InfoBlock title="How to Make Sure the Apartment Is Real and Scam-Free">
          <CheckList items={[
            'Real, current photos and video of the actual available unit are sent before final confirmation and payment',
            'Exact location on the map and distance to key landmarks is shared upfront',
            'No full payment is collected before your final confirmation',
            'If the apartment doesn\'t match what was shown, a free replacement is arranged',
          ]} />
        </InfoBlock>

        <InfoBlock title="Payment Methods for Iranian Travelers">
          <CheckList items={[
            'Rial bank transfer to an account inside Iran — no currency conversion needed on your end',
            'Cash USD or valid USD cards',
            'USDT cryptocurrency for fast, bank-free payment',
          ]} />
        </InfoBlock>

        <InfoBlock title="Apartment Types & Sizes">
          <CheckList items={[
            'Studio — for solo travelers or couples, from $30/night',
            'One-bedroom — for couples or small families, from $45/night',
            'Two-bedroom — for families up to 4–5 people, from $65/night',
            'Three-bedroom and larger — for groups and large families, price on request',
          ]} />
        </InfoBlock>

        <InfoBlock title="Booking Steps with Caspian Group">
          <ol className="space-y-2 list-decimal list-inside text-sm text-foreground/70">
            <li>Send your travel dates, preferred area and group size via WhatsApp</li>
            <li>Caspian's team sends available options with real, current photos and video</li>
            <li>Once you confirm, the booking is locked in with a deposit</li>
            <li>On arrival day, airport transfer from Zvartnots to your apartment door can be arranged</li>
            <li>Keys and a full walkthrough of the apartment's amenities are handed over</li>
          </ol>
        </InfoBlock>
      </>}

      {isRu && <>
        <InfoBlock title="Почему квартира лучше отеля?">
          <p>Для большинства путешественников меблированная квартира в Ереване — более выгодный и удобный вариант, чем номер в отеле, будь то короткая поездка или длительное пребывание по работе или учёбе. В отличие от отеля, квартира даёт полностью оборудованную кухню, стиральную машину, больше пространства для семьи и настоящую приватность.</p>
        </InfoBlock>

        <InfoBlock title="Лучшие районы Еревана для аренды">
          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">Кентрон (центр) и площадь Республики</h3>
          <p className="mb-3">Самый дорогой и оживлённый район. Студия здесь обычно стоит $700–900 в месяц.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">Каскад</h3>
          <p className="mb-3">Рядом со знаменитым комплексом Каскад, кафе и галереями — для тех, кто ценит ночную жизнь.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">Арабкир</h3>
          <p className="mb-3">Семейный современный район, на 20–30% дешевле центра.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">Нор Норк, Аван, Давташен</h3>
          <p>Самые доступные варианты — та же студия здесь стоит $300–400 в месяц, в 15–25 минутах от центра.</p>
        </InfoBlock>

        <InfoBlock title="Как убедиться, что квартира настоящая?">
          <CheckList items={[
            'Реальные фото и видео именно той квартиры, которая свободна, отправляются перед оплатой',
            'Точное расположение на карте указывается заранее',
            'Полная оплата не взимается до вашего окончательного подтверждения',
          ]} />
        </InfoBlock>

        <InfoBlock title="Способы оплаты">
          <CheckList items={[
            'Банковский перевод в риалах на счёт в Иране',
            'Наличные доллары или действующие долларовые карты',
            'Криптовалюта USDT',
          ]} />
        </InfoBlock>

        <InfoBlock title="Этапы бронирования">
          <ol className="space-y-2 list-decimal list-inside text-sm text-foreground/70">
            <li>Отправьте даты, район и количество гостей в WhatsApp</li>
            <li>Получите варианты с реальными фото и видео</li>
            <li>После подтверждения бронирование фиксируется депозитом</li>
            <li>В день прилёта возможен трансфер из аэропорта Звартноц</li>
          </ol>
        </InfoBlock>
      </>}

      <div className="glass-panel p-6 rounded-2xl border border-primary/30 mb-10 bg-black/40 backdrop-blur-md relative">
        <div className="space-y-4">

          {/* مقصد با اتوکامپلیت */}
          <div className="relative">
            <input type="text" placeholder="مقصد (شهر)" className="w-full bg-black/50 border border-white/10 p-3 rounded-xl text-white"
              value={formData.destination}
              onChange={(e) => { setFormData({...formData, destination: e.target.value}); setShowSuggestions(true); }} />

            {showSuggestions && formData.destination.length > 0 && (
              <div className="absolute z-50 w-full bg-black border border-white/20 mt-1 rounded-xl max-h-40 overflow-y-auto">
                {filteredCities.map((city, i) => (
                  <div key={i} className="p-3 hover:bg-primary/20 cursor-pointer text-white border-b border-white/5"
                    onClick={() => { setFormData({...formData, destination: `${city.fa} / ${city.en}`}); setShowSuggestions(false); }}>
                    {city.fa} - {city.en}
                  </div>
                ))}
              </div>
            )}
          </div>

          <select className="w-full bg-black/50 border border-white/10 p-3 rounded-xl text-white" onChange={(e) => setFormData({...formData, bedrooms: e.target.value})}>
            <option value="">تعداد اتاق خواب</option>
            <option value="1">یک خوابه</option><option value="2">دو خوابه</option>
            <option value="3">سه خوابه</option><option value="4">چهار خوابه</option>
            <option value="5+">پنج خوابه یا بیشتر</option>
          </select>

          <div className="grid grid-cols-2 gap-4">
            <input ref={dateRef1} type="date" min={today} className="w-full bg-black/50 border border-white/10 p-3 rounded-xl text-white cursor-pointer [color-scheme:dark]" onClick={() => dateRef1.current.showPicker()} onChange={(e) => setFormData({...formData, checkIn: e.target.value})} />
            <input ref={dateRef2} type="date" min={formData.checkIn || today} className="w-full bg-black/50 border border-white/10 p-3 rounded-xl text-white cursor-pointer [color-scheme:dark]" onClick={() => dateRef2.current.showPicker()} onChange={(e) => setFormData({...formData, checkOut: e.target.value})} />
          </div>

          <div className="relative">
            <button onClick={() => setShowGuests(!showGuests)} className="w-full bg-black/50 border border-white/10 p-3 rounded-xl text-white text-right">
              {formData.adults} بزرگسال، {formData.childWithBed + formData.childNoBed} کودک
            </button>
            {showGuests && (
              <div className="absolute z-50 w-full bg-black border border-white/20 p-4 rounded-xl mt-2 shadow-2xl">
                {[ { label: 'بزرگسال (تا ۲۰)', key: 'adults', max: 20 }, { label: 'کودک با تخت (تا ۵)', key: 'childWithBed', max: 5 }, { label: 'کودک بدون تخت (تا ۵)', key: 'childNoBed', max: 5 } ].map((item) => (
                  <div key={item.key} className="flex justify-between items-center py-2">
                    <span className="text-white text-sm">{item.label}</span>
                    <input type="number" min="0" max={item.max} className="w-16 bg-white/10 text-white text-center rounded-lg" value={formData[item.key]} onChange={(e) => setFormData({...formData, [item.key]: Math.min(item.max, parseInt(e.target.value) || 0)})} />
                  </div>
                ))}
              </div>
            )}
          </div>

          <button onClick={handleWhatsAppBooking} className="w-full py-4 bg-primary text-black font-black rounded-xl hover:bg-yellow-500">ارسال درخواست رزرو</button>
        </div>
      </div>
    </ServicePageLayout>
  );
}

export default ApartmentContent;

'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';
import { ChevronDown, Star } from 'lucide-react';

// ۱۵ هتل واقعی ارمنستان
const HOTELS = {
  3: [
    {
      name: 'Erebuni Hotel',
      location: 'مرکز ایروان، نزدیک میدان جمهوری', locationEn: 'Yerevan Center, near Republic Square', locationRu: 'Центр Еревана, рядом с площадью Республики',
      price: 55,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=75',
      descFa: 'هتل اربونی یکی از قدیمی‌ترین و شناخته‌شده‌ترین هتل‌های ایروان است. موقعیت مرکزی، نزدیکی به جاذبه‌های اصلی شهر و سرویس صبحانه از ویژگی‌های اصلی آن است.',
      descEn: 'Erebuni Hotel is one of Yerevan\'s oldest recognized hotels. Central location, proximity to major attractions, and included breakfast are key features.',
      descRu: 'Отель Erebuni — один из старейших и наиболее известных отелей Еревана. Центральное расположение и включённый завтрак.',
    },
    {
      name: 'Hotel Nork',
      location: 'محله نورک، منظره شهر', locationEn: 'Nork District, city view', locationRu: 'Район Норк, вид на город',
      price: 50,
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=75',
      descFa: 'هتل نورک در محله آرام نورک قرار دارد و منظره زیبایی از ایروان و کوه آرارات دارد. مناسب کسانی که محیط آرام را ترجیح می‌دهند.',
      descEn: 'Hotel Nork is in peaceful Nork with stunning views of Yerevan and Mount Ararat. Ideal for those who prefer a quieter environment.',
      descRu: 'Отель Nork в спокойном районе с потрясающим видом на Ереван и гору Арарат.',
    },
    {
      name: 'Hotel Dvin',
      location: 'بلوار مشروتیان، مرکز شهر', locationEn: 'Mesrobian Boulevard, city center', locationRu: 'Бульвар Месробян, центр города',
      price: 48,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=75',
      descFa: 'هتل دوین با موقعیت مرکزی عالی، اتاق‌های تمیز و نزدیکی به رستوران‌ها و مراکز خرید، یکی از محبوب‌ترین انتخاب‌های ۳ ستاره در ایروان است.',
      descEn: 'Hotel Dvin offers excellent central location, clean rooms, and proximity to restaurants and shopping — one of the most popular 3-star choices.',
      descRu: 'Отель Dvin предлагает отличное расположение, чистые номера и близость к ресторанам и торговым центрам.',
    },
    {
      name: 'Cascade Hotel',
      location: 'نزدیک کاسکاد، خیابان ترامپلین', locationEn: 'Near Cascade, Tramplin Street', locationRu: 'Рядом с Каскадом, ул. Трамплин',
      price: 52,
      image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=75',
      descFa: 'هتل کاسکاد در نزدیکی کمپلکس معروف کاسکاد قرار دارد. دسترسی آسان به گالری‌های هنری، کافه‌ها و پارک‌های شهری.',
      descEn: 'Cascade Hotel is located near the famous Cascade complex with easy access to art galleries, cafés, and city parks.',
      descRu: 'Отель Cascade рядом с комплексом Каскад, удобный доступ к галереям, кафе и паркам.',
    },
    {
      name: 'Nairi Hotel',
      location: 'خیابان آبوویان، مرکز تاریخی', locationEn: 'Abovyan Street, historic center', locationRu: 'Улица Абовяна, исторический центр',
      price: 45,
      image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=600&q=75',
      descFa: 'هتل نایری در قلب ایروان تاریخی، دسترسی عالی به مترو و رستوران‌های ایرانی دارد. انتخاب اقتصادی با کیفیت خوب.',
      descEn: 'Nairi Hotel in the heart of historic Yerevan with excellent metro access and Iranian restaurants nearby. A budget-friendly choice.',
      descRu: 'Отель Nairi в центре с удобным доступом к метро и иранским ресторанам.',
    },
  ],
  4: [
    {
      name: 'Best Western Plus Congress Hotel',
      location: 'میدان جمهوری، مرکز اصلی ایروان', locationEn: 'Republic Square, main center', locationRu: 'Площадь Республики, центр Еревана',
      price: 120,
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=75',
      descFa: 'بست وسترن پلاس کنگره روبروی میدان جمهوری با ویوی بی‌نظیر، استخر و اسپا. یکی از بهترین گزینه‌های ۴ ستاره برای ضمیمه ویزا.',
      descEn: 'Best Western Plus Congress directly faces Republic Square with unique views, pool, and spa. One of the best 4-star options for visa documentation.',
      descRu: 'Best Western Plus Congress прямо напротив площади Республики с уникальным видом, бассейном и спа.',
    },
    {
      name: 'Yerevan Marriott Hotel',
      location: 'میدان جمهوری، قلب ایروان', locationEn: 'Republic Square, heart of Yerevan', locationRu: 'Площадь Республики, сердце Еревана',
      price: 150,
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=75',
      descFa: 'ماریوت ایروان یکی از بهترین هتل‌های ۴ ستاره. صبحانه بوفه بین‌المللی، فیتنس کلاب، استخر سرپوشیده و رستوران‌های متنوع.',
      descEn: 'Yerevan Marriott is one of the city\'s finest 4-star hotels with international buffet, fitness club, indoor pool, and diverse restaurants.',
      descRu: 'Marriott Ереван — один из лучших 4-звёздочных отелей с шведским столом, фитнес-клубом и крытым бассейном.',
    },
    {
      name: 'Radisson Blu Hotel Yerevan',
      location: 'مرکز تجاری، نزدیک پارک Victory', locationEn: 'Business center, near Victory Park', locationRu: 'Деловой центр, рядом с парком Победы',
      price: 135,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=75',
      descFa: 'رادیسون بلو در قلب مرکز تجاری ایروان، چشم‌اندازی زیبا از شهر و کوه آرارات. مناسب سفرهای تجاری و مسافران VIP.',
      descEn: 'Radisson Blu Yerevan is in the heart of the business center with city and Ararat views. Ideal for business trips and VIP travelers.',
      descRu: 'Radisson Blu Yerevan в деловом центре с видом на город и Арарат. Идеален для деловых поездок.',
    },
    {
      name: 'Golden Palace Hotel',
      location: 'ابوویان، نزدیک اپرا', locationEn: 'Abovyan, near Opera House', locationRu: 'Абовян, рядом с оперным театром',
      price: 110,
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=75',
      descFa: 'گلدن پالاس نزدیک خانه اپرا. طراحی کلاسیک ارمنی، رستوران ملی و خدمات سطح بالا.',
      descEn: 'Golden Palace Hotel near the Opera House. Classic Armenian design, national restaurant, and premium services.',
      descRu: 'Golden Palace рядом с Оперным театром. Армянский дизайн и первоклассный сервис.',
    },
    {
      name: 'Ararat Park Hyatt',
      location: 'پشت کاخ ریاست جمهوری، چشم‌انداز آرارات', locationEn: 'Behind Presidential Palace, Ararat view', locationRu: 'За президентским дворцом, вид на Арарат',
      price: 145,
      image: 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=600&q=75',
      descFa: 'آرارات پارک هایت با چشم‌انداز مستقیم به کوه آرارات، اتاق‌های بزرگ، رستوران لوکس و استخر روفتاپ.',
      descEn: 'Ararat Park Hyatt with direct Ararat views, spacious rooms, luxury restaurant, and rooftop pool.',
      descRu: 'Ararat Park Hyatt с прямым видом на Арарат, просторными номерами и бассейном на крыше.',
    },
  ],
  5: [
    {
      name: 'The Alexander, a Luxury Collection Hotel',
      location: 'خیابان آرامی، قلب شهر', locationEn: 'Arami Street, heart of the city', locationRu: 'Улица Арами, сердце города',
      price: 250,
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=75',
      descFa: 'الکساندر لاکچری کالکشن زیباترین هتل ۵ ستاره ایروان. ساختمانی تاریخی با طراحی داخلی بین‌المللی، اسپا جهانی، بار بام‌بام و رستوران فاین‌دایننگ.',
      descEn: 'The Alexander Luxury Collection is Yerevan\'s most beautiful 5-star hotel. Historic building, world-class spa, rooftop bar, and fine dining.',
      descRu: 'The Alexander Luxury Collection — самый красивый 5-звёздочный отель Еревана с международным интерьером и мировым спа.',
    },
    {
      name: 'Marriott Armenia Hotel',
      location: 'میدان جمهوری، نمادین‌ترین آدرس شهر', locationEn: 'Republic Square, most iconic address', locationRu: 'Площадь Республики, самый знаковый адрес',
      price: 230,
      image: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=600&q=75',
      descFa: 'ماریوت ارمنستان در میدان جمهوری، نمادین‌ترین هتل ایروان. بالکن با چشم‌انداز مستقیم میدان، دکوراسیون لوکس و خدمات ۲۴ ساعته.',
      descEn: 'Marriott Armenia at Republic Square is Yerevan\'s most iconic hotel. Balconies with direct square views and 24/7 services.',
      descRu: 'Marriott Armenia на площади Республики с балконами с прямым видом и круглосуточным обслуживанием.',
    },
    {
      name: 'Hilton Yerevan',
      location: 'خیابان سایات نووا، مرکز فرهنگی', locationEn: 'Sayat-Nova Avenue, cultural center', locationRu: 'Проспект Саят-Нова, культурный центр',
      price: 220,
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=75',
      descFa: 'هیلتون ایروان در کنار موزه‌ها و تئاترهای معروف. ۲۴۰ اتاق و سوئیت لوکس، استخر داخلی، مرکز تناسب اندام و ۴ رستوران.',
      descEn: 'Hilton Yerevan next to famous museums and theaters. 240 luxury rooms, indoor pool, fitness center, and 4 restaurants.',
      descRu: 'Hilton Yerevan рядом с музеями и театрами. 240 роскошных номеров, крытый бассейн и 4 ресторана.',
    },
    {
      name: 'Tufenkian Historic Yerevan Hotel',
      location: 'مرکز قدیمی ایروان، میراث فرهنگی', locationEn: 'Old Yerevan center, cultural heritage', locationRu: 'Исторический центр, культурное наследие',
      price: 195,
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=75',
      descFa: 'هتل تاریخی توفنکیان در بافت قدیمی ایروان با طراحی اختصاصی ارمنی و هنر اصیل. هر اتاق یک اثر هنری منحصربه‌فرد است.',
      descEn: 'Tufenkian Historic Hotel in old Yerevan with authentic Armenian design. Each room is a unique work of art — perfect for culturally curious travelers.',
      descRu: 'Исторический отель Tufenkian с аутентичным армянским дизайном. Каждый номер — уникальное произведение искусства.',
    },
    {
      name: 'Grand Hotel Yerevan',
      location: 'بلوار مشروتیان، مشرف به آرارات', locationEn: 'Mesrobian Blvd, overlooking Ararat', locationRu: 'Бульвар Месробян, с видом на Арарат',
      price: 240,
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=75',
      descFa: 'گرند هتل ایروان با چشم‌اندازی حیرت‌انگیز از کوه آرارات، جاکوزی در سوئیت‌ها، باشگاه ورزشی VIP و رستوران بام‌بام با موزیک زنده.',
      descEn: 'Grand Hotel Yerevan with stunning Ararat views, in-suite jacuzzi, VIP fitness club, and rooftop restaurant with live music.',
      descRu: 'Grand Hotel Yerevan с видом на Арарат, джакузи в люксах и рестораном на крыше с живой музыкой.',
    },
  ],
};

function StarBadge({ count }) {
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
      ))}
    </span>
  );
}

function HotelCard({ hotel, lang }) {
  const price = lang === 'fa' ? `از ~$${hotel.price}/شب دبل` : lang === 'ru' ? `от ~$${hotel.price}/ночь` : `from ~$${hotel.price}/night`;
  const location = lang === 'fa' ? hotel.location : lang === 'ru' ? hotel.locationRu : hotel.locationEn;
  const desc = lang === 'fa' ? hotel.descFa : lang === 'ru' ? hotel.descRu : hotel.descEn;
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="glass-panel rounded-2xl overflow-hidden border border-white/8 hover:border-primary/30 transition-all duration-300">
      <div className="relative h-44 overflow-hidden">
        <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <span className="text-white font-bold text-base drop-shadow">{hotel.name}</span>
          <span className="bg-primary/90 text-background text-xs font-bold px-2 py-1 rounded-lg">{price}</span>
        </div>
      </div>
      <div className="p-4">
        <p className="text-xs text-primary/80 mb-2">📍 {location}</p>
        <p className="text-xs text-foreground/60 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

function HotelCategorySection({ stars, hotels, lang }) {
  const sectionTitle = {
    fa: { 3: 'هتل‌های ۳ ستاره — اقتصادی با کیفیت', 4: 'هتل‌های ۴ ستاره — راحتی بالا', 5: 'هتل‌های ۵ ستاره — لاکچری' },
    en: { 3: '3-Star Hotels — Budget Quality', 4: '4-Star Hotels — High Comfort', 5: '5-Star Hotels — Luxury' },
    ru: { 3: '3-звёздочные — бюджет', 4: '4-звёздочные — комфорт', 5: '5-звёздочные — люкс' },
  };
  const priceNote = {
    fa: { 3: 'میانگین اتاق دبل: ۴۵ تا ۶۵ دلار/شب', 4: 'میانگین اتاق دبل: ۱۰۰ تا ۱۵۰ دلار/شب', 5: 'میانگین اتاق دبل: ۱۹۰ تا ۲۵۰+ دلار/شب' },
    en: { 3: 'Avg double: $45–$65/night', 4: 'Avg double: $100–$150/night', 5: 'Avg double: $190–$250+/night' },
    ru: { 3: 'Двухместный: $45–$65/ночь', 4: '$100–$150/ночь', 5: '$190–$250+/ночь' },
  };
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <StarBadge count={stars} />
          <h2 className="text-lg font-black text-foreground">{sectionTitle[lang]?.[stars]}</h2>
        </div>
        <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">{priceNote[lang]?.[stars]}</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {hotels.map((h, i) => <HotelCard key={i} hotel={h} lang={lang} />)}
      </div>
    </div>
  );
}

const FAQS = {
  fa: [
    { q: 'چطور هتل رزرو کنم؟', a: 'نام هتل، تاریخ ورود و خروج و تعداد نفرات را در واتساپ ارسال کنید. تیم کاسپین ظرف چند ساعت قیمت دقیق را تأیید، رزرو می‌کند و واچر رسمی صادر می‌کند.' },
    { q: 'آیا واچر هتل برای ویزا معتبر است؟', a: 'بله. واچر صادرشده توسط کاسپین مهر رسمی دارد، تاریخ دقیق و نام کامل مسافر در آن ذکر است و توسط سفارتخانه‌های شینگن، روسیه و سایر مقاصد پذیرفته می‌شود.' },
    { q: 'روش پرداخت چیست؟', a: 'واریز ریالی به حساب داخل ایران، دلار نقد یا رمزارز USDT. نیازی به کارت بین‌المللی نیست.' },
    { q: 'قیمت‌ها بسته به فصل فرق دارد؟', a: 'بله. فصل اوج (خرداد تا شهریور و تعطیلات نوروز) قیمت‌ها ۲۰ تا ۴۰ درصد بالاتر است. رزرو حداقل ۴ تا ۶ هفته قبل توصیه می‌شود. بهار و پاییز بهترین ترکیب قیمت و آب‌وهوا را دارند.' },
    { q: 'لغو رزرو چطور است؟', a: 'شرایط لغو بسته به هتل و نوع رزرو متفاوت است. کاسپین امکان رزرو با شرایط لغو رایگان (مناسب زمانی که نتیجه ویزا مشخص نیست) را نیز فراهم می‌کند.' },
    { q: 'آیا ترانسفر فرودگاه هم هماهنگ می‌شود؟', a: 'بله، ترانسفر از فرودگاه زوارتنوتس مستقیم به هتل قابل هماهنگی است.' },
  ],
  en: [
    { q: 'How do I book a hotel?', a: 'Send the hotel name, check-in/out dates, and number of guests via WhatsApp. Caspian\'s team confirms pricing within hours, completes the booking, and issues an official voucher.' },
    { q: 'Is the hotel voucher accepted for visa applications?', a: 'Yes. The voucher issued by Caspian carries an official stamp, lists exact dates and the traveler\'s full name, and is accepted by Schengen embassies, the Russian embassy, and other missions.' },
    { q: 'What are the payment options?', a: 'Rial bank transfer to an Iranian account, cash USD, or USDT. No international card needed.' },
    { q: 'Do prices vary by season?', a: 'Yes. Peak season (June–September and Nowruz holidays) can be 20–40% higher. Book at least 4–6 weeks ahead. Spring and autumn offer the best price-weather combination.' },
  ],
  ru: [
    { q: 'Как забронировать отель?', a: 'Напишите в WhatsApp название отеля, даты и количество гостей. Команда Caspian подтвердит цену и выдаст официальный ваучер.' },
    { q: 'Принимается ли ваучер для визы?', a: 'Да. Ваучер содержит официальную печать, точные даты и полное имя туриста и принимается посольствами Шенгена, России и других стран.' },
    { q: 'Способы оплаты?', a: 'Банковский перевод в риалах, наличные USD или криптовалюта USDT.' },
    { q: 'Меняются ли цены по сезонам?', a: 'Да. Пик (июнь–сентябрь, Новруз) — на 20–40% дороже. Бронируйте за 4–6 недель. Лучшее соотношение цены и погоды — весна и осень.' },
  ],
};

function HotelFAQ() {
  const { lang } = useLang();
  const [active, setActive] = useState(null);
  const faqs = FAQS[lang] || FAQS.fa;
  const title = { fa: 'سوالات متداول', en: 'Frequently Asked Questions', ru: 'Вопросы и ответы' };
  return (
    <div className="mt-10 mb-6">
      <h2 className="text-xl font-bold text-foreground mb-4">{title[lang]}</h2>
      <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden">
        {faqs.map((faq, i) => (
          <div key={i} className={i < faqs.length - 1 ? 'border-b border-white/5' : ''}>
            <button onClick={() => setActive(active === i ? null : i)}
              className="w-full flex items-center justify-between p-4 sm:p-5 hover:bg-white/5 transition-colors text-right">
              <span className="font-medium text-foreground/90 text-sm leading-relaxed pr-2">{faq.q}</span>
              <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${active === i ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {active === i && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                  <div className="px-5 pb-5 text-sm text-foreground/65 leading-relaxed">{faq.a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

function HotelContent() {
  const { lang } = useLang();
  const isFa = lang === 'fa';
  const isRu = lang === 'ru';

  const note = {
    fa: '* قیمت‌ها میانگین تخمینی برای اتاق دبل در فصل معمولی هستند. در فصل اوج (تابستان، نوروز) ۲۰ تا ۴۰ درصد بیشتر می‌شود.',
    en: '* Prices are estimated averages for a double room in regular season. Peak season (summer, Nowruz) may be 20–40% higher.',
    ru: '* Ориентировочные средние цены для двухместного номера. В пиковый сезон на 20–40% выше.',
  };

  return (
    <ServicePageLayout
      titleEn="Hotel Booking in Yerevan, Armenia"
      titleFa="رزرو هتل در ایروان و ارمنستان"
      titleRu="Бронирование отелей в Армении"
      subtitleEn="3, 4 & 5-star hotels — official voucher, best prices via Caspian Group"
      subtitleFa="هتل‌های ۳، ۴ و ۵ ستاره — واچر رسمی، بهترین قیمت از طریق کاسپین"
      subtitleRu="Отели 3, 4 и 5 звёзд — официальный ваучер, лучшие цены"
      heroImage="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80"
      showFaq={false}>

      {isFa && <>
        <InfoBlock title="چرا رزرو هتل ایروان از طریق کاسپین؟">
          <p>رزرو مستقیم از بوکینگ یا اکسپدیا برای اتباع ایرانی معمولاً به کارت اعتباری بین‌المللی نیاز دارد که بیشتر ایرانیان به آن دسترسی ندارند. کاسپین گروپ این مشکل را حل کرده: رزرو از طریق واتساپ، تأیید قیمت قبل از پرداخت، پرداخت ریالی/دلاری/USDT، و صدور واچر رسمی برای ارائه به سفارتخانه. علاوه بر این، در صورت بروز هر مشکل در هتل، یک تیم پشتیبانی فارسی‌زبان همراه شما خواهد بود.</p>
        </InfoBlock>

        <InfoBlock title="واچر رسمی هتل برای ویزا — نکات مهم">
          <p className="mb-3">اکثر سفارتخانه‌های اروپایی (ویزای شینگن)، روسیه، ترکیه و سایر مقاصد برای پرونده ویزا به واچر رسمی هتل نیاز دارند — نه صرفاً یک اسکرین‌شات از سایت یا لینک رزرو. واچر باید شامل موارد زیر باشد:</p>
          <CheckList items={[
            'نام کامل مسافر (دقیقاً مطابق پاسپورت)',
            'تاریخ دقیق چک‌این و چک‌اوت',
            'نام و آدرس هتل با سربرگ یا مهر رسمی',
            'شماره تأیید رزرو و اطلاعات تماس هتل',
            'گزینه لغو رایگان — مناسب زمانی که نتیجه ویزا هنوز مشخص نیست',
          ]} />
        </InfoBlock>

        <InfoBlock title="انتخاب هتل بر اساس هدف سفر شما">
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">سفر گردشگری کوتاه‌مدت (۳ تا ۷ شب)</h3>
          <p className="mb-3">هتل‌های ۳ ستاره مرکز شهر (مانند اربونی، دوین، کاسکاد) انتخابی هوشمندانه هستند. موقعیت مرکزی به شما امکان می‌دهد بدون نیاز به تاکسی اکثر جاذبه‌های شهر را پیاده ببینید. قیمت اتاق دبل در این هتل‌ها بین ۴۵ تا ۶۵ دلار در شب است.</p>

          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">سفر تجاری یا جلسه با شرکا</h3>
          <p className="mb-3">هتل‌های ۴ ستاره در محور میدان جمهوری (ماریوت، رادیسون بلو، بست وسترن کنگره) فاصله کمی از اکثر ادارات دولتی، سفارتخانه‌ها و مراکز تجاری دارند. سرویس ترانسفر فرودگاهی معمولاً در این هتل‌ها رایگان است یا با قیمت مناسب ارائه می‌شود.</p>

          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">تعطیلات خانوادگی یا ماه عسل</h3>
          <p>هتل‌های ۵ ستاره مانند الکساندر لاکچری کالکشن، گرند هتل و هیلتون خدمات اسپا، استخر، رستوران لوکس و اتاق‌های بزرگ خانوادگی دارند. اگر رمانتیک بودن اقامت مهم است، گرند هتل با چشم‌انداز مستقیم به کوه آرارات در میان مسافران ایرانی بسیار محبوب است.</p>
        </InfoBlock>

        <InfoBlock title="بهترین فصل برای رزرو هتل در ایروان">
          <p className="mb-3">آب‌وهوا و قیمت هتل‌های ایروان در طول سال تفاوت قابل توجهی دارند:</p>
          <CheckList items={[
            'بهار (اردیبهشت و خرداد) — آب‌وهوای ایده‌آل، قیمت‌های معقول، شهر سرسبز. بهترین زمان',
            'تابستان (تیر تا شهریور) — فصل اوج گردشگری، قیمت‌ها ۲۰ تا ۴۰ درصد بالاتر. حداقل ۶ هفته قبل رزرو کنید',
            'پاییز (مهر و آبان) — آب‌وهوای عالی، قیمت‌های خوب، شلوغی کمتر',
            'نوروز (فروردین) — فصل اوج مسافران ایرانی. بعضی هتل‌ها ۳ ماه قبل رزرو می‌شوند',
            'زمستان (دی و بهمن) — زمستان سرد، تخفیف‌های ویژه. مناسب کسانی که به فضای برفی علاقه دارند',
          ]} />
        </InfoBlock>

        <InfoBlock title="روش‌های پرداخت رزرو هتل برای ایرانیان">
          <p>محدودیت‌های بانکی رزرو مستقیم هتل‌های خارجی را برای اتباع ایرانی دشوار کرده است. کاسپین گروپ سه روش پرداخت بدون نیاز به کارت بین‌المللی ارائه می‌دهد:</p>
          <CheckList items={[
            'واریز ریالی به حساب داخل ایران — آسان‌ترین روش برای مسافران داخل کشور',
            'پرداخت دلاری نقد یا کارت دلاری معتبر',
            'رمزارز USDT — برای پرداخت سریع بدون واسطه بانکی',
          ]} />
        </InfoBlock>

        <InfoBlock title="نکات مهم هنگام رزرو هتل در ایروان">
          <CheckList items={[
            'بهترین اتاق‌ها در هتل‌های مشرف به میدان جمهوری یا کوه آرارات زودتر از بقیه پر می‌شوند — برای این اتاق‌ها زودتر اقدام کنید',
            'هتل‌های ایروان معمولاً صبحانه بوفه شامل دارند — در اتاق‌های ارزان‌تر ممکن است صبحانه جداگانه باشد',
            'بیشتر هتل‌های مرکزی پارکینگ ندارند یا پارکینگ آن‌ها محدود است — اگر ماشین اجاره می‌کنید این نکته را مد نظر داشته باشید',
            'در فصل تابستان و نوروز، هتل‌های نزدیک پارک‌ها و میدان جمهوری پرسروصداتر هستند',
            'هتل‌های ۳ ستاره در محله‌های کمی دورتر مانند نورک، معمولاً تمیزتر و آرام‌تر از همتایان مرکزی‌شان هستند',
          ]} />
        </InfoBlock>
      </>}

      {lang === 'en' && <>
        <InfoBlock title="Why Book Yerevan Hotels Through Caspian?">
          <p>Direct booking on Booking.com or Expedia typically requires an international credit card — something most Iranian travelers don't have access to. Caspian Group solves this: WhatsApp booking, price confirmation before payment, Rial/USD/USDT options, and official voucher issuance for embassy submission. A Persian-speaking support team is also available if anything comes up at the hotel.</p>
        </InfoBlock>

        <InfoBlock title="Official Hotel Voucher for Visa — What You Need to Know">
          <CheckList items={[
            'Traveler\'s full name exactly as in the passport',
            'Exact check-in and check-out dates',
            'Hotel name and address with official letterhead or stamp',
            'Booking confirmation number and hotel contact details',
            'Free cancellation option available — important when visa outcome is still pending',
          ]} />
        </InfoBlock>

        <InfoBlock title="Choosing a Hotel Based on Your Trip Purpose">
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">Short Tourist Trip (3–7 nights)</h3>
          <p className="mb-3">3-star central hotels (Erebuni, Dvin, Cascade) are the smart choice. Central position lets you walk to most attractions. Double rooms run $45–$65/night.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">Business Travel</h3>
          <p className="mb-3">4-star hotels around Republic Square (Marriott, Radisson Blu, Best Western Congress) are close to government offices, embassies, and business centers.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">Family Holiday or Honeymoon</h3>
          <p>5-star options like The Alexander, Grand Hotel, and Hilton offer spa, pool, luxury restaurants, and large family rooms. Grand Hotel's direct Ararat mountain view is especially popular with Iranian couples.</p>
        </InfoBlock>

        <InfoBlock title="Best Season for Hotel Booking in Yerevan">
          <CheckList items={[
            'Spring (May–June) — ideal weather, reasonable prices, lush greenery',
            'Summer (July–Sept) — peak season, prices 20–40% higher. Book 6+ weeks ahead',
            'Autumn (Oct–Nov) — excellent weather, good prices, fewer crowds',
            'Nowruz (March) — peak for Iranian travelers. Some hotels book out 3 months early',
            'Winter (Jan–Feb) — cold, but special discounts available',
          ]} />
        </InfoBlock>
      </>}

      {isRu && <>
        <InfoBlock title="Почему бронировать отель в Ереване через Caspian?">
          <p>Прямое бронирование на Booking.com обычно требует международной карты. Caspian Group решает эту проблему: бронирование через WhatsApp, оплата в риалах/USD/USDT и выдача официального ваучера для посольства.</p>
        </InfoBlock>

        <InfoBlock title="Официальный ваучер для визы">
          <CheckList items={[
            'Полное имя туриста в соответствии с паспортом',
            'Точные даты заезда и выезда',
            'Название отеля с официальной печатью',
            'Номер подтверждения бронирования',
            'Возможность бесплатной отмены',
          ]} />
        </InfoBlock>

        <InfoBlock title="Лучший сезон для бронирования">
          <CheckList items={[
            'Весна (май–июнь) — отличная погода, разумные цены',
            'Лето (июль–сентябрь) — пик сезона, цены на 20–40% выше',
            'Осень (октябрь–ноябрь) — прекрасная погода, меньше туристов',
            'Новруз (март) — пик для иранских туристов',
          ]} />
        </InfoBlock>
      </>}

      {/* لیست هتل‌ها */}
      <h2 className="text-2xl font-black text-foreground mb-6 text-center gold-gradient-text">
        {isFa ? 'هتل‌های پیشنهادی ایروان' : isRu ? 'Рекомендуемые отели Еревана' : 'Recommended Hotels in Yerevan'}
      </h2>

      <HotelCategorySection stars={3} hotels={HOTELS[3]} lang={lang} />
      <HotelCategorySection stars={4} hotels={HOTELS[4]} lang={lang} />
      <HotelCategorySection stars={5} hotels={HOTELS[5]} lang={lang} />

      <p className="text-xs text-foreground/40 text-center mt-2 mb-6">{note[lang]}</p>

      {/* بخش اختصاصی سوالات متداول هتل */}
      <HotelFAQ />
    </ServicePageLayout>
  );
}

export default HotelContent;

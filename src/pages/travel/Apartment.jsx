import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
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

function ApartmentContent() {
  const { lang } = useLang();

  useSEO({
    title: lang === 'fa' ? 'اجاره آپارتمان مبله در ایروان | روزانه و ماهانه - کاسپین گروپ' :
           lang === 'ru' ? 'Аренда меблированных квартир в Ереване | Посуточно и помесячно' :
           'Furnished Apartment Rental in Yerevan | Daily & Monthly | Caspian Group',
    description: lang === 'fa' ? 'اجاره آپارتمان مبله روزانه و ماهانه در ایروان با بهترین قیمت. آپارتمان‌های ۱ تا ۴ خوابه در مرکز شهر، کاسکاد و میدان جمهوری با پرداخت ریالی و دلاری.' :
                 lang === 'ru' ? 'Аренда меблированных квартир посуточно и помесячно в Ереване по лучшим ценам. Квартиры от 1 до 4 спален в центре города.' :
                 'Furnished apartments for daily and monthly rent in Yerevan at the best prices. 1 to 4-bedroom apartments in the city center, Cascade and Republic Square.',
    keywords: lang === 'fa' ? 'اجاره آپارتمان ایروان، اجاره سوئیت ارمنستان، آپارتمان روزانه ایروان، اجاره ماهانه ایروان، سوئیت مبله ایروان، اقامتگاه ارمنستان' :
              lang === 'ru' ? 'аренда квартиры Ереван, посуточная аренда Армения, меблированная квартира Ереван' :
              'apartment rental Yerevan, daily apartment Yerevan, monthly apartment Armenia, furnished suite Yerevan',
    ogImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80',
    path: '/travel/apartment',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: lang === 'fa' ? 'اجاره آپارتمان در ایروان' : 'Apartment Rental in Yerevan',
      description: lang === 'fa' ? 'اجاره آپارتمان مبله روزانه و ماهانه در ایروان و سایر شهرهای ارمنستان' : 'Daily and monthly furnished apartment rental in Yerevan and across Armenia',
      provider: { '@type': 'Organization', name: 'Caspian Business Group', url: 'https://caspian.am' },
      areaServed: { '@type': 'Country', name: 'Armenia' },
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

  const sectionText = {
    fa: {
      why: 'چرا اجاره آپارتمان در ایروان؟',
      whyBody: 'اجاره آپارتمان مبله در ایروان یکی از اقتصادی‌ترین و راحت‌ترین گزینه‌های اقامت برای ایرانیان است — چه برای سفر گردشگری کوتاه‌مدت، چه برای اقامت طولانی‌مدت در کنار کار یا تحصیل. برخلاف هتل، آپارتمان آشپزخانه مجهز، فضای بیشتر و حریم خصوصی کامل در اختیار شما می‌گذارد و برای خانواده‌ها و اقامت بیش از چند شب به‌صرفه‌تر تمام می‌شود.',
      areas: 'بهترین مناطق ایروان برای اجاره آپارتمان',
      areasItems: ['مرکز شهر و میدان جمهوری — دسترسی به همه‌جا', 'کاسکاد — نزدیک گالری‌ها و کافه‌ها', 'خیابان آبوویان — قلب تاریخی ایروان', 'نورک — محیط آرام و مناظر شهری', 'شهرک ماش‌توتس — قیمت مناسب‌تر'],
      services: 'خدمات کاسپین در اجاره آپارتمان',
      servicesItems: ['ارسال عکس و مشخصات واقعی قبل از رزرو', 'رزرو روزانه، هفتگی و ماهانه با تخفیف اقامت بلندمدت', 'ترانسفر فرودگاه تا محل اقامت', 'پرداخت ریالی، دلاری یا رمزارز USDT', 'پشتیبانی واتساپ و تلگرام در طول اقامت'],
    },
    en: {
      why: 'Why Rent an Apartment in Yerevan?',
      whyBody: 'Renting a furnished apartment in Yerevan is one of the most affordable and comfortable accommodation options — whether for a short trip or an extended stay for work or study. Unlike a hotel, an apartment gives you a full kitchen, more space, and complete privacy, making it especially cost-effective for families and longer stays.',
      areas: 'Best Areas in Yerevan for Apartment Rental',
      areasItems: ['City Center & Republic Square — easy access everywhere', 'Cascade — near galleries and cafés', 'Abovyan Street — the historic heart of Yerevan', 'Nork — quiet with city views', 'Malatia-Sebastia — more affordable pricing'],
      services: "Caspian's Apartment Rental Services",
      servicesItems: ['Real photos and details sent before booking', 'Daily, weekly and monthly rentals with long-stay discounts', 'Airport transfer to your apartment', 'Payment in Rial, USD, or USDT', 'WhatsApp & Telegram support throughout your stay'],
    },
    ru: {
      why: 'Почему стоит арендовать квартиру в Ереване?',
      whyBody: 'Аренда меблированной квартиры в Ереване — один из самых экономичных и удобных вариантов проживания, будь то короткая поездка или длительное пребывание. В отличие от отеля, квартира предлагает полностью оборудованную кухню, больше пространства и полную приватность.',
      areas: 'Лучшие районы Еревана для аренды квартиры',
      areasItems: ['Центр города и площадь Республики', 'Каскад — рядом с галереями и кафе', 'Улица Абовяна — исторический центр', 'Норк — спокойный район с видом на город', 'Малатия-Себастия — более доступные цены'],
      services: 'Услуги Caspian по аренде квартир',
      servicesItems: ['Реальные фото и данные перед бронированием', 'Посуточная, недельная и помесячная аренда со скидками', 'Трансфер из аэропорта до квартиры', 'Оплата в риалах, долларах или USDT', 'Поддержка в WhatsApp и Telegram'],
    },
  };
  const st = sectionText[lang] || sectionText.fa;

  return (
    <ServicePageLayout
      titleFa="اجاره آپارتمان مبله در ایروان" titleEn="Furnished Apartment Rental in Yerevan" titleRu="Аренда меблированных квартир в Ереване"
      subtitleFa="اقامتگاه روزانه و ماهانه با آشپزخانه کامل و بهترین قیمت"
      subtitleEn="Daily & monthly stays with a full kitchen at the best price"
      subtitleRu="Посуточное и помесячное проживание с полной кухней"
      heroImage="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80"
      serviceType="apartment">

      <InfoBlock title={st.why}>
        <p>{st.whyBody}</p>
      </InfoBlock>
      <InfoBlock title={st.areas}>
        <CheckList items={st.areasItems} />
      </InfoBlock>
      <InfoBlock title={st.services}>
        <CheckList items={st.servicesItems} />
      </InfoBlock>

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

export default function Apartment() { return <LanguageProvider><ApartmentContent /></LanguageProvider>; }

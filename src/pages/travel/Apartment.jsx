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

  const [formData, setFormData] = useState({ destination: 'ایروان / Yerevan', checkIn: '', checkOut: '', adults: 1, childWithBed: 0, childNoBed: 0, bedrooms: '' });
  const [searchTerm, setSearchTerm] = useState('ایروان');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showGuests, setShowGuests] = useState(false);

  const dateRef1 = useRef(null);
  const dateRef2 = useRef(null);
  const today = new Date().toISOString().split('T')[0];

  // فیلتر هوشمند: اگر کاربر حداقل ۲ حرف تایپ کرد، جستجو و حدس شهرها انجام شود
  const filteredCities = searchTerm.length >= 2 
    ? ALL_CITIES.filter(c => 
        c.fa.includes(searchTerm) || c.en.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleWhatsAppBooking = () => {
    const text = `رزرو اقامتگاه در ${formData.destination}:
    📅 ${formData.checkIn || 'نامشخص'} تا ${formData.checkOut || 'نامشخص'}
    🛏 تعداد خواب: ${formData.bedrooms || 'انتخاب نشده'}
    👥 بزرگسال: ${formData.adults} | 🧸 با تخت: ${formData.childWithBed} | 👶 بدون تخت: ${formData.childNoBed}`;
    window.open(`https://wa.me/37433149327?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <ServicePageLayout
      titleFa="اجاره آپارتمان مبله در ایروان" 
      titleEn="Furnished Apartment Rental in Yerevan" 
      titleRu="Аренда меблированных квартир в Ереване"
      subtitleFa="اقامتگاه روزانه و ماهانه با آشپزخانه کامل و بهترین قیمت"
      subtitleEn="Daily & monthly stays with a full kitchen at the best price"
      subtitleRu="Посуточное и помесячное проживание с полной кухней"
      heroImage="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80"
      serviceType="apartment">

      {/* بخش توضیحات بالا و تگ H1 برای رفع خطای سئو بینگ */}
      <section className="prose prose-invert mb-8 text-right">
        <h1 className="text-2xl md:text-3xl font-black text-white mb-4">
          راهنمای جامع اقامت و هتل‌آپارتمان‌ها در تور ارمنستان
        </h1>
        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
          انتخاب محل اقامت مناسب، یکی از مهم‌ترین بخش‌های برنامه‌ریزی برای سفری خاطره‌انگیز به ارمنستان است. در شهرهای مختلف این کشور، از هتل‌های لوکس گرفته تا سوئیت‌آپارتمان‌های دنج و اقتصادی، گزینه‌های متنوعی پیش روی مسافران قرار دارد. از آنجا که <strong>ایروان</strong> به عنوان پایتخت و قلب تپنده گردشگری ارمنستان شناخته می‌شود، تمرکز اصلی هتل‌ها و اقامتگاه‌های باکیفیت نیز در این شهر قرار دارد.
        </p>
      </section>

      {/* پنل رزرو سریع */}
      <div className="glass-panel p-6 rounded-2xl border border-primary/30 mb-10 bg-black/40 backdrop-blur-md relative shadow-2xl">
        <h2 className="text-xl font-bold mb-6 text-white text-center">رزرو آنلاین اقامتگاه در ایروان</h2>
        <div className="space-y-4">
          
          {/* مقصد با اتوکامپلیت هوشمند (با تایپ ۲ حرف حدس می‌زند) */}
          <div className="relative">
            <label className="block text-xs text-gray-400 mb-1">مقصد (شهر مورد نظر را تایپ کنید)</label>
            <input 
              type="text" 
              placeholder="مثلاً ایروان یا Yerevan" 
              className="w-full bg-black/50 border border-white/10 p-3 rounded-xl text-white outline-none focus:border-primary" 
              value={searchTerm}
              onChange={(e) => { 
                setSearchTerm(e.target.value); 
                setFormData({...formData, destination: e.target.value});
                setShowSuggestions(true); 
              }} 
            />
            
            {showSuggestions && filteredCities.length > 0 && (
              <div className="absolute z-50 w-full bg-black/90 border border-white/20 mt-1 rounded-xl max-h-48 overflow-y-auto shadow-2xl">
                {filteredCities.map((city, i) => (
                  <div 
                    key={i} 
                    className="p-3 hover:bg-primary/25 cursor-pointer text-white border-b border-white/5 transition-colors text-sm" 
                    onClick={() => { 
                      const fullDest = `${city.fa} / ${city.en}`;
                      setFormData({...formData, destination: fullDest}); 
                      setSearchTerm(city.fa);
                      setShowSuggestions(false); 
                    }}
                  >
                    {city.fa} - {city.en}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* تعداد اتاق خواب */}
          <div>
            <label className="block text-xs text-gray-400 mb-1">تعداد اتاق خواب</label>
            <select 
              className="w-full bg-black/50 border border-white/10 p-3 rounded-xl text-white outline-none" 
              value={formData.bedrooms}
              onChange={(e) => setFormData({...formData, bedrooms: e.target.value})}
            >
              <option value="" className="bg-black text-gray-400">تعداد اتاق خواب</option>
              <option value="1 خوابه" className="bg-black text-white">یک خوابه</option>
              <option value="2 خوابه" className="bg-black text-white">دو خوابه</option>
              <option value="3 خوابه" className="bg-black text-white">سه خوابه</option>
              <option value="4 خوابه" className="bg-black text-white">چهار خوابه</option>
              <option value="5+ خوابه" className="bg-black text-white">پنج خوابه یا بیشتر</option>
            </select>
          </div>

          {/* تاریخ ورود و خروج */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-400 mb-1">تاریخ ورود</label>
              <input ref={dateRef1} type="date" min={today} className="w-full bg-black/50 border border-white/10 p-3 rounded-xl text-white cursor-pointer [color-scheme:dark]" onClick={() => dateRef1.current?.showPicker()} onChange={(e) => setFormData({...formData, checkIn: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">تاریخ خروج</label>
              <input ref={dateRef2} type="date" min={formData.checkIn || today} className="w-full bg-black/50 border border-white/10 p-3 rounded-xl text-white cursor-pointer [color-scheme:dark]" onClick={() => dateRef2.current?.showPicker()} onChange={(e) => setFormData({...formData, checkOut: e.target.value})} />
            </div>
          </div>

          {/* انتخاب مهمانان */}
          <div className="relative">
            <label className="block text-xs text-gray-400 mb-1">تعداد مهمانان</label>
            <button 
              type="button"
              onClick={() => setShowGuests(!showGuests)} 
              className="w-full bg-black/50 border border-white/10 p-3 rounded-xl text-white text-right flex justify-between items-center"
            >
              <span>{formData.adults} بزرگسال، {formData.childWithBed + formData.childNoBed} کودک</span>
              <span className="text-xs text-primary">تغییر ▾</span>
            </button>
            {showGuests && (
              <div className="absolute z-50 w-full bg-black border border-white/20 p-4 rounded-xl mt-2 shadow-2xl space-y-3">
                {[ { label: 'بزرگسال (تا ۲۰)', key: 'adults', max: 20 }, { label: 'کودک با تخت (تا ۵)', key: 'childWithBed', max: 5 }, { label: 'کودک بدون تخت (تا ۵)', key: 'childNoBed', max: 5 } ].map((item) => (
                  <div key={item.key} className="flex justify-between items-center">
                    <span className="text-white text-sm">{item.label}</span>
                    <input type="number" min="0" max={item.max} className="w-16 bg-white/10 text-white text-center rounded-lg p-1" value={formData[item.key]} onChange={(e) => setFormData({...formData, [item.key]: Math.min(item.max, parseInt(e.target.value) || 0)})} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* دکمه ارسال به واتساپ */}
          <button onClick={handleWhatsAppBooking} className="w-full py-4 bg-primary text-black font-black rounded-xl hover:bg-yellow-500 transition-all shadow-lg">
            ارسال درخواست رزرو به واتساپ
          </button>
        </div>
      </div>

      {/* بخش توضیحات تکمیلی و راهنمای انتخاب اقامتگاه */}
      <section className="space-y-6 text-right mt-10">
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-white mb-3">راهنمای انتخاب اقامتگاه و هتل‌آپارتمان در ایروان</h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            اگر قصد خرید تور ارمنستان را دارید، پیش از سفر بهتر است با شرایط اقامتی در این شهر آشنا شوید. اغلب هتل‌ها، سوئیت‌ها و آپارتمان‌های محبوب و معروف ارمنستان در شهر ایروان واقع شده‌اند تا مسافران به راحتی به جاذبه‌های گردشگری، مراکز تاریخی و تجاری دسترسی داشته باشند.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-white mb-3">امکانات رفاهی آپارتمان‌ها در ایروان</h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            مراکز اقامتی این شهر تنوع بالایی دارند و از واحدهای کوچک یک‌خوابه گرفته تا سوئیت‌های مجهزِ دارای امکانات کامل مانند آشپزخانه، سیستم تهویه مطبوع، اینترنت وای‌فای رایگان، پارکینگ اختصاصی، بالکن و در برخی موارد امکانات لوکسی مثل سونا و جکوزی را شامل می‌شوند. موقعیت مکانی این اقامتگاه‌ها به‌گونه‌ای است که برخی در مناطق مرکزی و نزدیک به جاذبه‌های اصلی و برخی دیگر در دامنه‌ها و مناطق کوهستانی و آرام اطراف شهر قرار گرفته‌اند تا سلیقه‌های مختلف مسافران را پوشش دهند.
          </p>
        </div>

        <div className="bg-primary/10 border border-primary/30 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-white mb-3">رزرو تورهای ارمنستان با کاسپین گروه</h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            اگر به دنبال خرید تورهای زمینی و هوایی ارمنستان با بهترین کیفیت و مناسب‌ترین قیمت هستید، می‌توانید از پکیج‌های ویژه و خدمات تخصصی <strong>کاسپین گروه</strong> استفاده کنید. ما در تلاش هستیم تا بهترین هتل‌ها و سوئیت‌آپارتمان‌های ایروان را متناسب با بودجه و نیاز شما رزرو کرده و سفری آسوده و بی‌نقص را برایتان رقم بزنیم.
          </p>
        </div>
      </section>

    </ServicePageLayout>
  );
}

export default function Apartment() { 
  return (
    <LanguageProvider>
      <ApartmentContent />
    </LanguageProvider>
  ); 
}

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import GlobalNavbar from '@/components/shared/GlobalNavbar';
import ContactFooter from '@/components/home/ContactFooter';

function FlightContent() {
  const { lang } = useLang();

  // متن‌های چندزبانه برای صفحه پرواز
  const content = {
    fa: {
      title: "راهنمای پرواز و استعلام قیمت بلیط تهران - ایروان",
      subtitle: "رزرو سریع و مطمئن بلیط هواپیما در مسیر پرتردد تهران ⇄ ایروان با پشتیبانی اختصاصی",
      desc1: "مسیر هوایی تهران به ایروان و بالعکس، یکی از کلیدی‌ترین مسیرها برای مسافران، تجار و گردشگران ایرانی است. با توجه به تغییرات ساعت پرواز ایرلاین‌های مختلف و نرخ‌های چارتر، بهترین راه برای دریافت دقیق‌ترین قیمت، استعلام مستقیم و آنی است.",
      whyUs: "مزایای رزرو پرواز با گروه کاسپین:",
      features: [
        "پشتیبانی ۲۴ ساعته در ارمنستان و ایران",
        "اطلاع از مناسب‌ترین نرخ‌های پروازی (سیستمی و چارتر)",
        "مشاوره رایگان درباره قوانین بار، فرودگاه و مدارک سفر",
        "رزرو آسان و مستقیم بدون نیاز به ثبت‌نام‌های پیچیده"
      ],
      ctaTitle: "استعلام قیمت لحظه‌ای و رزرو پرواز در واتساپ",
      ctaText: "برای دریافت جدول پروازی روزانه، اطلاع از قیمت دقیق بلیط هواپیما در مسیر تهران و ایروان و رزرو صندلی، همین حالا با کارشناسان ما در واتساپ در ارتباط باشید.",
      btnText: "استعلام قیمت و رزرو در واتساپ",
      whatsappNumber: "37433149327"
    },
    en: {
      title: "Tehran & Yerevan Flight Guide & Price Inquiry",
      subtitle: "Fast and reliable flight booking on the Tehran ⇄ Yerevan route with dedicated support",
      desc1: "The flight route between Tehran and Yerevan is one of the most vital routes for travelers and business people. The best way to get accurate rates and availability is direct inquiry.",
      whyUs: "Why book with Caspian Group?",
      features: [
        "24/7 support in Armenia and Iran",
        "Best available flight rates (Charter & Regular)",
        "Free consultation on luggage and airport rules",
        "Fast and easy booking via WhatsApp"
      ],
      ctaTitle: "Instant Price Inquiry & Booking via WhatsApp",
      ctaText: "Contact our experts on WhatsApp to get daily flight schedules and exact ticket prices.",
      btnText: "Inquire & Book on WhatsApp",
      whatsappNumber: "37433149327"
    },
    ru: {
      title: "Рейсы Тегеран - Ереван | Расписание и бронирование",
      subtitle: "Быстрое и надежное бронирование авиабилетов по маршруту Тегеран ⇄ Ереван",
      desc1: "Маршрут между Тегераном и Ереваном является одним из самых популярных. Получите актуальную информацию о ценах и рейсах напрямую у наших специалистов.",
      whyUs: "Преимущества работы с Caspian Group:",
      features: [
        "Круглосуточная поддержка в Армении и Иране",
        "Лучшие тарифы на авиабилеты",
        "Бесплатная консультация по правилам перелета",
        "Быстрое бронирование через WhatsApp"
      ],
      ctaTitle: "Запрос цен и бронирование через WhatsApp",
      ctaText: "Свяжитесь с нашими специалистами в WhatsApp для получения расписания и точной стоимости билетов.",
      btnText: "Забронировать в WhatsApp",
      whatsappNumber: "37433149327"
    },
    hy: {
      title: "Թեհրան - Երևան ավիատոմսերի ուղեցույց և գների հարցում",
      subtitle: "Արագ և վստահելի ամրագրում Թեհրան ⇄ Երևան ուղղությամբ՝ մասնագիտացված աջակցությամբ",
      desc1: "Թեհրանի և Երևանի միջև չվերթների ուղղությունը ամենապահանջվածներից է: Ճշգրիտ գները և չվացուցակը ճշտելու համար կարող եք կապ հաստատել մեզ հետ:",
      whyUs: "Ինչու՞ ընտրել Caspian Group-ը",
      features: [
        "24/7 աջակցություն Հայաստանում և Իրանում",
        "Լավագույն թռիչքային սակագներ",
        "Անվճար խորհրդատվություն ուղեբեռի և կանոնների վերաբերյալ",
        "Արագ ամրագրում WhatsApp-ի միջոցով"
      ],
      ctaTitle: "Անմիջական կապ և գների հարցում WhatsApp-ով",
      ctaText: "Կապ հաստատեք մեր մասնագետների հետ WhatsApp-ով՝ ամենօրյա չվացուցակը և տոմսերի գները ստանալու համար:",
      btnText: "Ամրագրել WhatsApp-ով",
      whatsappNumber: "37433149327"
    }
  };

  const t = content[lang] || content.fa;
  const whatsappUrl = `https://wa.me/${t.whatsappNumber}?text=${encodeURIComponent(
    lang === 'fa' ? 'سلام، می‌خواستم درباره پرواز تهران - ایروان اطلاعات و قیمت بگیرم.' : 'Hello, I would like to inquire about Tehran-Yerevan flights.'
  )}`;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col justify-between font-vazirmatn" dir={lang === 'fa' ? 'rtl' : 'ltr'}>
      
      <Helmet>
        <title>{t.title} | گروه کاسپین</title>
        <meta name="description" content={t.subtitle} />
        <link rel="canonical" href="https://caspian.am/travel/flight" />
      </Helmet>

      <div>
        <GlobalNavbar />

        <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full mt-16">
          
          {/* هدر صفحه */}
          <div className="text-center mb-10">
            <span className="text-amber-400 text-xs tracking-widest uppercase bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
              Caspian Group Armenia
            </span>
            <h1 className="text-2xl sm:text-4xl font-black mt-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 leading-relaxed">
              {t.title}
            </h1>
            <p className="text-gray-300 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          {/* بدنه مقاله */}
          <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-xl space-y-8">
            
            <div className="prose prose-invert max-w-none text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>{t.desc1}</p>
            </div>

            {/* بخش ویژگی‌ها */}
            <div className="bg-[#1a1a1a] border border-amber-400/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-amber-300 mb-4">{t.whyUs}</h3>
              <ul className="space-y-3">
                {t.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-200">
                    <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0"></span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* بخش دکمه واتساپ */}
            <div className="bg-gradient-to-r from-amber-950/30 via-[#1a1a1a] to-amber-950/30 border border-amber-400/30 rounded-2xl p-6 sm:p-8 text-center space-y-4">
              <h3 className="text-xl font-black text-amber-300">{t.ctaTitle}</h3>
              <p className="text-gray-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
                {t.ctaText}
              </p>
              <div className="pt-2">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-extrabold px-8 py-4 rounded-xl transition-all shadow-[0_4px_25px_rgba(16,185,129,0.4)] text-sm sm:text-base cursor-pointer"
                >
                  <span className="text-xl">💬</span> 
                  <span>{t.btnText}</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div className="mt-16 bg-[#0a0a0a] border-t border-white/10">
        <ContactFooter />
      </div>
    </div>
  );
}

export default function Flight() {
  return (
    <LanguageProvider>
      <FlightContent />
    </LanguageProvider>
  );
}
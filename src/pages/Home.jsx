import React from 'react';
import { Helmet } from 'react-helmet-async'; // ۱. ایمپورت کردن Helmet
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import AboutSection from '@/components/home/AboutSection';
// TicketSection removed - ticket booking is in HeroSection
import WhySection from '@/components/home/WhySection';
import ContactFormSection from '@/components/home/ContactFormSection';
import ContactFooter from '@/components/home/ContactFooter';
import WhatsAppButton from '@/components/home/WhatsAppButton';

function HomeContent() {
  const { t } = useLang();
  return (
    <div dir={t.dir} lang={t.lang} className="min-h-screen bg-background font-vazir">
      
      {/* ۲. اضافه کردن تگ‌های سئو برای صفحه اصلی */}
      <Helmet>
        <title>گروه کاسپین | خدمات اقامت، تور، ویزا و فستیوال در ایروان</title>
        <meta name="description" content="گروه کاسپین ارائه دهنده خدمات تخصصی اقامت، مهاجرت، اخذ ویزا، رزرو هتل و تورهای گردشگری و رویدادهای ویژه در ارمنستان." />
        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>

      <GlobalNavbar />
      <main id="main-content">
        <HeroSection />
        
        {/* بنر و دکمه اختصاصی فستیوال (Disco Legends) */}
        <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-950/40 via-black to-amber-950/40 border border-amber-400/30 p-6 sm:p-8 shadow-[0_0_30px_rgba(251,191,36,0.15)] flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* افکت نوری پس‌زمینه */}
            <div className="absolute -right-20 -top-20 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="text-right z-10">
              <span className="inline-block bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold px-3 py-1 rounded-full mb-3">
                🔥 رویداد ویژه و اختصاصی
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500">
                فستیوال بزرگ Disco Legends
              </h2>
              <p className="text-gray-300 text-sm sm:text-base mt-2 max-w-xl">
                با حضور اسطوره‌های موسیقی جهان (Haddaway, Boney M, Mr. President, Dr. Alban). همین حالا جایگاه خود را رزرو کنید!
              </p>
            </div>

            <div className="z-10 flex-shrink-0">
              <a 
                href="/retro" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black font-extrabold px-8 py-4 rounded-2xl transition-all shadow-[0_4px_20px_rgba(251,191,36,0.4)] cursor-pointer text-sm sm:text-base"
              >
                <span>🎫</span> رزرو آنلاین بلیط فستیوال
              </a>
            </div>

          </div>
        </section>

        <ServicesSection />
        <AboutSection />
        <WhySection />
        <ContactFormSection />
      </main>
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}
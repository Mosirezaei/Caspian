'use client';
import React from 'react';
import { useLang } from '@/lib/LanguageContext';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import AboutSection from '@/components/home/AboutSection';
// TicketSection removed - ticket booking is in HeroSection
import WhySection from '@/components/home/WhySection';
import ContactFormSection from '@/components/home/ContactFormSection';
import ContactFooter from '@/components/home/ContactFooter';
import WhatsAppButton from '@/components/home/WhatsAppButton';
import ArticlesSection from '@/components/home/ArticlesSection';

function HomeContent() {
  const { t } = useLang();
  return (
    <div className="min-h-screen bg-background font-vazir">
      
      {/* ۲. اضافه کردن تگ‌های سئو برای صفحه اصلی */}

      <GlobalNavbar />
      <main id="main-content">
        <HeroSection />
        
        <ArticlesSection />
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

export default HomeContent;
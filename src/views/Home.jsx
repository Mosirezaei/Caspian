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
import Link from 'next/link';
import { Music } from 'lucide-react';

function HomeContent() {
  const { t } = useLang();
  return (
    <div className="min-h-screen bg-background font-vazir">
      
      {/* ۲. اضافه کردن تگ‌های سئو برای صفحه اصلی */}

      <GlobalNavbar />
      <main id="main-content">
        <HeroSection />
        
        <ArticlesSection />

        {/* Retro Stage / Disko Legend Banner */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <Link href="/retro"
            className="group relative block overflow-hidden rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-l from-primary/20 via-fuchsia-500/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-center justify-between p-6 sm:p-8" dir="rtl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Music className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-foreground group-hover:text-primary transition-colors">
                    تهیه بلیط کنسرت و فستیوال
                  </h3>
                  <p className="text-sm text-foreground/50 mt-0.5">Disko Legend · Retro Stage · رویدادهای ایروان</p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-xl">
                <span className="text-xs font-bold text-primary">مشاهده و خرید بلیط</span>
              </div>
            </div>
          </Link>
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

export default HomeContent;
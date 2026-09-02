'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import GlobalNavbar from './GlobalNavbar';
import StaticFAQ from './StaticFAQ';
import ContactFooter from '@/components/home/ContactFooter';
import RelatedServices from './RelatedServices';

const consultTexts = {
  fa: { label: 'مشاوره آنلاین رایگان', sub: 'همین الان با کارشناس ما در واتساپ صحبت کنید' },
  en: { label: 'Free Online Consultation', sub: 'Chat with our expert on WhatsApp right now' },
  ru: { label: 'Бесплатная онлайн-консультация', sub: 'Напишите нашему специалисту в WhatsApp прямо сейчас' },
};

export function ServicePageLayout({ children, titleFa, titleEn, titleRu, subtitleFa, subtitleEn, subtitleRu, heroImage, serviceType }) {
  const { lang } = useLang();
  const isRtl = lang === 'fa';
  const title = lang === 'fa' ? titleFa : lang === 'ru' ? titleRu : titleEn;
  const subtitle = lang === 'fa' ? subtitleFa : lang === 'ru' ? subtitleRu : subtitleEn;
  const ct = consultTexts[lang] || consultTexts.fa;

  // Every page that uses this shared layout automatically gets a unique
  // <title>, meta description and canonical URL (previously ~18 pages had
  // none of these, so Google saw duplicate/generic titles for all of them).
  useSEO({
    title: title ? `${title} | گروه کاسپین` : undefined,
    description: subtitle,
  });

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} lang={lang} className="min-h-screen bg-background font-vazir">
      <GlobalNavbar />

      {/* Hero */}
      <div className="relative pt-14">
        <div className="relative h-56 sm:h-72 overflow-hidden">
          <img src={heroImage} alt={title} className="w-full h-full object-cover opacity-40" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/60 to-background" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-5xl font-black text-foreground mb-2">
              <span className="gold-gradient-text">{title}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-foreground/60 text-sm sm:text-base max-w-xl">{subtitle}</motion.p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-10 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {children}
            {serviceType && <StaticFAQ serviceType={serviceType} />}
          </div>

          <aside className="lg:sticky lg:top-20 lg:self-start space-y-5">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-sm mb-1">{ct.label}</h3>
              <p className="text-xs text-foreground/60 mb-4 leading-relaxed">{ct.sub}</p>
              <a href="https://wa.me/37433149327" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-green-600 hover:bg-green-500 transition text-white text-xs font-bold">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <RelatedServices pageType={serviceType} variant="sidebar" />
            </div>
          </aside>
        </div>
      </div>
      <ContactFooter />
    </div>
  );
}

export function InfoBlock({ title, children }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="glass-panel rounded-2xl p-6 mb-6">
      {title && <h2 className="text-xl font-black text-primary mb-3">{title}</h2>}
      <div className="text-sm text-foreground/70 leading-relaxed space-y-2">{children}</div>
    </motion.div>
  );
}

export function CheckList({ items }) {
  return (
    <ul className="space-y-2 mt-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
          <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function withLanguage(Component) {
  return function WrappedComponent(props) {
    return (
      <LanguageProvider>
        <Component {...props} />
      </LanguageProvider>
    );
  };
}
'use client';
import { MessageCircle } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import RelatedContent from './RelatedContent';

const t = {
  fa: { cta: 'مشاوره رایگان', ctaSub: 'سوالی داری؟ همین حالا با کارشناسان ما در واتساپ چت کن' },
  en: { cta: 'Free Consultation', ctaSub: 'Have a question? Chat with our team on WhatsApp now' },
  ru: { cta: 'Бесплатная консультация', ctaSub: 'Есть вопрос? Напишите нам в WhatsApp' },
};

/**
 * BlogSidebar — ساید‌بار مقالات وبلاگ: کارت‌های «مطالب مرتبط» جمع‌وجور + کارت CTA.
 * تو دسکتاپ استیکی می‌مونه (lg:sticky)، تو موبایل به‌صورت طبیعی زیر محتوای اصلی قرار می‌گیره
 * (چون تو گرید تک‌ستونه‌ی موبایل، آیتم دوم بعد از اولی رندر می‌شه).
 */
export default function BlogSidebar({ currentTags = [], currentPath = '' }) {
  const { lang } = useLang();
  const tt = t[lang] || t.fa;

  return (
    <aside className="lg:sticky lg:top-20 lg:self-start space-y-5">
      <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-3">
          <MessageCircle className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-bold text-foreground text-sm mb-1">{tt.cta}</h3>
        <p className="text-xs text-foreground/60 mb-4 leading-relaxed">{tt.ctaSub}</p>
        <a href="https://wa.me/37433149327" target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-green-600 hover:bg-green-500 transition text-white text-xs font-bold">
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
      </div>

      <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
        <RelatedContent currentTags={currentTags} currentPath={currentPath} maxItems={4} variant="sidebar" />
      </div>
    </aside>
  );
}

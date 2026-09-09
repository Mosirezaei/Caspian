'use client';
import { MessageCircle } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import RelatedContent from './RelatedContent';
import RelatedServices from './RelatedServices';
import SeoFooterLinks from './SeoFooterLinks';
import { usePathname } from 'next/navigation';
import { SERVICE_TYPE_TAGS } from '@/data/siteLinks';
import { getWhatsAppNumber } from '@/lib/contact';

const t = {
  fa: { cta: 'مشاوره رایگان', ctaSub: 'سوالی داری؟ همین حالا با کارشناسان ما در واتساپ چت کن' },
  en: { cta: 'Free Consultation', ctaSub: 'Have a question? Chat with our team on WhatsApp now' },
  ru: { cta: 'Бесплатная консультация', ctaSub: 'Есть вопрос? Напишите нам в WhatsApp' },
};

/**
 * PageSidebar — ساید‌بار مشترک همه‌ی صفحات محتوایی سایت (مقالات وبلاگ و صفحات سرویس).
 * یه کامپوننت واحد، جای دو نسخه‌ی جدا (BlogSidebar + ساید‌بار inline تو ServicePageLayout).
 *
 * props:
 *  - tags + currentPath  -> برای مقالات وبلاگ: کارت‌های «مطالب مرتبط» (RelatedContent, تگ‌محور)
 *  - serviceType         -> برای صفحات سرویس: کارت‌های «خدمات مرتبط» (RelatedServices)
 * هر دو تا رو هم می‌شه هم‌زمان پاس داد، یا فقط یکی -- بخشی که prop نداره رندر نمی‌شه.
 */
export default function PageSidebar({ tags, currentPath, serviceType }) {
  const { lang } = useLang();
  const tt = t[lang] || t.fa;
  const pathname = usePathname();
  const path = currentPath || pathname || '';
  const usefulLinksTags = (tags && tags.length > 0) ? tags : (SERVICE_TYPE_TAGS[serviceType] || SERVICE_TYPE_TAGS.default);
  const whatsappNumber = getWhatsAppNumber(serviceType);

  return (
    <aside className="lg:sticky lg:top-20 lg:self-start space-y-5">
      <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-3">
          <MessageCircle className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-bold text-foreground text-sm mb-1">{tt.cta}</h3>
        <p className="text-xs text-foreground/60 mb-4 leading-relaxed">{tt.ctaSub}</p>
        <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-green-600 hover:bg-green-500 transition text-white text-xs font-bold">
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
      </div>

      {tags && tags.length > 0 && (
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
          <RelatedContent currentTags={tags} currentPath={currentPath} maxItems={6} variant="sidebar" />
        </div>
      )}

      {serviceType && (
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
          <RelatedServices pageType={serviceType} variant="sidebar" />
        </div>
      )}

      <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
        <SeoFooterLinks variant="sidebar" currentTags={usefulLinksTags} currentPath={path} />
      </div>
    </aside>
  );
}

import StartupTechYerevan from '@/views/blog/StartupTechYerevan';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'اکوسیستم استارتاپ و فناوری ایروان | گروه کاسپین',
  description: 'معرفی اکوسیستم استارتاپی و فناوری ایروان: فضاهای کار اشتراکی، شرکت‌های فناوری فعال و فرصت‌های شغلی و سرمایه‌گذاری برای علاقه‌مندان به حوزه تک.',
  alternates: { canonical: 'https://caspian.am/blog/startup-tech-ecosystem-yerevan' },
  openGraph: {
    title: 'معرفی اکوسیستم استارتاپی و فناوری ایروان: فضاهای کار اشتراکی',
    description: 'معرفی اکوسیستم استارتاپی و فناوری ایروان: فضاهای کار اشتراکی، شرکت‌های فناوری فعال و فرصت‌های شغلی و سرمایه‌گذاری برای علاقه‌مندان به حوزه تک.',
    url: 'https://caspian.am/blog/startup-tech-ecosystem-yerevan',
    images: [{ url: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=1200&q=80', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'اکوسیستم استارتاپ و فناوری ایروان',
        description: 'اکوسیستم استارتاپ و فناوری ایروان',
        url: 'https://caspian.am/blog/startup-tech-ecosystem-yerevan',
        datePublished: '2026-09-02',
        dateModified: '2026-09-02',
        image: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=1200&q=80',
      })} />
      <StartupTechYerevan />
    </>
  );
}

import StartupTechYerevan from '@/views/blog/StartupTechYerevan';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'اکوسیستم استارتاپ و فناوری ایروان | گروه کاسپین',
  alternates: { canonical: 'https://caspian.am/blog/startup-tech-ecosystem-yerevan' },
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
      })} />
      <StartupTechYerevan />
    </>
  );
}

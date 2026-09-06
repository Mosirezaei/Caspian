import BestTimeVisitArmenia from '@/views/blog/BestTimeVisitArmenia';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'بهترین زمان سفر به ارمنستان و سوغاتی‌ها | گروه کاسپین',
  description: 'راهنمای فصل‌به‌فصل آب‌وهوا، بهترین سوغاتی‌های ارمنی و نکات گمرکی.',
  alternates: { canonical: 'https://caspian.am/blog/best-time-visit-armenia-souvenirs' },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'بهترین زمان سفر به ارمنستان و سوغاتی‌ها',
        description: 'راهنمای فصل‌به‌فصل آب‌وهوا، بهترین سوغاتی‌های ارمنی و نکات گمرکی.',
        url: 'https://caspian.am/blog/best-time-visit-armenia-souvenirs',
        datePublished: '2026-09-02',
        dateModified: '2026-09-02',
      })} />
      <BestTimeVisitArmenia />
    </>
  );
}

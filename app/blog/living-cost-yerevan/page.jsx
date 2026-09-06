import LivingCostYerevan from '@/views/blog/LivingCostYerevan';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'هزینه زندگی در ایروان | راهنمای کامل ',
  description: 'هزینه اجاره خانه، خواربار، حمل‌ونقل و قبوض در ایروان ارمنستان. راهنمای عملی برای ایرانیانی که قصد مهاجرت به ارمنستان دارند.',
  keywords: 'هزینه زندگی ایروان, هزینه زندگی ارمنستان, اجاره خانه ایروان, مهاجرت به ارمنستان',
  alternates: { canonical: 'https://caspian.am/blog/living-cost-yerevan' },
  openGraph: {
    title: 'هزینه زندگی در ایروان',
    description: 'هزینه اجاره خانه، خواربار، حمل‌ونقل و قبوض در ایروان ارمنستان',
    url: 'https://caspian.am/blog/living-cost-yerevan',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'هزینه زندگی در ایروان ۱۴۰۴',
        description: 'راهنمای کامل هزینه‌های زندگی در ارمنستان برای ایرانیان',
        url: 'https://caspian.am/blog/living-cost-yerevan',
        datePublished: '2025-09-01',
        dateModified: '2025-09-01',
        about: { '@type': 'Place', name: 'Yerevan' },
      })} />
      <LivingCostYerevan />
    </>
  );
}

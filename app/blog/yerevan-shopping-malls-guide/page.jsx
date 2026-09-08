import YerevanShoppingMalls from '@/views/blog/YerevanShoppingMalls';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'مراکز خرید ایروان ارمنستان | راهنمای کامل مال‌ها و بازارها',
  description: 'دالما گاردن مال، ایروان مال، روسیا مال، بازار ورنیساژ و پاک شوکا؛ آدرس، ساعت کاری، برندها و بهترین سوغات ارمنستان در یک راهنمای کامل خرید ایروان.',
  keywords: 'مراکز خرید ایروان, خرید در ارمنستان, دالما گاردن مال, ایروان مال, بازار ورنیساژ, سوغات ارمنستان, مگامال ارمنستان',
  alternates: { canonical: 'https://caspian.am/blog/yerevan-shopping-malls-guide' },
  openGraph: {
    title: 'مراکز خرید ایروان ارمنستان',
    description: 'راهنمای کامل مال‌ها، بازارهای سنتی و سوغات خرید در ایروان',
    url: 'https://caspian.am/blog/yerevan-shopping-malls-guide',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'مراکز خرید ایروان ارمنستان — راهنمای کامل',
        description: 'راهنمای کامل مراکز خرید و بازارهای سنتی ایروان با آدرس، ساعت کاری و سوغات پیشنهادی',
        url: 'https://caspian.am/blog/yerevan-shopping-malls-guide',
        datePublished: '2026-09-08',
        dateModified: '2026-09-08',
        about: { '@type': 'Country', name: 'Armenia' },
      })} />
      <YerevanShoppingMalls />
    </>
  );
}

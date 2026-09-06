import SimcardInternetYerevan from '@/views/blog/SimcardInternetYerevan';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'سیم‌کارت، اینترنت و اپلیکیشن‌های ضروری ایروان | گروه کاسپین',
  description: 'راهنمای خرید سیم‌کارت، تعرفه اینترنت موبایل و اپلیکیشن‌های ضروری روزمره (تاکسی، پرداخت، پیام‌رسان) برای زندگی و سفر در ایروان.',
  alternates: { canonical: 'https://caspian.am/blog/simcard-internet-apps-yerevan' },
  openGraph: {
    title: 'راهنمای خرید سیم‌کارت، تعرفه اینترنت موبایل و اپلیکیشن‌های ض',
    description: 'راهنمای خرید سیم‌کارت، تعرفه اینترنت موبایل و اپلیکیشن‌های ضروری روزمره (تاکسی، پرداخت، پیام‌رسان) برای زندگی و سفر در ایروان.',
    url: 'https://caspian.am/blog/simcard-internet-apps-yerevan',
    images: [{ url: 'https://images.unsplash.com/photo-1562774555-079298a31cbe?w=1200&q=80', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'سیم‌کارت، اینترنت و اپلیکیشن‌های ضروری ایروان',
        description: 'سیم‌کارت، اینترنت و اپلیکیشن‌های ضروری ایروان',
        url: 'https://caspian.am/blog/simcard-internet-apps-yerevan',
        datePublished: '2026-09-02',
        dateModified: '2026-09-02',
        image: 'https://images.unsplash.com/photo-1562774555-079298a31cbe?w=1200&q=80',
      })} />
      <SimcardInternetYerevan />
    </>
  );
}

import PracticalGuideArticle from '@/views/blog/PracticalGuideArticle';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

const title = 'استعلام سند ملک در ارمنستان قبل از خرید؛ چک‌لیست کاداستر';
const description = 'راهنمای بررسی مالک، رهن، محدودیت، شناسه کاداستری، اصالت گواهی و قرارداد پیش از پرداخت بیعانه یا خرید ملک در ارمنستان.';
const url = 'https://caspian.am/blog/verify-property-title-armenia';
const image = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1280&q=72&auto=format&fit=crop';

export const metadata = { title, description, alternates: { canonical: url }, openGraph: { title, description, url, type: 'article', images: [{ url: image, alt: 'استعلام سند ملک در ارمنستان قبل از خرید' }] } };

export default function Page() {
  return <><JsonLd data={articleSchema({ headline: title, description, url, image, datePublished: '2026-09-09', dateModified: '2026-09-09', about: ['استعلام سند ملک ارمنستان', 'کاداستر ارمنستان', 'خرید ملک'] })} /><PracticalGuideArticle articleKey="propertyTitle" /></>;
}

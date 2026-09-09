import PracticalGuideArticle from '@/views/blog/PracticalGuideArticle';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

const title = 'دریافت سوشیال کارت ارمنستان برای ایرانیان؛ مدارک و مراحل';
const description = 'راهنمای به‌روز دریافت شماره خدمات عمومی یا سوشیال کارت ارمنستان، مدارک اتباع ایرانی، هزینه رسمی، کاربردها و نکات امنیتی.';
const url = 'https://caspian.am/blog/armenia-social-card-foreigners';
const image = 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1280&q=72&auto=format&fit=crop';

export const metadata = { title, description, alternates: { canonical: url }, openGraph: { title, description, url, type: 'article', images: [{ url: image, alt: 'مدارک دریافت سوشیال کارت ارمنستان' }] } };

export default function Page() {
  return <><JsonLd data={articleSchema({ headline: title, description, url, image, datePublished: '2026-09-09', dateModified: '2026-09-09', about: ['سوشیال کارت ارمنستان', 'شماره خدمات عمومی', 'مدارک اقامت'] })} /><PracticalGuideArticle articleKey="socialCard" /></>;
}

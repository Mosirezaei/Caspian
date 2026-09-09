import PracticalGuideArticle from '@/views/blog/PracticalGuideArticle';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

const title = 'رانندگی با گواهینامه ایرانی در ارمنستان؛ اعتبار، ترجمه و تعویض';
const description = 'راهنمای به‌روز اعتبار گواهینامه ایرانی در ارمنستان، کنوانسیون وین، مدارک تعویض، هزینه رسمی، زمان بررسی و نکات بیمه خودرو.';
const url = 'https://caspian.am/blog/iranian-driving-license-armenia';
const image = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1280&q=72&auto=format&fit=crop';

export const metadata = { title, description, alternates: { canonical: url }, openGraph: { title, description, url, type: 'article', images: [{ url: image, alt: 'رانندگی با گواهینامه ایرانی در ارمنستان' }] } };

export default function Page() {
  return <><JsonLd data={articleSchema({ headline: title, description, url, image, datePublished: '2026-09-09', dateModified: '2026-09-09', about: ['گواهینامه ایرانی در ارمنستان', 'تعویض گواهینامه خارجی', 'رانندگی در ارمنستان'] })} /><PracticalGuideArticle articleKey="driving" /></>;
}

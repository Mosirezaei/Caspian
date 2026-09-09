import PracticalGuideArticle from '@/views/blog/PracticalGuideArticle';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

const title = 'ترجمه مدارک ایرانی برای امور ارمنستان؛ چرا بررسی قبل از اقدام مهم است؟';
const description = 'اطلاعات کلی درباره نقش ترجمه و تأیید مدارک ایرانی در پرونده‌های ارمنستان و خدمات بررسی و هماهنگی کاسپین.';
const url = 'https://caspian.am/blog/official-translation-iranian-documents-armenia';
const image = 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1280&q=72&auto=format&fit=crop';
export const metadata = { title, description, alternates: { canonical: url }, openGraph: { title, description, url, type: 'article', images: [{ url: image, alt: 'بررسی ترجمه مدارک ایرانی برای ارمنستان' }] } };
export default function Page() { return <><JsonLd data={articleSchema({ headline: title, description, url, image, datePublished: '2026-09-09', dateModified: '2026-09-09', about: ['ترجمه مدارک ایرانی', 'امور اداری ارمنستان', 'مشاوره مدارک'] })} /><PracticalGuideArticle articleKey="translation" /></>; }

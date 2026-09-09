import PracticalGuideArticle from '@/views/blog/PracticalGuideArticle';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

const title = 'تمدید کارت اقامت ارمنستان؛ چه زمانی به بررسی پرونده نیاز دارید؟';
const description = 'مرور نکات مهم تمدید اقامت ارمنستان، ریسک تأخیر و نقش بررسی تخصصی مدارک؛ بدون وعده زمان، هزینه یا نتیجه قطعی.';
const url = 'https://caspian.am/blog/renew-residence-card-armenia';
const image = 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1280&q=72&auto=format&fit=crop';
export const metadata = { title, description, alternates: { canonical: url }, openGraph: { title, description, url, type: 'article', images: [{ url: image, alt: 'بررسی پرونده تمدید اقامت ارمنستان' }] } };
export default function Page() { return <><JsonLd data={articleSchema({ headline: title, description, url, image, datePublished: '2026-09-09', dateModified: '2026-09-09', about: ['تمدید اقامت ارمنستان', 'اقامت موقت', 'اقامت دائم'] })} /><PracticalGuideArticle articleKey="renewal" /></>; }

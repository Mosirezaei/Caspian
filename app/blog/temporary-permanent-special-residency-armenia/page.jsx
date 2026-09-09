import PracticalGuideArticle from '@/views/blog/PracticalGuideArticle';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

const title = 'اقامت موقت، دائم یا ویژه ارمنستان؛ کدام مسیر با شرایط شما هم‌خوان است؟';
const description = 'نگاهی کلی به تفاوت انواع اقامت ارمنستان و ضرورت بررسی تخصصی پیش از انتخاب مسیر، بدون وعده اقامت یا نتیجه قطعی.';
const url = 'https://caspian.am/blog/temporary-permanent-special-residency-armenia';
const image = 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1280&q=72&auto=format&fit=crop';
export const metadata = { title, description, alternates: { canonical: url }, openGraph: { title, description, url, type: 'article', images: [{ url: image, alt: 'بررسی انواع اقامت ارمنستان' }] } };
export default function Page() { return <><JsonLd data={articleSchema({ headline: title, description, url, image, datePublished: '2026-09-09', dateModified: '2026-09-09', about: ['اقامت موقت ارمنستان', 'اقامت دائم ارمنستان', 'اقامت ویژه ارمنستان'] })} /><PracticalGuideArticle articleKey="residencyTypes" /></>; }

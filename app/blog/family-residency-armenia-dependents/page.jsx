import PracticalGuideArticle from '@/views/blog/PracticalGuideArticle';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

const title = 'اقامت اعضای خانواده در ارمنستان؛ چه نکاتی پیش از برنامه‌ریزی باید بدانید؟';
const description = 'اطلاعات کلی برای خانواده‌هایی که قصد دارند وضعیت اقامتی همسر، فرزند یا فرد تحت تکفل را در ارمنستان بررسی کنند.';
const url = 'https://caspian.am/blog/family-residency-armenia-dependents';
const image = 'https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=1280&q=72&auto=format&fit=crop';
export const metadata = { title, description, alternates: { canonical: url }, openGraph: { title, description, url, type: 'article', images: [{ url: image, alt: 'بررسی اقامت خانوادگی در ارمنستان' }] } };
export default function Page() { return <><JsonLd data={articleSchema({ headline: title, description, url, image, datePublished: '2026-09-09', dateModified: '2026-09-09', about: ['اقامت خانوادگی ارمنستان', 'اقامت همسر و فرزند', 'مشاوره مهاجرت'] })} /><PracticalGuideArticle articleKey="familyResidency" /></>; }

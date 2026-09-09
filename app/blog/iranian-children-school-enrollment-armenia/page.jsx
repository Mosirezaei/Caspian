import PracticalGuideArticle from '@/views/blog/PracticalGuideArticle';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

const title = 'ثبت‌نام کودکان ایرانی در مدارس ارمنستان؛ سن، مدارک و زبان';
const description = 'راهنمای خانواده‌های ایرانی برای ثبت‌نام مدرسه در ارمنستان، سن کلاس اول، سامانه آنلاین، مدارک تحصیلی، انتخاب زبان و سازگاری کودک.';
const url = 'https://caspian.am/blog/iranian-children-school-enrollment-armenia';
const image = 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1280&q=72&auto=format&fit=crop';

export const metadata = { title, description, alternates: { canonical: url }, openGraph: { title, description, url, type: 'article', images: [{ url: image, alt: 'ثبت‌نام کودک ایرانی در مدرسه ارمنستان' }] } };

export default function Page() {
  return <><JsonLd data={articleSchema({ headline: title, description, url, image, datePublished: '2026-09-09', dateModified: '2026-09-09', about: ['مدارس ارمنستان', 'ثبت‌نام کودک ایرانی', 'تحصیل در ارمنستان'] })} /><PracticalGuideArticle articleKey="school" /></>;
}

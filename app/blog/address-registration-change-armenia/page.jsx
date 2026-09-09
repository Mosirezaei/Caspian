import PracticalGuideArticle from '@/views/blog/PracticalGuideArticle';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

const title = 'تغییر آدرس و اطلاعات اقامتی مهاجران در ارمنستان؛ نکات مهم پیش از جابه‌جایی';
const description = 'اطلاعات کلی درباره اهمیت ثبت و به‌روزرسانی نشانی برای مهاجران در ارمنستان و بررسی وضعیت قرارداد و مالک.';
const url = 'https://caspian.am/blog/address-registration-change-armenia';
const image = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1280&q=72&auto=format&fit=crop';
export const metadata = { title, description, alternates: { canonical: url }, openGraph: { title, description, url, type: 'article', images: [{ url: image, alt: 'تغییر نشانی مهاجران در ارمنستان' }] } };
export default function Page() { return <><JsonLd data={articleSchema({ headline: title, description, url, image, datePublished: '2026-09-09', dateModified: '2026-09-09', about: ['ثبت نشانی ارمنستان', 'تغییر آدرس مهاجران', 'اجاره خانه'] })} /><PracticalGuideArticle articleKey="addressChange" /></>; }

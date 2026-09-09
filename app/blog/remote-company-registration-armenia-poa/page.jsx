import PracticalGuideArticle from '@/views/blog/PracticalGuideArticle';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

const title = 'ثبت شرکت در ارمنستان از راه دور؛ وکالت‌نامه امن و کنترل نماینده';
const description = 'راهنمای تخصصی ثبت شرکت در ارمنستان بدون سفر، تنظیم حدود اختیار وکالت‌نامه، امنیت مدارک، تحویل خروجی و مرز ثبت با افتتاح حساب.';
const url = 'https://caspian.am/blog/remote-company-registration-armenia-poa';
const image = 'https://images.unsplash.com/photo-1521790797524-b2497295b8a0?w=1280&q=72&auto=format&fit=crop';

export const metadata = { title, description, alternates: { canonical: url }, openGraph: { title, description, url, type: 'article', images: [{ url: image, alt: 'ثبت شرکت در ارمنستان از راه دور' }] } };

export default function Page() {
  return <><JsonLd data={articleSchema({ headline: title, description, url, image, datePublished: '2026-09-09', dateModified: '2026-09-09', about: ['ثبت شرکت در ارمنستان', 'وکالت‌نامه', 'ثبت شرکت از راه دور'] })} /><PracticalGuideArticle articleKey="remoteCompany" /></>;
}

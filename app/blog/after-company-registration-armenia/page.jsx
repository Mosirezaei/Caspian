import PracticalGuideArticle from '@/views/blog/PracticalGuideArticle';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

const title = 'وظایف شرکت بعد از ثبت در ارمنستان؛ مالیات، حسابداری و هزینه‌ها';
const description = 'چک‌لیست پس از ثبت شرکت در ارمنستان برای مالیات، حسابداری، ذی‌نفع واقعی، بانک، نیروی انسانی، امنیت دسترسی و هزینه‌های جاری.';
const url = 'https://caspian.am/blog/after-company-registration-armenia';
const image = 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1280&q=72&auto=format&fit=crop';

export const metadata = { title, description, alternates: { canonical: url }, openGraph: { title, description, url, type: 'article', images: [{ url: image, alt: 'وظایف مالی و حسابداری شرکت در ارمنستان' }] } };

export default function Page() {
  return <><JsonLd data={articleSchema({ headline: title, description, url, image, datePublished: '2026-09-09', dateModified: '2026-09-09', about: ['مالیات شرکت ارمنستان', 'حسابداری شرکت', 'هزینه جاری شرکت'] })} /><PracticalGuideArticle articleKey="companyDuties" /></>;
}

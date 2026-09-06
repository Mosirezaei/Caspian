import JobsInArmenia from '@/views/blog/JobsInArmenia';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'کار و اشتغال در ارمنستان | راهنمای جامع ایرانیان',
  description: 'راهنمای کامل جستجوی شغل، مشاغل پرتقاضا و بازه حقوق، و مراحل قانونی دریافت مجوز کار و اقامت کاری در ارمنستان برای متقاضیان ایرانی.',
  keywords: 'کار در ارمنستان, اشتغال ارمنستان, مجوز کار ارمنستان, استخدام ایروان, کاریابی ارمنستان',
  alternates: { canonical: 'https://caspian.am/blog/jobs-in-armenia' },
  openGraph: {
    title: 'کار و اشتغال در ارمنستان',
    description: 'راهنمای جامع اشتغال و کاریابی در ارمنستان برای متقاضیان ایرانی',
    url: 'https://caspian.am/blog/jobs-in-armenia',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'راهنمای جامع اشتغال و کاریابی در ارمنستان',
        description: 'راهنمای جامع اشتغال و کاریابی در ارمنستان برای متقاضیان ایرانی',
        url: 'https://caspian.am/blog/jobs-in-armenia',
        datePublished: '2026-09-02',
        dateModified: '2026-09-02',
        about: { '@type': 'Place', name: 'Armenia' },
      })} />
      <JobsInArmenia />
    </>
  );
}

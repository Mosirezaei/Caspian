import WorkWithoutDegree from '@/views/blog/WorkWithoutDegree';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'کار بدون مدرک تحصیلی در ارمنستان | گروه کاسپین',
  description: 'حوزه‌های کاری بدون مدرک دانشگاهی، حقوق تقریبی و شرایط مجوز کار.',
  alternates: { canonical: 'https://caspian.am/blog/work-without-degree-armenia' },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'کار بدون مدرک تحصیلی در ارمنستان',
        description: 'حوزه‌های کاری بدون مدرک دانشگاهی، حقوق تقریبی و شرایط مجوز کار.',
        url: 'https://caspian.am/blog/work-without-degree-armenia',
        datePublished: '2026-09-02',
        dateModified: '2026-09-02',
      })} />
      <WorkWithoutDegree />
    </>
  );
}

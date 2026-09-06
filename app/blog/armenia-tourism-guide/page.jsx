import ArmeniaTourism from '@/views/blog/ArmeniaTourism';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'جاهای دیدنی ارمنستان | راهنمای کامل گردشگری',
  description: 'راهنمای کامل جاذبه‌های گردشگری ارمنستان: ایروان، صومعه گقارد، خور ویراپ، معبد گارنی، دریاچه سوان، تاتو، نوراوانک، دیلیجان و اچمیادزین با عکس و توضیحات کامل.',
  keywords: 'جاهای دیدنی ارمنستان, گردشگری ارمنستان, ایروان, خور ویراپ, دریاچه سوان, تاتو, نوراوانک',
  alternates: { canonical: 'https://caspian.am/blog/armenia-tourism-guide' },
  openGraph: {
    title: 'جاهای دیدنی ارمنستان',
    description: 'راهنمای کامل گردشگری و جاذبه‌های دیدنی ارمنستان',
    url: 'https://caspian.am/blog/armenia-tourism-guide',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'راهنمای کامل جاهای دیدنی ارمنستان',
        description: 'راهنمای کامل جاذبه‌های گردشگری ارمنستان با عکس و توضیحات کامل',
        url: 'https://caspian.am/blog/armenia-tourism-guide',
        datePublished: '2026-09-02',
        dateModified: '2026-09-02',
        about: { '@type': 'Country', name: 'Armenia' },
      })} />
      <ArmeniaTourism />
    </>
  );
}

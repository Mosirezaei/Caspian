import EducationArmenia from '@/views/blog/EducationArmenia';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'تحصیل در ارمنستان: مدارس ایرانی، دانشگاه‌ها و هزینه‌ها | گروه کاسپین',
  description: 'راهنمای کامل تحصیل در ارمنستان برای ایرانیان: مدرسه‌ی شهید فهمیده ایروان، دانشگاه آمریکایی ارمنستان، شهریه و هزینه‌ی زندگی دانشجویی.',
  keywords: 'تحصیل ارمنستان, مدرسه ایرانی ایروان, دانشگاه ارمنستان, شهریه دانشگاه ایروان, اقامت تحصیلی ارمنستان',
  alternates: { canonical: 'https://caspian.am/blog/education-armenia' },
  openGraph: {
    title: 'تحصیل در ارمنستان: مدارس ایرانی، دانشگاه‌ها و هزینه‌ها',
    description: 'شهریه ۸۰۰ تا ۹,۰۰۰ دلار/سال — مدارس ایرانی + دانشگاه‌های بین‌المللی',
    url: 'https://caspian.am/blog/education-armenia',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'تحصیل در ارمنستان: مدارس ایرانی، دانشگاه‌ها و هزینه‌ها',
        description: 'راهنمای کامل تحصیل در ارمنستان برای ایرانیان: مدرسه‌ی شهید فهمیده ایروان، دانشگاه آمریکایی ارمنستان، شهریه و هزینه‌ی زندگی دانشجویی.',
        url: 'https://caspian.am/blog/education-armenia',
        datePublished: '2026-09-03',
        dateModified: '2026-09-03',
      })} />
      <EducationArmenia />
    </>
  );
}

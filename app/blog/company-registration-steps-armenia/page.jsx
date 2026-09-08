import CompanyRegistrationSteps from '@/views/blog/CompanyRegistrationSteps';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'ثبت شرکت در ارمنستان: مراحل، مدارک و زمان‌بندی کامل',
  description: 'راهنمای کامل مراحل ثبت شرکت در ارمنستان برای ایرانیان: مدارک لازم، فرایند اداره ثبت، وکالت‌نامه و اقدامات پس از ثبت. ثبت LLC یا IE در ۱ تا ۳ روز کاری.',
  keywords: 'مراحل ثبت شرکت ارمنستان, مدارک ثبت شرکت ارمنستان, اداره ثبت شرکت ارمنستان, وکالتنامه ارمنستان',
  alternates: { canonical: 'https://caspian.am/blog/company-registration-steps-armenia' },
  openGraph: {
    title: 'ثبت شرکت در ارمنستان: مراحل، مدارک و زمان‌بندی کامل',
    description: 'مدارک لازم، فرایند ثبت و اقدامات پس از دریافت شماره ثبت — راهنمای عملی برای ایرانیان',
    url: 'https://caspian.am/blog/company-registration-steps-armenia',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'ثبت شرکت در ارمنستان: مراحل، مدارک و زمان‌بندی کامل',
        description: 'راهنمای کامل مراحل ثبت شرکت در ارمنستان برای ایرانیان: مدارک لازم، فرایند اداره ثبت، وکالت‌نامه و اقدامات پس از ثبت. ثبت LLC یا IE در ۱ تا ۳ روز کاری.',
        url: 'https://caspian.am/blog/company-registration-steps-armenia',
        datePublished: '2026-09-03',
        dateModified: '2026-09-03',
      })} />
      <CompanyRegistrationSteps />
    </>
  );
}

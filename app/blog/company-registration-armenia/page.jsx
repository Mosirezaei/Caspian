import CompanyRegistrationGuide from '@/views/blog/CompanyRegistrationGuide';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'راهنمای ثبت شرکت در ارمنستان | هزینه، مراحل و مالیات',
  description: 'راهنمای کامل ثبت شرکت LLC در ارمنستان برای ایرانیان: هزینه‌های واقعی، مراحل گام‌به‌گام، سیستم مالیاتی ۵٪، حساب بانکی و نکات کلیدی.',
  keywords: 'ثبت شرکت ارمنستان, ثبت LLC ارمنستان, مالیات ارمنستان, حساب بانکی ارمنستان, اقامت بیزینسی ارمنستان',
  alternates: { canonical: 'https://caspian.am/blog/company-registration-armenia' },
  openGraph: {
    title: 'راهنمای ثبت شرکت در ارمنستان | هزینه، مراحل و مالیات',
    description: 'ثبت LLC در ۳ روز، مالیات ۵٪، حساب بانکی بین‌المللی — راهنمای واقعی برای ایرانیان',
    url: 'https://caspian.am/blog/company-registration-armenia',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'راهنمای ثبت شرکت در ارمنستان: هزینه، مراحل و مالیات',
        description: 'راهنمای کامل ثبت شرکت LLC در ارمنستان برای ایرانیان: هزینه‌های واقعی، مراحل گام‌به‌گام، سیستم مالیاتی ۵٪، حساب بانکی و نکات کلیدی.',
        url: 'https://caspian.am/blog/company-registration-armenia',
        datePublished: '2026-09-02',
        dateModified: '2026-09-02',
      })} />
      <CompanyRegistrationGuide />
    </>
  );
}

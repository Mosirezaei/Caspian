import CompanyRegistrationGuide from '@/views/blog/CompanyRegistrationGuide';

export const metadata = {
  title: 'راهنمای ثبت شرکت در ارمنستان | هزینه، مراحل و مالیات | گروه کاسپین',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'راهنمای ثبت شرکت در ارمنستان: هزینه، مراحل و مالیات',
            author: { '@type': 'Organization', name: 'Caspian Business Group' },
            publisher: { '@type': 'Organization', name: 'Caspian Business Group', url: 'https://caspian.am' },
            datePublished: '2026-09-02',
            url: 'https://caspian.am/blog/company-registration-armenia',
            inLanguage: 'fa',
          }),
        }}
      />
      <CompanyRegistrationGuide />
    </>
  );
}

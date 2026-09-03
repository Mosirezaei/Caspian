import SabtSherktatMarahel from '@/views/blog/SabtSherktatMarahel';

export const metadata = {
  title: 'ثبت شرکت در ارمنستان: مراحل، مدارک و زمان‌بندی کامل | گروه کاسپین',
  description: 'راهنمای کامل مراحل ثبت شرکت در ارمنستان برای ایرانیان: مدارک لازم، فرایند اداره ثبت، وکالت‌نامه و اقدامات پس از ثبت. ثبت LLC یا IE در ۱ تا ۳ روز کاری.',
  keywords: 'مراحل ثبت شرکت ارمنستان, مدارک ثبت شرکت ارمنستان, اداره ثبت شرکت ارمنستان, وکالتنامه ارمنستان',
  alternates: { canonical: 'https://caspian.am/blog/sabt-sherktat-armenia-marahel' },
  openGraph: {
    title: 'ثبت شرکت در ارمنستان: مراحل، مدارک و زمان‌بندی کامل',
    description: 'مدارک لازم، فرایند ثبت و اقدامات پس از دریافت شماره ثبت — راهنمای عملی برای ایرانیان',
    url: 'https://caspian.am/blog/sabt-sherktat-armenia-marahel',
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
            headline: 'ثبت شرکت در ارمنستان: مراحل، مدارک و زمان‌بندی کامل',
            author: { '@type': 'Organization', name: 'Caspian Business Group' },
            publisher: { '@type': 'Organization', name: 'Caspian Business Group', url: 'https://caspian.am' },
            datePublished: '2026-09-03',
            url: 'https://caspian.am/blog/sabt-sherktat-armenia-marahel',
            inLanguage: 'fa',
          }),
        }}
      />
      <SabtSherktatMarahel />
    </>
  );
}

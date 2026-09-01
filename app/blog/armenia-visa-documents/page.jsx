import ArmeniaVisaDocuments from '@/views/blog/ArmeniaVisaDocuments';

export const metadata = {
  title: 'مدارک ویزای ارمنستان ۱۴۰۴ | راهنمای کامل اقامت و ویزا',
  description: 'همه مدارک لازم برای ویزا و اقامت ارمنستان. ورود بدون ویزا، اقامت موقت، تحصیلی و ثبت شرکت برای ایرانیان در ۱۴۰۴.',
  keywords: 'ویزای ارمنستان, مدارک اقامت ارمنستان, ویزا ارمنستان ایرانیان, اقامت ارمنستان',
  alternates: { canonical: 'https://caspian.am/blog/armenia-visa-documents' },
  openGraph: {
    title: 'مدارک ویزای ارمنستان ۱۴۰۴',
    description: 'راهنمای کامل مدارک ویزا و اقامت ارمنستان برای ایرانیان',
    url: 'https://caspian.am/blog/armenia-visa-documents',
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
            headline: 'مدارک ویزای ارمنستان ۱۴۰۴',
            description: 'همه مدارک لازم برای ویزا و اقامت ارمنستان برای ایرانیان',
            author: { '@type': 'Organization', name: 'Caspian Business Group' },
            publisher: { '@type': 'Organization', name: 'Caspian Business Group', url: 'https://caspian.am' },
            datePublished: '2025-09-01',
            dateModified: '2025-09-01',
            url: 'https://caspian.am/blog/armenia-visa-documents',
            inLanguage: 'fa',
          }),
        }}
      />
      <ArmeniaVisaDocuments />
    </>
  );
}

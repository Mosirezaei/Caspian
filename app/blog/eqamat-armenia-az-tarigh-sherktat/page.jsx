import EqamatAzTarigh from '@/views/blog/EqamatAzTarigh';

export const metadata = {
  title: 'اقامت ارمنستان از طریق ثبت شرکت: شرایط، مراحل و نکات مهم | گروه کاسپین',
  description: 'راهنمای کامل اخذ اقامت ارمنستان از طریق فعالیت تجاری: شرایط اداره مهاجرت، چرا ثبت صوری کافی نیست و چگونه Caspian Group کل مسیر را پشتیبانی می‌کند.',
  keywords: 'اقامت ارمنستان از طریق شرکت, اقامت بیزینسی ارمنستان, ثبت شرکت اقامت, EAEU ارمنستان, مهاجرت ارمنستان',
  alternates: { canonical: 'https://caspian.am/blog/eqamat-armenia-az-tarigh-sherktat' },
  openGraph: {
    title: 'اقامت ارمنستان از طریق ثبت شرکت: شرایط، مراحل و نکات مهم',
    description: 'اقامت با فعالیت واقعی شرکت — ثبت صوری کافی نیست. راهنمای کامل برای ایرانیان',
    url: 'https://caspian.am/blog/eqamat-armenia-az-tarigh-sherktat',
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
            headline: 'اقامت ارمنستان از طریق ثبت شرکت: شرایط، مراحل و نکات مهم',
            author: { '@type': 'Organization', name: 'Caspian Business Group' },
            publisher: { '@type': 'Organization', name: 'Caspian Business Group', url: 'https://caspian.am' },
            datePublished: '2026-09-03',
            url: 'https://caspian.am/blog/eqamat-armenia-az-tarigh-sherktat',
            inLanguage: 'fa',
          }),
        }}
      />
      <EqamatAzTarigh />
    </>
  );
}

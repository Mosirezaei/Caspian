import HazineMaliyatBank from '@/views/blog/HazineMaliyatBank';

export const metadata = {
  title: 'هزینه ثبت شرکت در ارمنستان، مالیات و افتتاح حساب بانکی | گروه کاسپین',
  description: 'راهنمای کامل هزینه‌های ثبت شرکت در ارمنستان، رژیم‌های مالیاتی (۱۸٪ و گردش مالی)، شرایط افتتاح حساب بانکی و اهمیت حسابداری منظم.',
  keywords: 'هزینه ثبت شرکت ارمنستان, مالیات ارمنستان, حساب بانکی ارمنستان, LLC هزینه, حسابداری ارمنستان',
  alternates: { canonical: 'https://caspian.am/blog/hazine-maliyat-bank-armenia' },
  openGraph: {
    title: 'هزینه ثبت شرکت در ارمنستان، مالیات و افتتاح حساب بانکی',
    description: 'هزینه واقعی راه‌اندازی شرکت ۱۰۰۰-۱۶۰۰ دلار، مالیات ۱۸٪، شرایط بانک — راهنمای مالی برای ایرانیان',
    url: 'https://caspian.am/blog/hazine-maliyat-bank-armenia',
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
            headline: 'هزینه ثبت شرکت در ارمنستان، مالیات و افتتاح حساب بانکی',
            author: { '@type': 'Organization', name: 'Caspian Business Group' },
            publisher: { '@type': 'Organization', name: 'Caspian Business Group', url: 'https://caspian.am' },
            datePublished: '2026-09-03',
            url: 'https://caspian.am/blog/hazine-maliyat-bank-armenia',
            inLanguage: 'fa',
          }),
        }}
      />
      <HazineMaliyatBank />
    </>
  );
}

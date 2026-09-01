import LivingCostYerevan from '@/views/blog/LivingCostYerevan';

export const metadata = {
  title: ' هزینه زندگی در ایروان | راهنمای کامل ایرانیان',
  description: 'هزینه اجاره خانه، خواربار، حمل‌ونقل و قبوض در ایروان ارمنستان ۱۴۰۴. راهنمای عملی برای ایرانیانی که قصد مهاجرت به ارمنستان دارند.',
  keywords: 'هزینه زندگی ایروان, هزینه زندگی ارمنستان, اجاره خانه ایروان, مهاجرت به ارمنستان',
  alternates: { canonical: 'https://caspian.am/blog/living-cost-yerevan-1404' },
  openGraph: {
    title: 'هزینه زندگی در ایروان',
    description: 'هزینه اجاره خانه، خواربار، حمل‌ونقل و قبوض در ایروان ارمنستان',
    url: 'https://caspian.am/blog/living-cost-yerevan-1404',
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
            headline: 'هزینه زندگی در ایروان ۱۴۰۴',
            description: 'راهنمای کامل هزینه‌های زندگی در ارمنستان برای ایرانیان',
            author: { '@type': 'Organization', name: 'Caspian Business Group' },
            publisher: { '@type': 'Organization', name: 'Caspian Business Group', url: 'https://caspian.am' },
            datePublished: '2025-09-01',
            dateModified: '2025-09-01',
            url: 'https://caspian.am/blog/living-cost-yerevan-1404',
            inLanguage: 'fa',
            about: { '@type': 'Place', name: 'Yerevan', containedInPlace: { '@type': 'Country', name: 'Armenia' } },
          }),
        }}
      />
      <LivingCostYerevan />
    </>
  );
}

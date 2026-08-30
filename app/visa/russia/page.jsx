import VisaRussia from '@/views/service/VisaRussia';

export const metadata = {
  title: 'ویزای روسیه ۲۰۲۶ | eVisa یا سفارت ایروان',
  description: 'ویزای روسیه از ایروان: eVisa 70-110 دلار، ۴ روز کاری، تا ۱۶ روز اقامت. ویزای سفارت 130-160 دلار، تا ۳۰ روز. دعوتنامه رسمی فراهم می‌شود.',
  keywords: 'ویزای روسیه, ویزای توریستی روسیه, eVisa روسیه, ویزای روسیه برای ایرانیان, دعوتنامه روسیه',
  alternates: { canonical: 'https://caspian.am/visa/russia' },
  openGraph: {
    title: 'ویزای روسیه ۲۰۲۶ | eVisa یا سفارت ایروان',
    description: 'eVisa: 70-110 دلار، ۴ روز. سفارت: 130-160 دلار، ۳۰ روز اقامت.',
    url: 'https://caspian.am/visa/russia',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'ویزای توریستی روسیه',
  description: 'اخذ ویزای توریستی روسیه از طریق eVisa یا سفارت در ایروان',
  provider: { '@type': 'Organization', name: 'Caspian Business Group', url: 'https://caspian.am', telephone: '+37433149327' },
  areaServed: { '@type': 'Country', name: 'Russia' },
  offers: { '@type': 'AggregateOffer', priceCurrency: 'USD', lowPrice: '70', highPrice: '160' },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <VisaRussia />
    </>
  );
}

import Hotel from '@/views/service/Hotel';

export const metadata = {
  title: 'رزرو هتل در ایروان | ۳ تا ۵ ستاره با واچر',
  description: 'رزرو هتل ایروان با واچر رسمی قابل ارائه به سفارتخانه، پرداخت ریالی/USDT/دلار، پشتیبانی واتساپ. هتل ۳ تا ۵ ستاره از ۴۵ دلار در شب.',
  keywords: 'رزرو هتل در ارمنستان, هتل های ایروان, هتل ارزان در ایروان, بهترین هتل‌های ارمنستان, رزرو هتل آپارتمان در مرکز ایروان, هتل‌های نزدیک میدان جمهوری ایروان, قیمت هتل ۴ ستاره در ایروان با صبحانه, رزرو هتل با واچر رسمی در ارمنستان, هتل‌های ارمنستان با ترانسفر فرودگاهی, رزرو هتل ایروان آنلاین, هتل‌های نزدیک فرودگاه زوارتنوتس, رزرو هتل ایروان برای سفر تجاری, هتل‌های مناسب خانواده در ایروان, رزرو هتل و ویزا با هم در ارمنستان, هتل ایروان پرداخت ریالی',
  alternates: { canonical: 'https://caspian.am/travel/hotel' },
  openGraph: {
    title: 'رزرو هتل در ایروان | ۳ تا ۵ ستاره با واچر رسمی',
    description: 'رزرو هتل ایروان با واچر رسمی، پرداخت ریالی/USDT. از ۴۵ دلار.',
    url: 'https://caspian.am/travel/hotel',
    images: [{ url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80', width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'رزرو هتل در ایروان ارمنستان',
  description: 'رزرو هتل‌های ۳، ۴ و ۵ ستاره در ایروان با واچر رسمی برای ویزا',
  provider: { '@type': 'Organization', name: 'Caspian Business Group', url: 'https://caspian.am', telephone: '+37433149327' },
  areaServed: { '@type': 'City', name: 'Yerevan' },
  offers: { '@type': 'AggregateOffer', priceCurrency: 'USD', lowPrice: '45', highPrice: '300', description: 'هتل ۳ تا ۵ ستاره از ۴۵ دلار در شب' },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Hotel />
    </>
  );
}

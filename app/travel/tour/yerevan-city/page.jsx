import YerevanCityTour from '@/views/travel/YerevanCityTour';
import JsonLd from '@/components/shared/JsonLd';

export const metadata = {
  title: 'تور یک‌روزه شهری ایروان | گروه کاسپین',
  description: 'تور یک‌روزه شهری ایروان: میدان جمهوری، موزه تاریخ ارمنستان، مجموعه پلکانی کاسکاد و پارک پیروزی، با ترانسفر، راهنمای فارسی و ناهار کامل — فقط ۲۵ دلار.',
  keywords: 'تور شهری ایروان, میدان جمهوری ایروان, کاسکاد ایروان, موزه تاریخ ارمنستان, تور یک‌روزه ارمنستان, تور ایروان از نزدیک',
  alternates: { canonical: 'https://caspian.am/travel/tour/yerevan-city' },
  openGraph: {
    title: 'تور یک‌روزه جذاب شهری ایروان',
    description: 'ترانسفر + راهنمای فارسی + ورودی موزه + ناهار کامل، فقط ۲۵ دلار. از ۱۰:۰۰ صبح تا ۱۷:۰۰ بعدازظهر.',
    url: 'https://caspian.am/travel/tour/yerevan-city',
    images: [{ url: 'https://images.unsplash.com/photo-1693071486458-810787f9d465?w=1200&q=80', width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'TouristTrip',
  name: 'تور یک‌روزه شهری ایروان',
  description: 'تور یک‌روزه شهری شامل میدان جمهوری، موزه تاریخ ارمنستان، مجموعه پلکانی کاسکاد و پارک پیروزی و تندیس مام ارمنستان، با ترانسفر، راهنمای فارسی‌زبان و ناهار کامل.',
  provider: { '@type': 'Organization', name: 'Caspian Business Group', url: 'https://caspian.am', telephone: '+37433149327' },
  touristType: ['Historical', 'Cultural', 'City Tour', 'Day Trip'],
  itinerary: [
    { '@type': 'TouristAttraction', name: 'Republic Square', description: 'میدان اصلی ایروان با معماری سنگ توف صورتی و فواره‌های موزیکال' },
    { '@type': 'TouristAttraction', name: 'History Museum of Armenia', description: 'معتبرترین موزه باستان‌شناسی و تاریخ ارمنستان و فلات قفقاز' },
    { '@type': 'TouristAttraction', name: 'Cascade Complex', description: 'مجموعه پلکانی هنری با چشم‌انداز کوه آرارات' },
    { '@type': 'TouristAttraction', name: 'Victory Park & Mother Armenia', description: 'پارک پیروزی و تندیس مام ارمنستان با منظره پانوراما از شهر' },
  ],
  offers: {
    '@type': 'Offer',
    price: '25',
    priceCurrency: 'USD',
    description: 'شامل ترانسفر، راهنمای فارسی‌زبان، ورودی موزه تاریخ و ناهار کامل',
  },
  url: 'https://caspian.am/travel/tour/yerevan-city',
};

export default function Page() {
  return (
    <>
      <JsonLd data={schema} />
      <YerevanCityTour />
    </>
  );
}

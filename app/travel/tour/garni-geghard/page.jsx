import GarniGeghardTour from '@/views/travel/GarniGeghardTour';
import JsonLd from '@/components/shared/JsonLd';

export const metadata = {
  title: 'تور یک‌روزه گارنی، گغارد و سمفونی سنگ‌ها | گروه کاسپین',
  description: 'تور یک‌روزه معبد گارنی، صومعه صخره‌ای گغارد (میراث یونسکو) و سمفونی سنگ‌ها، با پخت نان سنتی لواش، ترانسفر، راهنمای فارسی و ناهار کامل — فقط ۱۵,۰۰۰ درام.',
  keywords: 'تور گارنی, تور گغارد, تور سمفونی سنگ‌ها, معبد گارنی, صومعه گغارد, تور یک‌روزه ارمنستان, تور گارنی از ایروان',
  alternates: { canonical: 'https://caspian.am/travel/tour/garni-geghard' },
  openGraph: {
    title: 'تور یک‌روزه گارنی، گغارد و سمفونی سنگ‌ها',
    description: 'ترانسفر + راهنمای فارسی + ناهار کامل، فقط ۱۵,۰۰۰ درام. حرکت ۱۰:۰۰ صبح از ایروان.',
    url: 'https://caspian.am/travel/tour/garni-geghard',
    images: [{ url: 'https://images.unsplash.com/photo-1657968641725-deb8d1a24142?w=1200&q=80', width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'TouristTrip',
  name: 'تور یک‌روزه گارنی، گغارد و سمفونی سنگ‌ها',
  description: 'تور یک‌روزه شامل معبد باستانی گارنی، صومعه صخره‌ای گغارد (میراث جهانی یونسکو)، پدیده زمین‌شناسی سمفونی سنگ‌ها و تجربه پخت نان سنتی لواش، با ترانسفر، راهنمای فارسی‌زبان و ناهار کامل.',
  provider: { '@type': 'Organization', name: 'Caspian Business Group', url: 'https://caspian.am', telephone: '+37433149327' },
  touristType: ['Historical', 'Cultural', 'Day Trip'],
  itinerary: [
    { '@type': 'TouristAttraction', name: 'Temple of Garni', description: 'تنها معبد هلنیستی باقی‌مانده در قفقاز، ساخته‌شده در قرن اول میلادی' },
    { '@type': 'TouristAttraction', name: 'Geghard Monastery', description: 'صومعه صخره‌ای قرون‌وسطی، میراث جهانی یونسکو' },
    { '@type': 'TouristAttraction', name: 'Symphony of Stones', description: 'ستون‌های شگفت‌انگیز بازالتی در دره گارنی' },
  ],
  offers: {
    '@type': 'Offer',
    price: '15000',
    priceCurrency: 'AMD',
    description: 'شامل ترانسفر رفت و برگشت، راهنمای فارسی‌زبان و ناهار کامل',
  },
  url: 'https://caspian.am/travel/tour/garni-geghard',
};

export default function Page() {
  return (
    <>
      <JsonLd data={schema} />
      <GarniGeghardTour />
    </>
  );
}

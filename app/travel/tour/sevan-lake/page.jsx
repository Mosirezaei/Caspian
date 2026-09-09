import SevanLakeTour from '@/views/travel/SevanLakeTour';
import JsonLd from '@/components/shared/JsonLd';
import { WHATSAPP_BOOKING } from '@/lib/contact';

export const metadata = {
  title: 'تور یک‌روزه دریاچه سوان و دره گل‌ها (تساغکادزور) | گروه کاسپین',
  description: 'تور یک‌روزه دریاچه سوان و تساغکادزور با تله‌سیژ، صومعه سواناوانک، کلیسای کچاریس، ترانسفر، راهنمای فارسی و ناهار کامل — فقط ۱۵,۰۰۰ درام.',
  keywords: 'تور دریاچه سوان, تور تساغکادزور, تور یک‌روزه ارمنستان, صومعه سواناوانک, دره گل‌ها ارمنستان, تور سوان از ایروان',
  alternates: { canonical: 'https://caspian.am/travel/tour/sevan-lake' },
  openGraph: {
    title: 'تور یک‌روزه دریاچه سوان و دره گل‌ها (تساغکادزور)',
    description: 'ترانسفر + راهنمای فارسی + ناهار کامل، فقط ۱۵,۰۰۰ درام. حرکت ۹:۳۰ صبح از ایروان.',
    url: 'https://caspian.am/travel/tour/sevan-lake',
    images: [{ url: 'https://images.unsplash.com/photo-1709832476369-a2d84d31b168?w=1200&q=80', width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'TouristTrip',
  name: 'تور یک‌روزه دریاچه سوان و دره گل‌ها (تساغکادزور)',
  description: 'تور یک‌روزه شامل تله‌سیژ تساغکادزور (دره گل‌ها)، صومعه کچاریس، دریاچه سوان و صومعه سواناوانک، با ترانسفر، راهنمای فارسی‌زبان و ناهار کامل.',
  provider: { '@type': 'Organization', name: 'Caspian Business Group', url: 'https://caspian.am', telephone: `+${WHATSAPP_BOOKING}` },
  touristType: ['Nature', 'Cultural', 'Day Trip'],
  itinerary: [
    { '@type': 'TouristAttraction', name: 'Tsaghkadzor Ropeway (Flower Valley)', description: 'تله‌سیژ روباز و دشت‌های پر از گل وحشی' },
    { '@type': 'TouristAttraction', name: 'Kecharis Monastery', description: 'مجموعه مذهبی قرن یازدهم میلادی' },
    { '@type': 'TouristAttraction', name: 'Lake Sevan', description: 'بزرگ‌ترین دریاچه آب شیرین قفقاز' },
    { '@type': 'TouristAttraction', name: 'Sevanavank Monastery', description: 'صومعه قرن نهم روی شبه‌جزیره سوان' },
  ],
  offers: {
    '@type': 'Offer',
    price: '15000',
    priceCurrency: 'AMD',
    description: 'شامل ترانسفر رفت و برگشت، راهنمای فارسی‌زبان و ناهار کامل',
  },
  url: 'https://caspian.am/travel/tour/sevan-lake',
};

export default function Page() {
  return (
    <>
      <JsonLd data={schema} />
      <SevanLakeTour />
    </>
  );
}

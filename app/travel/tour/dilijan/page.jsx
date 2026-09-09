import DilijanTour from '@/views/travel/DilijanTour';
import JsonLd from '@/components/shared/JsonLd';
import { WHATSAPP_BOOKING } from '@/lib/contact';

export const metadata = {
  title: 'تور یک‌روزه بهشتی دیلیجان، سوئیس سرسبز ارمنستان | گروه کاسپین',
  description: 'تور یک‌روزه دیلیجان: صومعه هاغارتسین، صومعه گشاوانک، دریاچه پارز و بافت تاریخی چوبی شارامبیان، با ترانسفر، راهنمای فارسی و ناهار کامل.',
  keywords: 'تور دیلیجان, سوئیس ارمنستان, صومعه هاغارتسین, صومعه گشاوانک, دریاچه پارز, تور یک‌روزه ارمنستان, تور دیلیجان از ایروان',
  alternates: { canonical: 'https://caspian.am/travel/tour/dilijan' },
  openGraph: {
    title: 'تور یک‌روزه بهشتی دیلیجان، سوئیس سرسبز ارمنستان',
    description: 'ترانسفر + راهنمای فارسی + ناهار کامل. حرکت ۰۹:۰۰ صبح از ایروان، بازگشت حدود ۱۹:۳۰.',
    url: 'https://caspian.am/travel/tour/dilijan',
    images: [{ url: 'https://caspian.am/images/tourism/dilijan.webp', width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'TouristTrip',
  name: 'تور یک‌روزه بهشتی دیلیجان، سوئیس سرسبز ارمنستان',
  description: 'تور یک‌روزه شامل پارک ملی دیلیجان، خیابان تاریخی شارامبیان، صومعه هاغارتسین، صومعه گشاوانک و دریاچه پارز، با ترانسفر، راهنمای فارسی‌زبان و ناهار کامل.',
  provider: { '@type': 'Organization', name: 'Caspian Business Group', url: 'https://caspian.am', telephone: `+${WHATSAPP_BOOKING}` },
  touristType: ['Nature', 'Historical', 'Cultural', 'Day Trip'],
  itinerary: [
    { '@type': 'TouristAttraction', name: 'Dilijan National Park', description: 'پارک ملی جنگلی با چشمه‌های آب معدنی' },
    { '@type': 'TouristAttraction', name: 'Sharambeyan Street (Old Dilijan)', description: 'بافت تاریخی چوبی قرن نوزدهم' },
    { '@type': 'TouristAttraction', name: 'Haghartsin Monastery', description: 'مجموعه کلیسایی قرن ۱۰ تا ۱۳ میلادی' },
    { '@type': 'TouristAttraction', name: 'Goshavank Monastery', description: 'مرکز علمی و حقوقی قرن دوازدهم، خاچکار سوزن‌دوزی' },
    { '@type': 'TouristAttraction', name: 'Parz Lich (Lake Parz)', description: 'دریاچه زمردین در دل جنگل' },
  ],
  url: 'https://caspian.am/travel/tour/dilijan',
};

export default function Page() {
  return (
    <>
      <JsonLd data={schema} />
      <DilijanTour />
    </>
  );
}

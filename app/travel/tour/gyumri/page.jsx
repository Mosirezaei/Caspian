import GyumriTour from '@/views/travel/GyumriTour';
import JsonLd from '@/components/shared/JsonLd';

export const metadata = {
  title: 'تور یک‌روزه تاریخی و هنری گیومری، پایتخت فرهنگی ارمنستان | گروه کاسپین',
  description: 'تور یک‌روزه گیومری: قلعه سیاه، میدان وارتانانتس، محله تاریخی کومایری و کلیسای ناجی مقدس، با ترانسفر، راهنمای فارسی و ناهار کامل در رستوران‌های سنتی.',
  keywords: 'تور گیومری, پایتخت فرهنگی ارمنستان, قلعه سیاه گیومری, محله کومایری, کلیسای ناجی مقدس, تور یک‌روزه ارمنستان, تور گیومری از ایروان',
  alternates: { canonical: 'https://caspian.am/travel/tour/gyumri' },
  openGraph: {
    title: 'تور یک‌روزه تاریخی و هنری گیومری، پایتخت فرهنگی ارمنستان',
    description: 'ترانسفر + راهنمای فارسی + ناهار کامل. حرکت ۰۹:۰۰ صبح از ایروان، بازگشت حدود ۱۹:۳۰.',
    url: 'https://caspian.am/travel/tour/gyumri',
    images: [{ url: 'https://images.unsplash.com/photo-1584294672682-fa86591eded1?w=1200&q=80', width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'TouristTrip',
  name: 'تور یک‌روزه تاریخی و هنری گیومری، پایتخت فرهنگی ارمنستان',
  description: 'تور یک‌روزه شامل قلعه سیاه (Sev Berd)، میدان وارتانانتس و کلیسای هفت زخم، محله تاریخی کومایری، کلیسای ناجی مقدس و موزه معماری و زندگی شهری گیومری، با ترانسفر، راهنمای فارسی‌زبان و ناهار کامل.',
  provider: { '@type': 'Organization', name: 'Caspian Business Group', url: 'https://caspian.am', telephone: '+37433149327' },
  touristType: ['Historical', 'Cultural', 'Art', 'Day Trip'],
  itinerary: [
    { '@type': 'TouristAttraction', name: 'Black Fortress (Sev Berd)', description: 'دژ نظامی دایره‌ای امپراتوری روسیه با چشم‌انداز دشت شیراک' },
    { '@type': 'TouristAttraction', name: 'Vartanants Square & Seven Wounds Church', description: 'میدان مرکزی شهر و کلیسای تاریخی مریم مقدس' },
    { '@type': 'TouristAttraction', name: 'Kumayri Historic District', description: 'بزرگ‌ترین موزه زنده معماری شهری قرن نوزدهم ارمنستان' },
    { '@type': 'TouristAttraction', name: 'Holy Savior Church (Amenaprkich)', description: 'شاهکار معماری سنگی و نماد استقامت گیومری' },
    { '@type': 'TouristAttraction', name: 'Dzitoghtsyan House (Museum of National Architecture and Urban Life)', description: 'موزه زندگی شهری و صنایع‌دستی الکساندراپول قدیم' },
  ],
  url: 'https://caspian.am/travel/tour/gyumri',
};

export default function Page() {
  return (
    <>
      <JsonLd data={schema} />
      <GyumriTour />
    </>
  );
}

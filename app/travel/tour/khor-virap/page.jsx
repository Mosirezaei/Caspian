import KhorVirapTour from '@/views/travel/KhorVirapTour';
import JsonLd from '@/components/shared/JsonLd';
import { WHATSAPP_BOOKING } from '@/lib/contact';

export const metadata = {
  title: 'تور یک‌روزه خور ویراپ و چشم‌انداز کوه آرارات | گروه کاسپین',
  description: 'تور یک‌روزه صومعه تاریخی خور ویراپ با چشم‌انداز مستقیم کوه آرارات؛ بازدید از سیاه‌چال گریگور روشنگر، دشت آرارات، راهنمای فارسی، ترانسفر و ناهار.',
  keywords: 'تور خور ویراپ, تور Khor Virap, خور ویراپ ارمنستان, کوه آرارات, تور آرارات از ایروان, تور یک روزه ارمنستان, صومعه خور ویراپ',
  alternates: { canonical: 'https://caspian.am/travel/tour/khor-virap' },
  openGraph: {
    title: 'تور یک‌روزه خور ویراپ | چشم‌انداز مستقیم کوه آرارات',
    description: 'سفری یک‌روزه از ایروان به صومعه تاریخی خور ویراپ، سیاه‌چال گریگور روشنگر و دشت آرارات.',
    url: 'https://caspian.am/travel/tour/khor-virap',
    images: [{ url: 'https://images.unsplash.com/photo-1677864109159-34eb97228c65?w=1200&q=80', width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'TouristTrip',
  name: 'تور یک‌روزه خور ویراپ و چشم‌انداز کوه آرارات',
  description: 'تور یک‌روزه از ایروان به صومعه تاریخی خور ویراپ، سیاه‌چال گریگور روشنگر و دشت آرارات، همراه با ترانسفر، راهنمای فارسی‌زبان و ناهار.',
  provider: { '@type': 'Organization', name: 'Caspian Business Group', url: 'https://caspian.am', telephone: `+${WHATSAPP_BOOKING}` },
  touristType: ['Historical', 'Cultural', 'Religious', 'Day Trip'],
  itinerary: [
    { '@type': 'TouristAttraction', name: 'Khor Virap Monastery', description: 'صومعه تاریخی خور ویراپ در دشت آرارات با چشم‌انداز مستقیم کوه آرارات' },
    { '@type': 'TouristAttraction', name: 'Gregory the Illuminator Dungeon', description: 'سیاه‌چال تاریخی محل حبس گریگور روشنگر' },
    { '@type': 'TouristAttraction', name: 'Ararat Plain', description: 'دشت حاصلخیز آرارات و چشم‌انداز کوه آرارات' },
  ],
  departureTime: '09:30',
  url: 'https://caspian.am/travel/tour/khor-virap',
};

export default function Page() {
  return (
    <>
      <JsonLd data={schema} />
      <KhorVirapTour />
    </>
  );
}

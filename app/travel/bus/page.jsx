import BusTrainBooking from '@/views/service/BusTrainBooking';

export const metadata = {
  title: 'رزرو اتوبوس و قطار از ایروان',
  description: 'رزرو بلیط اتوبوس و قطار از ایروان به تهران و تبریز.',
  alternates: { canonical: 'https://caspian.am/travel/bus' },
  openGraph: {
    title: 'رزرو اتوبوس و قطار از ایروان',
    description: 'رزرو بلیط اتوبوس و قطار از ایروان به تهران و تبریز.',
    url: 'https://caspian.am/travel/bus',
  },
};

export default function Page() {
  return <BusTrainBooking />;
}

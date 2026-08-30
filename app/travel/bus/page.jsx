import BusTrainBooking from '@/views/service/BusTrainBooking';

export const metadata = {
  title: 'رزرو اتوبوس و قطار ایروان-تهران/تبریز',
  description: 'رزرو بلیط اتوبوس و قطار از ایروان به تهران، تبریز و سایر شهرها. مستقیم و با تغییر. قیمت و زمان‌بندی دقیق.',
  alternates: { canonical: 'https://caspian.am/travel/bus' },
  openGraph: {
    title: 'رزرو اتوبوس و قطار از ایروان به تهران و تبریز | کاسپین گروپ',
    description: 'رزرو بلیط اتوبوس و قطار از ایروان به تهران، تبریز و سایر شهرها. مستقیم و با تغییر. قیمت و زمان‌بندی دقیق.',
    url: 'https://caspian.am/travel/bus',
  },
};

export default function Page() {
  return <BusTrainBooking />;
}

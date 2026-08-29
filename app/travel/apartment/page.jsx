import Apartment from '@/views/travel/Apartment';

export const metadata = {
  title: 'اجاره آپارتمان مبله در ایروان | روزانه از ۳۰ دلار و ماهانه',
  description: 'اجاره آپارتمان مبله در ایروان با عکس واقعی قبل از رزرو، پرداخت ریالی/USDT، ترانسفر فرودگاهی. استودیو تا ۳ خوابه در بهترین مناطق ایروان.',
  keywords: 'اجاره آپارتمان ایروان, سوئیت مبله ایروان, اجاره روزانه ایروان, آپارتمان ارمنستان, اجاره ماهانه ایروان',
  alternates: { canonical: 'https://caspian.am/travel/apartment' },
  openGraph: {
    title: 'اجاره آپارتمان مبله در ایروان | روزانه از ۳۰ دلار و ماهانه',
    description: 'اجاره آپارتمان مبله در ایروان با عکس واقعی قبل از رزرو، پرداخت ریالی/USDT، ترانسفر فرودگاهی. استودیو تا ۳ خوابه در بهترین مناطق ایروان.',
    url: 'https://caspian.am/travel/apartment',
  },
};

export default function Page() {
  return <Apartment />;
}

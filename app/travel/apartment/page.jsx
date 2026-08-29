import Apartment from '@/views/travel/Apartment';

export const metadata = {
  title: 'اجاره آپارتمان مبله در ایروان | روزانه و ماهانه',
  description: 'رزرو آپارتمان مبله در ایروان با عکس واقعی و پرداخت ریالی. از ۳۰ دلار در شب.',
  alternates: { canonical: 'https://caspian.am/travel/apartment' },
  openGraph: {
    title: 'اجاره آپارتمان مبله در ایروان | روزانه و ماهانه',
    description: 'رزرو آپارتمان مبله در ایروان با عکس واقعی و پرداخت ریالی. از ۳۰ دلار در شب.',
    url: 'https://caspian.am/travel/apartment',
  },
};

export default function Page() {
  return <Apartment />;
}

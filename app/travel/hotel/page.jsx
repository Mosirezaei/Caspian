import Hotel from '@/views/service/Hotel';

export const metadata = {
  title: 'رزرو هتل در ایروان | ۳، ۴ و ۵ ستاره با واچر رسمی',
  description: 'رزرو هتل ایروان با واچر رسمی، پرداخت ریالی/USDT. هتل ۳ تا ۵ ستاره از ۴۵ دلار.',
  alternates: { canonical: 'https://caspian.am/travel/hotel' },
  openGraph: {
    title: 'رزرو هتل در ایروان | ۳، ۴ و ۵ ستاره با واچر رسمی',
    description: 'رزرو هتل ایروان با واچر رسمی، پرداخت ریالی/USDT. هتل ۳ تا ۵ ستاره از ۴۵ دلار.',
    url: 'https://caspian.am/travel/hotel',
  },
};

export default function Page() {
  return <Hotel />;
}

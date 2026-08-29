import Hotel from '@/views/service/Hotel';

export const metadata = {
  title: 'رزرو هتل در ایروان ارمنستان | ۳، ۴ و ۵ ستاره با واچر رسمی سفارت',
  description: 'رزرو هتل ایروان با واچر رسمی قابل ارائه به سفارتخانه، پرداخت ریالی/USDT/دلار، پشتیبانی واتساپ. هتل ۳ تا ۵ ستاره از ۴۵ دلار در شب.',
  keywords: 'رزرو هتل ایروان, هتل ارمنستان, واچر هتل برای ویزا, هتل ایروان پرداخت ریالی, بهترین هتل ایروان',
  alternates: { canonical: 'https://caspian.am/travel/hotel' },
  openGraph: {
    title: 'رزرو هتل در ایروان ارمنستان | ۳، ۴ و ۵ ستاره با واچر رسمی سفارت',
    description: 'رزرو هتل ایروان با واچر رسمی قابل ارائه به سفارتخانه، پرداخت ریالی/USDT/دلار، پشتیبانی واتساپ. هتل ۳ تا ۵ ستاره از ۴۵ دلار در شب.',
    url: 'https://caspian.am/travel/hotel',
  },
};

export default function Page() {
  return <Hotel />;
}

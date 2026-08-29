import Home from '@/views/Home';

export const metadata = {
  title: 'کاسپین گروپ ارمنستان | رزرو هتل، آپارتمان، اقامت ایروان',
  description: 'رزرو هتل و آپارتمان در ایروان، اقامت ارمنستان، ویزای روسیه. بیش از ۱۵ سال تجربه.',
  alternates: { canonical: 'https://caspian.am' },
  openGraph: {
    title: 'کاسپین گروپ ارمنستان | رزرو هتل، آپارتمان، اقامت ایروان',
    description: 'رزرو هتل و آپارتمان در ایروان، اقامت ارمنستان، ویزای روسیه. بیش از ۱۵ سال تجربه.',
    url: 'https://caspian.am',
  },
};

export default function Page() {
  return <Home />;
}

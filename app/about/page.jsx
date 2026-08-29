import About from '@/views/About';

export const metadata = {
  title: 'درباره کاسپین گروپ ارمنستان | بیش از ۱۵ سال تجربه در ایروان',
  description: 'کاسپین گروپ از سال ۲۰۱۰ در ایروان ارمنستان فعالیت می‌کند. تیم متخصص فارسی‌زبان در حوزه رزرو هتل و آپارتمان، اقامت، ثبت شرکت و ویزا.',
  alternates: { canonical: 'https://caspian.am/about' },
  openGraph: {
    title: 'درباره کاسپین گروپ ارمنستان | بیش از ۱۵ سال تجربه در ایروان',
    description: 'کاسپین گروپ از سال ۲۰۱۰ در ایروان ارمنستان فعالیت می‌کند. تیم متخصص فارسی‌زبان در حوزه رزرو هتل و آپارتمان، اقامت، ثبت شرکت و ویزا.',
    url: 'https://caspian.am/about',
  },
};

export default function Page() {
  return <About />;
}

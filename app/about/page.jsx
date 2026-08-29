import About from '@/views/About';

export const metadata = {
  title: 'درباره کاسپین گروپ ارمنستان',
  description: 'آشنایی با کاسپین گروپ ارمنستان، خدمات مهاجرتی و گردشگری در ایروان.',
  alternates: { canonical: 'https://caspian.am/about' },
  openGraph: {
    title: 'درباره کاسپین گروپ ارمنستان',
    description: 'آشنایی با کاسپین گروپ ارمنستان، خدمات مهاجرتی و گردشگری در ایروان.',
    url: 'https://caspian.am/about',
  },
};

export default function Page() {
  return <About />;
}

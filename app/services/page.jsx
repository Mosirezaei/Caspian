import Services from '@/views/Services';

export const metadata = {
  title: 'خدمات کاسپین گروپ ارمنستان',
  description: 'تمام خدمات کاسپین گروپ: رزرو هتل، آپارتمان، اقامت، ویزا، تور.',
  alternates: { canonical: 'https://caspian.am/services' },
  openGraph: {
    title: 'خدمات کاسپین گروپ ارمنستان',
    description: 'تمام خدمات کاسپین گروپ: رزرو هتل، آپارتمان، اقامت، ویزا، تور.',
    url: 'https://caspian.am/services',
  },
};

export default function Page() {
  return <Services />;
}

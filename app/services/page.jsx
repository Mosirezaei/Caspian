import Services from '@/views/Services';

export const metadata = {
  title: 'خدمات کاسپین گروپ ارمنستان | رزرو، اقامت، ویزا و تور',
  description: 'تمام خدمات کاسپین گروپ: رزرو هتل و آپارتمان در ایروان، اقامت ارمنستان، ثبت شرکت، ویزای روسیه، تور ارمنستان و ویزای تحصیلی.',
  alternates: { canonical: 'https://caspian.am/services' },
  openGraph: {
    title: 'خدمات کاسپین گروپ ارمنستان | رزرو، اقامت، ویزا و تور',
    description: 'تمام خدمات کاسپین گروپ: رزرو هتل و آپارتمان در ایروان، اقامت ارمنستان، ثبت شرکت، ویزای روسیه، تور ارمنستان و ویزای تحصیلی.',
    url: 'https://caspian.am/services',
  },
};

export default function Page() {
  return <Services />;
}

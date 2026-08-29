import VisaSchengen from '@/views/service/VisaSchengen';

export const metadata = {
  title: 'ویزای شینگن از ارمنستان',
  description: 'اخذ ویزای شینگن از سفارت‌های اروپایی در ایروان.',
  alternates: { canonical: 'https://caspian.am/visa/schengen' },
  openGraph: {
    title: 'ویزای شینگن از ارمنستان',
    description: 'اخذ ویزای شینگن از سفارت‌های اروپایی در ایروان.',
    url: 'https://caspian.am/visa/schengen',
  },
};

export default function Page() {
  return <VisaSchengen />;
}

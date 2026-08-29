import VisaSouthAmerica from '@/views/service/VisaSouthAmerica';

export const metadata = {
  title: 'ویزای آمریکای جنوبی',
  description: 'اخذ ویزای کشورهای آمریکای جنوبی از ایروان.',
  alternates: { canonical: 'https://caspian.am/visa/south-america' },
  openGraph: {
    title: 'ویزای آمریکای جنوبی',
    description: 'اخذ ویزای کشورهای آمریکای جنوبی از ایروان.',
    url: 'https://caspian.am/visa/south-america',
  },
};

export default function Page() {
  return <VisaSouthAmerica />;
}

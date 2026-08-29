import VisaRomania from '@/views/service/VisaRomania';

export const metadata = {
  title: 'ویزای رومانی از ارمنستان',
  description: 'اخذ ویزای رومانی از سفارت در ایروان. پل ورود به اروپا.',
  alternates: { canonical: 'https://caspian.am/visa/romania' },
  openGraph: {
    title: 'ویزای رومانی از ارمنستان',
    description: 'اخذ ویزای رومانی از سفارت در ایروان. پل ورود به اروپا.',
    url: 'https://caspian.am/visa/romania',
  },
};

export default function Page() {
  return <VisaRomania />;
}

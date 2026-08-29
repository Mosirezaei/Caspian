import StudentVisaRomania from '@/views/service/StudentVisaRomania';

export const metadata = {
  title: 'ویزای تحصیلی رومانی',
  description: 'اخذ ویزای تحصیلی رومانی از سفارت در ایروان.',
  alternates: { canonical: 'https://caspian.am/student-visa/romania' },
  openGraph: {
    title: 'ویزای تحصیلی رومانی',
    description: 'اخذ ویزای تحصیلی رومانی از سفارت در ایروان.',
    url: 'https://caspian.am/student-visa/romania',
  },
};

export default function Page() {
  return <StudentVisaRomania />;
}

import StudentVisaRussia from '@/views/service/StudentVisaRussia';

export const metadata = {
  title: 'ویزای تحصیلی روسیه',
  description: 'اخذ ویزای تحصیلی روسیه از سفارت در ایروان.',
  alternates: { canonical: 'https://caspian.am/student-visa/russia' },
  openGraph: {
    title: 'ویزای تحصیلی روسیه',
    description: 'اخذ ویزای تحصیلی روسیه از سفارت در ایروان.',
    url: 'https://caspian.am/student-visa/russia',
  },
};

export default function Page() {
  return <StudentVisaRussia />;
}

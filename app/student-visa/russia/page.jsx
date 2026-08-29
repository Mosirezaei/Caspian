import StudentVisaRussia from '@/views/service/StudentVisaRussia';

export const metadata = {
  title: 'ویزای تحصیلی روسیه از ارمنستان | پذیرش دانشگاه‌های روسی',
  description: 'اخذ ویزای تحصیلی روسیه از سفارت در ایروان. پذیرش دانشگاه‌های دولتی روسیه. پزشکی، مهندسی، اقتصاد. مدارک و پیگیری کامل.',
  alternates: { canonical: 'https://caspian.am/student-visa/russia' },
  openGraph: {
    title: 'ویزای تحصیلی روسیه از ارمنستان | پذیرش دانشگاه‌های روسی',
    description: 'اخذ ویزای تحصیلی روسیه از سفارت در ایروان. پذیرش دانشگاه‌های دولتی روسیه. پزشکی، مهندسی، اقتصاد. مدارک و پیگیری کامل.',
    url: 'https://caspian.am/student-visa/russia',
  },
};

export default function Page() {
  return <StudentVisaRussia />;
}

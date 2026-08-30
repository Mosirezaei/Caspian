import StudentVisaRomania from '@/views/service/StudentVisaRomania';

export const metadata = {
  title: 'ویزای تحصیلی رومانی | دانشگاه‌های ارزان',
  description: 'اخذ ویزای تحصیلی رومانی از سفارت در ایروان. تحصیل با هزینه کم در اروپای شرقی. مدارک و پیگیری کامل با کاسپین.',
  alternates: { canonical: 'https://caspian.am/student-visa/romania' },
  openGraph: {
    title: 'ویزای تحصیلی رومانی از ارمنستان | دانشگاه‌های رومانی ارزان',
    description: 'اخذ ویزای تحصیلی رومانی از سفارت در ایروان. تحصیل با هزینه کم در اروپای شرقی. مدارک و پیگیری کامل با کاسپین.',
    url: 'https://caspian.am/student-visa/romania',
  },
};

export default function Page() {
  return <StudentVisaRomania />;
}

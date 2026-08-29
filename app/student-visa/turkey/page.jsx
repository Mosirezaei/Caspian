import StudentVisaTurkey from '@/views/service/StudentVisaTurkey';

export const metadata = {
  title: 'ویزای تحصیلی ترکیه',
  description: 'اخذ ویزای تحصیلی ترکیه از سفارت در ایروان.',
  alternates: { canonical: 'https://caspian.am/student-visa/turkey' },
  openGraph: {
    title: 'ویزای تحصیلی ترکیه',
    description: 'اخذ ویزای تحصیلی ترکیه از سفارت در ایروان.',
    url: 'https://caspian.am/student-visa/turkey',
  },
};

export default function Page() {
  return <StudentVisaTurkey />;
}

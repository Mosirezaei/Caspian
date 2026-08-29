import StudentVisaTurkey from '@/views/service/StudentVisaTurkey';

export const metadata = {
  title: 'ویزای تحصیلی ترکیه از ارمنستان | دانشگاه‌های معتبر ترکیه',
  description: 'اخذ ویزای تحصیلی ترکیه از سفارت در ایروان. پذیرش دانشگاه‌های استانبول و آنکارا. مدارک، مراحل و هزینه.',
  alternates: { canonical: 'https://caspian.am/student-visa/turkey' },
  openGraph: {
    title: 'ویزای تحصیلی ترکیه از ارمنستان | دانشگاه‌های معتبر ترکیه',
    description: 'اخذ ویزای تحصیلی ترکیه از سفارت در ایروان. پذیرش دانشگاه‌های استانبول و آنکارا. مدارک، مراحل و هزینه.',
    url: 'https://caspian.am/student-visa/turkey',
  },
};

export default function Page() {
  return <StudentVisaTurkey />;
}

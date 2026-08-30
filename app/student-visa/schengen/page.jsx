import StudentVisaSchengen from '@/views/service/StudentVisaSchengen';

export const metadata = {
  title: 'ویزای تحصیلی شینگن از ارمنستان',
  description: 'اخذ ویزای تحصیلی کشورهای شینگن از سفارت‌های اروپایی در ایروان. آلمان، فرانسه، هلند. مدارک پذیرش و پیگیری.',
  alternates: { canonical: 'https://caspian.am/student-visa/schengen' },
  openGraph: {
    title: 'ویزای تحصیلی اروپا (شینگن) از ارمنستان | دانشگاه‌های اروپایی',
    description: 'اخذ ویزای تحصیلی کشورهای شینگن از سفارت‌های اروپایی در ایروان. آلمان، فرانسه، هلند. مدارک پذیرش و پیگیری.',
    url: 'https://caspian.am/student-visa/schengen',
  },
};

export default function Page() {
  return <StudentVisaSchengen />;
}

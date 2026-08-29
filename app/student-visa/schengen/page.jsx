import StudentVisaSchengen from '@/views/service/StudentVisaSchengen';

export const metadata = {
  title: 'ویزای تحصیلی شینگن',
  description: 'اخذ ویزای تحصیلی اروپا از سفارت‌های اروپایی در ایروان.',
  alternates: { canonical: 'https://caspian.am/student-visa/schengen' },
  openGraph: {
    title: 'ویزای تحصیلی شینگن',
    description: 'اخذ ویزای تحصیلی اروپا از سفارت‌های اروپایی در ایروان.',
    url: 'https://caspian.am/student-visa/schengen',
  },
};

export default function Page() {
  return <StudentVisaSchengen />;
}

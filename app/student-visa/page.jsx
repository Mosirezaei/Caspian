import StudentVisa from '@/views/service/StudentVisa';

export const metadata = {
  title: 'ویزای تحصیلی | انواع ویزای دانشجویی',
  description: 'راهنمای کامل ویزاهای تحصیلی: ارمنستان، روسیه، شینگن، رومانی.',
  alternates: { canonical: 'https://caspian.am/student-visa' },
  openGraph: {
    title: 'ویزای تحصیلی | انواع ویزای دانشجویی',
    description: 'راهنمای کامل ویزاهای تحصیلی: ارمنستان، روسیه، شینگن، رومانی.',
    url: 'https://caspian.am/student-visa',
  },
};

export default function Page() {
  return <StudentVisa />;
}

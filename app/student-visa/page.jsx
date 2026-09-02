import StudentVisa from '@/views/service/StudentVisa';

export const metadata = {
  title: 'ویزای تحصیلی ارمنستان و روسیه',
  description: 'راهنمای کامل ویزای تحصیلی ارمنستان و روسیه: هزینه از ۱۵۰۰ دلار، مدارک، مراحل و زمان‌بندی هر مسیر.',
  alternates: { canonical: 'https://caspian.am/student-visa' },
  openGraph: {
    title: 'ویزای تحصیلی ارمنستان و روسیه',
    description: 'راهنمای کامل ویزای تحصیلی ارمنستان و روسیه: هزینه از ۱۵۰۰ دلار، مدارک، مراحل و زمان‌بندی هر مسیر.',
    url: 'https://caspian.am/student-visa',
  },
};

export default function Page() {
  return <StudentVisa />;
}

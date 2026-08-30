import StudentVisa from '@/views/service/StudentVisa';

export const metadata = {
  title: 'ویزای تحصیلی خارج از کشور | چند مقصد',
  description: 'راهنمای کامل ویزاهای تحصیلی: ارمنستان از ۱۵۰۰ دلار، روسیه، شینگن اروپا، رومانی و ترکیه. مدارک، مراحل و هزینه هر کشور.',
  alternates: { canonical: 'https://caspian.am/student-visa' },
  openGraph: {
    title: 'ویزای تحصیلی خارج از کشور | ارمنستان، روسیه، شینگن، رومانی و ترکیه',
    description: 'راهنمای کامل ویزاهای تحصیلی: ارمنستان از ۱۵۰۰ دلار، روسیه، شینگن اروپا، رومانی و ترکیه. مدارک، مراحل و هزینه هر کشور.',
    url: 'https://caspian.am/student-visa',
  },
};

export default function Page() {
  return <StudentVisa />;
}

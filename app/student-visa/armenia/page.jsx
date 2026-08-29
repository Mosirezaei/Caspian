import StudentVisaArmenia from '@/views/service/StudentVisaArmenia';

export const metadata = {
  title: 'ویزای تحصیلی ارمنستان',
  description: 'ویزای تحصیلی ارمنستان — پذیرش YSU، YSMU، AUA. شهریه از ۱۵۰۰ دلار.',
  alternates: { canonical: 'https://caspian.am/student-visa/armenia' },
  openGraph: {
    title: 'ویزای تحصیلی ارمنستان',
    description: 'ویزای تحصیلی ارمنستان — پذیرش YSU، YSMU، AUA. شهریه از ۱۵۰۰ دلار.',
    url: 'https://caspian.am/student-visa/armenia',
  },
};

export default function Page() {
  return <StudentVisaArmenia />;
}

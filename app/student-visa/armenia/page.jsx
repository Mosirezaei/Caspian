import StudentVisaArmenia from '@/views/service/StudentVisaArmenia';

export const metadata = {
  title: 'ویزای تحصیلی ارمنستان | پذیرش دانشگاه‌ها',
  description: 'ویزای تحصیلی و پذیرش دانشگاه ارمنستان. YSU از ۱۵۰۰، YSMU پزشکی از ۵۰۰۰، AUA آمریکایی از ۶۰۰۰ دلار. اقامت دانشجویی + کارت اقامت.',
  keywords: 'ویزای تحصیلی ارمنستان, پذیرش دانشگاه ارمنستان, تحصیل پزشکی ارمنستان',
  alternates: { canonical: 'https://caspian.am/student-visa/armenia' },
  openGraph: {
    title: 'ویزای تحصیلی ارمنستان | پذیرش YSU، YSMU، AUA — شهریه از ۱۵۰۰ دلار',
    description: 'ویزای تحصیلی و پذیرش دانشگاه ارمنستان. YSU از ۱۵۰۰، YSMU پزشکی از ۵۰۰۰، AUA آمریکایی از ۶۰۰۰ دلار. اقامت دانشجویی + کارت اقامت.',
    url: 'https://caspian.am/student-visa/armenia',
  },
};

export default function Page() {
  return <StudentVisaArmenia />;
}

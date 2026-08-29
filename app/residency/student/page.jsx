import ResidencyStudent from '@/views/service/ResidencyStudent';

export const metadata = {
  title: 'اقامت تحصیلی ارمنستان',
  description: 'پذیرش دانشگاه‌های معتبر ارمنستان. شهریه از ۱۵۰۰ دلار.',
  alternates: { canonical: 'https://caspian.am/residency/student' },
  openGraph: {
    title: 'اقامت تحصیلی ارمنستان',
    description: 'پذیرش دانشگاه‌های معتبر ارمنستان. شهریه از ۱۵۰۰ دلار.',
    url: 'https://caspian.am/residency/student',
  },
};

export default function Page() {
  return <ResidencyStudent />;
}

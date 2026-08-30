import ResidencyStudent from '@/views/service/ResidencyStudent';

export const metadata = {
  title: 'اقامت تحصیلی ارمنستان | پذیرش دانشگاه + اقامت',
  description: 'اقامت تحصیلی ارمنستان از طریق پذیرش در دانشگاه‌های معتبر. شهریه YSU از ۱۵۰۰ دلار، پزشکی YSMU از ۵۰۰۰ دلار. کارت اقامت دانشجویی.',
  keywords: 'اقامت تحصیلی ارمنستان, پذیرش دانشگاه ارمنستان, تحصیل در ارمنستان',
  alternates: { canonical: 'https://caspian.am/residency/student' },
  openGraph: {
    title: 'اقامت تحصیلی ارمنستان | پذیرش دانشگاه YSU، YSMU، AUA + کارت اقامت',
    description: 'اقامت تحصیلی ارمنستان از طریق پذیرش در دانشگاه‌های معتبر. شهریه YSU از ۱۵۰۰ دلار، پزشکی YSMU از ۵۰۰۰ دلار. کارت اقامت دانشجویی.',
    url: 'https://caspian.am/residency/student',
  },
};

export default function Page() {
  return <ResidencyStudent />;
}

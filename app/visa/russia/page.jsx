import VisaRussia from '@/views/service/VisaRussia';

export const metadata = {
  title: 'ویزای توریستی روسیه برای ایرانیان ۲۰۲۶ | eVisa + سفارت',
  description: 'ویزای روسیه از ایروان: eVisa 70-110 دلار، ۴ روز. سفارت ۱۳۰-۱۶۰ دلار، ۵-۱۰ روز.',
  alternates: { canonical: 'https://caspian.am/visa/russia' },
  openGraph: {
    title: 'ویزای توریستی روسیه برای ایرانیان ۲۰۲۶ | eVisa + سفارت',
    description: 'ویزای روسیه از ایروان: eVisa 70-110 دلار، ۴ روز. سفارت ۱۳۰-۱۶۰ دلار، ۵-۱۰ روز.',
    url: 'https://caspian.am/visa/russia',
  },
};

export default function Page() {
  return <VisaRussia />;
}

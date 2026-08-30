import VisaRomania from '@/views/service/VisaRomania';

export const metadata = {
  title: 'ویزای رومانی از ارمنستان | سریع‌ترین ویزای اروپا',
  description: 'اخذ ویزای رومانی از سفارت در ایروان. پردازش ۱۵ تا ۳۰ روز. پل ورود به اروپای شرقی. هزینه کنسولی ۳۵ یورو. مدارک و پیگیری کامل.',
  keywords: 'ویزای رومانی, ویزای رومانی از ارمنستان, ویزای اروپای شرقی',
  alternates: { canonical: 'https://caspian.am/visa/romania' },
  openGraph: {
    title: 'ویزای رومانی از ارمنستان | سریع‌ترین ویزای اروپایی برای ایرانیان',
    description: 'اخذ ویزای رومانی از سفارت در ایروان. پردازش ۱۵ تا ۳۰ روز. پل ورود به اروپای شرقی. هزینه کنسولی ۳۵ یورو. مدارک و پیگیری کامل.',
    url: 'https://caspian.am/visa/romania',
  },
};

export default function Page() {
  return <VisaRomania />;
}

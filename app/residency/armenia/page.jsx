import Residency from '@/views/service/Residency';

export const metadata = {
  title: 'اقامت ارمنستان برای ایرانیان ۲۰۲۶',
  description: 'اقامت ارمنستان در کمتر از ۳۰ روز از طریق ثبت شرکت. قانون جدید نوامبر ۲۰۲۶.',
  alternates: { canonical: 'https://caspian.am/residency/armenia' },
  openGraph: {
    title: 'اقامت ارمنستان برای ایرانیان ۲۰۲۶',
    description: 'اقامت ارمنستان در کمتر از ۳۰ روز از طریق ثبت شرکت. قانون جدید نوامبر ۲۰۲۶.',
    url: 'https://caspian.am/residency/armenia',
  },
};

export default function Page() {
  return <Residency />;
}

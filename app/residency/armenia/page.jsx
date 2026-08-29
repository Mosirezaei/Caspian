import Residency from '@/views/service/Residency';

export const metadata = {
  title: 'اقامت ارمنستان برای ایرانیان ۲۰۲۶ | مراحل، هزینه و شرایط کامل',
  description: 'اقامت ارمنستان در کمتر از ۳۰ روز از طریق ثبت شرکت. قانون جدید نوامبر ۲۰۲۶، هزینه کارت اقامت ۳۸۰ دلار، مالیات ۱۰٪. مشاوره رایگان واتساپ.',
  keywords: 'اقامت ارمنستان, کارت اقامت ارمنستان, مهاجرت ارمنستان, اقامت ارمنستان برای ایرانیان ۲۰۲۶',
  alternates: { canonical: 'https://caspian.am/residency/armenia' },
  openGraph: {
    title: 'اقامت ارمنستان برای ایرانیان ۲۰۲۶ | مراحل، هزینه و شرایط کامل',
    description: 'اقامت ارمنستان در کمتر از ۳۰ روز از طریق ثبت شرکت. قانون جدید نوامبر ۲۰۲۶، هزینه کارت اقامت ۳۸۰ دلار، مالیات ۱۰٪. مشاوره رایگان واتساپ.',
    url: 'https://caspian.am/residency/armenia',
  },
};

export default function Page() {
  return <Residency />;
}

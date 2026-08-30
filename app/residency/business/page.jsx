import CompanyReg from '@/views/service/CompanyReg';

export const metadata = {
  title: 'ثبت LLC ارمنستان | ۳ روزه، مالیات ۵٪',
  description: 'ثبت LLC در ارمنستان در ۳ روز کاری. مالیات ساده‌شده ۵٪، مالکیت صددرصد خارجی، حساب بانکی ویزا/مسترکارت. هزینه واقعی سال اول ۱۰۰۰ تا ۲۵۰۰ دلار.',
  keywords: 'ثبت شرکت ارمنستان, ثبت LLC ارمنستان, مالیات ارمنستان, اقامت از طریق ثبت شرکت',
  alternates: { canonical: 'https://caspian.am/residency/business' },
  openGraph: {
    title: 'ثبت LLC ارمنستان | ۳ روزه، مالیات ۵٪، حساب بانکی بین‌المللی',
    description: 'ثبت LLC در ارمنستان در ۳ روز کاری. مالیات ساده‌شده ۵٪، مالکیت صددرصد خارجی، حساب بانکی ویزا/مسترکارت. هزینه واقعی سال اول ۱۰۰۰ تا ۲۵۰۰ دلار.',
    url: 'https://caspian.am/residency/business',
  },
};

export default function Page() {
  return <CompanyReg />;
}

import CompanyReg from '@/views/service/CompanyReg';

export const metadata = {
  title: 'ثبت LLC ارمنستان | ۳ روزه، مالیات ۵٪، حساب بانکی بین‌المللی',
  description: 'ثبت LLC در ارمنستان در ۳ روز کاری. مالیات ساده‌شده ۵٪، مالکیت صددرصد خارجی، حساب بانکی ویزا/مسترکارت. هزینه سال اول ۱۰۰۰ تا ۲۵۰۰ دلار.',
  alternates: { canonical: 'https://caspian.am/residency/business' },
  openGraph: {
    title: 'ثبت LLC ارمنستان | ۳ روزه، مالیات ۵٪، حساب بانکی بین‌المللی',
    description: 'ثبت LLC در ارمنستان در ۳ روز کاری. مالیات ساده‌شده ۵٪، مالکیت صددرصد خارجی، حساب بانکی ویزا/مسترکارت. هزینه سال اول ۱۰۰۰ تا ۲۵۰۰ دلار.',
    url: 'https://caspian.am/residency/business',
  },
};

export default function Page() {
  return <CompanyReg />;
}

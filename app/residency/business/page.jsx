import CompanyReg from '@/views/service/CompanyReg';

export const metadata = {
  title: 'ثبت شرکت در ارمنستان | LLC در ۳ روز — مالیات ۵٪ | کاسپین گروپ',
  description: 'ثبت LLC در ارمنستان در ۳ روز کاری. مالیات ساده‌شده ۵٪ یا ۱۸٪. حساب بانکی بین‌المللی ویزا/مسترکارت. مالکیت صددرصد خارجی. هزینه واقعی شفاف.',
  keywords: 'ثبت شرکت ارمنستان, ثبت شرکت در ارمنستان, ثبت LLC ارمنستان, مالیات ارمنستان, ثبت شرکت برای ایرانیان, اقامت از طریق ثبت شرکت',
  alternates: { canonical: 'https://caspian.am/residency/business' },
  openGraph: {
    title: 'ثبت شرکت در ارمنستان | LLC در ۳ روز',
    description: 'ثبت LLC در ارمنستان در ۳ روز کاری. مالیات ۵٪. حساب بانکی بین‌المللی.',
    url: 'https://caspian.am/residency/business',
  },
};

export default function Page() {
  return <CompanyReg />;
}

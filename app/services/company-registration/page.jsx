import CompanyReg from '@/views/service/CompanyReg';

export const metadata = {
  title: 'ثبت شرکت در ارمنستان | LLC در ۳ روز — مالیات ۵٪ | کاسپین گروپ',
  description: 'ثبت LLC در ارمنستان در ۳ روز کاری. مالیات ساده‌شده ۵٪ یا ۱۸٪. حساب بانکی بین‌المللی ویزا/مسترکارت. مالکیت صددرصد خارجی.',
  alternates: { canonical: 'https://caspian.am/residency/business' },
};

export default function Page() {
  return <CompanyReg />;
}

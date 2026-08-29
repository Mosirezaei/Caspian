import CompanyReg from '@/views/service/CompanyReg';

export const metadata = {
  title: 'اقامت بیزینسی | ثبت شرکت در ارمنستان',
  description: 'ثبت LLC در ارمنستان در ۳ روز. مالیات ۵٪ ساده‌شده. حساب بانکی بین‌المللی.',
  alternates: { canonical: 'https://caspian.am/residency/business' },
  openGraph: {
    title: 'اقامت بیزینسی | ثبت شرکت در ارمنستان',
    description: 'ثبت LLC در ارمنستان در ۳ روز. مالیات ۵٪ ساده‌شده. حساب بانکی بین‌المللی.',
    url: 'https://caspian.am/residency/business',
  },
};

export default function Page() {
  return <CompanyReg />;
}

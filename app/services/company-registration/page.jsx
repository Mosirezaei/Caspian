import CompanyReg from '@/views/service/CompanyReg';

export const metadata = {
  title: 'ثبت شرکت در ارمنستان | LLC در ۳ روز',
  description: 'ثبت شرکت LLC در ۳ روز کاری. مالیات ۵٪. حساب بانکی بین‌المللی.',
  alternates: { canonical: 'https://caspian.am/services/company-registration' },
  openGraph: {
    title: 'ثبت شرکت در ارمنستان | LLC در ۳ روز',
    description: 'ثبت شرکت LLC در ۳ روز کاری. مالیات ۵٪. حساب بانکی بین‌المللی.',
    url: 'https://caspian.am/services/company-registration',
  },
};

export default function Page() {
  return <CompanyReg />;
}

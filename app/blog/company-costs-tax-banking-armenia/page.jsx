import CompanyCostsTaxBanking from '@/views/blog/CompanyCostsTaxBanking';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'هزینه ثبت شرکت در ارمنستان، مالیات و افتتاح حساب بانکی | گروه کاسپین',
  description: 'راهنمای کامل هزینه‌های ثبت شرکت در ارمنستان، رژیم‌های مالیاتی (۱۸٪ و گردش مالی)، شرایط افتتاح حساب بانکی و اهمیت حسابداری منظم.',
  keywords: 'هزینه ثبت شرکت ارمنستان, مالیات ارمنستان, حساب بانکی ارمنستان, LLC هزینه, حسابداری ارمنستان',
  alternates: { canonical: 'https://caspian.am/blog/company-costs-tax-banking-armenia' },
  openGraph: {
    title: 'هزینه ثبت شرکت در ارمنستان، مالیات و افتتاح حساب بانکی',
    description: 'هزینه واقعی راه‌اندازی شرکت ۱۰۰۰-۱۶۰۰ دلار، مالیات ۱۸٪، شرایط بانک — راهنمای مالی برای ایرانیان',
    url: 'https://caspian.am/blog/company-costs-tax-banking-armenia',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'هزینه ثبت شرکت در ارمنستان، مالیات و افتتاح حساب بانکی',
        description: 'راهنمای کامل هزینه‌های ثبت شرکت در ارمنستان، رژیم‌های مالیاتی (۱۸٪ و گردش مالی)، شرایط افتتاح حساب بانکی و اهمیت حسابداری منظم.',
        url: 'https://caspian.am/blog/company-costs-tax-banking-armenia',
        datePublished: '2026-09-03',
        dateModified: '2026-09-03',
      })} />
      <CompanyCostsTaxBanking />
    </>
  );
}

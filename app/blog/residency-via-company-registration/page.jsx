import ResidencyViaCompany from '@/views/blog/ResidencyViaCompany';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'اقامت ارمنستان از طریق ثبت شرکت: شرایط، مراحل و نکات مهم | گروه کاسپین',
  description: 'راهنمای کامل اخذ اقامت ارمنستان از طریق فعالیت تجاری: شرایط اداره مهاجرت، چرا ثبت صوری کافی نیست و چگونه Caspian Group کل مسیر را پشتیبانی می‌کند.',
  keywords: 'اقامت ارمنستان از طریق شرکت, اقامت بیزینسی ارمنستان, ثبت شرکت اقامت, EAEU ارمنستان, مهاجرت ارمنستان',
  alternates: { canonical: 'https://caspian.am/blog/residency-via-company-registration' },
  openGraph: {
    title: 'اقامت ارمنستان از طریق ثبت شرکت: شرایط، مراحل و نکات مهم',
    description: 'اقامت با فعالیت واقعی شرکت — ثبت صوری کافی نیست. راهنمای کامل برای ایرانیان',
    url: 'https://caspian.am/blog/residency-via-company-registration',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'اقامت ارمنستان از طریق ثبت شرکت: شرایط، مراحل و نکات مهم',
        description: 'راهنمای کامل اخذ اقامت ارمنستان از طریق فعالیت تجاری: شرایط اداره مهاجرت، چرا ثبت صوری کافی نیست و چگونه Caspian Group کل مسیر را پشتیبانی می‌کند.',
        url: 'https://caspian.am/blog/residency-via-company-registration',
        datePublished: '2026-09-03',
        dateModified: '2026-09-03',
      })} />
      <ResidencyViaCompany />
    </>
  );
}

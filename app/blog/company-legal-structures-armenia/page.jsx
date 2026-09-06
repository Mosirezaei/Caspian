import CompanyLegalStructures from '@/views/blog/CompanyLegalStructures';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'انواع ساختار حقوقی شرکت در ارمنستان: LLC، IE یا CJSC؟ | گروه کاسپین',
  description: 'مقایسه کامل LLC، IE و CJSC در ارمنستان برای ایرانیان: مزایا، مسئولیت مالی، هزینه ثبت و اینکه کدام ساختار برای شما مناسب‌تر است.',
  keywords: 'LLC ارمنستان, IE ارمنستان, CJSC ارمنستان, ساختار حقوقی شرکت ارمنستان, ثبت شرکت ارمنستان',
  alternates: { canonical: 'https://caspian.am/blog/company-legal-structures-armenia' },
  openGraph: {
    title: 'انواع ساختار حقوقی شرکت در ارمنستان: LLC، IE یا CJSC؟',
    description: 'مقایسه LLC، IE و CJSC — کدام ساختار برای کارآفرینان ایرانی در ارمنستان بهتر است؟',
    url: 'https://caspian.am/blog/company-legal-structures-armenia',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'انواع ساختار حقوقی شرکت در ارمنستان: LLC، IE یا CJSC؟',
        description: 'مقایسه کامل LLC، IE و CJSC در ارمنستان برای ایرانیان: مزایا، مسئولیت مالی، هزینه ثبت و اینکه کدام ساختار برای شما مناسب‌تر است.',
        url: 'https://caspian.am/blog/company-legal-structures-armenia',
        datePublished: '2026-09-03',
        dateModified: '2026-09-03',
      })} />
      <CompanyLegalStructures />
    </>
  );
}

import RentalContractLegalTips from '@/views/blog/RentalContractLegalTips';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'نکات حقوقی قرارداد اجاره در ارمنستان: فسخ، ودیعه و مذاکره',
  description: 'راهنمای تخصصی بررسی بندهای قرارداد اجاره در ارمنستان، مذاکره درباره ودیعه، تعهدات طرفین، فسخ، تمدید و کاهش ریسک مالی.',
  alternates: { canonical: 'https://caspian.am/blog/rental-contract-tips-armenia' },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'نکات حقوقی قرارداد اجاره در ارمنستان؛ مذاکره، ضمانت و فسخ',
        description: 'راهنمای تخصصی بررسی بندهای قرارداد اجاره در ارمنستان، مذاکره درباره ودیعه، تعهدات طرفین، فسخ، تمدید و کاهش ریسک مالی.',
        url: 'https://caspian.am/blog/rental-contract-tips-armenia',
        datePublished: '2026-09-02',
        dateModified: '2026-09-08',
      })} />
      <RentalContractLegalTips />
    </>
  );
}
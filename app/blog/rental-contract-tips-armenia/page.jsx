import RentalContractTips from '@/views/blog/RentalContractTips';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'قرارداد اجاره در ارمنستان | ودیعه و نکات حقوقی | گروه کاسپین',
  description: 'همه چیز درباره قرارداد اجاره، ودیعه، کمیسیون آژانس، مدارک لازم و نشانه‌های آگهی مشکوک.',
  alternates: { canonical: 'https://caspian.am/blog/rental-contract-tips-armenia' },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'قرارداد اجاره در ارمنستان',
        description: 'همه چیز درباره قرارداد اجاره، ودیعه، کمیسیون آژانس، مدارک لازم و نشانه‌های آگهی مشکوک.',
        url: 'https://caspian.am/blog/rental-contract-tips-armenia',
        datePublished: '2026-09-02',
        dateModified: '2026-09-02',
      })} />
      <RentalContractTips />
    </>
  );
}

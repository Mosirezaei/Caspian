import RentalContractTips from '@/views/blog/RentalContractTips';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'قرارداد اجاره خانه در ارمنستان: مدارک، ودیعه و نکات مهم',
  description: 'از پیدا کردن آگهی معتبر تا تحویل کلید؛ مدارک لازم، بندهای ضروری قرارداد و نشانه‌های آگهی مشکوک.',
  alternates: { canonical: 'https://caspian.am/blog/rental-contract-armenia-guide' },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'قرارداد اجاره خانه در ارمنستان: مدارک، ودیعه و نکاتی که باید قبل از امضا بدانید',
        description: 'از پیدا کردن آگهی معتبر تا تحویل کلید؛ مدارک لازم، بندهای ضروری قرارداد و نشانه‌های آگهی مشکوک.',
        url: 'https://caspian.am/blog/rental-contract-armenia-guide',
        datePublished: '2026-09-02',
        dateModified: '2026-09-02',
      })} />
      <RentalContractTips />
    </>
  );
}

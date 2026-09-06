import ResidencyPathsComparison from '@/views/blog/ResidencyPathsComparison';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'مقایسه مسیرهای اقامت ارمنستان | گروه کاسپین',
  description: 'مقایسه کامل اقامت کاری، تحصیلی، سرمایه‌گذاری و تولد فرزند: هزینه، زمان و مدارک.',
  alternates: { canonical: 'https://caspian.am/blog/residency-paths-comparison-armenia' },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'مقایسه مسیرهای اقامت ارمنستان',
        description: 'مقایسه کامل اقامت کاری، تحصیلی، سرمایه‌گذاری و تولد فرزند: هزینه، زمان و مدارک.',
        url: 'https://caspian.am/blog/residency-paths-comparison-armenia',
        datePublished: '2026-09-02',
        dateModified: '2026-09-02',
      })} />
      <ResidencyPathsComparison />
    </>
  );
}

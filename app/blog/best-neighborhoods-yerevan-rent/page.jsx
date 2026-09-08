import BestNeighborhoods from '@/views/blog/BestNeighborhoods';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'بهترین محله‌های ایروان برای اجاره | گروه کاسپین',
  description: 'مقایسه محله‌های کنترون، آرابگیر و داوتاشن از نظر قیمت، دسترسی و امکانات.',
  alternates: { canonical: 'https://caspian.am/blog/best-neighborhoods-yerevan-rent' },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'بهترین محله‌های ایروان برای اجاره',
        description: 'مقایسه محله‌های کنترون، آرابگیر و داوتاشن از نظر قیمت، دسترسی و امکانات.',
        url: 'https://caspian.am/blog/best-neighborhoods-yerevan-rent',
        datePublished: '2026-09-02',
        dateModified: '2026-09-02',
      })} />
      <BestNeighborhoods />
    </>
  );
}

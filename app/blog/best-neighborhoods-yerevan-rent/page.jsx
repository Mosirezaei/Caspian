import BestNeighborhoods from '@/views/blog/BestNeighborhoods';

export const metadata = {
  title: 'بهترین محله‌های ایروان برای اجاره | گروه کاسپین',
  description: 'مقایسه محله‌های کنترون، عربکیر و داوتاشن از نظر قیمت، دسترسی و امکانات.',
  alternates: { canonical: 'https://caspian.am/blog/best-neighborhoods-yerevan-rent' },
};

export default function Page() {
  return <BestNeighborhoods />;
}

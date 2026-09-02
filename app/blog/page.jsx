import BlogArchive from '@/views/blog/BlogArchive';

export const metadata = {
  title: 'وبلاگ کاسپین | راهنمای اقامت، مهاجرت و زندگی در ارمنستان',
  description: 'مقالات کاسپین درباره اقامت ارمنستان، مدارک ویزا، هزینه زندگی در ایروان، ثبت شرکت، تحصیل و گردشگری. راهنمای فارسی‌زبان برای مهاجرت و سفر به ارمنستان و روسیه.',
  keywords: 'وبلاگ کاسپین, اقامت ارمنستان, مهاجرت به ارمنستان, زندگی در ایروان, ویزای روسیه',
  alternates: { canonical: 'https://caspian.am/blog' },
  openGraph: {
    title: 'وبلاگ کاسپین | راهنمای اقامت، مهاجرت و زندگی در ارمنستان',
    description: 'مقالات کاسپین درباره اقامت ارمنستان، مدارک ویزا، هزینه زندگی در ایروان، ثبت شرکت، تحصیل و گردشگری.',
    url: 'https://caspian.am/blog',
  },
};

export default function Page() {
  return <BlogArchive />;
}

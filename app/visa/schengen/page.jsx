import VisaSchengen from '@/views/service/VisaSchengen';

export const metadata = {
  title: 'ویزای شینگن از ارمنستان | اخذ از سفارت‌های ایروان',
  description: 'اخذ ویزای شینگن از سفارت‌های آلمان، فرانسه، هلند و ایتالیا در ایروان. مدارک کامل، پیگیری واتساپ. هزینه کنسولی ۸۰ یورو.',
  keywords: 'ویزای شینگن از ارمنستان, ویزای اروپا ایروان, اخذ ویزای شینگن',
  alternates: { canonical: 'https://caspian.am/visa/schengen' },
  openGraph: {
    title: 'ویزای شینگن از ارمنستان | اخذ ویزای اروپا از سفارت‌های ایروان',
    description: 'اخذ ویزای شینگن از سفارت‌های آلمان، فرانسه، هلند و ایتالیا در ایروان. مدارک کامل، پیگیری واتساپ. هزینه کنسولی ۸۰ یورو.',
    url: 'https://caspian.am/visa/schengen',
  },
};

export default function Page() {
  return <VisaSchengen />;
}

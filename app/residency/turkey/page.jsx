import ResidencyTurkey from '@/views/service/ResidencyTurkey';

export const metadata = {
  title: 'اقامت ترکیه برای ایرانیان | کارت اقامت و شرایط ۲۰۲۶',
  description: 'خدمات اقامت ترکیه برای ایرانیان از طریق کاسپین گروپ. اقامت گردشگری، اجاره ملک، خرید ملک. مشاوره رایگان در واتساپ.',
  alternates: { canonical: 'https://caspian.am/residency/turkey' },
  openGraph: {
    title: 'اقامت ترکیه برای ایرانیان | کارت اقامت و شرایط ۲۰۲۶',
    description: 'خدمات اقامت ترکیه برای ایرانیان از طریق کاسپین گروپ. اقامت گردشگری، اجاره ملک، خرید ملک. مشاوره رایگان در واتساپ.',
    url: 'https://caspian.am/residency/turkey',
  },
};

export default function Page() {
  return <ResidencyTurkey />;
}

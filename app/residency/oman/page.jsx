import ResidencyOman from '@/views/service/ResidencyOman';

export const metadata = {
  title: 'اقامت عمان برای ایرانیان | شرایط و مراحل ۲۰۲۶',
  description: 'خدمات اقامت عمان برای ایرانیان از طریق کاسپین گروپ. اقامت سرمایه‌گذاری و کاری. مشاوره رایگان.',
  alternates: { canonical: 'https://caspian.am/residency/oman' },
  openGraph: {
    title: 'اقامت عمان برای ایرانیان | شرایط و مراحل ۲۰۲۶',
    description: 'خدمات اقامت عمان برای ایرانیان از طریق کاسپین گروپ. اقامت سرمایه‌گذاری و کاری. مشاوره رایگان.',
    url: 'https://caspian.am/residency/oman',
  },
};

export default function Page() {
  return <ResidencyOman />;
}

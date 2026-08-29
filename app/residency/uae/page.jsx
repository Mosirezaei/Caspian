import ResidencyUAE from '@/views/service/ResidencyUAE';

export const metadata = {
  title: 'اقامت امارات برای ایرانیان | ویزای دبی و ابوظبی ۲۰۲۶',
  description: 'خدمات اقامت امارات (دبی، ابوظبی) برای ایرانیان. اقامت کاری، سرمایه‌گذاری و اقامت طلایی. مشاوره با کاسپین گروپ.',
  alternates: { canonical: 'https://caspian.am/residency/uae' },
  openGraph: {
    title: 'اقامت امارات برای ایرانیان | ویزای دبی و ابوظبی ۲۰۲۶',
    description: 'خدمات اقامت امارات (دبی، ابوظبی) برای ایرانیان. اقامت کاری، سرمایه‌گذاری و اقامت طلایی. مشاوره با کاسپین گروپ.',
    url: 'https://caspian.am/residency/uae',
  },
};

export default function Page() {
  return <ResidencyUAE />;
}

import ResidencyOman from '@/views/service/ResidencyOman';

export const metadata = {
  title: 'اقامت عمان',
  description: 'خدمات اقامت عمان از طریق کاسپین گروپ.',
  alternates: { canonical: 'https://caspian.am/residency/oman' },
  openGraph: {
    title: 'اقامت عمان',
    description: 'خدمات اقامت عمان از طریق کاسپین گروپ.',
    url: 'https://caspian.am/residency/oman',
  },
};

export default function Page() {
  return <ResidencyOman />;
}

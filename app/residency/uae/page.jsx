import ResidencyUAE from '@/views/service/ResidencyUAE';

export const metadata = {
  title: 'اقامت امارات',
  description: 'خدمات اقامت امارات از طریق کاسپین گروپ.',
  alternates: { canonical: 'https://caspian.am/residency/uae' },
  openGraph: {
    title: 'اقامت امارات',
    description: 'خدمات اقامت امارات از طریق کاسپین گروپ.',
    url: 'https://caspian.am/residency/uae',
  },
};

export default function Page() {
  return <ResidencyUAE />;
}

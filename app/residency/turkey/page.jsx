import ResidencyTurkey from '@/views/service/ResidencyTurkey';

export const metadata = {
  title: 'اقامت ترکیه',
  description: 'خدمات اقامت ترکیه از طریق کاسپین گروپ.',
  alternates: { canonical: 'https://caspian.am/residency/turkey' },
  openGraph: {
    title: 'اقامت ترکیه',
    description: 'خدمات اقامت ترکیه از طریق کاسپین گروپ.',
    url: 'https://caspian.am/residency/turkey',
  },
};

export default function Page() {
  return <ResidencyTurkey />;
}

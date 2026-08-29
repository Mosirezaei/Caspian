import ResidencyWork from '@/views/service/ResidencyWork';

export const metadata = {
  title: 'اقامت کاری ارمنستان',
  description: 'اقامت از طریق اشتغال در شرکت‌های ارمنستانی. IT، پزشکی، مهندسی.',
  alternates: { canonical: 'https://caspian.am/residency/work' },
  openGraph: {
    title: 'اقامت کاری ارمنستان',
    description: 'اقامت از طریق اشتغال در شرکت‌های ارمنستانی. IT، پزشکی، مهندسی.',
    url: 'https://caspian.am/residency/work',
  },
};

export default function Page() {
  return <ResidencyWork />;
}

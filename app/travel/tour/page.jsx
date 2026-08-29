import Tour from '@/views/travel/Tour';

export const metadata = {
  title: 'تور ارمنستان | تور زمینی و هوایی',
  description: 'تورهای ارمنستان با برنامه کامل، هتل، ترانسفر و راهنما.',
  alternates: { canonical: 'https://caspian.am/travel/tour' },
  openGraph: {
    title: 'تور ارمنستان | تور زمینی و هوایی',
    description: 'تورهای ارمنستان با برنامه کامل، هتل، ترانسفر و راهنما.',
    url: 'https://caspian.am/travel/tour',
  },
};

export default function Page() {
  return <Tour />;
}

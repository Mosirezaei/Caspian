import Tour from '@/views/travel/Tour';

export const metadata = {
  title: 'تور ارمنستان | تور زمینی و هوایی با راهنمای فارسی‌زبان',
  description: 'تورهای ارمنستان با برنامه کامل: هتل، ترانسفر، راهنمای فارسی. تور ۳ تا ۷ روزه، گروهی و خصوصی. دریاچه سوان، قرناهبد، آبادی خاچکار.',
  keywords: 'تور ارمنستان, تور ایروان, تور ارمنستان از تهران, تور گردشگری ارمنستان',
  alternates: { canonical: 'https://caspian.am/travel/tour' },
  openGraph: {
    title: 'تور ارمنستان | تور زمینی و هوایی با راهنمای فارسی‌زبان',
    description: 'تورهای ارمنستان با برنامه کامل: هتل، ترانسفر، راهنمای فارسی. تور ۳ تا ۷ روزه، گروهی و خصوصی. دریاچه سوان، قرناهبد، آبادی خاچکار.',
    url: 'https://caspian.am/travel/tour',
  },
};

export default function Page() {
  return <Tour />;
}

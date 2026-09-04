import ArmeniaFestivalsEventsNews from '@/views/blog/ArmeniaFestivalsEventsNews';

export const metadata = {
  title: 'فستیوال‌ها، کنسرت‌ها و اخبار مهاجرتی ارمنستان | گروه کاسپین',
  description: 'تقویم  فستیوال‌های سالانه ارمنستان، کنسرت‌های پیش رو تا سه ماه آینده در ایروان.',
  keywords: 'فستیوال‌های ارمنستان, کنسرت ایروان, رویدادهای ارمنستان,',
  alternates: { canonical: 'https://caspian.am/blog/armenia-festivals-events-news' },
  openGraph: {
    title: 'فستیوال‌ها، کنسرت‌ها و اخبار مهاجرتی ارمنستان',
    description: 'تقویم  فستیوال‌های سالانه، کنسرت‌های پیش رو',
    url: 'https://caspian.am/blog/armenia-festivals-events-news',
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'فستیوال‌های سالانه ارمنستان',
            description: 'تقویم مهمترین فستیوال‌های سالانه ارمنستان،  ',
            author: { '@type': 'Organization', name: 'Caspian Business Group' },
            publisher: { '@type': 'Organization', name: 'Caspian Business Group', url: 'https://caspian.am' },
            datePublished: '2026-09-02',
            dateModified: '2026-09-02',
            url: 'https://caspian.am/blog/armenia-festivals-events-news',
            inLanguage: 'fa',
            about: { '@type': 'Country', name: 'Armenia' },
          }),
        }}
      />
      <ArmeniaFestivalsEventsNews />
    </>
  );
}

import ArmeniaFestivalsEventsNews from '@/views/blog/ArmeniaFestivalsEventsNews';

export const metadata = {
  title: 'فستیوال‌ها، کنسرت‌ها و اخبار مهاجرتی ارمنستان | گروه کاسپین',
  description: 'تقویم کامل فستیوال‌های سالانه ارمنستان، کنسرت‌های پیش رو تا سه ماه آینده در ایروان، و آخرین اخبار روابط ارمنستان و اتحادیه اروپا.',
  keywords: 'فستیوال‌های ارمنستان, کنسرت ایروان, رویدادهای ارمنستان, اخبار مهاجرت ارمنستان, ارمنستان اتحادیه اروپا',
  alternates: { canonical: 'https://caspian.am/blog/armenia-festivals-events-news' },
  openGraph: {
    title: 'فستیوال‌ها، کنسرت‌ها و اخبار مهاجرتی ارمنستان',
    description: 'تقویم کامل فستیوال‌های سالانه، کنسرت‌های پیش رو و اخبار روابط ارمنستان-اتحادیه اروپا',
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
            headline: 'فستیوال‌های سالانه ارمنستان، کنسرت‌های پیش رو و اخبار مهاجرتی',
            description: 'تقویم کامل فستیوال‌های سالانه ارمنستان، کنسرت‌ها و اخبار روابط ارمنستان-اتحادیه اروپا',
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

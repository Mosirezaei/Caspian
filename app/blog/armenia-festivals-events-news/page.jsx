import ArmeniaFestivalsEventsNews from '@/views/blog/ArmeniaFestivalsEventsNews';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

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
      <JsonLd data={articleSchema({
        headline: 'فستیوال‌های سالانه ارمنستان',
        description: 'تقویم مهمترین فستیوال‌های سالانه ارمنستان،  ',
        url: 'https://caspian.am/blog/armenia-festivals-events-news',
        datePublished: '2026-09-02',
        dateModified: '2026-09-02',
        about: { '@type': 'Country', name: 'Armenia' },
      })} />
      <ArmeniaFestivalsEventsNews />
    </>
  );
}

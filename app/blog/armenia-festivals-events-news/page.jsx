import ArmeniaFestivalsEventsNews from '@/views/blog/ArmeniaFestivalsEventsNews';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'فستیوال‌های ارمنستان ۲۰۲۶ | تاریخ، جشن‌ها و رویدادهای سالانه',
  description: 'کامل‌ترین تقویم فستیوال‌ها و جشن‌های ارمنستان؛ از کریسمس و ترندز و عید پاک تا وارداوار، روزهای شراب ایروان، جشنواره گاتا، آرنی، زردآلو و رویدادهای فرهنگی ارمنستان به تفکیک ماه.',
  keywords: 'فستیوال‌های ارمنستان, تقویم جشن‌های ارمنستان, وارداوار, ترندز, روزهای شراب ایروان, جشنواره آرنی, کنسرت ایروان,',
  alternates: { canonical: 'https://caspian.am/blog/armenia-festivals-events-news' },
  openGraph: {
    title: 'تقویم کامل فستیوال‌ها و جشن‌های ارمنستان | راهنمای ماه‌به‌ماه ۲۰۲۶',
    description: 'کامل‌ترین تقویم فستیوال‌ها و جشن‌های سالانه ارمنستان به تفکیک ماه، از کریسمس تا اربونی-ایروان.',
    url: 'https://caspian.am/blog/armenia-festivals-events-news',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'تقویم کامل فستیوال‌ها و جشن‌های سالانه ارمنستان',
        description: 'تقویم ماه‌به‌ماه فستیوال‌های سالانه ارمنستان — از کریسمس و ترندز تا وارداوار، جشنواره شراب آرنی و اربونی-ایروان.',
        url: 'https://caspian.am/blog/armenia-festivals-events-news',
        datePublished: '2026-09-02',
        dateModified: '2026-09-07',
        about: { '@type': 'Country', name: 'Armenia' },
      })} />
      <ArmeniaFestivalsEventsNews />
    </>
  );
}

import ArmeniaFestivalsEventsNews from '@/views/blog/ArmeniaFestivalsEventsNews';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'فستیوال\u200cهای ارمنستان ۲۰۲۶ | تاریخ، جشن\u200cها و رویدادهای سالانه',
  description: 'کامل\u200cترین تقویم فستیوال\u200cها و جشن\u200cهای ارمنستان؛ از کریسمس و ترندز و عید پاک تا وارداوار، روزهای شراب ایروان، جشنواره گاتا، آرنی، زردآلو و رویدادهای فرهنگی ارمنستان به تفکیک ماه.',
  keywords: 'فستیوال\u200cهای ارمنستان, تقویم جشن\u200cهای ارمنستان, وارداوار, ترندز, روزهای شراب ایروان, جشنواره آرنی, کنسرت ایروان,',
  alternates: { canonical: 'https://caspian.am/blog/armenia-festivals-events-news' },
  openGraph: {
    title: 'تقویم کامل فستیوال\u200cها و جشن\u200cهای ارمنستان | راهنمای ماه\u200cبه\u200cماه ۲۰۲۶',
    description: 'کامل\u200cترین تقویم فستیوال\u200cها و جشن\u200cهای سالانه ارمنستان به تفکیک ماه، از کریسمس تا اربونی-ایروان.',
    url: 'https://caspian.am/blog/armenia-festivals-events-news',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'تقویم کامل فستیوال\u200cها و جشن\u200cهای سالانه ارمنستان',
        description: 'تقویم ماه\u200cبه\u200cماه فستیوال\u200cهای سالانه ارمنستان — از کریسمس و ترندز تا وارداوار، جشنواره شراب آرنی و اربونی-ایروان.',
        url: 'https://caspian.am/blog/armenia-festivals-events-news',
        datePublished: '2026-09-02',
        dateModified: '2026-09-07',
        about: { '@type': 'Country', name: 'Armenia' },
      })} />
      <ArmeniaFestivalsEventsNews />
    </>
  );
}

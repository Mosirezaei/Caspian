import SimcardInternetYerevan from '@/views/blog/SimcardInternetYerevan';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'سیم‌کارت، اینترنت و اپلیکیشن‌های ضروری ایروان | گروه کاسپین',
  alternates: { canonical: 'https://caspian.am/blog/simcard-internet-apps-yerevan' },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'سیم‌کارت، اینترنت و اپلیکیشن‌های ضروری ایروان',
        description: 'سیم‌کارت، اینترنت و اپلیکیشن‌های ضروری ایروان',
        url: 'https://caspian.am/blog/simcard-internet-apps-yerevan',
        datePublished: '2026-09-02',
        dateModified: '2026-09-02',
      })} />
      <SimcardInternetYerevan />
    </>
  );
}

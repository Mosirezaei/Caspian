import ApartmentRentalGuide from '@/views/blog/ApartmentRentalGuide';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'راهنمای اجاره آپارتمان در ایروان | گروه کاسپین',
  description: 'بازه قیمت اجاره، تفاوت کوتاه‌مدت و بلندمدت، هزینه‌های جانبی و نکات کلیدی برای ایرانیان.',
  alternates: { canonical: 'https://caspian.am/blog/apartment-rental-yerevan-guide' },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'راهنمای اجاره آپارتمان در ایروان',
        description: 'بازه قیمت اجاره، تفاوت کوتاه‌مدت و بلندمدت، هزینه‌های جانبی و نکات کلیدی برای ایرانیان.',
        url: 'https://caspian.am/blog/apartment-rental-yerevan-guide',
        datePublished: '2026-09-02',
        dateModified: '2026-09-02',
      })} />
      <ApartmentRentalGuide />
    </>
  );
}

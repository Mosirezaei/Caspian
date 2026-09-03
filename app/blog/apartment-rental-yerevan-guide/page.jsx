import ApartmentRentalGuide from '@/views/blog/ApartmentRentalGuide';

export const metadata = {
  title: 'راهنمای اجاره آپارتمان در ایروان | گروه کاسپین',
  description: 'بازه قیمت اجاره، تفاوت کوتاه‌مدت و بلندمدت، هزینه‌های جانبی و نکات کلیدی برای ایرانیان.',
  alternates: { canonical: 'https://caspian.am/blog/apartment-rental-yerevan-guide' },
};

export default function Page() {
  return <ApartmentRentalGuide />;
}

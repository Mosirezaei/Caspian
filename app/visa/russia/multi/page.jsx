import UnderConstruction from '@/views/service/UnderConstruction';

export const metadata = {
  title: 'ویزای مولتی روسیه',
  description: 'راهنمای اخذ ویزای مولتی\u200cاینتری روسیه از ایروان. این صفحه در حال به\u200cروزرسانی است.',
  alternates: { canonical: 'https://caspian.am/visa/russia/multi' },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <UnderConstruction
      titleFa="ویزای مولتی روسیه"
      titleEn="Russia Multi-Entry Visa"
      titleRu="Многократная виза в Россию"
      heroImage="https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?w=1200&q=80"
      serviceType="visa-russia"
    />
  );
}

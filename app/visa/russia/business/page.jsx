import UnderConstruction from '@/views/service/UnderConstruction';

export const metadata = {
  title: 'ویزای تجاری روسیه',
  description: 'راهنمای اخذ ویزای تجاری روسیه از ایروان. این صفحه در حال به\u200cروزرسانی است.',
  alternates: { canonical: 'https://caspian.am/visa/russia/business' },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <UnderConstruction
      titleFa="ویزای تجاری روسیه"
      titleEn="Russia Business Visa"
      titleRu="Бизнес-виза в Россию"
      heroImage="https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1200&q=80"
      serviceType="visa-russia"
    />
  );
}

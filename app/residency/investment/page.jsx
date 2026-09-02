import UnderConstruction from '@/views/service/UnderConstruction';

export const metadata = {
  title: 'اقامت ارمنستان از طریق سرمایه\u200cگذاری',
  description: 'راهنمای اخذ اقامت ارمنستان از طریق سرمایه\u200cگذاری. این صفحه در حال به\u200cروزرسانی است.',
  alternates: { canonical: 'https://caspian.am/residency/investment' },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <UnderConstruction
      titleFa="اقامت ارمنستان از طریق سرمایه\u200cگذاری"
      titleEn="Armenia Residency via Investment"
      titleRu="ВНЖ Армении через инвестиции"
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"
      serviceType="residency"
    />
  );
}

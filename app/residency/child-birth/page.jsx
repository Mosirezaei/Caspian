import UnderConstruction from '@/views/service/UnderConstruction';

export const metadata = {
  title: 'اقامت ارمنستان از طریق تولد فرزند',
  description: 'راهنمای اخذ اقامت ارمنستان از طریق تولد فرزند در این کشور. این صفحه در حال به\u200cروزرسانی است.',
  alternates: { canonical: 'https://caspian.am/residency/child-birth' },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <UnderConstruction
      titleFa="اقامت ارمنستان از طریق تولد فرزند"
      titleEn="Armenia Residency via Child Birth"
      titleRu="ВНЖ Армении через рождение ребёнка"
      heroImage="https://images.unsplash.com/photo-1519689680058-324335c77eba?w=1200&q=80"
      serviceType="residency"
    />
  );
}

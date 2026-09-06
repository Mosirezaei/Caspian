import MedicalUniversitiesArmenia from '@/views/blog/MedicalUniversitiesArmenia';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'دانشگاه‌های پزشکی ارمنستان: شرایط پذیرش و شهریه | گروه کاسپین',
  description: 'شرایط پذیرش، شهریه و رتبه‌بندی دانشگاه‌های پزشکی ارمنستان (YSMU، AUA و EUA) برای متقاضیان ایرانی؛ هزینه‌ی تحصیل پزشکی، دندانپزشکی و داروسازی به زبان انگلیسی.',
  alternates: { canonical: 'https://caspian.am/blog/medical-universities-armenia' },
  openGraph: {
    title: 'شرایط پذیرش، شهریه و رتبه‌بندی دانشگاه‌های پزشکی ارمنستان (Y',
    description: 'شرایط پذیرش، شهریه و رتبه‌بندی دانشگاه‌های پزشکی ارمنستان (YSMU، AUA و EUA) برای متقاضیان ایرانی؛ هزینه‌ی تحصیل پزشکی، دندانپزشکی و داروسازی به زبان انگلیسی.',
    url: 'https://caspian.am/blog/medical-universities-armenia',
    images: [{ url: 'https://images.unsplash.com/photo-1697980825665-10b25a70bd1d?w=1200&q=80', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'دانشگاه‌های پزشکی ارمنستان: شرایط پذیرش و شهریه',
        description: 'دانشگاه‌های پزشکی ارمنستان: شرایط پذیرش و شهریه',
        url: 'https://caspian.am/blog/medical-universities-armenia',
        datePublished: '2026-09-02',
        dateModified: '2026-09-02',
        image: 'https://images.unsplash.com/photo-1697980825665-10b25a70bd1d?w=1200&q=80',
      })} />
      <MedicalUniversitiesArmenia />
    </>
  );
}

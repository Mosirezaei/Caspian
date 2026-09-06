import MedicalUniversitiesArmenia from '@/views/blog/MedicalUniversitiesArmenia';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'دانشگاه‌های پزشکی ارمنستان: شرایط پذیرش و شهریه | گروه کاسپین',
  alternates: { canonical: 'https://caspian.am/blog/medical-universities-armenia' },
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
      })} />
      <MedicalUniversitiesArmenia />
    </>
  );
}

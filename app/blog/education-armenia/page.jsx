import EducationArmenia from '@/views/blog/EducationArmenia';

export const metadata = {
  title: 'تحصیل در ارمنستان: مدارس ایرانی، دانشگاه‌ها و هزینه‌ها | گروه کاسپین',
  description: 'راهنمای کامل تحصیل در ارمنستان برای ایرانیان: مدرسه‌ی شهید فهمیده ایروان، دانشگاه آمریکایی ارمنستان، شهریه و هزینه‌ی زندگی دانشجویی.',
  keywords: 'تحصیل ارمنستان, مدرسه ایرانی ایروان, دانشگاه ارمنستان, شهریه دانشگاه ایروان, اقامت تحصیلی ارمنستان',
  alternates: { canonical: 'https://caspian.am/blog/education-armenia' },
  openGraph: {
    title: 'تحصیل در ارمنستان: مدارس ایرانی، دانشگاه‌ها و هزینه‌ها',
    description: 'شهریه ۸۰۰ تا ۹,۰۰۰ دلار/سال — مدارس ایرانی + دانشگاه‌های بین‌المللی',
    url: 'https://caspian.am/blog/education-armenia',
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'تحصیل در ارمنستان: مدارس ایرانی، دانشگاه‌ها و هزینه‌ها',
            author: { '@type': 'Organization', name: 'Caspian Business Group' },
            publisher: { '@type': 'Organization', name: 'Caspian Business Group', url: 'https://caspian.am' },
            datePublished: '2026-09-03',
            url: 'https://caspian.am/blog/education-armenia',
            inLanguage: 'fa',
          }),
        }}
      />
      <EducationArmenia />
    </>
  );
}

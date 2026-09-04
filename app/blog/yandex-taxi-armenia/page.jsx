import YandexTaxiArmenia from '@/views/blog/YandexTaxiArmenia';

export const metadata = {
  title: 'کار با یاندکس تاکسی در ارمنستان | شرایط، درآمد و ثبت‌نام | گروه کاسپین',
  description: 'راهنمای جامع کار با یاندکس تاکسی (Yandex Go) در ارمنستان: مدارک لازم، شرایط ثبت‌نام، درآمد روزانه ۱۵ تا ۳۰ هزار درام، کمیسیون و الزامات قانونی برای مهاجران ایرانی.',
  keywords: 'یاندکس تاکسی ارمنستان, یاندکس گو ایروان, کار با یاندکس ارمنستان, درآمد تاکسی ایروان, ثبت نام یاندکس ارمنستان',
  alternates: { canonical: 'https://caspian.am/blog/yandex-taxi-armenia' },
  openGraph: {
    title: 'کار با یاندکس تاکسی در ارمنستان | شرایط و درآمد',
    description: 'درآمد ۱۵–۳۰k درام روزانه، کمیسیون ۱۵–۲۵٪ — راهنمای کامل برای ایرانیان',
    url: 'https://caspian.am/blog/yandex-taxi-armenia',
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
            headline: 'کار با یاندکس تاکسی در ارمنستان: شرایط، درآمد و ثبت‌نام',
            author: { '@type': 'Organization', name: 'Caspian Business Group' },
            publisher: { '@type': 'Organization', name: 'Caspian Business Group', url: 'https://caspian.am' },
            datePublished: '2026-09-04',
            url: 'https://caspian.am/blog/yandex-taxi-armenia',
            inLanguage: 'fa',
          }),
        }}
      />
      <YandexTaxiArmenia />
    </>
  );
}

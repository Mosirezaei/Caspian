import YandexDeliveryArmenia from '@/views/blog/YandexDeliveryArmenia';

export const metadata = {
  title: 'کار با یاندکس دلیوری در ارمنستان | پیک، درآمد و ثبت‌نام | گروه کاسپین',
  description: 'راهنمای کامل کار با یاندکس دلیوری و یاندکس ایتس در ارمنستان: پیک موتوری، دوچرخه یا خودرو — درآمد ۸ تا ۱۵ هزار درام روزانه، مدارک لازم و الزامات قانونی.',
  keywords: 'یاندکس دلیوری ارمنستان, پیک موتوری ایروان, یاندکس ایتس ارمنستان, کار پیک ارمنستان, درآمد دلیوری ایروان',
  alternates: { canonical: 'https://caspian.am/blog/yandex-delivery-armenia' },
  openGraph: {
    title: 'کار با یاندکس دلیوری در ارمنستان | پیک موتوری و درآمد',
    description: 'درآمد ۸–۱۵k درام روزانه، بدون نیاز به تحصیلات — راهنمای پیک یاندکس برای ایرانیان',
    url: 'https://caspian.am/blog/yandex-delivery-armenia',
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
            headline: 'کار با یاندکس دلیوری در ارمنستان: پیک موتوری، درآمد و ثبت‌نام',
            author: { '@type': 'Organization', name: 'Caspian Business Group' },
            publisher: { '@type': 'Organization', name: 'Caspian Business Group', url: 'https://caspian.am' },
            datePublished: '2026-09-04',
            url: 'https://caspian.am/blog/yandex-delivery-armenia',
            inLanguage: 'fa',
          }),
        }}
      />
      <YandexDeliveryArmenia />
    </>
  );
}

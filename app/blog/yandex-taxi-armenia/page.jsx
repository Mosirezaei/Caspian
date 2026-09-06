import YandexTaxiArmenia from '@/views/blog/YandexTaxiArmenia';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

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
      <JsonLd data={articleSchema({
        headline: 'کار با یاندکس تاکسی در ارمنستان: شرایط، درآمد و ثبت‌نام',
        description: 'راهنمای جامع کار با یاندکس تاکسی (Yandex Go) در ارمنستان: مدارک لازم، شرایط ثبت‌نام، درآمد روزانه ۱۵ تا ۳۰ هزار درام، کمیسیون و الزامات قانونی برای مهاجران ایرانی.',
        url: 'https://caspian.am/blog/yandex-taxi-armenia',
        datePublished: '2026-09-04',
        dateModified: '2026-09-04',
      })} />
      <YandexTaxiArmenia />
    </>
  );
}

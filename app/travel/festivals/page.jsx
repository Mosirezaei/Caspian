import Festivals from '@/views/travel/Festivals';

export const metadata = {
  title: 'فستیوال‌ها و رویدادهای ایروان ۲۰۲۶',
  description: 'رویدادهای سالانه و برنامه ۳ ماه آینده ایروان. تور ویژه فستیوال.',
  alternates: { canonical: 'https://caspian.am/travel/festivals' },
  openGraph: {
    title: 'فستیوال‌ها و رویدادهای ایروان ۲۰۲۶',
    description: 'رویدادهای سالانه و برنامه ۳ ماه آینده ایروان. تور ویژه فستیوال.',
    url: 'https://caspian.am/travel/festivals',
  },
};

export default function Page() {
  return <Festivals />;
}

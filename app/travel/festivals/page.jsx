import Festivals from '@/views/travel/Festivals';

export const metadata = {
  title: 'فستیوال‌ها و رویدادهای ایروان ۲۰۲۶',
  description: 'رویدادهای ایروان ۲۰۲۶: کنسرت ابی، Disco Legends Fest، هفته طراحی، فستیوال انار آرنی. تور ویژه فستیوال با هتل و ترانسفر از کاسپین.',
  alternates: { canonical: 'https://caspian.am/travel/festivals' },
  openGraph: {
    title: 'فستیوال‌ها و رویدادهای ایروان ۲۰۲۶ | کنسرت، جشنواره و تور ویژه',
    description: 'رویدادهای ایروان ۲۰۲۶: کنسرت ابی، Disco Legends Fest، هفته طراحی، فستیوال انار آرنی. تور ویژه فستیوال با هتل و ترانسفر از کاسپین.',
    url: 'https://caspian.am/travel/festivals',
  },
};

export default function Page() {
  return <Festivals />;
}

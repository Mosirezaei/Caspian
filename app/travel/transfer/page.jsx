import Transfer from '@/views/service/Transfer';

export const metadata = {
  title: 'ترانسفر فرودگاهی ایروان',
  description: 'ترانسفر از فرودگاه زوارتنوتس با رانندگان فارسی‌زبان. ۲۴ ساعته.',
  alternates: { canonical: 'https://caspian.am/travel/transfer' },
  openGraph: {
    title: 'ترانسفر فرودگاهی ایروان',
    description: 'ترانسفر از فرودگاه زوارتنوتس با رانندگان فارسی‌زبان. ۲۴ ساعته.',
    url: 'https://caspian.am/travel/transfer',
  },
};

export default function Page() {
  return <Transfer />;
}

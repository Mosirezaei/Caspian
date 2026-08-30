import Transfer from '@/views/service/Transfer';

export const metadata = {
  title: 'ترانسفر فرودگاهی ایروان | سرویس VIP ۲۴ ساعته',
  description: 'ترانسفر از فرودگاه زوارتنوتس ایروان (EVN) با رانندگان فارسی‌زبان. سواری، ون و مینی‌بوس. رزرو واتساپ، سرویس ۲۴ ساعته.',
  keywords: 'ترانسفر فرودگاه ایروان, سرویس فرودگاه زوارتنوتس, تاکسی فرودگاه ایروان',
  alternates: { canonical: 'https://caspian.am/travel/transfer' },
  openGraph: {
    title: 'ترانسفر فرودگاهی ایروان | سرویس VIP از زوارتنوتس (EVN) ۲۴ ساعته',
    description: 'ترانسفر از فرودگاه زوارتنوتس ایروان (EVN) با رانندگان فارسی‌زبان. سواری، ون و مینی‌بوس. رزرو واتساپ، سرویس ۲۴ ساعته.',
    url: 'https://caspian.am/travel/transfer',
  },
};

export default function Page() {
  return <Transfer />;
}

import EmbassyAppointment from '@/views/service/EmbassyAppointment';

export const metadata = {
  title: 'وقت سفارت آمریکا از ارمنستان | ESTA و ویزای توریستی B1/B2',
  description: 'هماهنگی وقت سفارت آمریکا در ایروان برای ویزای B1/B2 و ESTA. پیگیری مدارک و آمادگی برای مصاحبه. کاسپین گروپ ارمنستان.',
  alternates: { canonical: 'https://caspian.am/visa/embassy-usa' },
  openGraph: {
    title: 'وقت سفارت آمریکا از ارمنستان | ESTA و ویزای توریستی B1/B2',
    description: 'هماهنگی وقت سفارت آمریکا در ایروان برای ویزای B1/B2 و ESTA. پیگیری مدارک و آمادگی برای مصاحبه. کاسپین گروپ ارمنستان.',
    url: 'https://caspian.am/visa/embassy-usa',
  },
};

export default function Page() {
  return <EmbassyAppointment />;
}

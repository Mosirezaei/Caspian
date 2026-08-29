import EmbassyAppointment from '@/views/service/EmbassyAppointment';

export const metadata = {
  title: 'وقت سفارت آمریکا',
  description: 'هماهنگی وقت سفارت آمریکا از ایروان.',
  alternates: { canonical: 'https://caspian.am/visa/embassy-usa' },
  openGraph: {
    title: 'وقت سفارت آمریکا',
    description: 'هماهنگی وقت سفارت آمریکا از ایروان.',
    url: 'https://caspian.am/visa/embassy-usa',
  },
};

export default function Page() {
  return <EmbassyAppointment />;
}

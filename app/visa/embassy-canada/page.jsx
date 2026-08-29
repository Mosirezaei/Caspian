import EmbassyAppointment from '@/views/service/EmbassyAppointment';

export const metadata = {
  title: 'وقت سفارت کانادا',
  description: 'هماهنگی وقت سفارت کانادا از ایروان.',
  alternates: { canonical: 'https://caspian.am/visa/embassy-canada' },
  openGraph: {
    title: 'وقت سفارت کانادا',
    description: 'هماهنگی وقت سفارت کانادا از ایروان.',
    url: 'https://caspian.am/visa/embassy-canada',
  },
};

export default function Page() {
  return <EmbassyAppointment />;
}

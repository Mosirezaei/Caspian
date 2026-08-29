import EmbassyAppointment from '@/views/service/EmbassyAppointment';

export const metadata = {
  title: 'وقت سفارت کانادا از ارمنستان | ویزای توریستی و تحصیلی کانادا',
  description: 'هماهنگی وقت سفارت کانادا در ایروان. ویزای توریستی، تحصیلی و کاری کانادا. مدارک و پیگیری کامل با کاسپین گروپ.',
  alternates: { canonical: 'https://caspian.am/visa/embassy-canada' },
  openGraph: {
    title: 'وقت سفارت کانادا از ارمنستان | ویزای توریستی و تحصیلی کانادا',
    description: 'هماهنگی وقت سفارت کانادا در ایروان. ویزای توریستی، تحصیلی و کاری کانادا. مدارک و پیگیری کامل با کاسپین گروپ.',
    url: 'https://caspian.am/visa/embassy-canada',
  },
};

export default function Page() {
  return <EmbassyAppointment />;
}

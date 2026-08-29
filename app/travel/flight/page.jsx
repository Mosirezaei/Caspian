import Flight from '@/views/travel/Flight';

export const metadata = {
  title: 'رزرو پرواز از ایروان',
  description: 'رزرو بلیط هواپیما از ایروان به تهران، مسکو، دوبی. پشتیبانی فارسی.',
  alternates: { canonical: 'https://caspian.am/travel/flight' },
  openGraph: {
    title: 'رزرو پرواز از ایروان',
    description: 'رزرو بلیط هواپیما از ایروان به تهران، مسکو، دوبی. پشتیبانی فارسی.',
    url: 'https://caspian.am/travel/flight',
  },
};

export default function Page() {
  return <Flight />;
}

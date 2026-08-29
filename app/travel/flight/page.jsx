import Flight from '@/views/travel/Flight';

export const metadata = {
  title: 'رزرو پرواز از ایروان | بلیط هواپیما به تهران، مسکو، دوبی و اروپا',
  description: 'رزرو بلیط هواپیما از فرودگاه زوارتنوتس ایروان (EVN) به تهران، مشهد، مسکو، دوبی و اروپا. پشتیبانی فارسی، بهترین قیمت.',
  keywords: 'رزرو پرواز ایروان, بلیط ایروان تهران, پرواز ایروان مسکو',
  alternates: { canonical: 'https://caspian.am/travel/flight' },
  openGraph: {
    title: 'رزرو پرواز از ایروان | بلیط هواپیما به تهران، مسکو، دوبی و اروپا',
    description: 'رزرو بلیط هواپیما از فرودگاه زوارتنوتس ایروان (EVN) به تهران، مشهد، مسکو، دوبی و اروپا. پشتیبانی فارسی، بهترین قیمت.',
    url: 'https://caspian.am/travel/flight',
  },
};

export default function Page() {
  return <Flight />;
}

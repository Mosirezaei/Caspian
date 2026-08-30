import Contact from '@/views/Contact';

export const metadata = {
  title: 'تماس با کاسپین گروپ | واتساپ و تلفن، ایروان',
  description: 'ارتباط با کاسپین گروپ ارمنستان از طریق واتساپ (+37433149327)، تلگرام یا تماس مستقیم. دفتر در ایروان، پاسخگویی فارسی ۲۴ ساعته.',
  alternates: { canonical: 'https://caspian.am/contact' },
  openGraph: {
    title: 'تماس با کاسپین گروپ ارمنستان | واتساپ، تلگرام و تلفن — ایروان',
    description: 'ارتباط با کاسپین گروپ ارمنستان از طریق واتساپ (+37433149327)، تلگرام یا تماس مستقیم. دفتر در ایروان، پاسخگویی فارسی ۲۴ ساعته.',
    url: 'https://caspian.am/contact',
  },
};

export default function Page() {
  return <Contact />;
}

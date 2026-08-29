import Contact from '@/views/Contact';

export const metadata = {
  title: 'تماس با کاسپین گروپ',
  description: 'راه‌های ارتباطی با کاسپین گروپ ارمنستان — واتساپ، تلگرام، تلفن.',
  alternates: { canonical: 'https://caspian.am/contact' },
  openGraph: {
    title: 'تماس با کاسپین گروپ',
    description: 'راه‌های ارتباطی با کاسپین گروپ ارمنستان — واتساپ، تلگرام، تلفن.',
    url: 'https://caspian.am/contact',
  },
};

export default function Page() {
  return <Contact />;
}

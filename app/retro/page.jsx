import RetroPage from '@/views/retro';

export const metadata = {
  title: 'فستیوال Disco Legends در ایروان | کاسپین گروپ',
  description: 'فستیوال بزرگ Disco Legends با حضور Haddaway, Boney M, Mr. President و Dr. Alban در ایروان ارمنستان. رزرو بلیط از طریق کاسپین گروپ.',
  alternates: { canonical: 'https://caspian.am/retro' },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <RetroPage />;
}

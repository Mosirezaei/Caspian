import Exchange from '@/views/service/Exchange';

export const metadata = {
  title: 'صرافی و رمزارز در ایروان',
  description: 'تبدیل ریال، دلار، USDT در ایروان. انتقال وجه بین‌المللی.',
  alternates: { canonical: 'https://caspian.am/travel/exchange' },
  openGraph: {
    title: 'صرافی و رمزارز در ایروان',
    description: 'تبدیل ریال، دلار، USDT در ایروان. انتقال وجه بین‌المللی.',
    url: 'https://caspian.am/travel/exchange',
  },
};

export default function Page() {
  return <Exchange />;
}

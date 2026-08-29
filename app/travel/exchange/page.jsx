import Exchange from '@/views/service/Exchange';

export const metadata = {
  title: 'صرافی و رمزارز در ایروان | تبدیل ریال، دلار، یورو و USDT',
  description: 'خدمات صرافی در ایروان: خرید و فروش دلار، یورو، USDT. انتقال وجه بین‌المللی. تبدیل ریال ایران. بهترین نرخ روز.',
  keywords: 'صرافی ایروان, تبدیل ریال به درام, خرید USDT ایروان, انتقال پول به ارمنستان',
  alternates: { canonical: 'https://caspian.am/travel/exchange' },
  openGraph: {
    title: 'صرافی و رمزارز در ایروان | تبدیل ریال، دلار، یورو و USDT',
    description: 'خدمات صرافی در ایروان: خرید و فروش دلار، یورو، USDT. انتقال وجه بین‌المللی. تبدیل ریال ایران. بهترین نرخ روز.',
    url: 'https://caspian.am/travel/exchange',
  },
};

export default function Page() {
  return <Exchange />;
}

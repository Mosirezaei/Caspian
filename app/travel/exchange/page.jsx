import Exchange from '@/views/travel/Exchange';

export const metadata = {
  title: 'صرافی ارزی ایروان | تبدیل ریال، دلار، یورو و تتر | گروه کاسپین',
  description: 'خدمات کامل صرافی در ایروان: تبدیل ریال به درام و دلار، خرید و فروش یورو و روبل، تبدیل تتر (USDT)، و حواله‌های تجاری، دانشجویی و مهاجرتی با نرخ شفاف.',
  keywords: 'صرافی ایروان, تبدیل ارز ارمنستان, خرید درام, تبدیل ریال به دلار, خرید تتر ایروان, حواله ارمنستان, صرافی کاسپین',
  alternates: { canonical: 'https://caspian.am/travel/exchange' },
  openGraph: {
    title: 'صرافی ارزی ایروان | گروه کاسپین',
    description: 'تبدیل ریال، دلار، یورو، روبل و تتر با نرخ شفاف و رقابتی در ایروان.',
    url: 'https://caspian.am/travel/exchange',
    images: [{ url: 'https://images.unsplash.com/photo-1629339938591-ec5e73815e47?w=1200&q=80', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'صرافی ارزی کاسپین',
            description: 'خدمات تبدیل ارز، حواله و رمزارز برای ایرانیان مقیم یا در سفر به ارمنستان',
            provider: {
              '@type': 'Organization',
              name: 'Caspian Business Group',
              url: 'https://caspian.am',
              telephone: '+37433149327',
            },
            areaServed: {
              '@type': 'City',
              name: 'Yerevan',
              containedInPlace: { '@type': 'Country', name: 'Armenia' },
            },
          }),
        }}
      />
      <Exchange />
    </>
  );
}

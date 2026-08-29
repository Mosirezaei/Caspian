import './globals.css';
import Providers from './providers';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  metadataBase: new URL('https://caspian.am'),
  title: {
    default: 'کاسپین گروپ ارمنستان | رزرو هتل، آپارتمان، اقامت ایروان',
    template: '%s | کاسپین گروپ',
  },
  description: 'کاسپین گروپ ارمنستان؛ رزرو هتل و آپارتمان در ایروان، اقامت ارمنستان، ویزای روسیه و خدمات مهاجرتی با پشتیبانی فارسی.',
  keywords: 'رزرو هتل ایروان, اجاره آپارتمان ایروان, اقامت ارمنستان, ویزای روسیه',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  alternates: {
    canonical: 'https://caspian.am',
    languages: { fa: 'https://caspian.am', en: 'https://caspian.am', ru: 'https://caspian.am' },
  },
  openGraph: {
    type: 'website',
    siteName: 'کاسپین گروپ ارمنستان',
    images: [{ url: '/images/GoogleSearch.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/images/GoogleSearch.png'] },
  other: { 'facebook-domain-verification': '8gn1bxsez3ghgcl1or608v60ti5dx5' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;600;700;900&display=swap" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': ['TravelAgency', 'LocalBusiness'],
          name: 'Caspian Business Group',
          alternateName: ['کاسپین گروه', 'کاسپین گروپ ارمنستان'],
          url: 'https://caspian.am',
          logo: 'https://caspian.am/images/logo.webp',
          telephone: '+37433149327',
          address: { '@type': 'PostalAddress', streetAddress: 'No 49, Komitas', addressLocality: 'Yerevan', addressCountry: 'AM' },
          sameAs: ['https://t.me/caspianbusinessgroup', 'https://www.instagram.com/caspian.am'],
        })}} />
        <style>{`html,body{background-color:#0a0a0a;color:#fafafa;}#__next{min-height:100vh;background-color:#0a0a0a;}`}</style>
      </head>
      <body style={{ backgroundColor: '#0a0a0a', margin: 0, overflowX: 'hidden', maxWidth: '100vw' }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

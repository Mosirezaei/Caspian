import './globals.css';
import { Vazirmatn } from 'next/font/google';
import Providers from './providers';

const vazirmatn = Vazirmatn({ subsets: ['arabic', 'latin'], weight: ['400', '600', '700', '900'], variable: '--font-vazir', display: 'swap' });

// Self-hosted via next/font: removes the render-blocking Google Fonts
// <link> round trip (HTML -> fonts.googleapis.com CSS -> fonts.gstatic.com woff2)
// that was adding ~500-1000ms to the critical path.


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
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': ['TravelAgency', 'LocalBusiness', 'ProfessionalService'],
          name: 'Caspian Business Group',
          alternateName: ['کاسپین گروه', 'کاسپین گروپ ارمنستان', 'Caspian Group Armenia', 'Каспиан Групп'],
          description: 'Caspian Business Group is a licensed travel and immigration services company in Yerevan, Armenia, specializing in hotel and apartment booking, Armenia residency, company registration, Russia visa, and student visa services for Persian-speaking (Iranian) clients.',
          url: 'https://caspian.am',
          logo: 'https://caspian.am/images/logo.webp',
          image: 'https://caspian.am/images/GoogleSearch.png',
          telephone: '+37433149327',
          email: 'info@caspian.am',
          foundingDate: '2010',
          areaServed: ['Armenia', 'Iran', 'Russia'],
          knowsLanguage: ['fa', 'en', 'ru'],
          address: { '@type': 'PostalAddress', streetAddress: 'No 49, Komitas Avenue', addressLocality: 'Yerevan', addressCountry: 'AM', postalCode: '0051' },
          geo: { '@type': 'GeoCoordinates', latitude: 40.2012, longitude: 44.5123 },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Caspian Group Services',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hotel Booking in Yerevan', url: 'https://caspian.am/travel/hotel' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Furnished Apartment Rental Yerevan', url: 'https://caspian.am/travel/apartment' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Armenia Residency', url: 'https://caspian.am/residency/armenia' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Company Registration Armenia', url: 'https://caspian.am/residency/business' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Russia Tourist Visa from Yerevan', url: 'https://caspian.am/visa/russia' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Armenia Student Visa', url: 'https://caspian.am/student-visa/armenia' } },
            ],
          },
          contactPoint: { '@type': 'ContactPoint', telephone: '+37433149327', contactType: 'customer service', availableLanguage: ['Persian', 'English', 'Russian'] },
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

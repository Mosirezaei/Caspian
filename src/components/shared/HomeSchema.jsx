import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function HomeSchema() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "کاسپین گروه | Caspian Group",
    "alternateName": "Caspian Business Group",
    "url": "https://caspian.am",
    "logo": "https://caspian.am/images/logo.webp",
    "image": "https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?w=1200&q=80",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "49 Komitas Ave",
      "addressLocality": "Yerevan",
      "addressRegion": "Yerevan",
      "postalCode": "0051",
      "addressCountry": "AM"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.2012,
      "longitude": 44.5123
    },
    "telephone": "+37433149327",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.instagram.com/caspian.am"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}

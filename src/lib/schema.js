import { WHATSAPP_BOOKING } from './contact';

const SITE_URL = 'https://caspian.am';
const LOGO_URL = 'https://caspian.am/images/logo.webp';
const DEFAULT_OG_IMAGE = 'https://caspian.am/images/GoogleSearch.png';

const ORG = {
  '@type': 'Organization',
  name: 'Caspian Business Group',
  url: SITE_URL,
  logo: LOGO_URL,
};

/**
 * Organization / LocalBusiness schema for the homepage.
 * Mirrors the data already published in app/layout.jsx so both stay
 * in sync if the address/phone/social links ever change.
 */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['TravelAgency', 'LocalBusiness', 'ProfessionalService'],
    name: 'Caspian Business Group',
    alternateName: ['کاسپین گروه', 'کاسپین گروپ ارمنستان', 'Caspian Group Armenia', 'Каспиан Групп'],
    description: 'Caspian Business Group is a licensed travel and immigration services company in Yerevan, Armenia, specializing in hotel and apartment booking, Armenia residency, company registration, Russia visa, and student visa services for Persian-speaking (Iranian) clients.',
    url: SITE_URL,
    logo: LOGO_URL,
    image: DEFAULT_OG_IMAGE,
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
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hotel Booking in Yerevan', url: `${SITE_URL}/travel/hotel` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Furnished Apartment Rental Yerevan', url: `${SITE_URL}/travel/apartment` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Armenia Student Residency', url: `${SITE_URL}/residency/student` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Company Registration Armenia', url: `${SITE_URL}/residency/business` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Russia Tourist Visa from Yerevan', url: `${SITE_URL}/visa/russia` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Russia Student Visa', url: `${SITE_URL}/student-visa/russia` } },
      ],
    },
    contactPoint: { '@type': 'ContactPoint', telephone: '+37433149327', contactType: 'customer service', availableLanguage: ['Persian', 'English', 'Russian'] },
    sameAs: ['https://t.me/caspianbusinessgroup', 'https://www.instagram.com/caspian.am'],
  };
}

/**
 * Article schema for blog posts.
 * `image` should be the post's real OG image if one is set in its
 * metadata; otherwise we fall back to the sitewide OG card rather than
 * inventing a picture that isn't actually on the page.
 */
export function articleSchema({ headline, description, url, datePublished, dateModified, image, about }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image: image || DEFAULT_OG_IMAGE,
    author: ORG,
    publisher: ORG,
    datePublished,
    dateModified: dateModified || datePublished,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    inLanguage: 'fa',
    ...(about ? { about } : {}),
  };
}

/**
 * Hotel booking page: this is a booking SERVICE across many independently
 * owned properties, not a single lodging business Caspian itself operates
 * -- so the top-level type stays `Service` (accurate) and each real,
 * named property we list on the page is nested as an Offer whose
 * itemOffered is a LodgingBusiness. This keeps the structured data
 * matching what's actually on the page instead of claiming Caspian IS a
 * hotel chain.
 */
export function hotelServiceSchema(hotels) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'رزرو هتل در ایروان ارمنستان',
    description: 'رزرو هتل‌های ۳، ۴ و ۵ ستاره در ایروان با واچر رسمی برای ویزا',
    provider: { '@type': 'Organization', name: 'Caspian Business Group', url: SITE_URL, telephone: `+${WHATSAPP_BOOKING}` },
    areaServed: { '@type': 'City', name: 'Yerevan' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'هتل‌های قابل رزرو در ایروان',
      itemListElement: hotels.map((h) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'LodgingBusiness',
          name: h.name,
          image: h.image,
          description: h.descEn || h.descFa,
          address: { '@type': 'PostalAddress', addressLocality: 'Yerevan', addressCountry: 'AM' },
          starRating: { '@type': 'Rating', ratingValue: String(h.stars) },
        },
      })),
    },
  };
}

/**
 * Apartment page: a request-based booking service, not a list of named
 * units (the page shows sample photos, not specific listed apartments),
 * so this stays a plain Service with the real neighborhoods it covers.
 */
export function apartmentServiceSchema(locations) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'اجاره آپارتمان مبله در ایروان',
    description: 'اجاره آپارتمان مبله روزانه و ماهانه در ایروان ارمنستان با پرداخت ریالی',
    provider: { '@type': 'Organization', name: 'Caspian Business Group', url: SITE_URL, telephone: '+37433149327' },
    areaServed: locations.map((name) => ({ '@type': 'Place', name, containedInPlace: { '@type': 'Country', name: 'Armenia' } })),
  };
}

/**
 * Tour package (TouristTrip) plus one Event per dated concert/festival
 * the tour is timed around. Only real, on-page dates/venues go in here.
 */
export function tourSchema({ name, description, itineraryPlaces, events }) {
  const touristTrip = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name,
    description,
    provider: { '@type': 'Organization', name: 'Caspian Business Group', url: SITE_URL, telephone: `+${WHATSAPP_BOOKING}` },
    touristType: ['Leisure', 'Cultural', 'Music Festival'],
    itinerary: itineraryPlaces.map((p) => ({ '@type': 'TouristAttraction', name: p.name, description: p.desc })),
    url: `${SITE_URL}/travel/tour`,
  };

  const eventSchemas = events.map((e) => ({
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: e.name,
    startDate: e.startDate,
    location: { '@type': 'Place', name: e.place, address: { '@type': 'PostalAddress', addressLocality: 'Yerevan', addressCountry: 'AM' } },
    organizer: { '@type': 'Organization', name: 'Caspian Business Group', url: SITE_URL },
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
  }));

  return [touristTrip, ...eventSchemas];
}

// tomsarkgh.am only publishes "day + Gregorian month name" (in Persian
// transliteration), never a year -- see src/lib/tomsarkghScraper.js's
// GREG_MONTH_FA. To get a real ISO startDate we infer the year from
// "today" in Yerevan time, rolling over to next year for dates that would
// otherwise land more than ~90 days in the past (handles events scraped
// in Nov/Dec for Jan/Feb of the following year).
const GREG_MONTH_FA = [
  'ژانویه', 'فوریه', 'مارس', 'آوریل', 'مه', 'ژوئن',
  'ژوئیه', 'اوت', 'سپتامبر', 'اکتبر', 'نوامبر', 'دسامبر',
];
const FA_DIGITS = '۰۱۲۳۴۵۶۷۸۹';

function faDigitsToEn(str) {
  return str.replace(/[۰-۹]/g, (d) => String(FA_DIGITS.indexOf(d)));
}

export function armenianEventDateToISO(dateFa, now = new Date()) {
  if (!dateFa) return null;
  const normalized = faDigitsToEn(dateFa).trim();
  const match = normalized.match(/(\d{1,2})\s+(\S+)/);
  if (!match) return null;
  const day = parseInt(match[1], 10);
  const monthIdx = GREG_MONTH_FA.indexOf(match[2]);
  if (monthIdx === -1 || !day) return null;

  const nowInYerevan = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Yerevan' }));
  let year = nowInYerevan.getFullYear();
  let candidate = new Date(Date.UTC(year, monthIdx, day));
  const diffDays = (candidate.getTime() - nowInYerevan.getTime()) / 86400000;
  if (diffDays < -90) {
    year += 1;
    candidate = new Date(Date.UTC(year, monthIdx, day));
  }
  return candidate.toISOString().slice(0, 10);
}

/**
 * Events listing page: one Event entry per event actually returned by
 * the tomsarkgh.am scrape for this request, wrapped in an ItemList.
 * Skips events whose date string doesn't parse rather than guessing one.
 */
export function eventsListSchema(events) {
  const withDates = events
    .map((e) => ({ ...e, _startDate: armenianEventDateToISO(e.date) }))
    .filter((e) => e._startDate);
  if (withDates.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: withDates.map((e, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Event',
        name: e.titleFa || e.titleEn || e.title,
        startDate: e._startDate,
        location: { '@type': 'Place', name: e.venueFa || e.venueEn || e.venue || 'Yerevan, Armenia' },
        image: e.image || undefined,
        offers: e.priceDisplay ? { '@type': 'Offer', description: e.priceDisplay } : undefined,
        eventStatus: 'https://schema.org/EventScheduled',
      },
    })),
  };
}

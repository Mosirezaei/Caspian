/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'flagcdn.com' },
      { protocol: 'https', hostname: 'caspian.am' },
    ],
  },

  experimental: {
    // Tree-shakes barrel-style imports from these packages so only the
    // icons/components actually used end up in the client bundle, instead of
    // the whole library. Directly targets the "Reduce unused JavaScript"
    // finding from PageSpeed Insights.
    optimizePackageImports: ['lucide-react', 'framer-motion', 'recharts', 'date-fns', 'lodash'],
  },

  async redirects() {
    return [
      { source: '/blog/living-cost-yerevan-1404', destination: '/blog/living-cost-yerevan', permanent: true },
      { source: '/services/visa-schengen',        destination: '/contact',            permanent: true },
      { source: '/services/visa-russia',          destination: '/visa/russia',         permanent: true },
      { source: '/services/residency',            destination: '/residency/business',  permanent: true },
      { source: '/services/hotel',               destination: '/travel/hotel',         permanent: true },
      { source: '/vip',                           destination: '/contact',             permanent: true },
      { source: '/services/embassy-appointment',  destination: '/contact',             permanent: true },
      { source: '/services/visa-south-america',   destination: '/contact',             permanent: true },
      { source: '/services/visa-romania',         destination: '/contact',             permanent: true },
      { source: '/services/student-visa',         destination: '/student-visa/russia', permanent: true },
      { source: '/services/company-registration', destination: '/residency/business',  permanent: true },
      { source: '/blog/eqamat-armenia-az-tarigh-sherktat', destination: '/blog/residency-via-company-registration', permanent: true },
      { source: '/blog/hazine-maliyat-bank-armenia',      destination: '/blog/company-costs-tax-banking-armenia',  permanent: true },
      { source: '/blog/sabt-sherktat-armenia-marahel',    destination: '/blog/company-registration-steps-armenia',  permanent: true },
      { source: '/blog/sakhtare-hoqooqi-sherktat-armenia', destination: '/blog/company-legal-structures-armenia',   permanent: true },
      { source: '/travel/flight', destination: '/travel/flight-bus', permanent: true },
      { source: '/travel/bus',    destination: '/travel/flight-bus', permanent: true },
      { source: '/travel/festivals', destination: '/events', permanent: true },
    ];
  },
};

export default nextConfig;

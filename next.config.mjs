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
  async redirects() {
    return [
      { source: '/services/visa-schengen',   destination: '/visa/schengen',      permanent: true },
      { source: '/services/visa-russia',     destination: '/visa/russia',         permanent: true },
      { source: '/services/residency',       destination: '/residency/armenia',   permanent: true },
      { source: '/services/hotel',           destination: '/travel/hotel',        permanent: true },
      { source: '/vip',                      destination: '/travel/vip',          permanent: true },
    ];
  },
};

export default nextConfig;

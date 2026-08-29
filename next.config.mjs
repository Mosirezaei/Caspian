/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'flagcdn.com' },
      { protocol: 'https', hostname: 'caspian.am' },
      { protocol: 'https', hostname: 'www.caspian.am' },
    ],
  },

  async redirects() {
    return [
      // ── www → non-www (canonical fix) ──────────────────────────────
      // هر URL با www رو به non-www redirect می‌کنه
      // این مشکل دو sitemap و duplicate canonical رو حل می‌کنه
      {
        source: '/(.*)',
        has: [{ type: 'host', value: 'www.caspian.am' }],
        destination: 'https://caspian.am/:path*',
        permanent: true,   // 301
      },

      // ── Legacy routes (old URLs that may be indexed) ────────────────
      { source: '/services/visa-schengen',         destination: '/visa/schengen',       permanent: true },
      { source: '/services/visa-russia',           destination: '/visa/russia',          permanent: true },
      { source: '/services/residency',             destination: '/residency/armenia',    permanent: true },
      { source: '/services/hotel',                 destination: '/travel/hotel',         permanent: true },
      { source: '/vip',                            destination: '/travel/vip',           permanent: true },
      { source: '/services/embassy-appointment',   destination: '/visa/embassy-usa',     permanent: true },
      { source: '/services/student-visa',          destination: '/student-visa',         permanent: true },
      { source: '/services/company-registration',  destination: '/residency/business',   permanent: true },
    ];
  },
};

export default nextConfig;

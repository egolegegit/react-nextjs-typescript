/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', 'unsplash.com'],
  },
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
    // localeDetection: false,
  },
  experimental: {
    outputStandalone: true,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
    domains: ["swiperjs.com", "localhost", "flowbite.s3.amazonaws.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;

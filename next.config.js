/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/dashboard",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;

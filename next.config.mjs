// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://192.168.0.106:3000",
    "http://127.0.0.1:3000",
  ],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;

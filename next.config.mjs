// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Must be at the root level, not inside `experimental`
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://192.168.0.106:3000",
    "http://127.0.0.1:3000",
  ],
};

export default nextConfig;

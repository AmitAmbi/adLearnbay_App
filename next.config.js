/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV == "production";

const nextConfig = {
  // assetPrefix: isProd ? "https://d32and0ii3b8oy.cloudfront.net/" : undefined,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: [
      "react-phone-input-2",
      "react-icons",
      "swiper",
      "mongodb",
      "typed.js",
    ],

    // nextScriptWorkers: true,
  },

  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d32and0ii3b8oy.cloudfront.net",
        pathname: "**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400,
  },
};

// export default nextConfig;

module.exports = nextConfig;

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

// module.exports = withBundleAnalyzer(nextConfig)

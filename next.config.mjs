import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Statikus exportálás optimalizálás
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["react-icons"],
  },

  // Build optimalizálás
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Képek optimalizálása
  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [new URL("http://localhost/**")],
    minimumCacheTTL: 60,
  },

  // Gzip tömörítés
  compress: true,

  // Statikus fájlok cache-elése
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/css/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Trailing slash
  trailingSlash: false,

  // ESLint ignorálás production build során (opcionális)
  eslint: {
    ignoreDuringBuilds: false, // true-ra állítsd, ha teljesen ki akarod kapcsolni
  },
};

export default withNextIntl(nextConfig);

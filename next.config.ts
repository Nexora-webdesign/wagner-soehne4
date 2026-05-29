import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js 16: `domains` is deprecated — use `remotePatterns`.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

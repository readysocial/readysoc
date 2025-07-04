import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/faq',
        destination: '/',
      },
      {
        source: '/privacy-privacy',
        destination: '/privacy',
      },
      {
        source: '/privacy-policy',
        destination: '/privacy',
      },
    ]
  },
};

export default nextConfig;



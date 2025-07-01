import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/faq',
        destination: '/',
      },
    ]
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/faq",
        destination: "/",
      },
      {
        source: "/privacy-privacy",
        destination: "/privacy",
      },
      {
        source: "/privacy-policy",
        destination: "/privacy",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        headers: [
          {
            key: "Content-Type",
            value: "application/json",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

// NEXT_PUBLIC_* vars are inlined at build time. Warn loudly here so a missing
// NEXT_PUBLIC_API_BASE_URL fails visibly during build (e.g. Vercel misconfig)
// instead of shipping a bundle that throws at runtime on login/signup.
if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
  console.warn(
    "\n⚠️  NEXT_PUBLIC_API_BASE_URL is not set. " +
      "Copy .env.example to .env.local for local dev, and set it in Vercel " +
      "Project Settings → Environment Variables (then redeploy, since " +
      "NEXT_PUBLIC vars are baked in at build time).\n",
  );
}

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

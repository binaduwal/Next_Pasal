import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{protocol:"https",hostname:"cdn.sanity.io"}],
        domains: ['lh3.googleusercontent.com'],

  },
};

export default nextConfig;

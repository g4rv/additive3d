import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Increase body size limit for file uploads
    serverActions: {
      bodySizeLimit: '200mb',
    },
  },
};

export default nextConfig;

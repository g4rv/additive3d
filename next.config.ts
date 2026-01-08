import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // Increase body size limit for file uploads (Server Actions)
    serverActions: {
      bodySizeLimit: '200mb',
    },
    // Also increase for proxy client requests
    proxyClientMaxBodySize: '200mb',
  },
};

export default nextConfig;

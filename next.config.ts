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

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Content Security Policy - Protects against XSS attacks
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline'", // unsafe-inline needed for Next.js, unsafe-eval for dev
              "style-src 'self' 'unsafe-inline'", // unsafe-inline needed for Tailwind
              "img-src 'self' data: https: blob:", // Allow images from anywhere (for user uploads preview)
              "font-src 'self' data:",
              "connect-src 'self' https://*.supabase.co https://*.r2.cloudflarestorage.com", // API calls to Supabase and R2
              "frame-ancestors 'none'", // Prevent clickjacking
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
          // Prevent browsers from incorrectly detecting non-scripts as scripts
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Prevent clickjacking
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // Enable browser XSS protection
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // Control referrer information
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Enforce HTTPS
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          // Control browser features and APIs
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

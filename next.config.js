import { withPayload } from '@payloadcms/next/withPayload'

import redirects from './redirects.js'

// typescript is giving me a headache, made this to trigger a build

const NEXT_PUBLIC_SERVER_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined || process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/assets/**',
      },
      {
        pathname: '/**',  // Allow all local images from public folder
      },
    ],
    remotePatterns: [
      ...[NEXT_PUBLIC_SERVER_URL /* 'https://example.com' */].map((item) => {
        const url = new URL(item)

        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(':', ''),
        }
      }),
    ],
  },
  reactStrictMode: true,
  redirects,
  // Temporarily ignore TypeScript errors during build until PayloadCMS
  // releases types compatible with Next.js 16's stricter route validation
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default withPayload(nextConfig)

import type { NextConfig } from 'next'
import packageJson from './package.json' assert { type: 'json' }

const version = packageJson.version

const nextConfig: NextConfig = {
  env: {
    version
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wuhiuwvfarqsrwwbcqsd.supabase.co',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'moo100lan.com',
        pathname: '**'
      }
    ],
    domains: ['profile.line-scdn.net'],
  }
}

export default nextConfig

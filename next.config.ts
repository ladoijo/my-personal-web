import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js'
      }
    }
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'www.hackerrank.com',
        pathname: '/**'
      }
    ]
  }
};

export default nextConfig;

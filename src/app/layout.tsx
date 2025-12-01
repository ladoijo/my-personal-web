import NavBar from '@/components/NavBar';
import { ACCOUNT_GITHUB_URL, ACCOUNT_LINKEDIN_URL } from '@/utils/env';
import { siteConfig } from '@/utils/siteConfig';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: siteConfig.keywords,
  creator: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  publisher: siteConfig.name,
  alternates: { canonical: '/' },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    type: 'website',
    locale: siteConfig.locale,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.title }]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage]
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png'
  },
  other: {
    'google-site-verification': 'a6iJGnvsQYP9yKQxvWj0l-qfcXYoRJYR3tkV3dinsa0'
  },
  manifest: '/manifest.json'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle: 'Full Stack Developer',
    url: siteConfig.siteUrl,
    image: siteConfig.ogImage,
    description: siteConfig.description,
    sameAs: [ACCOUNT_GITHUB_URL, ACCOUNT_LINKEDIN_URL]
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="a6iJGnvsQYP9yKQxvWj0l-qfcXYoRJYR3tkV3dinsa0"
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
        `}
      >
        <NavBar />
        <main className={`flex min-h-screen flex-col bg-white`}>{children}</main>
      </body>
    </html>
  );
}

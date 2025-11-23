const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://hdygidev.netlify.app').replace(
  /\/$/,
  ''
);

export const siteConfig = {
  name: 'Hadyan Putra Yasrizal',
  title: 'Hadyan Putra Yasrizal (HDygiDev) | Full Stack Developer',
  description:
    'Full stack developer with a decade of experience building scalable backend services and polished frontend interfaces.',
  siteUrl,
  locale: 'en_US',
  keywords: [
    'Hadyan Yasrizal',
    'HDygiDev',
    'full stack developer',
    'software engineer',
    'React',
    'Next.js',
    'Java',
    'Spring Boot',
    'portfolio'
  ],
  ogImage: `${siteUrl}/assets/images/hdygidev.webp`
};

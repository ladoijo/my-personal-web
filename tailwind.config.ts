import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './src/app/globals.css'
  ],
  theme: {
    extend: {
      colors: {
        // Optional: design tokens using CSS variables
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))'
      }
    }
  },
  plugins: []
} satisfies Config;

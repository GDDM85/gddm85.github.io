import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#00bcd4',
          500: '#00bcd4',
          600: '#00a9c3',
        },
      },
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.35)',
      },
    },
  },
  plugins: [],
} satisfies Config;

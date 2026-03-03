import { heroui } from '@heroui/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        appbg: '#f6f1e8',
        card: '#fffaf1',
        ink: '#2f3a2f',
        muted: '#6f7463',
        olive: '#6b8f71',
        moss: '#4f6f52',
      },
      backgroundImage: {
        accent: 'linear-gradient(135deg, #a3b18a 0%, #588157 100%)',
      },
      boxShadow: {
        card: '0 14px 30px rgba(79, 111, 82, 0.14)',
      },
    },
  },
  plugins: [heroui()],
};

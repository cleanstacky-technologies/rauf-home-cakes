import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFDF7',
          100: '#FFF9E8',
          200: '#FFF3D1',
          300: '#FFE8B0',
          400: '#FFD98F',
          500: '#F5E6CC',
        },
        rose: {
          gold: '#B76E79',
          light: '#D4A0A7',
          muted: '#C9929A',
        },
        chocolate: {
          50: '#F5F0EB',
          100: '#E8DDD3',
          200: '#D4C4B0',
          300: '#B8A08A',
          400: '#9C7C64',
          500: '#6B4226',
          600: '#5A3720',
          700: '#4A2D1A',
          800: '#3A2314',
          900: '#2A190E',
        },
        warm: {
          50: '#FEFCF9',
          100: '#FDF8F0',
          200: '#FAF0E1',
          300: '#F5E6CC',
          400: '#EDD9B5',
          500: '#E5CC9E',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        surface: {
          DEFAULT: '#0a0a1a',
          light: '#1a1a2e',
          lighter: '#2a2a3e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        glass: '12px',
      },
      boxShadow: {
        glow: '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.4)',
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
        'gradient-radial-glow':
          'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
        'gradient-hero':
          'linear-gradient(to bottom, rgba(10, 10, 26, 0) 0%, rgba(10, 10, 26, 0.8) 100%)',
      },
      animation: {
        'earth-rotate': 'earthRotate 20s linear infinite',
        twinkle: 'twinkle 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
} satisfies Config
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07090b',
          900: '#0a0c0f',
          850: '#0d1014',
          800: '#111519',
          700: '#161b21',
          600: '#1c222a',
          500: '#262d36',
          400: '#3a424d',
          300: '#5b6573',
          200: '#8b95a3',
          100: '#b8c0cb',
          50: '#e7edf3',
        },
        accent: {
          DEFAULT: '#4a9eff',
          soft: '#6fb0ff',
          dim: '#2f6cb8',
          glow: 'rgba(74, 158, 255, 0.14)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        tightish: '-0.015em',
        tighter2: '-0.03em',
      },
      maxWidth: {
        content: '1120px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'soft-pulse': {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.7' },
        },
        'grid-drift': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '48px 48px' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.8s ease both',
        'soft-pulse': 'soft-pulse 5s ease-in-out infinite',
        'grid-drift': 'grid-drift 40s linear infinite',
      },
    },
  },
  plugins: [],
};

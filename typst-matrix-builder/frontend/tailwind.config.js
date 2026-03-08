/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      colors: {
        background: 'hsl(0 0% 100%)',
        foreground: 'hsl(240 10% 3.9%)',
        muted: 'hsl(240 4.8% 95.9%)',
        mutedForeground: 'hsl(240 3.8% 46.1%)',
        border: 'hsl(240 5.9% 90%)',
        input: 'hsl(240 5.9% 90%)',
        primary: 'hsl(240 5.9% 10%)',
        primaryForeground: 'hsl(0 0% 98%)',
        surface: 'hsl(0 0% 100%)',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        card: '0 2px 8px -2px rgba(0,0,0,0.05), 0 1px 4px -1px rgba(0,0,0,0.02)',
        'card-hover':
          '0 8px 24px -4px rgba(0,0,0,0.08), 0 4px 12px -2px rgba(0,0,0,0.04)',
      },
      backgroundImage: {
        'grid-pattern':
          'radial-gradient(hsl(240 5.9% 90%) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-pattern': '24px 24px',
      },
      fontSize: {
        xs: ['0.8125rem', { lineHeight: '1.25rem' }],
        sm: ['0.9375rem', { lineHeight: '1.375rem' }],
        base: ['1.0625rem', { lineHeight: '1.5rem' }],
      },
    },
  },
  plugins: [],
}

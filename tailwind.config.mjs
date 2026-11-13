/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF7',
          100: '#FAF4E8',
          200: '#F2E4C9',
          300: '#E4CCA1',
          400: '#D5B374',
          500: '#C5A059', // Primary Gold Accent
          600: '#B08842',
          700: '#8E6B2E',
          800: '#6C4F22',
          900: '#4D3618',
        },
        anthracite: {
          50: '#F6F7F9',
          100: '#EDEFF3',
          200: '#D9DDE5',
          300: '#B8C0D0',
          400: '#8A96AC',
          500: '#626F87',
          600: '#4A556B',
          700: '#343C4D',
          800: '#1E232E',
          900: '#141820', // Main Dark background
          950: '#0C0E14', // Deepest background
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Cinzel', 'Georgia', 'serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(197, 160, 89, 0.25)',
        'card-elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.08), 0 0 1px 1px rgba(0, 0, 0, 0.04)',
        'dark-card': '0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.07)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-shimmer': 'linear-gradient(135deg, #DFBE82 0%, #C5A059 50%, #A27B31 100%)',
      }
    },
  },
  plugins: [],
}


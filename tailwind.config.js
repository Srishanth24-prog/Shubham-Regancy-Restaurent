/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#FDF2F6',
          100: '#F9E2EC',
          200: '#F2BFD6',
          300: '#E68FB4',
          400: '#D5568C',
          500: '#B82865',
          600: '#941B4E',
          700: '#75133E',
          800: '#5A062B', // Primary Burgundy
          900: '#3D041C',
          950: '#260711', // Deep Luxury Burgundy
        },
        gold: {
          50: '#FCFAF2',
          100: '#F7F2DE',
          200: '#EDE2B6',
          300: '#E1CC86',
          400: '#D7B758',
          500: '#D4AF37', // Luxury Gold
          600: '#B8892D', // Warm Gold
          700: '#8E641F',
          800: '#6E4D1A',
          900: '#513816',
          accent: '#F5E6AD',
        },
        ivory: {
          DEFAULT: '#F8F1E5',
          light: '#FFFDF9',
          dark: '#EAE1D2',
        },
        charcoal: {
          DEFAULT: '#121010',
          surface: '#1A1617',
          card: '#221E1F',
          border: '#332C2E',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cinzel', '"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['Cinzel', '"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
        'gold-subtle': '0 4px 20px rgba(212, 175, 55, 0.15)',
        'capsule': '0 10px 30px -5px rgba(0, 0, 0, 0.6), 0 0 1px 1px rgba(212, 175, 55, 0.3)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F5E6AD 50%, #B8892D 100%)',
        'gold-text-gradient': 'linear-gradient(135deg, #FFFDF9 0%, #D4AF37 50%, #B8892D 100%)',
        'burgundy-gradient': 'linear-gradient(180deg, #260711 0%, #3D041C 50%, #121010 100%)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}

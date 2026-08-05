/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        /**
         * Paleta do template — extraída da própria fotografia do hero:
         *  - `ink`     — grafite quente do escritório à noite (base escura).
         *  - `marinho` — azul togado; cor das ações principais (contraste 9:1 com branco).
         *  - `gold`    — latão da estatueta e das lombadas; usado como detalhe, nunca
         *                como fundo de texto pequeno.
         *  - `bone`    — papel timbrado; base clara de leitura do corpo do site.
         */
        ink: {
          950: '#0A0B0D',
          900: '#101215',
          800: '#171A1E',
          700: '#23272D',
          600: '#343941',
          500: '#4C525B',
          400: '#646B76', // 4,6:1 sobre bone-50 — AA para texto auxiliar
        },
        marinho: {
          200: '#C7D6EA',
          300: '#7FA0CE',
          400: '#3A5F96',
          500: '#1F4373',
          600: '#163257',
          700: '#0F2440',
          800: '#0A1930',
        },
        gold: {
          100: '#F7EFDC',
          200: '#F0E2C0',
          300: '#E3CB98',
          400: '#C9A961',
          500: '#A9873B',
          600: '#8B6E2C',
          700: '#6F571F', // 6,3:1 sobre bone-50 — AA para eyebrow/labels
        },
        bone: {
          50: '#FBF9F5',
          100: '#F4F1EA',
          200: '#E9E4D9',
          300: '#D9D2C3',
          400: '#BEB5A2',
        },
      },
      fontFamily: {
        display: ['"EB Garamond"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['Lato', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 3px rgba(16, 18, 21, 0.05), 0 10px 30px rgba(16, 18, 21, 0.07)',
        'soft-lg': '0 4px 14px rgba(16, 18, 21, 0.09), 0 24px 60px rgba(16, 18, 21, 0.13)',
        gold: '0 0 0 1px rgba(201, 169, 97, 0.35), 0 12px 34px rgba(16, 18, 21, 0.16)',
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      keyframes: {
        /* Ken Burns: 1 → 1.08 com deriva vertical mínima, sem corte no loop. */
        kenburns: {
          '0%': { transform: 'scale(1) translate3d(0, 0, 0)' },
          '100%': { transform: 'scale(1.08) translate3d(0, -1.4%, 0)' },
        },
        'fade-down': {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        kenburns: 'kenburns 18s ease-in-out infinite alternate',
        'fade-down': 'fade-down 220ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 300ms ease-out both',
      },
    },
  },
  plugins: [],
};

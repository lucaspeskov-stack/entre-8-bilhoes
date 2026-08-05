/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        /**
         * Paleta tirada da própria fotografia do hero:
         *  - `noite`     — grafite quente do salão à noite (base escura e cor das
         *                  ações principais; preto sobre marfim é contraste de 16:1).
         *  - `champanhe` — a luz âmbar das prateleiras e do espelho. Detalhe e
         *                  destaque, nunca fundo de texto pequeno.
         *  - `marfim`    — base clara de leitura, quente como a iluminação do salão.
         *  - `rose`      — toque de nude/rosé para etiquetas e estados suaves.
         */
        noite: {
          950: '#0C0A09',
          900: '#14110F',
          800: '#1C1815',
          700: '#2A2420',
          600: '#3D3630',
          500: '#574E46',
          400: '#6E645A', // 4,7:1 sobre marfim-50 — AA para texto auxiliar
        },
        champanhe: {
          100: '#F9F1E6',
          200: '#F0E1CB',
          300: '#E2C9A7',
          400: '#CFA97B',
          500: '#B98A55',
          600: '#9A6E40',
          700: '#7C5732', // 6,1:1 sobre marfim-50 — AA para eyebrow/labels
        },
        rose: {
          100: '#FAEFEA',
          200: '#F2DCD3',
          300: '#E4BFAF',
          500: '#B57E66',
          600: '#95604A',
        },
        marfim: {
          50: '#FDFBF8',
          100: '#F8F4EE',
          200: '#F0EAE1',
          300: '#E2D9CB',
          400: '#C8BCAA',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 3px rgba(12, 10, 9, 0.05), 0 10px 30px rgba(12, 10, 9, 0.06)',
        'soft-lg': '0 4px 14px rgba(12, 10, 9, 0.08), 0 24px 60px rgba(12, 10, 9, 0.12)',
        champanhe: '0 0 0 1px rgba(207, 169, 123, 0.35), 0 12px 34px rgba(12, 10, 9, 0.16)',
      },
      letterSpacing: {
        widest2: '0.3em',
      },
      keyframes: {
        /* Ken Burns: 1 → 1.08 com deriva mínima, sem corte no loop. */
        kenburns: {
          '0%': { transform: 'scale(1) translate3d(0, 0, 0)' },
          '100%': { transform: 'scale(1.08) translate3d(-1%, -1.2%, 0)' },
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
        kenburns: 'kenburns 19s ease-in-out infinite alternate',
        'fade-down': 'fade-down 220ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 300ms ease-out both',
      },
    },
  },
  plugins: [],
};

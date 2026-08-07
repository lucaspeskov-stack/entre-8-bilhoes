/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        /**
         * Paleta tirada do próprio vídeo do hero — o escritório da Stephanie:
         *  - `grafite` — o preto quente da estante e do blazer. Base escura,
         *                texto principal e ações primárias.
         *  - `bronze`  — o latão dos porta-arquivos e a moldura dos certificados
         *                CRC. Detalhe, eyebrow e filete editorial; nunca fundo
         *                de texto pequeno.
         *  - `areia`   — o bege do papel sobre a mesa. Base clara de leitura.
         *
         * Contrastes verificados sobre areia-50 (#FCFAF6):
         *   grafite-900 19,1:1 · grafite-400 5,5:1 · bronze-700 6,8:1
         * Sobre grafite-950 (#0A0908):
         *   areia-50 19,1:1 · areia-300 13,9:1 · bronze-300 11,6:1
         */
        grafite: {
          950: '#0A0908',
          900: '#121110',
          800: '#1B1917',
          700: '#292521',
          600: '#3B3630',
          500: '#544D45',
          400: '#6C655B', // 5,5:1 sobre areia-50 — AA para texto auxiliar
        },
        bronze: {
          100: '#F6EFE2',
          200: '#EADCC3',
          300: '#D9C39C',
          400: '#C2A578',
          500: '#A6875A',
          600: '#876B42',
          700: '#6B5533', // 6,8:1 sobre areia-50 — AA para eyebrow/labels
        },
        areia: {
          50: '#FCFAF6',
          100: '#F7F3EC',
          200: '#EFE9DE',
          300: '#E0D7C7',
          400: '#C6BAA6',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 3px rgba(10, 9, 8, 0.05), 0 10px 30px rgba(10, 9, 8, 0.06)',
        'soft-lg': '0 4px 14px rgba(10, 9, 8, 0.08), 0 24px 60px rgba(10, 9, 8, 0.12)',
        bronze: '0 0 0 1px rgba(194, 165, 120, 0.35), 0 12px 34px rgba(10, 9, 8, 0.16)',
      },
      letterSpacing: {
        widest2: '0.3em',
      },
      keyframes: {
        /* Ken Burns: 1 → 1.08 com deriva mínima. `alternate` evita corte no loop. */
        kenburns: {
          '0%': { transform: 'scale(1) translate3d(0, 0, 0)' },
          '100%': { transform: 'scale(1.08) translate3d(-1.4%, -1%, 0)' },
        },
        'fade-down': {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        /* Seta do "role a página" — deslocamento de 6px, quase subliminar. */
        nudge: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.7' },
          '50%': { transform: 'translateY(6px)', opacity: '1' },
        },
      },
      animation: {
        /* 18s de ida e 18s de volta: o ciclo completo respeita a faixa de
           15–20s pedida e nunca "salta" de volta ao início. */
        kenburns: 'kenburns 18s ease-in-out infinite alternate',
        'fade-down': 'fade-down 220ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 300ms ease-out both',
        nudge: 'nudge 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

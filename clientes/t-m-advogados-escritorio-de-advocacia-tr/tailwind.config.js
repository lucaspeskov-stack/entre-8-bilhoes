/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        /**
         * Paleta extraída da identidade real do escritório:
         *  - `ink`   — granito escuro / mármore preto dos prédios institucionais da
         *              Av. Presidente Vargas e o tom sóbrio da advocacia.
         *  - `vinho` — o vermelho da própria marca (o 🔴 que abre o nome do escritório
         *              na ficha do Google), rebaixado para um vinho togado, sem estridência.
         *  - `brass` — latão das placas de advocacia e dos elevadores dos edifícios do Centro.
         *  - `bone`  — papel/timbre, base clara de leitura.
         */
        ink: {
          900: '#0E0F11',
          800: '#16181B',
          700: '#22252A',
          600: '#33373E',
          500: '#4A4F58',
          400: '#5F656F', // 5,2:1 sobre bone-100 — AA para texto auxiliar pequeno
        },
        vinho: {
          300: '#E28A8D',
          400: '#D14A4F',
          500: '#C0272D',
          600: '#9E1F26',
          700: '#7A181D',
          800: '#571216',
        },
        brass: {
          200: '#EEDFBC',
          300: '#E2C892',
          400: '#C8A356',
          500: '#A8842F',
          600: '#8A6B24',
          700: '#7A5E1E',
        },
        bone: {
          50: '#FAF8F4',
          100: '#F3EFE8',
          200: '#E7E1D6',
          300: '#D6CEBE',
          400: '#BCB2A0',
        },
      },
      fontFamily: {
        display: ['"EB Garamond"', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Lato', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 3px rgba(14, 15, 17, 0.06), 0 10px 30px rgba(14, 15, 17, 0.07)',
        'soft-lg': '0 4px 14px rgba(14, 15, 17, 0.10), 0 24px 60px rgba(14, 15, 17, 0.14)',
        brass: '0 0 0 1px rgba(200, 163, 86, 0.35), 0 12px 34px rgba(14, 15, 17, 0.16)',
      },
      borderRadius: {
        '4xl': '1.75rem',
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1) translate3d(0, 0, 0)' },
          '100%': { transform: 'scale(1.08) translate3d(0, -1.2%, 0)' },
        },
        'fade-down': {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        kenburns: 'kenburns 18s ease-in-out infinite alternate',
        'fade-down': 'fade-down 220ms cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};

import { brand } from '../data/content.js';

/**
 * Marca: monograma serifado dentro de um filete bronze + assinatura em duas
 * linhas. `variant="onDark"` troca só as cores — a estrutura é a mesma no
 * header sobre o vídeo e no rodapé.
 */
export default function Logo({ variant = 'onLight', showWordmark = true, className = '' }) {
  const onDark = variant === 'onDark';

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        className={`grid h-10 w-10 shrink-0 place-items-center rounded-sm border font-display text-[15px]
          leading-none tracking-tight ${
            onDark ? 'border-bronze-400/60 text-areia-50' : 'border-bronze-500/50 text-grafite-900'
          }`}
        aria-hidden="true"
      >
        SV
      </span>

      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display text-[17px] font-medium tracking-tight ${
              onDark ? 'text-areia-50' : 'text-grafite-900'
            }`}
          >
            {brand.nome}
          </span>
          <span
            className={`mt-1 text-[10px] font-semibold uppercase tracking-widest2 ${
              onDark ? 'text-bronze-300' : 'text-bronze-700'
            }`}
          >
            {brand.papel}
          </span>
        </span>
      )}
    </span>
  );
}

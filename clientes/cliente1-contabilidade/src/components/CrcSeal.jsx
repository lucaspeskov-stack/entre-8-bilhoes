import { brand } from '../data/content.js';

/**
 * Selo CRC — a credencial é o principal ativo de confiança de um contador,
 * então aparece explícito (número visível), e não só como ícone.
 *
 * `variant="onDark"` para uso sobre o vídeo/rodapé; `compact` remove a linha
 * descritiva quando o espaço é curto.
 */
export default function CrcSeal({ variant = 'onLight', compact = false, className = '' }) {
  const onDark = variant === 'onDark';

  return (
    <span
      className={`inline-flex items-center gap-3 rounded-full border py-2 pl-2 pr-4 ${
        onDark ? 'border-areia-50/20 bg-white/5 backdrop-blur-sm' : 'border-areia-300 bg-areia-50'
      } ${className}`}
    >
      <span
        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border text-[10px] font-semibold
          uppercase tracking-[0.12em] ${
            onDark ? 'border-bronze-300/60 text-bronze-300' : 'border-bronze-500/60 text-bronze-700'
          }`}
        aria-hidden="true"
      >
        CRC
      </span>

      <span className="flex flex-col leading-tight">
        <span
          className={`tnum text-[13px] font-semibold tracking-tight ${
            onDark ? 'text-areia-50' : 'text-grafite-900'
          }`}
        >
          {brand.crc}
        </span>
        {!compact && (
          <span className={`text-[11px] ${onDark ? 'text-areia-300' : 'text-grafite-400'}`}>
            Registro ativo no Conselho Regional de Contabilidade
          </span>
        )}
      </span>
    </span>
  );
}

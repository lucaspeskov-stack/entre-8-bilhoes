import { business } from '../data/content.js';

/**
 * Logo tipográfico: monograma em balança estilizada + nome do escritório.
 * Enquanto não houver logo próprio, ele já entrega um sinal de marca coerente.
 * Para usar um arquivo de imagem, troque o <svg> por
 * <img src="/logo.svg" alt={business.name} className="h-9 w-auto" />.
 *
 * `tone` alterna a versão para fundo claro (`dark`) ou escuro (`light`).
 */
export default function Logo({ tone = 'dark', adaptive = false, className = '' }) {
  const onLight = tone === 'dark';

  /**
   * `adaptive` é usado só no header. A partir de `xl` o menu completo entra na
   * barra e a linha de apoio sai — ela é o elemento mais largo do logo (o
   * espaçamento de letras a alarga) e, mantida, espremeria o nome do
   * escritório. No rodapé o logo aparece sempre completo.
   */
  const roleVisibility = adaptive ? 'hidden sm:block xl:hidden' : 'hidden sm:block';

  return (
    <span className={`flex min-w-0 items-center gap-3 ${className}`}>
      <svg
        width="38"
        height="38"
        viewBox="0 0 64 64"
        aria-hidden="true"
        className="shrink-0"
        fill="none"
      >
        <rect
          width="64"
          height="64"
          rx="8"
          className={onLight ? 'fill-marinho-700' : 'fill-white/10'}
        />
        <g
          className={onLight ? 'stroke-gold-300' : 'stroke-gold-300'}
          strokeWidth="2.6"
          strokeLinecap="round"
        >
          <path d="M32 15v34" />
          <path d="M18 22h28" />
          <path d="M32 49h9M32 49h-9" />
          <path d="M18 22 11 36a7 7 0 0 0 14 0Z" />
          <path d="M46 22 39 36a7 7 0 0 0 14 0Z" />
        </g>
      </svg>

      {/*
       * `min-w-0` + `truncate`: nomes longos encurtam em vez de empurrar o
       * botão do menu para fora da tela no celular.
       *
       * Entre `lg` e `xl` o menu completo divide a barra com o logo, então a
       * linha de apoio sai e o nome diminui — assim nada é cortado. A partir
       * de `2xl` sobra espaço e o logo volta ao tamanho cheio.
       */}
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={`truncate font-display text-[1.15rem] font-semibold tracking-tight
                      sm:text-[1.3rem] ${onLight ? 'text-ink-900' : 'text-bone-50'}`}
        >
          {business.name}
        </span>
        <span
          className={`mt-1 truncate text-[9.5px] font-bold uppercase tracking-widest2
                      ${roleVisibility} ${onLight ? 'text-gold-700' : 'text-gold-300'}`}
        >
          {business.role}
        </span>
      </span>
    </span>
  );
}

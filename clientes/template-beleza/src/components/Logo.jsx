import { business } from '../data/content.js';

/**
 * Logo tipográfico: monograma em gota/frasco estilizado + nome do salão.
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
   * barra e a linha de apoio sai — com o espaçamento de letras ela é o elemento
   * mais largo do logo e espremeria o nome do salão. No rodapé o logo aparece
   * sempre completo.
   */
  const roleVisibility = adaptive ? 'hidden sm:block xl:hidden' : 'hidden sm:block';

  return (
    <span className={`flex min-w-0 items-center gap-3 ${className}`}>
      <svg width="38" height="38" viewBox="0 0 64 64" aria-hidden="true" className="shrink-0" fill="none">
        <rect
          width="64"
          height="64"
          rx="8"
          className={onLight ? 'fill-noite-900' : 'fill-white/10'}
        />
        <g
          className="stroke-champanhe-300"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M32 12c6 6 9 11 9 16a9 9 0 0 1-18 0c0-5 3-10 9-16Z" />
          <path d="M32 37v15" />
          <path d="M25 52h14" />
        </g>
      </svg>

      {/* `min-w-0` + `truncate`: nomes longos encurtam em vez de empurrar o
          botão do menu para fora da tela no celular. */}
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={`truncate font-display text-[1.15rem] font-medium tracking-tight
                      sm:text-[1.3rem] ${onLight ? 'text-noite-900' : 'text-marfim-50'}`}
        >
          {business.name}
        </span>
        <span
          className={`mt-1.5 truncate text-[9.5px] font-semibold uppercase tracking-widest2
                      ${roleVisibility} ${onLight ? 'text-champanhe-700' : 'text-champanhe-300'}`}
        >
          {business.role}
        </span>
      </span>
    </span>
  );
}

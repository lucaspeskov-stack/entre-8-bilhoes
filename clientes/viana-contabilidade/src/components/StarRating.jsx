/**
 * Estrelas de avaliação.
 *
 * A nota também é anunciada em texto pelo `role="img"` + `aria-label`: cor e
 * forma não podem ser a única forma de transmitir a informação. As estrelas em
 * si ficam fora da árvore de acessibilidade para não virar ruído no leitor.
 */
export default function StarRating({ nota = 5, className = 'h-4 w-4', gap = 'gap-0.5' }) {
  const cheias = Math.round(nota);
  const rotulo = `${nota.toLocaleString('pt-BR', { minimumFractionDigits: nota % 1 ? 1 : 0 })} de 5 estrelas`;

  return (
    <span className={`inline-flex items-center ${gap}`} role="img" aria-label={rotulo}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`${className} ${i < cheias ? 'text-bronze-400' : 'text-areia-400'}`}
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M10 1.6l2.47 5.28 5.53.73-4.08 3.9 1.05 5.72L10 14.5l-4.97 2.73 1.05-5.72-4.08-3.9 5.53-.73L10 1.6Z" />
        </svg>
      ))}
    </span>
  );
}

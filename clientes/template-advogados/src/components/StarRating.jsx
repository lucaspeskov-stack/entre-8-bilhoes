/**
 * Estrelas de avaliação. A nota também é anunciada em texto para leitores de
 * tela — a informação nunca depende só da cor/forma das estrelas.
 */
export default function StarRating({ value = 5, size = 16, className = '' }) {
  const rounded = Math.round(value);

  return (
    <span
      className={`inline-flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={`Nota ${value.toFixed(1).replace('.', ',')} de 5`}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={i <= rounded ? 'text-gold-400' : 'text-ink-400/40'}
          fill="currentColor"
        >
          <path d="M12 17.27 6.18 20.6l1.64-6.63L2.5 9.5l6.76-.55L12 2.5l2.74 6.45 6.76.55-5.32 4.47 1.64 6.63z" />
        </svg>
      ))}
    </span>
  );
}

import { Star } from 'lucide-react';

/**
 * Estrelas com preenchimento parcial. Exposto ao leitor de tela como uma única
 * imagem rotulada ("5 de 5 estrelas") — as estrelas em si ficam aria-hidden.
 */
export default function StarRating({ value = 5, size = 18, className = '' }) {
  const full = Math.floor(value);
  const hasHalf = value - full >= 0.5;
  const label = `${value.toFixed(1).replace('.', ',')} de 5 estrelas`;

  return (
    <div className={`flex items-center gap-0.5 ${className}`} role="img" aria-label={label}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full;
        const half = i === full && hasHalf;
        return (
          <span
            key={i}
            aria-hidden
            className="relative inline-block"
            style={{ width: size, height: size }}
          >
            <Star size={size} className="absolute inset-0 text-bone-300" fill="currentColor" />
            {(filled || half) && (
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: half ? size / 2 : size }}
              >
                <Star size={size} className="text-brass-500" fill="currentColor" />
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
}

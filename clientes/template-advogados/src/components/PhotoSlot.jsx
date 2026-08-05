import { business } from '../data/content.js';
import { ImagePlus } from 'lucide-react';

/**
 * Espaço reservado de foto. Enquanto o escritório não envia a imagem, mostra
 * um bloco na própria paleta do site (grafite + latão) com o monograma e a
 * proporção recomendada — em vez de uma imagem quebrada ou de um banco de
 * imagens genérico.
 *
 * Para usar a foto definitiva, passe `src`:
 *   <PhotoSlot src="/equipe.jpg" alt="Equipe do escritório" ratio="4/5" />
 */
export default function PhotoSlot({
  src,
  alt = '',
  hint = 'Sua foto aqui',
  spec = 'Retrato 4:5 · mín. 1200×1500px',
  ratio = '4/5',
  className = '',
  loading = 'lazy',
}) {
  if (src) {
    return (
      <div className={`overflow-hidden bg-ink-800 ${className}`} style={{ aspectRatio: ratio }}>
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`Espaço reservado para foto: ${hint}`}
      className={`relative flex flex-col items-center justify-center overflow-hidden
                  bg-gradient-to-br from-ink-950 via-ink-800 to-ink-700 ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {/* Textura sutil de linhas, para o bloco não parecer um erro de carregamento */}
      <span
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, #C9A961 0 1px, transparent 1px 14px)',
        }}
      />

      <span
        aria-hidden
        className="relative font-display text-5xl font-semibold tracking-wide text-gold-400"
      >
        {business.monogram}
      </span>

      <span className="relative mt-4 inline-flex items-center gap-2 border border-gold-400/40 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-gold-200">
        <ImagePlus size={13} aria-hidden />
        {hint}
      </span>

      <span className="relative mt-2 px-4 text-center text-[11px] text-bone-300/70">{spec}</span>
    </div>
  );
}

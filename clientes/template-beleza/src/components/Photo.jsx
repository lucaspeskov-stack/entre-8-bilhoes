import { useState } from 'react';
import { ImagePlus } from 'lucide-react';
import { business } from '../data/content.js';

/**
 * Foto com espaço reservado embutido.
 *
 * - Com `src`: mostra a imagem, com proporção declarada (sem layout shift) e
 *   carregamento preguiçoso fora da primeira dobra.
 * - Sem `src`, ou se a imagem falhar: mostra um bloco na paleta do site com o
 *   monograma e a proporção recomendada — nunca uma imagem quebrada.
 *
 * As fotos que vêm no template são recortes da fotografia de referência do
 * salão. Troque cada arquivo em `public/fotos/` pelas suas.
 */
export default function Photo({
  src,
  alt = '',
  hint = 'Sua foto aqui',
  spec = 'Retrato 4:5 · mín. 1200×1500px',
  ratio = '4/5',
  className = '',
  imgClassName = '',
  loading = 'lazy',
}) {
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;

  return (
    <div
      className={`relative overflow-hidden bg-noite-800 ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      ) : (
        <div
          role="img"
          aria-label={alt || `Espaço reservado para foto: ${hint}`}
          className="flex h-full w-full flex-col items-center justify-center
                     bg-gradient-to-br from-noite-950 via-noite-800 to-noite-700"
        >
          {/* Textura sutil, para o bloco não parecer erro de carregamento */}
          <span
            aria-hidden
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(135deg, #CFA97B 0 1px, transparent 1px 14px)',
            }}
          />

          <span className="relative font-display text-5xl font-medium tracking-wide text-champanhe-400">
            {business.monogram}
          </span>

          <span className="relative mt-4 inline-flex items-center gap-2 border border-champanhe-400/40 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-champanhe-200">
            <ImagePlus size={13} aria-hidden />
            {hint}
          </span>

          <span className="relative mt-2 px-4 text-center text-[11px] text-marfim-300/70">
            {spec}
          </span>
        </div>
      )}
    </div>
  );
}

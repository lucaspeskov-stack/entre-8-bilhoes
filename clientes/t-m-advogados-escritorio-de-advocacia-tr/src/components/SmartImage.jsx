import { useState } from 'react';

/**
 * Imagem com fallback gracioso: se o hotlink da foto do Google expirar ou
 * falhar, entra um bloco na própria paleta do site (grafite + latão) com o
 * monograma, em vez de uma imagem quebrada.
 *
 * `width`/`height` são declarados para reservar espaço e evitar layout shift.
 */
export default function SmartImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  width = 1600,
  height = 1600,
  loading = 'lazy',
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-ink-800 ${className}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          decoding="async"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ink-900 via-ink-700 to-ink-800"
        >
          <span className="font-display text-4xl font-semibold tracking-wide text-brass-400">
            T&amp;M
          </span>
        </div>
      )}
    </div>
  );
}

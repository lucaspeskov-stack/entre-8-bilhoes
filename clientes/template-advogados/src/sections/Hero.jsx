import { useState } from 'react';
import { ArrowRight, MapPin, ShieldCheck } from 'lucide-react';
import { business, hero, stats } from '../data/content.js';
import StarRating from '../components/StarRating.jsx';

/**
 * Hero cinematográfico com a fotografia do escritório ao fundo e efeito
 * Ken Burns (escala 1 → 1.08 em 18s, alternando o sentido — o loop não corta).
 *
 * Legibilidade: dois scrims sobrepostos (vertical + lateral) garantem contraste
 * AA do texto claro sobre qualquer região da foto. A foto tem área escura à
 * esquerda por composição, e é ali que o texto se apoia.
 *
 * Performance: a imagem é o LCP — pré-carregada no index.html, servida em WebP
 * com variante de 1100px para telas pequenas e fallback JPEG. `width`/`height`
 * declarados reservam o espaço e evitam layout shift.
 */
export default function Hero() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <section
      id="top"
      className="on-dark relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink-950"
    >
      {/* Fundo */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        {imgOk ? (
          <picture>
            <source
              type="image/webp"
              srcSet="/hero-escritorio-1100.webp 1100w, /hero-escritorio.webp 1717w"
              sizes="100vw"
            />
            <img
              src="/hero-escritorio.jpg"
              alt=""
              width={1717}
              height={916}
              fetchpriority="high"
              decoding="async"
              onError={() => setImgOk(false)}
              className="h-full w-full origin-center animate-kenburns object-cover object-[70%_center] sm:object-center"
            />
          </picture>
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-ink-950 via-ink-800 to-ink-700" />
        )}

        {/* Scrims de legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/45 to-transparent" />
        {/* Filete de latão fechando o hero */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
      </div>

      {/* O topo soma a altura real da faixa do modelo (`--bar-h`) ao espaço do
          header fixo — sem isso o conteúdo passa por baixo dele no celular. */}
      <div
        className="container-x flex flex-1 flex-col justify-center pb-14 md:pb-20"
        style={{ paddingTop: 'calc(7rem + var(--bar-h, 0px))' }}
      >
        <div className="max-w-2xl">
          <span className="eyebrow-onDark">
            <MapPin size={14} aria-hidden />
            {hero.eyebrow}
          </span>

          <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-bone-50 sm:text-6xl lg:text-[4.2rem]">
            {hero.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span className="block text-gold-300">{hero.titleHighlight}</span>
          </h1>

          <span aria-hidden className="mt-7 block h-px w-20 bg-gold-400" />

          <p className="mt-7 max-w-xl text-base leading-relaxed text-bone-200 sm:text-lg">
            {hero.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {hero.primaryCta}
            </a>
            <a href="#servicos" className="btn-onDark">
              {hero.secondaryCta}
              <ArrowRight size={16} aria-hidden />
            </a>
          </div>

          {/* Prova social imediata, ainda acima da dobra */}
          <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-3">
            <span className="inline-flex items-center gap-3 border border-bone-50/20 bg-white/[0.07] px-4 py-2.5 backdrop-blur-sm">
              <StarRating value={business.rating} size={16} />
              <span className="tnum text-sm text-bone-200">
                <strong className="font-bold text-bone-50">
                  {business.rating.toFixed(1).replace('.', ',')}
                </strong>{' '}
                em {business.reviewsCount} avaliações
              </span>
            </span>

            <span className="inline-flex items-center gap-2 text-sm text-bone-200">
              <ShieldCheck size={16} className="text-gold-300" aria-hidden />
              {hero.trustNote}
            </span>
          </div>
        </div>
      </div>

      {/* Faixa de números */}
      <div className="relative border-t border-bone-50/10 bg-ink-950/70 backdrop-blur-sm">
        <div className="container-x grid grid-cols-2 divide-bone-50/10 py-6 md:grid-cols-4 md:divide-x">
          {stats.map((s) => (
            <div key={s.label} className="px-2 py-3 text-center md:py-1">
              <p className="tnum font-display text-3xl font-semibold text-bone-50 sm:text-4xl">
                {s.value}
                <span className="text-gold-400">{s.suffix}</span>
              </p>
              <p className="mt-1.5 text-[11px] font-bold uppercase tracking-widest text-bone-200/80 sm:text-xs">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

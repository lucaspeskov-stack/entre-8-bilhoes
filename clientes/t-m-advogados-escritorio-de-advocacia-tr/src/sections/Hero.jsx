import { useState } from 'react';
import { MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { business, photos, stats } from '../data/content.js';
import StarRating from '../components/StarRating.jsx';

/**
 * Hero com a foto oficial do escritório ao fundo e efeito Ken Burns
 * (escala 1 → 1.08 em 18s, alternando o sentido para um loop sem corte).
 *
 * Legibilidade: dois scrims sobrepostos (vertical + lateral) garantem
 * contraste AA do texto branco sobre qualquer região da foto. Se o hotlink
 * falhar, entra o gradiente grafite da própria paleta.
 */
export default function Hero() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <section id="top" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden">
      {/* Fundo */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden bg-ink-900">
        {imgOk ? (
          <img
            src={photos[0].src}
            alt=""
            width={1600}
            height={1600}
            fetchpriority="high"
            decoding="async"
            onError={() => setImgOk(false)}
            className="h-full w-full origin-center animate-kenburns object-cover object-center opacity-70"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-ink-900 via-ink-700 to-ink-800" />
        )}

        {/* Scrims de legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/80 to-ink-900/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/85 via-ink-900/45 to-transparent" />
        {/* Filete de latão no rodapé do hero */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brass-400/60 to-transparent" />
      </div>

      <div className="container-x flex flex-1 flex-col justify-center pb-14 pt-32 md:pb-20 md:pt-36">
        <div className="max-w-2xl">
          <span className="eyebrow-onDark">
            <MapPin size={14} aria-hidden /> {business.neighborhood} · {business.city} — {business.state}
          </span>

          <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-bone-50 sm:text-6xl lg:text-[4.2rem]">
            Quando o direito
            <br />
            é seu, ele precisa
            <br />
            <span className="text-brass-300">ser defendido.</span>
          </h1>

          <span aria-hidden className="mt-7 block h-px w-20 bg-brass-400" />

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-bone-200">
            Advocacia <strong className="font-bold text-bone-50">trabalhista, criminal, cível</strong> e de{' '}
            <strong className="font-bold text-bone-50">família</strong> no Centro do Rio de Janeiro.
            Atendimento direto com advogado, do primeiro contato ao fim do processo.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Falar com um advogado
            </a>
            <a href="#areas" className="btn-onDark">
              Ver áreas de atuação <ArrowRight size={16} aria-hidden />
            </a>
          </div>

          {/* Prova social */}
          <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-3">
            <div className="inline-flex items-center gap-3 border border-bone-50/20 bg-white/[0.07] px-4 py-2.5 backdrop-blur-sm">
              <StarRating value={business.rating} size={16} />
              <span className="tnum text-sm text-bone-200">
                <strong className="font-bold text-bone-50">
                  {business.rating.toFixed(1).replace('.', ',')}
                </strong>{' '}
                em {business.reviewsCount} avaliações no Google
              </span>
            </div>

            <span className="inline-flex items-center gap-2 text-sm text-bone-200">
              <ShieldCheck size={16} className="text-brass-300" aria-hidden />
              Sigilo profissional garantido
            </span>
          </div>
        </div>
      </div>

      {/* Faixa de números */}
      <div className="relative border-t border-bone-50/10 bg-ink-900/70 backdrop-blur-sm">
        <div className="container-x grid grid-cols-2 divide-bone-50/10 py-6 md:grid-cols-4 md:divide-x">
          {stats.map((s) => (
            <div key={s.label} className="px-2 py-3 text-center md:py-1">
              <p className="tnum font-display text-3xl font-semibold text-bone-50 sm:text-4xl">
                {s.value}
                <span className="text-brass-400">{s.suffix}</span>
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

import { Quote, ExternalLink } from 'lucide-react';
import { reviews, business } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import StarRating from '../components/StarRating.jsx';

export default function Reviews() {
  return (
    <section id="avaliacoes" className="relative bg-bone-200/60 py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Avaliações"
          title="O que diz quem já foi atendido"
          lead={`Nota ${business.rating.toFixed(1).replace('.', ',')} de 5 em ${business.reviewsCount} avaliações públicas no Google.`}
        />

        <Reveal className="mt-8 flex justify-center" delay={60}>
          <div className="inline-flex items-center gap-4 border border-bone-300 bg-bone-50 px-6 py-4 shadow-soft">
            <p className="tnum font-display text-4xl font-semibold leading-none text-ink-900">
              {business.rating.toFixed(1).replace('.', ',')}
            </p>
            <span aria-hidden className="h-10 w-px bg-bone-300" />
            <div>
              <StarRating value={business.rating} size={17} />
              <p className="tnum mt-1.5 text-xs font-bold uppercase tracking-wide text-ink-500">
                {business.reviewsCount} avaliações no Google
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 60}>
              <figure className="flex h-full flex-col border border-bone-300 bg-bone-50 p-7 shadow-soft
                                 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg">
                <Quote
                  size={26}
                  aria-hidden
                  strokeWidth={1.5}
                  className="shrink-0 text-brass-500"
                />

                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-700">
                  {r.text}
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-bone-200 pt-5">
                  <span
                    aria-hidden
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink-900
                               text-sm font-bold text-brass-300"
                  >
                    {r.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-ink-900">{r.name}</p>
                    <p className="truncate text-xs text-ink-400">{r.area}</p>
                  </div>
                  <StarRating value={5} size={13} className="ml-auto shrink-0" />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center" delay={80}>
          <a
            href={business.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Ver todas as avaliações no Google <ExternalLink size={15} aria-hidden />
          </a>

          <p className="mx-auto mt-6 max-w-2xl text-xs leading-relaxed text-ink-400">
            Depoimentos publicados por clientes no perfil público do escritório, reproduzidos de
            forma resumida e sem menção a casos concretos. Cada situação é única e resultados
            anteriores não representam garantia de resultado futuro.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

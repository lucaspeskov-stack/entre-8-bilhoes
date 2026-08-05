import { Quote } from 'lucide-react';
import { business, reviews } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import StarRating from '../components/StarRating.jsx';

/**
 * Avaliações. Prova social em grade — mais legível do que carrossel, que
 * esconde depoimentos atrás de uma interação e costuma ser ignorado.
 */
export default function Reviews() {
  return (
    <section id="avaliacoes" aria-labelledby="avaliacoes-titulo" className="section bg-bone-50">
      <div className="container-x">
        <SectionHeading
          id="avaliacoes-titulo"
          eyebrow="Avaliações"
          title="O que dizem os clientes"
          description="Depoimentos de quem já foi atendido pelo escritório. Substitua pelos comentários que você recebeu — de preferência mantendo as palavras originais do cliente."
          align="center"
        />

        <Reveal delay={80}>
          <div className="mx-auto mt-8 flex w-fit items-center gap-3 border border-bone-300 bg-bone-100 px-5 py-3">
            <StarRating value={business.rating} size={18} />
            <span className="tnum text-sm text-ink-700">
              <strong className="font-bold text-ink-900">
                {business.rating.toFixed(1).replace('.', ',')}
              </strong>{' '}
              de 5 · {business.reviewsCount} avaliações
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={i} delay={i * 70}>
              <figure className="flex h-full flex-col rounded-sm border border-bone-300 bg-bone-100 p-7 shadow-soft">
                <Quote size={26} className="text-gold-400" aria-hidden />

                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-700">
                  {review.text}
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-bone-300 pt-5">
                  <span
                    aria-hidden
                    className="tnum flex h-11 w-11 shrink-0 items-center justify-center rounded-full
                               bg-marinho-700 font-display text-sm font-semibold text-gold-300"
                  >
                    {review.initials}
                  </span>

                  <span className="min-w-0">
                    <span className="block truncate text-sm font-bold text-ink-900">
                      {review.name}
                    </span>
                    <span className="mt-1 flex items-center gap-2">
                      <StarRating value={review.rating} size={13} />
                      <span className="text-[12px] text-ink-400">{review.date}</span>
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

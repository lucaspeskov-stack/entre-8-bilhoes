import { Quote } from 'lucide-react';
import { business, reviews } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import StarRating from '../components/StarRating.jsx';

/**
 * Avaliações. Prova social em grade — mais legível do que carrossel, que
 * esconde depoimentos atrás de uma interação e costuma ser ignorado.
 * Cada cartão mostra o serviço citado: quem procura "mechas" se identifica
 * com quem fez mechas.
 */
export default function Reviews() {
  return (
    <section id="avaliacoes" aria-labelledby="avaliacoes-titulo" className="section bg-marfim-100">
      <div className="container-x">
        <SectionHeading
          id="avaliacoes-titulo"
          eyebrow="Avaliações"
          title="O que as clientes dizem"
          description="Depoimentos de quem já foi atendida. Substitua pelos comentários que você recebeu — de preferência mantendo as palavras originais da cliente."
          align="center"
        />

        <Reveal delay={80}>
          <div className="mx-auto mt-8 flex w-fit items-center gap-3 rounded-full border border-marfim-300 bg-marfim-50 px-5 py-3">
            <StarRating value={business.rating} size={18} />
            <span className="tnum text-sm text-noite-700">
              <strong className="font-semibold text-noite-900">
                {business.rating.toFixed(1).replace('.', ',')}
              </strong>{' '}
              de 5 · {business.reviewsCount} avaliações
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={i} delay={i * 70}>
              <figure className="flex h-full flex-col rounded-lg border border-marfim-300 bg-marfim-50 p-7 shadow-soft">
                <div className="flex items-start justify-between gap-3">
                  <Quote size={26} className="text-champanhe-400" aria-hidden />
                  <span className="rounded-full bg-rose-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-rose-600">
                    {review.service}
                  </span>
                </div>

                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-noite-700">
                  {review.text}
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-marfim-200 pt-5">
                  <span
                    aria-hidden
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full
                               bg-noite-900 font-display text-sm font-medium text-champanhe-300"
                  >
                    {review.initials}
                  </span>

                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-noite-900">
                      {review.name}
                    </span>
                    <span className="mt-1 flex items-center gap-2">
                      <StarRating value={review.rating} size={13} />
                      <span className="text-[12px] text-noite-400">{review.date}</span>
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

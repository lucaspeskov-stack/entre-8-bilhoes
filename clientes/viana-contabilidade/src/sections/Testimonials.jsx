import { ArrowUpRight } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import StarRating from '../components/StarRating.jsx';
import GoogleGlyph from '../components/GoogleGlyph.jsx';
import { depoimentos, google } from '../data/content.js';

/**
 * Depoimentos — a avaliação do Google em destaque (é a única verificável por
 * terceiros, então ganha o maior peso tipográfico) e os dois relatos de
 * clientes logo abaixo, em cartões de mesmo nível entre si.
 */
export default function Testimonials() {
  return (
    <section id="depoimentos" aria-labelledby="depoimentos-titulo" className="section bg-areia-50">
      <div className="container-x">
        <SectionHeading
          eyebrow="Depoimentos"
          titulo="O que dizem quem já é atendido"
          tituloId="depoimentos-titulo"
          lead="Relatos de clientes e a avaliação pública no Google."
        />

        {/* ---------- avaliação em destaque ---------- */}
        <Reveal>
          <figure className="mt-14 rounded-lg border border-bronze-300/60 bg-bronze-100/60 p-8 sm:mt-16 sm:p-12">
            <StarRating nota={google.destaque.nota} className="h-[18px] w-[18px]" />

            <blockquote className="mt-6">
              <p className="text-balance font-display text-[1.75rem] font-medium leading-[1.25] tracking-tight text-grafite-900 sm:text-[2.15rem]">
                &ldquo;{google.destaque.texto}&rdquo;
              </p>
            </blockquote>

            <figcaption className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-bronze-300/60 pt-6">
              <span className="flex items-center gap-2 text-[13px] text-grafite-500">
                <GoogleGlyph className="h-4 w-4" />
                <span className="font-medium text-grafite-800">{google.destaque.autor}</span>
              </span>

              <a
                href={google.perfilUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 py-1.5 text-[13px] font-medium text-bronze-700
                           underline-offset-4 transition-colors duration-200 hover:text-bronze-600 hover:underline"
              >
                Ver no Google
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </figcaption>
          </figure>
        </Reveal>

        {/* ---------- relatos de clientes ---------- */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {depoimentos.map(({ texto, autor, nota }, i) => (
            <Reveal key={autor} delay={i * 90}>
              <figure className="card h-full p-7 transition-all duration-300 hover:-translate-y-1 hover:border-bronze-400/70 hover:shadow-soft-lg sm:p-8">
                <StarRating nota={nota} />

                <blockquote className="mt-5">
                  <p className="text-pretty text-[17px] leading-relaxed text-grafite-700">
                    &ldquo;{texto}&rdquo;
                  </p>
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-areia-200 pt-5">
                  <span
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-areia-300
                               bg-areia-100 font-display text-[13px] font-medium text-grafite-700"
                    aria-hidden="true"
                  >
                    {autor.charAt(0)}
                  </span>
                  <span className="text-[13px] font-medium text-grafite-800">{autor}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

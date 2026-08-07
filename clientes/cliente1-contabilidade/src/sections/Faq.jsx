import { useState } from 'react';
import { Plus } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import WhatsAppGlyph from '../components/WhatsAppGlyph.jsx';
import { faq, waLink } from '../data/content.js';

/**
 * Dados estruturados de FAQ — o Google usa para o rich result de perguntas.
 * Gerado a partir do mesmo array que alimenta a tela, então nunca dessincroniza.
 */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(({ pergunta, resposta }) => ({
    '@type': 'Question',
    name: pergunta,
    acceptedAnswer: { '@type': 'Answer', text: resposta },
  })),
};

/**
 * FAQ em acordeão, um item aberto por vez (o primeiro já vem aberto para a
 * seção não nascer "morta").
 *
 * Acessibilidade: o gatilho é um `<button>` real com `aria-expanded` e
 * `aria-controls`; o painel fechado recebe `inert`, então nem teclado nem
 * leitor de tela alcançam texto invisível. A altura anima por
 * `grid-template-rows` (0fr → 1fr) — sem `max-height` chutado e sem medir o
 * conteúdo com JavaScript.
 */
export default function Faq() {
  const [abertoIndex, setAbertoIndex] = useState(0);

  return (
    <section id="faq" aria-labelledby="faq-titulo" className="section bg-areia-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Dúvidas frequentes"
              titulo="Antes de você perguntar"
              tituloId="faq-titulo"
            />

            <Reveal delay={180}>
              <div className="mt-8 rounded-lg border border-areia-300 bg-areia-50 p-6">
                <p className="text-[15px] leading-relaxed text-grafite-500">
                  Ficou alguma dúvida de fora? Manda no WhatsApp — quem responde é a própria
                  Stephanie.
                </p>
                <a
                  href={waLink('Olá, Stephanie! Vim pelo site e fiquei com uma dúvida.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline mt-5 w-full"
                >
                  <WhatsAppGlyph />
                  Perguntar
                </a>
              </div>
            </Reveal>
          </div>

          <ul className="divide-y divide-areia-300 border-y border-areia-300">
            {faq.map(({ pergunta, resposta }, i) => {
              const aberto = abertoIndex === i;
              const painelId = `faq-painel-${i}`;
              const botaoId = `faq-botao-${i}`;

              return (
                <Reveal as="li" key={pergunta} delay={i * 70}>
                  <h3>
                    <button
                      id={botaoId}
                      type="button"
                      aria-expanded={aberto}
                      aria-controls={painelId}
                      onClick={() => setAbertoIndex(aberto ? -1 : i)}
                      className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left
                                 transition-colors duration-200 hover:text-bronze-700"
                    >
                      <span className="text-pretty font-display text-[1.15rem] font-medium leading-snug tracking-tight text-grafite-900 sm:text-[1.3rem]">
                        {pergunta}
                      </span>

                      <span
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                          aberto
                            ? 'rotate-45 border-bronze-400 bg-bronze-100 text-bronze-700'
                            : 'border-areia-400 text-grafite-500'
                        }`}
                        aria-hidden="true"
                      >
                        <Plus size={17} strokeWidth={1.6} />
                      </span>
                    </button>
                  </h3>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      aberto ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div
                      id={painelId}
                      role="region"
                      aria-labelledby={botaoId}
                      inert={aberto ? undefined : ''}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-7 pr-12 text-[15px] leading-relaxed text-grafite-500">
                        {resposta}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

import {
  Building2,
  CalendarCheck,
  FileSignature,
  MessagesSquare,
  ShieldCheck,
} from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import WhatsAppGlyph from '../components/WhatsAppGlyph.jsx';
import { servicos, waLink } from '../data/content.js';

const ICONES = { Building2, ShieldCheck, CalendarCheck, MessagesSquare, FileSignature };

/**
 * Serviços — os quatro do core contábil em grade, e o quinto (contratos e
 * documentos) numa faixa de peso visual menor: presente para quem procura,
 * sem disputar atenção com a contabilidade.
 */
export default function Services() {
  const core = servicos.filter((s) => !s.complementar);
  const complementares = servicos.filter((s) => s.complementar);

  return (
    <section id="servicos" aria-labelledby="servicos-titulo" className="section bg-areia-100">
      <div className="container-x">
        <SectionHeading
          eyebrow="Serviços"
          titulo="O que eu cuido para você"
          tituloId="servicos-titulo"
          lead="Da abertura do CNPJ à rotina mensal, com a mesma pessoa acompanhando o seu caso do começo ao fim."
        />

        <div className="mt-14 grid gap-5 sm:mt-16 md:grid-cols-2">
          {core.map(({ numero, icone, titulo, descricao }, i) => {
            const Icone = ICONES[icone];
            return (
              <Reveal key={numero} delay={i * 80}>
                <article
                  className="card group h-full p-7 transition-all duration-300 hover:-translate-y-1
                             hover:border-bronze-400/70 hover:shadow-soft-lg sm:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-areia-300
                                 bg-areia-100 text-grafite-700 transition-colors duration-300
                                 group-hover:border-bronze-400/60 group-hover:bg-bronze-100"
                      aria-hidden="true"
                    >
                      <Icone size={19} strokeWidth={1.6} />
                    </span>

                    <span
                      className="tnum font-display text-[2rem] font-medium leading-none text-areia-400
                                 transition-colors duration-300 group-hover:text-bronze-400"
                      aria-hidden="true"
                    >
                      {numero}
                    </span>
                  </div>

                  <h3 className="mt-6 text-pretty font-display text-[1.35rem] font-medium leading-snug tracking-tight text-grafite-900">
                    {titulo}
                  </h3>

                  <p className="mt-3 text-[15px] leading-relaxed text-grafite-500">{descricao}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* ---------- serviço complementar ---------- */}
        {complementares.map(({ numero, icone, titulo, descricao }) => {
          const Icone = ICONES[icone];
          return (
            <Reveal key={numero} delay={120}>
              <article
                className="mt-5 flex flex-col gap-5 rounded-lg border border-dashed border-areia-400 bg-areia-50/50
                           p-7 transition-colors duration-300 hover:border-bronze-400/70 sm:flex-row sm:items-center sm:gap-7 sm:p-8"
              >
                <span
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-areia-300
                             text-grafite-500"
                  aria-hidden="true"
                >
                  <Icone size={19} strokeWidth={1.6} />
                </span>

                <div className="flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-widest2 text-bronze-700">
                    Serviço complementar
                  </p>
                  <h3 className="mt-2 font-display text-[1.2rem] font-medium tracking-tight text-grafite-900">
                    {titulo}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-grafite-500">
                    {descricao}
                  </p>
                </div>

                <span
                  className="tnum hidden font-display text-[2rem] font-medium leading-none text-areia-400 sm:block"
                  aria-hidden="true"
                >
                  {numero}
                </span>
              </article>
            </Reveal>
          );
        })}

        <Reveal delay={200}>
          <div className="mt-14 flex flex-col items-center gap-4 text-center">
            <p className="text-[15px] text-grafite-500">
              Não encontrou o que precisa? Me conte o seu caso — respondo pessoalmente.
            </p>
            <a
              href={waLink('Olá, Stephanie! Vim pelo site e queria saber se você atende o meu caso.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <WhatsAppGlyph />
              Tirar uma dúvida
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

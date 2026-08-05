import { ArrowRight } from 'lucide-react';
import { services } from '../data/content.js';
import { getIcon } from '../components/icons.js';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

/**
 * Áreas de atuação. Cada card é um link para o contato já com a área no
 * assunto — o visitante que se identifica com uma área não precisa procurar
 * onde clicar depois.
 */
export default function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-titulo" className="section bg-bone-100">
      <div className="container-x">
        <SectionHeading
          id="servicos-titulo"
          eyebrow="Áreas de atuação"
          title="Em que o escritório pode ajudar você"
          description="Liste aqui as áreas que você realmente atende. Menos áreas, descritas com clareza, transmitem mais especialidade do que uma lista longa."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = getIcon(service.icon);

            return (
              <Reveal key={service.title} delay={i * 70}>
                <a
                  href="#contato"
                  className="group flex h-full flex-col rounded-sm border border-bone-300 bg-bone-50 p-7
                             shadow-soft transition-all duration-300 hover:-translate-y-1
                             hover:border-gold-400 hover:shadow-soft-lg"
                >
                  <span
                    aria-hidden
                    className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-marinho-700
                               text-gold-300 transition-colors duration-300 group-hover:bg-marinho-500"
                  >
                    <Icon size={22} strokeWidth={1.6} />
                  </span>

                  <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-ink-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                    {service.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {service.topics.map((topic) => (
                      <li
                        key={topic}
                        className="rounded-sm border border-bone-300 bg-bone-100 px-2.5 py-1
                                   text-[12px] font-bold text-ink-500"
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-6 inline-flex items-center gap-2 pt-1 text-sm font-bold text-marinho-500">
                    Falar sobre este assunto
                    <ArrowRight
                      size={15}
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

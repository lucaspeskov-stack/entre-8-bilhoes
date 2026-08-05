import { Briefcase, Scale, FileText, HeartHandshake, Check, ArrowUpRight } from 'lucide-react';
import { practiceAreas, business } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

const icons = { Briefcase, Scale, FileText, HeartHandshake };

export default function PracticeAreas() {
  return (
    <section id="areas" className="relative bg-bone-100 py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Áreas de atuação"
          title="Quatro frentes, um mesmo cuidado técnico"
          lead="Atuamos de forma concentrada nas matérias abaixo. Se o seu caso for de outra área, dizemos com franqueza e, sempre que possível, indicamos o caminho certo."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {practiceAreas.map((area, i) => {
            const Icon = icons[area.icon] ?? FileText;
            return (
              <Reveal key={area.id} delay={i * 60}>
                <article
                  id={area.id}
                  className="group flex h-full flex-col border border-bone-300 bg-bone-50 p-7 shadow-soft
                             transition-all duration-300 hover:-translate-y-1 hover:border-brass-400/60
                             hover:shadow-soft-lg sm:p-9"
                >
                  <div className="flex items-start gap-4">
                    <span
                      aria-hidden
                      className="flex h-12 w-12 shrink-0 items-center justify-center bg-ink-900 text-brass-300
                                 transition-colors duration-300 group-hover:bg-vinho-600 group-hover:text-white"
                    >
                      <Icon size={22} strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight text-ink-900">
                        {area.name}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{area.summary}</p>
                    </div>
                  </div>

                  <span aria-hidden className="my-7 h-px w-full bg-bone-300" />

                  <ul className="flex-1 space-y-3">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[15px] text-ink-700">
                        <Check
                          size={16}
                          strokeWidth={2.5}
                          aria-hidden
                          className="mt-1 shrink-0 text-brass-600"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={business.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex min-h-[44px] items-center gap-2 self-start text-sm font-bold
                               text-vinho-700 transition-colors duration-200 hover:text-vinho-500"
                  >
                    Tirar uma dúvida sobre {area.name.toLowerCase()}
                    <ArrowUpRight
                      size={16}
                      aria-hidden
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10" delay={120}>
          <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-ink-400">
            Não encontrou a sua situação na lista? Descreva o caso pelo WhatsApp — analisamos e
            respondemos se é matéria em que atuamos.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

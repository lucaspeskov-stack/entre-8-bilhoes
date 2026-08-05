import { ArrowRight, Info } from 'lucide-react';
import { services, servicesNote } from '../data/content.js';
import { getIcon } from '../components/icons.js';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

/**
 * Serviços com tabela de preços. Preço e duração visíveis são o que a cliente
 * mais procura antes de chamar no WhatsApp — esconder isso atrás de "consulte"
 * custa agendamento. Cada cartão leva ao contato com o serviço já escolhido.
 */
export default function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-titulo" className="section bg-marfim-100">
      <div className="container-x">
        <SectionHeading
          id="servicos-titulo"
          eyebrow="Serviços & valores"
          title="O que fazemos por você"
          description="Liste aqui os serviços que você realmente oferece, com preço e duração. Transparência no valor é o que mais reduz a insegurança de quem nunca veio."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = getIcon(service.icon);

            return (
              <Reveal key={service.title} delay={i * 70}>
                <article
                  className="group flex h-full flex-col rounded-lg border border-marfim-300 bg-marfim-50 p-7
                             shadow-soft transition-all duration-300 hover:-translate-y-1
                             hover:border-champanhe-400 hover:shadow-soft-lg"
                >
                  <span
                    aria-hidden
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-noite-900
                               text-champanhe-300 transition-colors duration-300 group-hover:bg-champanhe-500
                               group-hover:text-noite-900"
                  >
                    <Icon size={21} strokeWidth={1.6} />
                  </span>

                  <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-noite-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-relaxed text-noite-500">
                    {service.description}
                  </p>

                  {/* Tabela de preços */}
                  <dl className="mt-6 divide-y divide-marfim-200 border-t border-marfim-200">
                    {service.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-baseline justify-between gap-4 py-3"
                      >
                        <dt className="min-w-0 text-[15px] text-noite-700">
                          {item.name}
                          <span className="tnum ml-2 text-[12px] text-noite-400">{item.time}</span>
                        </dt>
                        <dd className="tnum shrink-0 font-display text-lg font-medium text-noite-900">
                          {item.price}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <a
                    href="#contato"
                    className="mt-6 inline-flex min-h-[44px] items-center gap-2 text-[13px] font-semibold
                               uppercase tracking-[0.12em] text-champanhe-700 transition-colors
                               duration-200 hover:text-noite-900"
                  >
                    Agendar este serviço
                    <ArrowRight
                      size={15}
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-10 flex max-w-3xl items-start gap-3 border-l-2 border-marfim-300 pl-4 text-[13px] leading-relaxed text-noite-400">
            <Info size={15} className="mt-0.5 shrink-0" aria-hidden />
            {servicesNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

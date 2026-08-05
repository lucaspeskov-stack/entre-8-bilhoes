import { MapPin, Navigation, Clock, Train } from 'lucide-react';
import { business } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

// 0 = domingo no JS; a lista do escritório começa na segunda.
const dayIndex = (new Date().getDay() + 6) % 7;

const embedSrc =
  'https://www.google.com/maps?q=' +
  encodeURIComponent('Av. Presidente Vargas, 590, Centro, Rio de Janeiro - RJ, 20071-000') +
  '&output=embed';

export default function MapSection() {
  return (
    <section id="local" className="relative bg-bone-100 py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Onde estamos"
          title="Av. Presidente Vargas, 590 — Sala 413"
          lead="No Centro do Rio, a poucos minutos dos fóruns e tribunais. Atendimento presencial mediante agendamento."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <Reveal className="flex min-h-[340px] overflow-hidden border border-bone-300 shadow-soft-lg lg:min-h-[560px]">
            <iframe
              title={`Mapa da localização do ${business.name}`}
              src={embedSrc}
              className="h-[340px] w-full lg:h-auto lg:min-h-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="card p-7">
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden
                    className="flex h-11 w-11 shrink-0 items-center justify-center bg-ink-900 text-brass-300"
                  >
                    <MapPin size={20} strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold uppercase tracking-wide text-ink-900">
                      Endereço
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-500">
                      Av. Presidente Vargas, 590 — Sala 413
                      <br />
                      Centro, Rio de Janeiro — RJ
                      <br />
                      <span className="tnum">CEP {business.zip}</span>
                    </p>
                    <a
                      href={business.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex min-h-[44px] items-center gap-2 text-sm font-bold
                                 text-vinho-700 transition-colors hover:text-vinho-500"
                    >
                      <Navigation size={15} aria-hidden /> Traçar rota no Google Maps
                    </a>
                  </div>
                </div>

                <span aria-hidden className="my-6 block h-px w-full bg-bone-200" />

                <div className="flex items-start gap-4">
                  <span
                    aria-hidden
                    className="flex h-11 w-11 shrink-0 items-center justify-center border border-bone-300 text-ink-500"
                  >
                    <Train size={20} strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-ink-900">
                      Como chegar
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-500">
                      Próximo às estações de metrô Uruguaiana e Presidente Vargas, com acesso direto
                      por diversas linhas de ônibus e VLT no Centro.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="card p-7">
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden
                    className="flex h-11 w-11 shrink-0 items-center justify-center border border-bone-300 text-ink-500"
                  >
                    <Clock size={20} strokeWidth={1.75} />
                  </span>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-ink-900">
                    Horário de atendimento
                  </h3>
                </div>

                <ul className="mt-5 space-y-1">
                  {business.hours.map((h, i) => {
                    const closed = !h.open;
                    const isToday = i === dayIndex;
                    return (
                      <li
                        key={h.day}
                        className={`flex items-center justify-between px-3 py-2 text-sm ${
                          isToday ? 'bg-bone-200 font-bold text-ink-900' : 'text-ink-500'
                        }`}
                      >
                        <span>
                          {h.day}
                          {isToday && (
                            <span className="ml-2 text-[10px] font-bold uppercase tracking-wide text-vinho-700">
                              hoje
                            </span>
                          )}
                        </span>
                        <span className={`tnum ${closed ? 'text-ink-400' : ''}`}>
                          {closed ? 'Fechado' : `${h.open} – ${h.close}`}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <p className="mt-5 text-xs leading-relaxed text-ink-400">
                  Casos urgentes em matéria criminal — como prisão em flagrante e audiência de
                  custódia — têm atendimento prioritário fora do horário comercial.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

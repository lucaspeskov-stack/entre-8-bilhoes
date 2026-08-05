import { UserCheck, MessagesSquare, Clock, MapPin } from 'lucide-react';
import { business, photos, differentials } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import SmartImage from '../components/SmartImage.jsx';

const icons = { UserCheck, MessagesSquare, Clock, MapPin };

export default function About() {
  return (
    <section id="sobre" className="relative bg-bone-100 py-20 md:py-28">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Foto */}
          <Reveal className="relative order-2 lg:order-1">
            {/* Moldura de latão deslocada — detalhe editorial, atrás da foto */}
            <span
              aria-hidden
              className="pointer-events-none absolute bottom-[-1rem] right-[-1rem] top-4 hidden border border-brass-400/60 sm:block"
              style={{ left: '1rem' }}
            />
            <SmartImage
              src={photos[0].src}
              alt={photos[0].alt}
              className="relative aspect-[4/5] w-full shadow-soft-lg sm:aspect-square lg:aspect-[4/5]"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-ink-900/85 px-6 py-4 backdrop-blur-sm">
              <p className="text-[11px] font-bold uppercase tracking-widest2 text-brass-300">
                Nosso endereço
              </p>
              <p className="mt-1.5 text-sm leading-snug text-bone-100">{business.addressShort}</p>
            </div>
          </Reveal>

          {/* Texto */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="eyebrow">O escritório</span>
              <h2 className="mt-4 h2">
                Advocacia de proximidade,
                <br className="hidden sm:block" /> no centro da cidade
              </h2>
              <span aria-hidden className="rule mt-6 block" />
            </Reveal>

            <Reveal delay={60}>
              <div className="mt-7 space-y-5 text-base leading-relaxed text-ink-500 sm:text-[17px]">
                <p>
                  O <strong className="font-bold text-ink-800">T&amp;M Advogados</strong> é um
                  escritório de advocacia instalado na Av. Presidente Vargas, a poucos minutos dos
                  fóruns e tribunais do Rio de Janeiro. Atendemos pessoas e pequenas empresas em
                  questões trabalhistas, criminais, cíveis e de família.
                </p>
                <p>
                  Trabalhamos com um princípio simples: quem procura um advogado geralmente está
                  passando por um momento difícil e merece ser ouvido com atenção. Por isso, o
                  atendimento é feito diretamente pelo advogado responsável, e cada etapa do
                  processo é explicada em linguagem que qualquer pessoa entende — inclusive quando
                  a resposta honesta é que o caminho será longo ou incerto.
                </p>
                <p>
                  Essa forma de trabalhar é o que sustenta a nota{' '}
                  <strong className="font-bold text-ink-800">
                    {business.rating.toFixed(1).replace('.', ',')}
                  </strong>{' '}
                  no Google, construída ao longo de{' '}
                  <strong className="font-bold text-ink-800">{business.reviewsCount} avaliações</strong>{' '}
                  de quem já passou por aqui.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-x-6 gap-y-7 sm:grid-cols-2">
              {differentials.map((d, i) => {
                const Icon = icons[d.icon] ?? UserCheck;
                return (
                  <Reveal key={d.title} delay={100 + i * 60}>
                    <div className="flex gap-4">
                      <span
                        aria-hidden
                        className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-brass-400/50 text-brass-600"
                      >
                        <Icon size={19} strokeWidth={1.75} />
                      </span>
                      <div>
                        <h3 className="text-[15px] font-bold text-ink-900">{d.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{d.text}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

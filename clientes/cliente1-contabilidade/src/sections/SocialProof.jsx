import { ArrowUpRight, Laptop, ShieldCheck, UserRound } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import StarRating from '../components/StarRating.jsx';
import GoogleGlyph from '../components/GoogleGlyph.jsx';
import CrcSeal from '../components/CrcSeal.jsx';
import { google, selos } from '../data/content.js';

const ICONES = { ShieldCheck, Laptop, UserRound };

/**
 * Faixa de prova social, colada ao hero.
 *
 * Continua em grafite para emendar com o vídeo: a transição para o claro
 * acontece só na seção de serviços, o que dá ao topo da página a leitura de
 * um bloco editorial único.
 *
 * A nota vem de `content.google` no mesmo formato que a API do Places
 * devolve — trocar por dados ao vivo não exige tocar neste componente.
 */
export default function SocialProof() {
  return (
    <section
      id="prova"
      aria-labelledby="prova-titulo"
      className="on-dark border-t border-areia-50/10 bg-grafite-950"
    >
      <h2 id="prova-titulo" className="sr-only">
        Avaliações e credenciais
      </h2>

      <div className="container-x py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-16">
          {/* ---------- nota do Google + credencial ---------- */}
          <div className="flex flex-col gap-7 lg:border-r lg:border-areia-50/10 lg:pr-16">
            <Reveal className="flex items-center gap-6">
              <p
                className="tnum font-display text-[3.25rem] font-medium leading-none text-areia-50"
                aria-hidden="true"
              >
                {google.nota.toLocaleString('pt-BR', {
                  minimumFractionDigits: 1,
                })}
              </p>

              <div className="flex flex-col gap-2">
                <StarRating nota={google.nota} className="h-[18px] w-[18px]" />

                <p className="flex items-center gap-1.5 text-[13px] text-areia-300">
                  <GoogleGlyph className="h-[14px] w-[14px]" />
                  <span>
                    <span className="font-medium text-areia-100">
                      {google.nota.toLocaleString('pt-BR', {
                        minimumFractionDigits: 1,
                      })}
                    </span>{' '}
                    no Google
                  </span>
                </p>

                <a
                  href={google.perfilUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 py-1.5 text-[12px] font-medium text-bronze-300
                           underline-offset-4 transition-colors duration-200 hover:text-bronze-200 hover:underline"
                >
                  Ver avaliações
                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <CrcSeal variant="onDark" className="self-start" />
            </Reveal>
          </div>

          {/* ---------- diferenciais ---------- */}
          <div>
            <ul className="grid gap-5 sm:grid-cols-3 sm:gap-8">
              {selos.map(({ icone, titulo, descricao }, i) => {
                const Icone = ICONES[icone];
                return (
                  <Reveal as="li" key={titulo} delay={140 + i * 70} className="flex gap-3">
                    <Icone
                      size={17}
                      strokeWidth={1.6}
                      className="mt-0.5 shrink-0 text-bronze-400"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-[13px] font-semibold text-areia-50">{titulo}</p>
                      <p className="mt-1 text-[13px] leading-relaxed text-areia-300">{descricao}</p>
                    </div>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

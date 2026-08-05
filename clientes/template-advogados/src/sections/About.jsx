import { Check } from 'lucide-react';
import { about, business } from '../data/content.js';
import { getIcon } from '../components/icons.js';
import PhotoSlot from '../components/PhotoSlot.jsx';
import Reveal from '../components/Reveal.jsx';

/**
 * Sobre — foto/retrato à esquerda e texto à direita, com os pilares de
 * atendimento logo abaixo. É a seção que responde "com quem eu vou falar?",
 * a pergunta que mais trava a decisão de contratar um advogado.
 */
export default function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="section bg-bone-50">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
          {/* Retrato */}
          <Reveal className="relative">
            <PhotoSlot
              hint="Foto do advogado(a)"
              spec="Retrato 4:5 · mín. 1200×1500px"
              ratio="4/5"
              className="rounded-sm shadow-soft-lg"
            />

            {/* Selo de credencial sobreposto */}
            <div className="absolute -bottom-6 right-4 border border-gold-400/50 bg-bone-50 px-5 py-4 shadow-soft sm:right-8">
              <p className="font-display text-lg font-semibold leading-tight text-ink-900">
                {about.signatureName}
              </p>
              <p className="tnum mt-1 text-[11px] font-bold uppercase tracking-widest text-gold-700">
                {business.oab}
              </p>
            </div>
          </Reveal>

          {/* Texto */}
          <div>
            <Reveal>
              <span className="eyebrow">{about.eyebrow}</span>
              <h2 id="sobre-titulo" className="mt-5 h2">
                {about.title}
              </h2>
              <span aria-hidden className="rule mt-6" />
            </Reveal>

            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={80 + i * 70}>
                <p className="mt-6 text-base leading-relaxed text-ink-500 sm:text-[17px]">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={220}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {about.credentials.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-[15px] text-ink-700">
                    <Check size={17} className="mt-0.5 shrink-0 text-gold-600" aria-hidden />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-9 border-l-2 border-gold-400 pl-5">
                <p className="font-display text-xl font-semibold text-ink-900">
                  {about.signatureName}
                </p>
                <p className="mt-1 text-sm text-ink-400">{about.signatureRole}</p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Pilares do atendimento */}
        <div className="mt-24 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {about.pillars.map((pillar, i) => {
            const Icon = getIcon(pillar.icon);

            return (
              <Reveal key={pillar.title} delay={i * 70}>
                <div className="h-full border-t-2 border-bone-300 pt-6 transition-colors duration-300 hover:border-gold-400">
                  <Icon size={22} strokeWidth={1.6} className="text-marinho-500" aria-hidden />
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{pillar.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

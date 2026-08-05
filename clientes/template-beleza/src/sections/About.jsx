import { about, business } from '../data/content.js';
import { getIcon } from '../components/icons.js';
import Photo from '../components/Photo.jsx';
import Reveal from '../components/Reveal.jsx';

/**
 * Sobre — retrato do ambiente à esquerda, história à direita, pilares do
 * atendimento e uma faixa com a galeria do salão. É a seção que responde
 * "como é lá dentro?", a pergunta que mais trava a decisão de marcar horário.
 */
export default function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="section bg-marfim-50">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
          {/* Ambiente */}
          <Reveal className="relative min-w-0">
            <Photo
              src={about.photo.src}
              alt={about.photo.alt}
              ratio="4/5"
              className="rounded-lg shadow-soft-lg"
            />

            {/* Selo sobreposto */}
            <div className="absolute -bottom-6 right-4 rounded-lg border border-champanhe-400/50 bg-marfim-50 px-5 py-4 shadow-soft sm:right-8">
              <p className="font-display text-lg font-medium leading-tight text-noite-900">
                {about.signatureName}
              </p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-champanhe-700">
                {about.signatureRole}
              </p>
            </div>
          </Reveal>

          {/* Texto */}
          <div className="min-w-0">
            <Reveal>
              <span className="eyebrow">{about.eyebrow}</span>
              <h2 id="sobre-titulo" className="mt-5 h2">
                {about.title}
              </h2>
              <span aria-hidden className="rule mt-6" />
            </Reveal>

            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={80 + i * 70}>
                <p className="mt-6 text-base leading-relaxed text-noite-500 sm:text-[17px]">{p}</p>
              </Reveal>
            ))}

            {/* Pilares do atendimento */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {about.pillars.map((pillar, i) => {
                const Icon = getIcon(pillar.icon);

                return (
                  <Reveal key={pillar.title} delay={160 + i * 70}>
                    <div className="border-t-2 border-marfim-300 pt-5 transition-colors duration-300 hover:border-champanhe-400">
                      <Icon size={21} strokeWidth={1.6} className="text-champanhe-600" aria-hidden />
                      <h3 className="mt-3 font-display text-xl font-medium text-noite-900">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-noite-500">
                        {pillar.text}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>

        {/* Galeria do ambiente */}
        <div className="mt-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="eyebrow">O ambiente</span>
                <h3 className="mt-4 font-display text-[1.75rem] font-medium tracking-tight text-noite-900 sm:text-[2rem]">
                  Um lugar para ficar à vontade
                </h3>
              </div>
              <p className="max-w-md text-[15px] leading-relaxed text-noite-400">
                Troque estas fotos pelas do seu salão — o ambiente é o que convence a cliente a
                atravessar a cidade em vez de ir no que fica na esquina.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {about.gallery.map((photo, i) => (
              <Reveal key={photo.src} delay={i * 80} className="min-w-0">
                <Photo
                  src={photo.src}
                  alt={photo.alt}
                  ratio="4/5"
                  className="rounded-lg shadow-soft"
                  imgClassName="transition-transform duration-[600ms] hover:scale-[1.04]"
                />
              </Reveal>
            ))}
          </div>

          <Reveal delay={140}>
            <p className="mt-6 text-center text-[13px] text-noite-400">
              Fotos do salão de {business.name} — substitua pelas suas em{' '}
              <code className="rounded bg-marfim-200 px-1.5 py-0.5 text-[12px]">public/fotos/</code>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

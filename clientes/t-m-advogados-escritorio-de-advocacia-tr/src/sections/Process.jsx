import { process } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

/**
 * "Como funciona" sobre fundo grafite — quebra o ritmo da página e funciona
 * como âncora de confiança antes das avaliações.
 */
export default function Process() {
  return (
    <section id="como-funciona" className="relative overflow-hidden bg-ink-900 py-20 md:py-28">
      {/* Textura sutil de linhas — evoca papel timbrado, sem competir com o texto */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, #C8A356 0 1px, transparent 1px 88px)',
        }}
      />

      <div className="container-x relative">
        <SectionHeading
          tone="light"
          eyebrow="Como funciona"
          title="Do primeiro contato à sentença, sem você no escuro"
          lead="Um processo é longo e cheio de termos difíceis. Nosso compromisso é que você entenda em que ponto ele está — e o que vem a seguir."
        />

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal as="li" key={p.step} delay={i * 70} className="relative">
              {/* Conector entre etapas (apenas no desktop) */}
              {i < process.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-14 top-6 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-brass-400/40 to-transparent lg:block"
                />
              )}

              <span
                aria-hidden
                className="relative flex h-12 w-12 items-center justify-center border border-brass-400/40 bg-ink-800"
              >
                <span className="tnum font-display text-lg font-semibold text-brass-300">
                  {p.step}
                </span>
              </span>

              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-bone-50">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-bone-200/85">{p.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

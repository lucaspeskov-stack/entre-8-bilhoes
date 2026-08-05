import { CalendarClock, Info, TrendingUp } from 'lucide-react';
import { portfolio } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

/**
 * Portfólio — casos & resultados, sempre anônimos.
 *
 * A publicidade na advocacia é regulada (Código de Ética da OAB e Provimento
 * 205/2021): pode-se informar o que foi feito, não prometer resultado. Por isso
 * cada card descreve situação → resultado obtido, e a seção fecha com a
 * ressalva de que resultados passados não garantem resultados futuros.
 */
export default function Portfolio() {
  return (
    <section id="portfolio" aria-labelledby="portfolio-titulo" className="section bg-bone-100">
      <div className="container-x">
        <SectionHeading
          id="portfolio-titulo"
          eyebrow={portfolio.eyebrow}
          title={portfolio.title}
          description={portfolio.description}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.cases.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <article
                className="group flex h-full flex-col overflow-hidden rounded-sm border border-bone-300
                           bg-bone-50 shadow-soft transition-all duration-300 hover:-translate-y-1
                           hover:shadow-soft-lg"
              >
                {/* Faixa da área do direito */}
                <div className="flex items-center justify-between gap-3 bg-marinho-700 px-6 py-3">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gold-300">
                    {item.area}
                  </span>
                  <span className="tnum inline-flex items-center gap-1.5 text-[11px] font-bold text-bone-200">
                    <CalendarClock size={13} aria-hidden />
                    {item.duration}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-[1.4rem] font-semibold leading-snug tracking-tight text-ink-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-500">
                    {item.situation}
                  </p>

                  <div className="mt-6 flex items-center gap-3 border-t border-bone-200 pt-5">
                    <span
                      aria-hidden
                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-sm
                                 bg-gold-100 text-gold-700"
                    >
                      <TrendingUp size={17} strokeWidth={1.8} />
                    </span>
                    <span>
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-ink-400">
                        Resultado
                      </span>
                      <span className="tnum block font-display text-lg font-semibold text-ink-900">
                        {item.result}
                      </span>
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-10 flex max-w-3xl items-start gap-3 border-l-2 border-bone-300 pl-4 text-[13px] leading-relaxed text-ink-400">
            <Info size={15} className="mt-0.5 shrink-0" aria-hidden />
            {portfolio.disclaimer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

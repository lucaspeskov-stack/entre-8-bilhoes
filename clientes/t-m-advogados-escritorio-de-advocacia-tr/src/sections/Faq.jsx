import { useState } from 'react';
import { Plus } from 'lucide-react';
import { faq } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

/**
 * Acordeão em <details>/<summary> nativo: acessível por teclado, anunciado
 * corretamente por leitores de tela e funciona mesmo sem JS.
 */
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="duvidas" className="relative bg-bone-200/60 py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="As perguntas que mais recebemos"
          lead="Se a sua dúvida não estiver aqui, é só perguntar pelo WhatsApp — respondemos sem compromisso."
        />

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-bone-300 border-y border-bone-300">
          {faq.map((item, i) => (
            <Reveal key={item.q} delay={i * 40}>
              <details
                open={openIndex === i}
                onToggle={(e) => e.currentTarget.open && setOpenIndex(i)}
                className="group"
              >
                <summary
                  className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-4
                             py-5 text-left transition-colors duration-200 hover:text-vinho-700
                             [&::-webkit-details-marker]:hidden"
                >
                  <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-ink-900 group-hover:text-vinho-700 sm:text-xl">
                    {item.q}
                  </h3>
                  <span
                    aria-hidden
                    className="flex h-9 w-9 shrink-0 items-center justify-center border border-bone-400
                               text-ink-500 transition-transform duration-300 group-open:rotate-45
                               group-open:border-vinho-500 group-open:text-vinho-600"
                  >
                    <Plus size={17} strokeWidth={2} />
                  </span>
                </summary>

                <p className="pb-6 pr-12 text-[15px] leading-relaxed text-ink-500">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

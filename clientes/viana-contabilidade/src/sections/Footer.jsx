import { Instagram } from 'lucide-react';
import Logo from '../components/Logo.jsx';
import WhatsAppGlyph from '../components/WhatsAppGlyph.jsx';
import { brand, navLinks, waLink } from '../data/content.js';

/**
 * Rodapé — assinatura, navegação secundária e credencial.
 *
 * Encerra o site com o mesmo trio que abre: quem é, onde falar com ela e sob
 * qual registro profissional. CNPJ e e-mail ficam de fora até haver o dado
 * real (ver README): campo institucional vazio ou inventado custa mais
 * confiança do que a ausência dele.
 */
export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="on-dark border-t border-areia-50/10 bg-grafite-950">
      <div className="container-x py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* ---------- assinatura ---------- */}
          <div className="max-w-xs">
            <Logo variant="onDark" />
            <p className="mt-5 text-[13px] leading-relaxed text-areia-300">
              Contabilidade para pessoas físicas, MEIs e pequenas empresas, com atendimento
              próximo e 100% online.
            </p>
            <p className="tnum mt-4 text-[12px] text-areia-300">{brand.crc}</p>
          </div>

          {/* ---------- navegação ---------- */}
          <nav aria-label="Navegação do rodapé">
            <p className="text-[10px] font-semibold uppercase tracking-widest2 text-bronze-300">
              Navegação
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-1">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="inline-block py-1.5 text-[14px] text-areia-100 underline-offset-4
                               transition-colors duration-200 hover:text-bronze-300 hover:underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ---------- canais ---------- */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest2 text-bronze-300">
              Onde me encontrar
            </p>

            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 py-1.5 text-[14px] text-areia-100
                             underline-offset-4 transition-colors duration-200 hover:text-bronze-300 hover:underline"
                >
                  <WhatsAppGlyph className="h-[15px] w-[15px]" />
                  <span className="tnum">{brand.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={brand.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 py-1.5 text-[14px] text-areia-100
                             underline-offset-4 transition-colors duration-200 hover:text-bronze-300 hover:underline"
                >
                  <Instagram size={15} strokeWidth={1.7} aria-hidden="true" />
                  {brand.instagram}
                </a>
              </li>
            </ul>

            <p className="mt-6 max-w-[15rem] text-[12px] leading-relaxed text-areia-300">
              Serviço complementar: elaboração de contratos e documentos.
            </p>
          </div>
        </div>

        {/* ---------- linha final ---------- */}
        <div className="mt-12 flex flex-col gap-3 border-t border-areia-50/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-areia-300">
            © {ano} {brand.nome} · {brand.negocio}
          </p>
          <p className="text-[12px] text-areia-300">
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

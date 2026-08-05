import { ArrowUp, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { business, footer, navLinks, services } from '../data/content.js';
import Logo from '../components/Logo.jsx';

/**
 * Rodapé. Repete os dados de contato (muita gente rola direto até o fim para
 * procurá-los) e traz a nota de conformidade com o Código de Ética da OAB.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark bg-ink-950 pt-16 text-bone-200">
      <div className="container-x">
        <div className="grid gap-10 pb-14 md:grid-cols-2 lg:grid-cols-[minmax(0,4fr)_minmax(0,3fr)_minmax(0,3fr)_minmax(0,3fr)]">
          <div>
            <Logo tone="light" />
            <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-bone-300/85">
              {footer.about}
            </p>
            <p className="tnum mt-5 text-[11px] font-bold uppercase tracking-widest text-gold-300">
              {business.oab}
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="text-[11px] font-bold uppercase tracking-widest2 text-gold-300">
              Navegação
            </h2>
            <ul className="mt-5 space-y-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="flex min-h-[40px] items-center text-[15px] text-bone-300/85
                               transition-colors duration-200 hover:text-bone-50"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-widest2 text-gold-300">
              Áreas de atuação
            </h2>
            <ul className="mt-5 space-y-1">
              {services.map((s) => (
                <li key={s.title}>
                  <a
                    href="#servicos"
                    className="flex min-h-[40px] items-center text-[15px] text-bone-300/85
                               transition-colors duration-200 hover:text-bone-50"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-widest2 text-gold-300">
              Contato
            </h2>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li>
                <a
                  href={business.phoneHref}
                  className="tnum flex min-h-[40px] items-center gap-3 text-bone-300/85
                             transition-colors duration-200 hover:text-bone-50"
                >
                  <Phone size={16} className="shrink-0 text-gold-400" aria-hidden />
                  {business.phoneLabel}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="flex min-h-[40px] items-center gap-3 break-all text-bone-300/85
                             transition-colors duration-200 hover:text-bone-50"
                >
                  <Mail size={16} className="shrink-0 text-gold-400" aria-hidden />
                  {business.email}
                </a>
              </li>
              <li className="flex items-start gap-3 pt-1 text-bone-300/85">
                <MapPin size={16} className="mt-1 shrink-0 text-gold-400" aria-hidden />
                <address className="not-italic leading-relaxed">
                  {business.street}
                  <br />
                  {business.neighborhood} — {business.city}/{business.state}
                </address>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-2.5">
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do escritório"
                className="inline-flex h-11 w-11 items-center justify-center rounded-sm border
                           border-bone-50/15 transition-colors duration-200 hover:bg-white/10"
              >
                <Instagram size={17} aria-hidden />
              </a>
              <a
                href={business.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn do escritório"
                className="inline-flex h-11 w-11 items-center justify-center rounded-sm border
                           border-bone-50/15 transition-colors duration-200 hover:bg-white/10"
              >
                <Linkedin size={17} aria-hidden />
              </a>
            </div>
          </div>
        </div>

        {/* Nota de conformidade — obrigatória na publicidade da advocacia */}
        <p className="border-t border-bone-50/10 py-7 text-[12.5px] leading-relaxed text-bone-300/60">
          {footer.legal}
        </p>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-bone-50/10 py-7 sm:flex-row sm:items-center">
          <p className="tnum text-[13px] text-bone-300/70">
            © {year} {business.name}. Todos os direitos reservados.
          </p>

          <a
            href="#top"
            className="inline-flex min-h-[44px] items-center gap-2 text-[13px] font-bold text-bone-300/85
                       transition-colors duration-200 hover:text-gold-300"
          >
            Voltar ao topo
            <ArrowUp size={15} aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}

import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { business, navLinks } from '../data/content.js';
import Logo from './Logo.jsx';

/**
 * Header fixo — transparente sobre o hero e sólido a partir do scroll.
 * O estado sólido não é enfeite: sem ele o texto do menu perderia contraste
 * ao passar por cima das seções claras.
 */
export default function Navbar({ offset = 0 }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Rota de escape previsível: Esc fecha o menu mobile.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      style={{ top: offset }}
      className={`fixed inset-x-0 z-50 transition-all duration-300 ${
        solid
          ? 'border-b border-bone-300 bg-bone-50/95 shadow-soft backdrop-blur-md'
          : 'border-b border-transparent bg-gradient-to-b from-ink-950/60 to-transparent'
      }`}
    >
      <nav
        aria-label="Navegação principal"
        className="container-x flex h-[72px] items-center justify-between gap-4 md:h-20"
      >
        <a
          href="#top"
          aria-label={`${business.name} — voltar ao início`}
          className="flex min-h-[44px] min-w-0 items-center rounded-sm"
        >
          <Logo tone={solid ? 'dark' : 'light'} adaptive />
        </a>

        {/* Navegação desktop */}
        <div className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`whitespace-nowrap rounded-sm px-3 py-2 text-sm font-bold transition-colors duration-200 ${
                solid
                  ? 'text-ink-500 hover:bg-bone-200 hover:text-ink-900'
                  : 'text-bone-100 hover:bg-white/10 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={business.phoneHref}
            /* Visível do tablet até `xl`, onde o menu completo assume a barra.
               A partir daí o telefone segue no menu, na seção de contato e no
               rodapé — repeti-lo aqui espremeria o nome do escritório. */
            className={`hidden min-h-[44px] items-center gap-2 whitespace-nowrap rounded-sm px-3
                        text-sm font-bold transition-colors duration-200
                        md:inline-flex xl:hidden ${
                          solid
                            ? 'text-ink-800 hover:text-marinho-500'
                            : 'text-bone-100 hover:text-white'
                        }`}
          >
            <Phone size={15} aria-hidden />
            <span className="tnum">{business.phoneLabel}</span>
          </a>

          <a
            href="#contato"
            className="btn-primary hidden !min-h-[44px] whitespace-nowrap !px-5 !py-2.5 sm:inline-flex"
          >
            Agendar consulta
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className={`inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-sm
                        transition-colors duration-200 xl:hidden ${
                          solid ? 'text-ink-900 hover:bg-bone-200' : 'text-bone-50 hover:bg-white/10'
                        }`}
          >
            {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
          </button>
        </div>
      </nav>

      {/* Navegação mobile */}
      {open && (
        <div
          id="menu-mobile"
          className="animate-fade-down border-t border-bone-200 bg-bone-50 xl:hidden"
        >
          <div className="container-x flex flex-col py-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[48px] items-center border-b border-bone-200 text-[15px]
                           font-bold text-ink-700 transition-colors duration-200 last:border-b-0
                           hover:text-marinho-500"
              >
                {l.label}
              </a>
            ))}

            <div className="mt-4 flex flex-col gap-2.5 pb-2">
              <a href="#contato" onClick={() => setOpen(false)} className="btn-primary w-full">
                Agendar consulta
              </a>
              <a href={business.phoneHref} className="btn-outline w-full">
                <Phone size={16} aria-hidden />
                <span className="tnum">{business.phoneLabel}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

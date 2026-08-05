import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import TemplateBar from './components/TemplateBar.jsx';
import WhatsAppFab from './components/WhatsAppFab.jsx';
import Hero from './sections/Hero.jsx';
import Services from './sections/Services.jsx';
import About from './sections/About.jsx';
import Reviews from './sections/Reviews.jsx';
import MapSection from './sections/MapSection.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';

/**
 * Ordem das seções seguindo a jornada de quem procura um salão:
 * desejo (hero) → o que fazem e quanto custa (serviços) → como é o lugar
 * (sobre + ambiente) → outras clientes gostaram (avaliações) → onde fica
 * (mapa) → marcar horário (contato).
 */
export default function App() {
  // Altura real da faixa do modelo — o header fixo desce na mesma medida.
  const [barHeight, setBarHeight] = useState(0);

  return (
    <>
      {/* Atalho de teclado: o primeiro Tab da página pula a navegação */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60]
                   focus:rounded-full focus:bg-noite-900 focus:px-5 focus:py-3 focus:text-sm
                   focus:font-semibold focus:text-marfim-50"
      >
        Ir para o conteúdo
      </a>

      {/* Remova a linha abaixo ao entregar o site já personalizado. */}
      <TemplateBar onHeightChange={setBarHeight} />

      <Navbar offset={barHeight} />

      <main id="conteudo">
        <Hero />
        <Services />
        <About />
        <Reviews />
        <MapSection />
        <Contact />
      </main>

      <Footer />

      <WhatsAppFab />
    </>
  );
}

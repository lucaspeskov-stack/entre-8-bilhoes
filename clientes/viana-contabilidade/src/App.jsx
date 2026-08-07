import Navbar from './components/Navbar.jsx';
import WhatsAppFab from './components/WhatsAppFab.jsx';
import Hero from './sections/Hero.jsx';
import SocialProof from './sections/SocialProof.jsx';
import Services from './sections/Services.jsx';
import Process from './sections/Process.jsx';
import Testimonials from './sections/Testimonials.jsx';
import Faq from './sections/Faq.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';

export default function App() {
  return (
    <>
      {/* Primeiro tabulável da página: pula o header direto para o conteúdo */}
      <a
        href="#conteudo"
        className="sr-only rounded-full bg-grafite-900 px-5 py-3 text-sm font-semibold text-areia-50
                   focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
      >
        Pular para o conteúdo
      </a>

      <Navbar />

      <main id="conteudo">
        <Hero />
        <SocialProof />
        <Services />
        <Process />
        <Testimonials />
        <Faq />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  );
}

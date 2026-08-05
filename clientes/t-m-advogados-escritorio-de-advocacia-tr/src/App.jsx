import Navbar from './components/Navbar.jsx';
import WhatsAppFab from './components/WhatsAppFab.jsx';
import Hero from './sections/Hero.jsx';
import PracticeAreas from './sections/PracticeAreas.jsx';
import Process from './sections/Process.jsx';
import Reviews from './sections/Reviews.jsx';
import About from './sections/About.jsx';
import Faq from './sections/Faq.jsx';
import MapSection from './sections/MapSection.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-dvh">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100]
                   focus:rounded-sm focus:bg-vinho-600 focus:px-4 focus:py-3 focus:text-sm
                   focus:font-bold focus:text-white"
      >
        Pular para o conteúdo
      </a>

      <Navbar />

      <main id="conteudo">
        <Hero />
        <PracticeAreas />
        <Process />
        <Reviews />
        <About />
        <Faq />
        <MapSection />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}

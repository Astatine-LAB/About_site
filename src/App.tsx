import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ShowcaseSection from '@/components/sections/ShowcaseSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

/**
 * Renders the top-level site layout.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-black selection:text-white">
      <Header />

      <main>
        <HeroSection />
        <ServicesSection />
        <ShowcaseSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

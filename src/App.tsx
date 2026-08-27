import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ShowcaseSection from '@/components/sections/ShowcaseSection';
import Footer from '@/components/Footer';

/**
 * 사이트의 최상위 레이아웃을 렌더링합니다.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-black selection:text-white">
      <Header />

      <main>
        <HeroSection />
        <ServicesSection />
        <ShowcaseSection />
      </main>

      <Footer />
    </div>
  );
}

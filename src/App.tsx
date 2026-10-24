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
    <div className="site-shell">
      <a className="skip-link" href="#main-content">본문으로 건너뛰기</a>
      <Header />

      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <ShowcaseSection />
      </main>

      <Footer />
    </div>
  );
}

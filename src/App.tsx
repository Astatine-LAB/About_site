import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ShowcaseSection from '@/components/sections/ShowcaseSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

/**
 * 메인 앱 컴포넌트
 * 페이지 레이아웃(헤더, 메인, 푸터)과 각 섹션을 조합하여 최종 페이지를 렌더링
 */
export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-violet-200 selection:text-violet-900">
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
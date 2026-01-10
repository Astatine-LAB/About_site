
import { useState, useEffect } from 'react';
import astn_logo from './assets/image/astn/ASTN_LOGO.webp';
import { Menu, X } from 'lucide-react';
import { cn } from './lib/utils';
import { Button } from './components/ui/button';

// Section Components
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import ShowcaseSection from './components/sections/ShowcaseSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 컴포넌트 마운트 시 body의 전역 스타일을 설정합니다.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 페이지 레이아웃(헤더, 메인, 푸터)과 각 섹션을 조합하여 최종 페이지를 렌더링합니다.
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-violet-200 selection:text-violet-900">
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm border-b border-slate-100" : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <div className='flex items-center gap-3 z-50'>
            <img src={astn_logo} className='h-8' alt="Astatine LAB Logo" />
            <span className="text-lg font-bold tracking-tight">Astatine LAB</span>
          </div>

          <nav className="hidden md:flex gap-8 items-center">
            {['Home', 'Services', 'Showcase'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item}
              </a>
            ))}
            <Button variant="default" className="bg-slate-900 text-white hover:bg-slate-800" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              프로젝트 보기
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden z-50 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          {['Home', 'Services', 'Showcase', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-2xl font-bold text-slate-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </header>

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
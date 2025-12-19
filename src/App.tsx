
import { useEffect } from 'react';
import astn_logo from './assets/image/astn/ASTN_LOGO.webp';

// Section Components
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import ShowcaseSection from './components/sections/ShowcaseSection';
import ContactSection from './components/sections/ContactSection';

export default function App() {
  // 컴포넌트 마운트 시 body의 전역 스타일을 설정합니다.
  useEffect(() => {
    document.body.style.backgroundColor = '#fbfbfd';
    document.body.style.color = '#1d1d1f';
    document.body.style.fontFamily = "'Inter', 'Noto Sans KR', sans-serif";
    document.documentElement.classList.add('scroll-smooth');
  }, []);

  // 페이지 레이아웃(헤더, 메인, 푸터)과 각 섹션을 조합하여 최종 페이지를 렌더링합니다.
  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ background: 'rgba(251, 251, 253, 0.8)', backdropFilter: 'saturate(180%) blur(20px)', WebkitBackdropFilter: 'saturate(180%) blur(20px)' }}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className='flex items-center gap-3'>
            <img src={astn_logo} className='h-8' alt="Astatine LAB Logo" />
            <h1 className="text-xl font-bold text-[#1d1d1f]">Astatine LAB</h1>
          </div>
          <nav className="hidden md:flex">
            <a href="#contact" className="font-bold text-gray-700 transition-colors" style={{ textShadow: '0 0 1px #39FF14, 0 0 3px #39FF14' }}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <HeroSection />
        <ServicesSection />
        <ShowcaseSection />
        <ContactSection />
      </main>

      <footer className="bg-white py-12">
        <div className="container mx-auto px-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Astatine LAB. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
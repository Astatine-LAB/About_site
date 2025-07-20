//@ts-nocheck
import { useEffect } from 'react';
import { Button } from './components/ui/button';
import AnimatedSection from './components/animated-section';
import { Card, CardContent, CardFooter } from './components/ui/card';
import logo from './assets/image/logo.webp'
import logo_sample from './assets/image/logo_sample.png'

// ICON
import { FaBox } from "react-icons/fa";
import { AiOutlineSolution } from "react-icons/ai";
import { RiNotionFill, RiJavaLine } from "react-icons/ri";
import { SiGithub, SiMinutemailer } from "react-icons/si";

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center text-center pt-24 pb-16">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-5xl md:text-7xl font-bold text-[#1d1d1f] leading-tight mb-4">
            상상을
            <span style={{ background: 'linear-gradient(90deg, #7822d3, #0d288a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              코드로
            </span>
            <br />
            <span style={{ background: 'linear-gradient(90deg, #0071E3, #27A2F8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              아이디어를 현실로.
            </span>
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={150}>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            마인크래프트에 관심있는 개발자와 인프라 관리하는 사람들이 합쳐서 만든 마인크래프트 서버 프로젝트 입니다
          </p>
        </AnimatedSection>
        <AnimatedSection delay={300}>
          <div className="flex justify-center items-center gap-4">
            <Button onClick={() => { window.location.href = 'https://jaxple.notion.site/ASTATINE-LAB-cfd82eaa93fa40a28715a1ba5a0f03bf?source=copy_link/' }}>
              <RiNotionFill /> 노션 방문
            </Button>
            <Button variant="outline" onClick={() => { window.location.href = 'https://github.com/Astatine-LAB' }}>
              <SiGithub /> 깃허브 방문
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section >
);

const ServicesSection = () => {
  const services = [
    { icon: <FaBox size={30} />, title: "마인크래프트 개발", description: "서버, 플러그인, 모드 등 마인크래프트와 관련된 모든 것을 개발합니다. 당신만의 특별한 서버를 현실로 만들어보세요.", delay: 100 },
    { icon: <AiOutlineSolution size={30} />, title: "맞춤형 솔루션", description: "고객의 요구사항을 정확히 분석하여 비즈니스에 최적화된 맞춤형 Java 애플리케이션과 시스템을 구축합니다.", delay: 200 },
    { icon: <RiJavaLine size={30} />, title: "통합 Java 개발", description: "기획부터 설계, 개발, 배포, 유지보수까지. 프로젝트의 전 과정을 책임지는 포괄적인 개발 서비스를 제공합니다.", delay: 300 },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-[#1d1d1f]">Our develop</h3>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">Astatine LAB은 Java 개발에 대한 깊은 전문성을 바탕으로 솔류션 제공과 프로그램을 개발합니다.</p>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service) => (
            <AnimatedSection key={service.title} delay={service.delay} className="text-center p-8">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gray-100 mx-auto mb-6">{service.icon}</div>
              <h4 className="text-2xl font-bold text-[#1d1d1f] mb-2">{service.title}</h4>
              <p className="text-gray-600">{service.description}</p>

            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section id="about" className="py-20 md:py-40 bg-[#fbfbfd]">
    <div className="container mx-auto px-6 text-center">
      <AnimatedSection className="max-w-4xl mx-auto">
        <h3 className="text-4xl md:text-6xl font-bold text-[#1d1d1f] leading-tight">
          우리의 약속은 단 하나.<br />
          <span className="text-blue-600">당신이 필요로 하는 바로 그 기능을<br />안정적으로 제공하는 것.</span>
        </h3>
      </AnimatedSection>
    </div>
  </section>
);

const ShowcaseSection = () => {
  const projects = [
    { imgSrc: logo_sample, alt: "[Project Alpha 이미지]", title: "R10", description: "Cornerstone of the Astatine Project.", prlink: "https://github.com/Astatine-LAB/R10", delay: 0 },
    { imgSrc: "https://placehold.co/600x400/e2e8f0/4a5568?text=Comming+soon", alt: "[Project Beta 이미지]", title: "Comming soon!", description: "", prlink: undefined, delay: 150 },
  ];

  return (
    <section id="showcase" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-[#1d1d1f]">Our Projects</h3>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">우리의 코드로 현실이 된 수많은 프로젝트들을 만나보세요.</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <AnimatedSection key={project.title} delay={project.delay}>
              <Card className="bg-gray-100 border-none">
                <CardContent>
                  <img src={project.imgSrc} alt={project.alt} className="rounded-lg mb-6 w-full h-auto" />
                  <h4 className="text-2xl font-bold">{project.title}</h4>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                </CardContent>
                <CardFooter>
                  {
                    project.prlink != undefined ? <Button variant="outline" onClick={() => { window.location.href = 'https://github.com/Astatine-LAB' }}>
                      <SiGithub /> 링크
                    </Button>
                      : <></>
                  }

                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section id="contact" className="py-20 md:py-32 bg-[#fbfbfd]">
    <div className="container mx-auto px-6 text-center">
      <AnimatedSection>
        <h3 className="text-4xl md:text-5xl font-bold mb-1">저희들이 만들고 있는 세계를 </h3>
        <h3 className="text-4xl md:text-5xl font-bold">같이 개발해볼까요?</h3>
        <p className="text-gray-600 mt-4 mb-8 max-w-2xl mx-auto">Astatine LAB과 함께 당신의 아이디어를 현실로 만들고, 새로운 가능성을 탐험해 보세요.</p>
        <a href="mailto:contact@astatinelab.com">
          <Button className='bg-gray-700 text-white' variant="secondary" size="lg"><SiMinutemailer color='#38bdf8' /> 이메일 보내기</Button>
        </a>
      </AnimatedSection>
    </div>
  </section>
);


export default function App() {
  useEffect(() => {
    document.body.style.backgroundColor = '#fbfbfd';
    document.body.style.color = '#1d1d1f';
    document.body.style.fontFamily = "'Inter', 'Noto Sans KR', sans-serif";
    document.documentElement.classList.add('scroll-smooth');
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ background: 'rgba(251, 251, 253, 0.8)', backdropFilter: 'saturate(180%) blur(20px)', WebkitBackdropFilter: 'saturate(180%) blur(20px)' }}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className='flex'>
            <img src={logo} className='h-8' />
            <h1 className="text-xl font-bold text-[#1d1d1f]">Astatine LAB</h1>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">개발</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">우리의 약속</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">지원하기</a>
          </nav>

        </div>
      </header>
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ShowcaseSection />
        <ContactSection />
      </main>
      <footer className="bg-white py-12">
        <div className="container mx-auto px-6 text-center text-gray-500">
          <p>&copy; 2025 Astatine LAB. All Rights Reserved.</p>

        </div>
      </footer>
    </>
  );
}

//@ts-nocheck
// --- React 및 커스텀 컴포넌트 import ---
import { useEffect } from 'react';
import { Button } from './components/ui/button';
import AnimatedSection from './components/animated-section';
import { Card, CardContent, CardFooter } from './components/ui/card';

// --- 이미지 애셋 import ---
import astn_logo from './assets/image/astn/ASTN_LOGO.webp';

// --- 프로젝트 이미지 애셋 import ---
import cosmos_project_logo from './assets/image/project/COSMOS_PROJECT_LOGO.png';
import r10_project_banner from './assets/image/project/R10_PROJECT_LOGO.png';

// --- 아이콘 라이브러리 import ---
// https://react-icons.github.io/react-icons/search/#q=linkedin
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { RiCodeView, RiNotionFill } from "react-icons/ri";
import { LuClipboardCheck } from "react-icons/lu";
import { TfiHarddrives } from "react-icons/tfi";
import { SiGithub } from "react-icons/si";

// =================================================================================
// 데이터 상수 영역
// UI 렌더링에 사용될 정적 데이터를 이곳에서 관리합니다.
// =================================================================================

const SERVICES_DATA = [
  { icon: <RiCodeView size={30} />, title: "Java기반 애플리케이션", description: "요청한 모든 기능을 개발하고 제공해요.", delay: 100 },
  { icon: <LuClipboardCheck size={30} />, title: "최적화 솔루션", description: "서버 컨셉과 맞는 적절한 최적화를 제공해요.", delay: 200 },
  { icon: <TfiHarddrives size={30} />, title: "인프라 솔루션", description: "네트워크 구성과 서버 장비까지 통합 솔루션을 제공해요.", delay: 300 },
];

const PROJECTS_DATA = [
{
    imgSrc: r10_project_banner,
    alt: "R10 Project Banner",
    title: "R10 Project",
    description: "Minecraft Astatine Project 서버에 기반이 되는 기능을 제공해요.",
    delay: 0,
    buttons: [ 
      { 
        icon: <SiGithub />, 
        text: "code", 
        url: "https://github.com/JAXPLE/R10-PUBLIC", 
        hoverClass: "hover:bg-black hover:text-white" 
      },
      { 
        icon: <RiNotionFill />, 
        text: "Notion", 
        url: "https://jaxple.notion.site/R10-Project-1ae92da7e82181e6b595d3dd3128d484", 
        hoverClass: "hover:bg-gray-400" 
      }
    ]
  },
  {
    imgSrc: cosmos_project_logo,
    alt: "COSMOS Project Logo",
    title: "Cosmos Project",
    description: "Trading View Webhook을 활용한 코인 정보를 고객에게 제공해요.",
    delay: 150,
    buttons: [ 
      { 
        icon: <RiNotionFill />, 
        text: "Notion", 
        url: "https://jaxple.notion.site/COSMOS-Project-23592da7e821809dab4eea238f51fd43?source=copy_link", 
        hoverClass: "hover:bg-gray-400" 
      }
    ]
  },
];

const CONTACT_LINKS = [
    { icon: <FaDiscord />, text: "Discord", url: "https://discord.gg/Ek2HXfJUQ3", hoverClass: "hover:bg-[#5865F2] hover:text-white" },
    { icon: <SiGithub />, text: "Github", url: "https://github.com/Astatine-LAB", hoverClass: "hover:bg-black hover:text-white" },
    { icon: <FaLinkedin />, text: "Linkedin", url: "https://linkedin.com/company/astatine-lab", hoverClass: "hover:bg-[#0A66C2] hover:text-white" },
    { icon: <RiNotionFill />, text: "Notion", url: "https://jaxple.notion.site/ASTATINE-LAB-cfd82eaa93fa40a28715a1ba5a0f03bf?source=copy_link/", hoverClass: "hover:bg-gray-400" },
];


// =================================================================================
// 재사용 UI 컴포넌트
// =================================================================================

/**
 * 그라데이션 효과가 적용된 텍스트를 렌더링하는 컴포넌트
 */
const GradientText = ({ children, gradient }) => (
  <span style={{
    background: gradient,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 3px 15px rgba(120, 34, 211, 0.25)'
  }}>
    {children}
  </span>
);


// =================================================================================
// 페이지 섹션별 컴포넌트
// =================================================================================

/**
 * 페이지 최상단에 위치하는 Hero 섹션
 */
const HeroSection = () => (
  <section className="flex min-h-screen items-center justify-center pt-24 pb-16 text-center">
    <div className="container mx-auto px-6">
      <div className="mx-auto max-w-4xl">
        <AnimatedSection>
          <h2 className="leading-tight mb-4 text-5xl font-bold text-[#1d1d1f] md:text-7xl">
            아이디어를{' '}
            <GradientText gradient='linear-gradient(90deg, #7822d3, #0071E3)'>
              코드로.
            </GradientText>
            <br />
            코드를{' '}
            <GradientText gradient='linear-gradient(90deg, #B45309, #FBBF24)'>
              가치로.
            </GradientText>
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={150}>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 md:text-xl">
            사용자 요구에 맞춘 다양한 기능을 구현하고, 맞춤형 솔루션을 제공해요.
          </p>
        </AnimatedSection>
      </div>
    </div>
  </section >
);

/**
 * 제공하는 서비스 목록을 보여주는 Services 섹션
 */
const ServicesSection = () => (
  <section id="services" className="bg-white py-20 md:py-32">
    <div className="container mx-auto px-6">
      <AnimatedSection className="mb-16 text-center">
        <h3 className="text-4xl font-bold text-[#1d1d1f] md:text-5xl">dev.</h3>
        <p className="mx-auto mt-4 max-w-xl text-gray-600">Astatine LAB은 여러분의 서버에 가장 적절한 솔루션을 제공해요.</p>
      </AnimatedSection>
      <div className="grid gap-10 md:grid-cols-3">
        {SERVICES_DATA.map((service) => (
          <AnimatedSection key={service.title} delay={service.delay} className="p-8 text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">{service.icon}</div>
            <h4 className="mb-2 text-2xl font-bold text-[#1d1d1f]">{service.title}</h4>
            <p className="text-gray-600">{service.description}</p>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

/**
 * 진행했던 프로젝트들을 소개하는 Showcase 섹션
 */
const ShowcaseSection = () => (
  <section id="showcase" className="bg-white py-20 md:py-32">
    <div className="container mx-auto px-6">
      <AnimatedSection className="mb-16 text-center">
        <h3 className="text-4xl font-bold text-[#1d1d1f] md:text-5xl">project.</h3>
        <p className="mx-auto mt-4 max-w-xl text-gray-600">Astatine LAB에서 진행한 프로젝트에요.</p>
      </AnimatedSection>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {PROJECTS_DATA.map((project) => (
          <AnimatedSection key={project.title} delay={project.delay}>
            <Card className="border-none bg-gray-100">
              <CardContent>
                <img src={project.imgSrc} alt={project.alt} className="mb-6 h-auto w-full rounded-lg" />
                <h4 className="text-2xl font-bold">{project.title}</h4>
                <p className="mt-2 text-gray-600">{project.description}</p>
              </CardContent>
              {project.buttons && (
                <CardFooter className="flex flex-wrap gap-2">
                  {project.buttons.map((button) => (
                    <Button key={button.text} variant="outline" className={button.hoverClass} onClick={() => window.open(button.url, '_blank', 'noopener,noreferrer')}>
                      {button.icon}
                      <span className="ml-2">{button.text}</span>
                    </Button>
                  ))}
                </CardFooter>
              )}
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

/**
 * 연락처 및 외부 링크를 제공하는 Contact 섹션
 */
const ContactSection = () => (
  <section id="contact" className="bg-[#fbfbfd] py-20 md:py-32">
    <div className="container mx-auto px-6 text-center">
      <AnimatedSection>
        <h3 className="mb-1 text-4xl font-bold md:text-5xl">contact.</h3>
        <p className="mx-auto mt-4 mb-8 max-w-2xl text-gray-600">Astatine LAB과 함께 당신의 아이디어를 가치로 만드세요!</p>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {CONTACT_LINKS.map(link => (
             <Button key={link.text} variant="outline" className={link.hoverClass} onClick={() => window.open(link.url, '_blank', 'noopener,noreferrer')}>
                {link.icon}
                <span className="ml-2">{link.text}</span>
            </Button>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);


// =================================================================================
// 메인 애플리케이션 컴포넌트
// =================================================================================

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
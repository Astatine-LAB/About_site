
import AnimatedSection from '../AnimatedSection';
import { GradientText } from '../ui/GradientText';

/**
 * 페이지 최상단에 위치하는 Hero 섹션
 */
const HeroSection = () => (
    <section id="home" className="flex min-h-screen items-center justify-center pt-24 pb-16 text-center">
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

export default HeroSection;

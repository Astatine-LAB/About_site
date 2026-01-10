
import AnimatedSection from '../AnimatedSection';
import { GradientText } from '../ui/GradientText';

/**
 * 페이지 최상단에 위치하는 Hero 섹션
 */
const HeroSection = () => (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-400/20 rounded-full blur-3xl animate-pulse mix-blend-multiply" />
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse mix-blend-multiply animation-delay-2000" />
            <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse mix-blend-multiply animation-delay-4000" />
        </div>

        <div className="container mx-auto px-6 text-center z-10">
            <AnimatedSection>


                <h1 className="leading-tight mb-8 text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
                    아이디어를{' '}
                    <GradientText className="from-green-400 via-blue-500 to-purple-600">
                        코드로,
                    </GradientText>
                    <br />
                    코드를{' '}
                    <GradientText className="from-green-400 via-blue-500 to-purple-600">
                        가치로.
                    </GradientText>
                </h1>

                <p className="mx-auto mb-12 max-w-2xl text-lg text-slate-600 leading-relaxed">
                    사용자 요구에 맞춘 다양한 기능을 구현하고, 맞춤형 솔루션을 제공해요.
                </p>
            </AnimatedSection>
        </div>
    </section>
);

export default HeroSection;

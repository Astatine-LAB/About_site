import AnimatedSection from '@/components/AnimatedSection';
import { GradientText } from '@/components/ui/GradientText';

/**
 * 페이지 최상단에 위치하는 Hero 섹션
 */
export default function HeroSection() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        >
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
                        코드
                    </GradientText>
                    로,
                    <br />
                    코드를{' '}
                    <GradientText className="from-green-400 via-blue-500 to-purple-600">
                        가치
                    </GradientText>
                    로.
                </h1>

                    <p className="mx-auto mb-12 max-w-2xl text-lg text-slate-600 leading-relaxed font-medium">
                        혁신적인 아이디어를 견고한 아키텍처와 코드로 구현하여<br className="hidden md:block" />
                        비즈니스의 새로운 가치를 창출하고 성장을 가속화합니다.
                    </p>
                </AnimatedSection>
            </div>
        </section>
    );
}

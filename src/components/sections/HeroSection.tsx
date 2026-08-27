import AnimatedSection from '@/components/AnimatedSection';
import astnBanner from '@/assets/image/astn/ASTN_BANNER.png';

/**
 * 브랜드 중심의 히어로 섹션을 렌더링합니다.
 */
export default function HeroSection() {
    return (
        <section
            id="home"
            className="relative isolate flex min-h-[90svh] items-center overflow-hidden border-b border-black/10 bg-white pt-24"
        >
            <div className="absolute inset-0 -z-20 bg-white" />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:56px_56px] opacity-45" />
            <img
                src={astnBanner}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 w-full min-w-[900px] max-w-none object-cover object-bottom opacity-[0.06] grayscale"
            />

            <div className="container z-10 mx-auto px-6 py-20 md:py-28">
                <div className="max-w-5xl">
                    <AnimatedSection duration={950} variant="block">
                        <h1 className="text-5xl leading-[0.95] font-extrabold text-black md:text-7xl lg:text-8xl">
                            Astatine LAB
                        </h1>
                    </AnimatedSection>

                    <AnimatedSection
                        className="mt-8"
                        delay={170}
                        duration={850}
                        variant="fade-up"
                    >
                        <p className="text-keep max-w-4xl text-base leading-7 font-medium text-black/65 md:text-lg md:leading-8 lg:whitespace-nowrap lg:text-xl">
                            아이디어를 견고한 아키텍처와 운영 가능한 코드로 구현합니다.
                        </p>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}

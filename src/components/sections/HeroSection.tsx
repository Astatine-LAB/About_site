import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import astnBanner from '@/assets/image/astn/ASTN_BANNER.png';

/**
 * Renders the brand-led hero section.
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
                <AnimatedSection className="max-w-4xl">
                    <p className="mb-6 inline-flex rounded-full border border-black/15 bg-white px-4 py-2 text-xs font-bold uppercase text-black shadow-sm">
                        Java Application & Infrastructure Studio
                    </p>
                    <h1 className="mb-8 text-5xl font-extrabold leading-[0.95] text-black md:text-7xl lg:text-8xl">
                        Astatine LAB
                    </h1>

                    <p className="text-keep mb-10 max-w-3xl text-lg font-medium leading-8 text-black/70 md:text-xl">
                        아이디어를 견고한 아키텍처와 운영 가능한 코드로 구현합니다.
                        Java 기반 애플리케이션, 성능 최적화, 인프라 설계를 하나의
                        흐름으로 연결해 비즈니스 가치를 빠르게 검증합니다.
                    </p>

                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Button asChild size="lg">
                            <a href="#contact">프로젝트 문의</a>
                        </Button>
                        <Button variant="outline" asChild size="lg">
                            <a href="#showcase">쇼케이스 보기</a>
                        </Button>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}

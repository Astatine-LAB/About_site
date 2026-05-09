import AnimatedSection from '@/components/AnimatedSection';
import SectionHeader from '@/components/SectionHeader';
import { SERVICES_DATA } from '@/constants/data';

/**
 * Renders the service capabilities section.
 */
export default function ServicesSection() {
    return (
        <section id="services" className="relative bg-white py-24 md:py-32">
            <div className="container mx-auto px-6">
                <AnimatedSection className="mb-14 md:mb-20">
                    <SectionHeader
                        align="center"
                        eyebrow="Core Competency"
                        title="Technical Excellence"
                        description="서비스의 설계, 개발, 운영까지 이어지는 기술 문제를 구조적으로 해결합니다."
                    />
                </AnimatedSection>

                <div className="grid gap-6 md:grid-cols-3">
                    {SERVICES_DATA.map((service) => (
                        <AnimatedSection key={service.title} delay={service.delay}>
                            <article className="group h-full rounded-lg border border-black/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-black hover:shadow-xl">
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-black text-white transition duration-300 group-hover:bg-black/85">
                                    {service.icon}
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-black">
                                    {service.title}
                                </h3>
                                <p className="text-keep leading-7 text-black/65">
                                    {service.description}
                                </p>
                            </article>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}

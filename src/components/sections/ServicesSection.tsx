import AnimatedSection from '@/components/AnimatedSection';
import { Card } from '@/components/ui/card';
import { SERVICES_DATA } from '@/constants/data';
import { cn } from '@/lib/utils';

/**
 * 제공하는 서비스 목록을 보여주는 Services 섹션
 */
export default function ServicesSection() {
    return (
        <section id="services" className="py-32 relative">
            <div className="container mx-auto px-6">
                <AnimatedSection className="mb-20 text-center">
                    <h2 className="text-sm font-bold text-violet-600 tracking-widest uppercase mb-3">
                        Core Competency
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-slate-900">
                        Technical Excellence
                    </h3>
                    <p className="mx-auto mt-4 max-w-xl text-slate-600 font-medium">
                        비즈니스의 성장을 가속화하는 최적의 기술 솔루션을 제공합니다.
                    </p>
                </AnimatedSection>

                <div className="grid gap-8 md:grid-cols-3">
                    {SERVICES_DATA.map((service) => (
                        <AnimatedSection key={service.title} delay={service.delay}>
                            <Card
                                className={cn(
                                    'h-full p-8 hover:border-violet-200 transition-colors duration-300',
                                    'group relative bg-white/70 backdrop-blur-lg rounded-3xl border border-white/20 shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 hover:bg-white/90'
                                )}
                            >
                                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 text-slate-900 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white transition-all duration-300">
                                    {service.icon}
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">
                                    {service.title}
                                </h4>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                            </Card>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}

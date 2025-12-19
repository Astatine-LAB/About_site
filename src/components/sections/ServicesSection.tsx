
import AnimatedSection from '../AnimatedSection';
import { SERVICES_DATA } from '../../constants/data';

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

export default ServicesSection;

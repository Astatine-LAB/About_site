
import AnimatedSection from '../AnimatedSection';
import { Button } from '../ui/button';
import { CONTACT_LINKS } from '../../constants/data';

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

export default ContactSection;

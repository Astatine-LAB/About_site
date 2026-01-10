
import AnimatedSection from '../AnimatedSection';
import { Button } from '../ui/button';
import { CONTACT_LINKS } from '../../constants/data';

/**
 * 연락처 및 외부 링크를 제공하는 Contact 섹션
 */
const ContactSection = () => (
    <section id="contact" className="py-32 relative overflow-hidden">
        {/* Decorative Circle */}
        <div className="absolute right-0 bottom-0 w-1/3 h-full bg-gradient-to-l from-slate-50 to-transparent -z-10" />

        <div className="container mx-auto px-6">
            <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-full opacity-30">
                    <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full bg-violet-600 blur-[100px]" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-500 blur-[80px]" />
                </div>

                <AnimatedSection className="relative z-10">
                    <h3 className="text-4xl md:text-6xl font-bold mb-6">Let's Build Together</h3>
                    <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                        Astatine LAB과 함께 당신의 아이디어를 가치로 만드세요!
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        {CONTACT_LINKS.filter(l => l.text === 'Discord').map(link => (
                            <Button key={link.text} variant="outline" className={`border-slate-700 text-slate-900 bg-white hover:bg-slate-100 hover:text-slate-900 ${link.hoverClass}`} onClick={() => window.open(link.url, '_blank', 'noopener,noreferrer')}>
                                {link.icon}
                                <span className="ml-2">{link.text}</span>
                            </Button>
                        ))}
                    </div>

                    <div className="mt-16 flex justify-center gap-8 text-slate-400">
                        {CONTACT_LINKS.filter(l => ['Notion', 'Github', 'Linkedin'].includes(l.text)).map(link => (
                            <a key={link.text} href={link.url} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                                <span className="text-2xl">{link.icon}</span>
                            </a>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </div>
    </section>
);

export default ContactSection;

import AnimatedSection from '@/components/AnimatedSection';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { CONTACT_LINKS } from '@/constants/data';
import type { ContactLink } from '@/types';

interface ContactActionProps {
    link: ContactLink;
}

/**
 * Renders an external contact link.
 */
function ContactAction({ link }: ContactActionProps) {
    return (
        <Button
            variant={link.isPrimary ? 'default' : 'outline'}
            asChild
            className={
                link.isPrimary
                    ? 'border border-white bg-white text-black hover:bg-black hover:text-white'
                    : 'border-white/30 bg-transparent text-white hover:border-white hover:bg-white hover:text-black'
            }
        >
            <a href={link.url} target="_blank" rel="noreferrer">
                {link.icon}
                <span>{link.text}</span>
            </a>
        </Button>
    );
}

/**
 * Renders the contact section and external channels.
 */
export default function ContactSection() {
    const primaryLinks = CONTACT_LINKS.filter((link) => link.isPrimary);
    const secondaryLinks = CONTACT_LINKS.filter((link) => !link.isPrimary);

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-black py-24 text-white md:py-32"
        >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:56px_56px] opacity-20" />

            <div className="container relative mx-auto px-6">
                <AnimatedSection className="grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-end">
                    <SectionHeader
                        tone="dark"
                        eyebrow="Contact"
                        title="Ready to Innovate?"
                        description="Astatine LAB과 함께 운영 가능한 차세대 디지털 경험을 만들어보세요."
                    />

                    <div className="flex flex-col gap-4 md:items-end">
                        <div className="flex flex-wrap gap-3 md:justify-end">
                            {primaryLinks.map((link) => (
                                <ContactAction key={link.text} link={link} />
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-3 md:justify-end">
                            {secondaryLinks.map((link) => (
                                <ContactAction key={link.text} link={link} />
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}

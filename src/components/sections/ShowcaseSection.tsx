
import AnimatedSection from '../AnimatedSection';
import { Card, CardContent, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import { PROJECTS_DATA } from '../../constants/data';

/**
 * 진행했던 프로젝트들을 소개하는 Showcase 섹션
 */
const ShowcaseSection = () => (
    <section id="showcase" className="bg-white py-20 md:py-32">
        <div className="container mx-auto px-6">
            <AnimatedSection className="mb-16 text-center">
                <h3 className="text-4xl font-bold text-[#1d1d1f] md:text-5xl">project.</h3>
                <p className="mx-auto mt-4 max-w-xl text-gray-600">Astatine LAB에서 진행한 프로젝트에요.</p>
            </AnimatedSection>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {PROJECTS_DATA.map((project) => (
                    <AnimatedSection key={project.title} delay={project.delay}>
                        <Card className="border-none bg-gray-100">
                            <CardContent>
                                <img src={project.imgSrc} alt={project.alt} className="mb-6 h-auto w-full rounded-lg" />
                                <h4 className="text-2xl font-bold">{project.title}</h4>
                                <p className="mt-2 text-gray-600">{project.description}</p>
                            </CardContent>
                            {project.buttons && (
                                <CardFooter className="flex flex-wrap gap-2">
                                    {project.buttons.map((button) => (
                                        <Button key={button.text} variant="outline" className={button.hoverClass} onClick={() => window.open(button.url, '_blank', 'noopener,noreferrer')}>
                                            {button.icon}
                                            <span className="ml-2">{button.text}</span>
                                        </Button>
                                    ))}
                                </CardFooter>
                            )}
                        </Card>
                    </AnimatedSection>
                ))}
            </div>
        </div>
    </section>
);

export default ShowcaseSection;

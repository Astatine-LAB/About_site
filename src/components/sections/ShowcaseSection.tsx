import AnimatedSection from '../AnimatedSection';
import { PROJECTS_DATA } from '../../constants/data';

/**
 * 진행했던 프로젝트들을 소개하는 Showcase 섹션
 */
const ShowcaseSection = () => (
    <section id="showcase" className="py-32 bg-slate-50/50">
        <div className="container mx-auto px-6">
            <AnimatedSection className="mb-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h2 className="text-sm font-bold text-violet-600 tracking-widest uppercase mb-3">Portfolio</h2>
                    </div>
                    <p className="text-slate-600 max-w-md pb-2">
                        Astatine LAB에서 진행한 프로젝트에요.
                    </p>
                </div>
            </AnimatedSection>

            <div className="grid gap-8 md:grid-cols-2">
                {PROJECTS_DATA.map((project) => (
                    <AnimatedSection key={project.title} delay={project.delay}>
                        <div className="group relative rounded-[2rem] overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500">
                            {/* Image Container with Gradient Overlay effect */}
                            <div className="h-64 w-full bg-gray-100 flex items-center justify-center overflow-hidden relative">
                                <img
                                    src={project.imgSrc}
                                    alt={project.alt}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className="p-8">
                                <div className="text-violet-600 text-sm font-bold mb-2">Project</div>
                                <h4 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h4>
                                <p className="text-slate-600 mb-8 line-clamp-2">{project.description}</p>

                                {project.buttons && (
                                    <div className="flex flex-wrap gap-2">
                                        {project.buttons.map((button) => (
                                            <button
                                                key={button.text}
                                                onClick={() => window.open(button.url, '_blank', 'noopener,noreferrer')}
                                                className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-violet-600 transition-colors"
                                            >
                                                {button.icon}
                                                {button.text}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
    </section>
);

export default ShowcaseSection;

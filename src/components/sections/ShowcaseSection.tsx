import AnimatedSection from '@/components/AnimatedSection';
import SectionHeader from '@/components/SectionHeader';
import { PROJECTS_DATA } from '@/constants/data';
import type { ProjectButton, ProjectItem } from '@/types';

interface ProjectOverlayProps {
    buttons: ProjectButton[];
}

/**
 * Renders the hover overlay actions for a project card.
 */
function ProjectOverlay({ buttons }: ProjectOverlayProps) {
    return (
        <div className="absolute inset-0 z-10 flex -translate-x-full flex-col items-center justify-center gap-6 bg-black/95 backdrop-blur-sm transition-transform duration-500 group-hover:translate-x-0 group-focus-within:translate-x-0">
            <h4 className="translate-y-2 text-sm font-bold uppercase text-white/80 opacity-0 transition-all delay-300 duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                View Project
            </h4>
            <div className="flex w-full flex-col gap-3 px-12 md:px-16">
                {buttons.map((button, index) => (
                    <a
                        key={button.text}
                        href={button.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex w-full translate-x-4 items-center justify-center gap-3 rounded-xl bg-white px-5 py-3.5 text-sm font-bold uppercase text-black opacity-0 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none active:scale-95 group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:translate-x-0 group-focus-within:opacity-100"
                        style={{ transitionDelay: `${400 + index * 100}ms` }}
                    >
                        {button.icon}
                        <span>{button.text}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}

interface ProjectCardProps {
    project: ProjectItem;
}

/**
 * Renders a single project showcase item.
 */
function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="group relative h-full overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
            <div className="relative flex h-64 w-full items-center justify-center overflow-hidden bg-black/5">
                <img
                    src={project.imgSrc}
                    alt={project.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <ProjectOverlay buttons={project.buttons} />
            </div>

            <div className="p-8">
                <p className="mb-2 text-sm font-bold uppercase text-black">
                    Project
                </p>
                <h3 className="mb-3 text-2xl font-bold text-black">
                    {project.title}
                </h3>
                <p className="text-keep line-clamp-2 text-black/65">
                    {project.description}
                </p>
            </div>
        </article>
    );
}

/**
 * Renders the project showcase section.
 */
export default function ShowcaseSection() {
    return (
        <section id="showcase" className="bg-white py-24 md:py-32">
            <div className="container mx-auto px-6">
                <AnimatedSection className="mb-14 md:mb-20">
                    <SectionHeader
                        eyebrow="Our Portfolio"
                        title="임팩트를 만들어낸 주요 프로젝트 사례입니다."
                        description="프로젝트의 핵심 결과물과 문서를 간결한 카드 인터랙션으로 확인할 수 있습니다."
                    />
                </AnimatedSection>

                <div className="grid gap-8 md:grid-cols-2">
                    {PROJECTS_DATA.map((project) => (
                        <AnimatedSection key={project.title} delay={project.delay}>
                            <ProjectCard project={project} />
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}

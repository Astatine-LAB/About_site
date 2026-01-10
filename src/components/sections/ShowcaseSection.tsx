import { useCallback } from 'react';
import { cn } from '@/lib/utils';
import AnimatedSection from '@/components/AnimatedSection';
import { PROJECTS_DATA } from '@/constants/data';
import type { ProjectButton, ProjectItem } from '@/types';

interface ProjectOverlayProps {
    buttons: ProjectButton[];
}

/**
 * 프로젝트 카드 호버 시 나타나는 오버레이
 */
function ProjectOverlay({ buttons }: ProjectOverlayProps) {
    const handleButtonClick = useCallback((url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }, []);

    return (
        <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm flex flex-col items-center justify-center gap-6 transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) -translate-x-full group-hover:translate-x-0 z-10">
            <h5 className="text-white/80 text-sm font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 translate-y-2 group-hover:translate-y-0">
                View Project
            </h5>
            <div className="flex flex-col gap-3 w-full px-16">
                {buttons.map((button, idx) => (
                    <button
                        key={button.text}
                        onClick={() => handleButtonClick(button.url)}
                        className={cn(
                            'w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 active:scale-95 shadow-lg opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0',
                            'bg-white text-slate-900 hover:text-white',
                            button.hoverClass
                        )}
                        style={{ transitionDelay: `${400 + idx * 100}ms` }}
                    >
                        {button.icon}
                        <span className="uppercase tracking-wide">{button.text}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}

interface ProjectCardProps {
    project: ProjectItem;
}

/**
 * 개별 프로젝트를 표시하는 카드 컴포넌트
 */
function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="group relative rounded-[2rem] overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500">
            {/* Image Container with Sliding Door Overlay effect */}
            <div className="h-64 w-full bg-gray-100 flex items-center justify-center overflow-hidden relative">
                <img
                    src={project.imgSrc}
                    alt={project.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <ProjectOverlay buttons={project.buttons} />
            </div>

            <div className="p-8">
                <div className="text-violet-600 text-sm font-bold mb-2">Project</div>
                <h4 className="text-2xl font-bold text-slate-900 mb-3">
                    {project.title}
                </h4>
                <p className="text-slate-600 line-clamp-2">{project.description}</p>
            </div>
        </div>
    );
}

/**
 * 진행했던 프로젝트들을 소개하는 Showcase 섹션
 */
export default function ShowcaseSection() {
    return (
        <section id="showcase" className="py-32 bg-slate-50/50">
            <div className="container mx-auto px-6">
                <AnimatedSection className="mb-20">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h2 className="text-sm font-bold text-violet-600 tracking-widest uppercase mb-3">
                                Our Portfolio
                            </h2>
                            <h3 className="text-4xl md:text-3xl font-bold text-slate-900">
                                임팩트를 만들어낸 주요 프로젝트 사례입니다.
                            </h3>
                        </div>
                    </div>
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

import { ArrowUpRight } from 'lucide-react';
import ScrollSlide from '@/components/ScrollSlide';
import SectionHeader from '@/components/SectionHeader';
import { PROJECTS_DATA } from '@/constants/data';

export default function ShowcaseSection() {
    return (
        <section id="showcase" className="overflow-hidden bg-white py-24 md:py-32">
            <ScrollSlide from="left" className="page-width">
                <div className="mb-14 md:mb-16">
                    <SectionHeader
                        eyebrow="Our Portfolio"
                        title="임팩트를 만들어낸 주요 프로젝트 사례입니다."
                        description="프로젝트의 핵심 결과물과 기술 문서를 확인할 수 있습니다."
                    />
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {PROJECTS_DATA.map((project) => (
                        <article
                            key={project.title}
                            className="group overflow-hidden rounded-lg border border-black/10 bg-white transition duration-300 hover:border-black/30 hover:shadow-md"
                        >
                            <div className="project-image">
                                <img
                                    src={project.imgSrc}
                                    alt={project.alt}
                                    loading="lazy"
                                    decoding="async"
                                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                                />
                            </div>
                            <div className="p-6 md:p-8">
                                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-black/50">
                                    Project
                                </p>
                                <h3 className="mb-3 text-2xl font-bold tracking-tight text-black">
                                    {project.title}
                                </h3>
                                <p className="text-keep leading-7 text-black/65">
                                    {project.description}
                                </p>
                                <div className="mt-7 flex flex-wrap gap-3">
                                    {project.buttons.map((button) => (
                                        <a
                                            key={button.url}
                                            href={button.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-3 rounded-md border border-black/15 px-4 py-3 text-sm font-medium transition-colors hover:border-black hover:bg-black hover:text-white"
                                        >
                                            {button.icon}
                                            {button.text}
                                            <ArrowUpRight size={16} aria-hidden="true" />
                                            <span className="sr-only"> (새 탭)</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </ScrollSlide>
        </section>
    );
}

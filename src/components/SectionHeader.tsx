import { cn } from '@/lib/utils';

type SectionHeaderAlign = 'left' | 'center';
type SectionHeaderTone = 'light' | 'dark';

interface SectionHeaderProps {
    eyebrow: string;
    title: string;
    description?: string;
    align?: SectionHeaderAlign;
    tone?: SectionHeaderTone;
    className?: string;
}

const alignmentClassNames: Record<SectionHeaderAlign, string> = {
    left: 'text-left',
    center: 'mx-auto text-center',
};

const toneClassNames: Record<
    SectionHeaderTone,
    {
        eyebrow: string;
        title: string;
        description: string;
    }
> = {
    light: {
        eyebrow: 'text-black',
        title: 'text-black',
        description: 'text-black/65',
    },
    dark: {
        eyebrow: 'text-white',
        title: 'text-white',
        description: 'text-white/70',
    },
};

/**
 * 일관된 여백과 톤을 가진 섹션 제목 블록을 렌더링합니다.
 */
export default function SectionHeader({
    eyebrow,
    title,
    description,
    align = 'left',
    tone = 'light',
    className,
}: SectionHeaderProps) {
    const colors = toneClassNames[tone];

    return (
        <div
            className={cn(
                'max-w-4xl',
                alignmentClassNames[align],
                className
            )}
        >
            <p
                className={cn(
                    'mb-3 text-xs font-bold uppercase',
                    colors.eyebrow
                )}
            >
                {eyebrow}
            </p>
            <h2
                className={cn(
                    'text-keep text-3xl font-bold leading-tight md:text-4xl',
                    colors.title
                )}
            >
                {title}
            </h2>
            {description ? (
                <p
                    className={cn(
                        'text-keep mt-5 text-base leading-7 md:text-lg',
                        colors.description
                    )}
                >
                    {description}
                </p>
            ) : null}
        </div>
    );
}

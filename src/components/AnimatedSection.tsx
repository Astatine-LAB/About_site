import type { ReactNode } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

type AnimatedSectionVariant =
    | 'fade-up'
    | 'slide-left'
    | 'slide-right'
    | 'zoom'
    | 'block';

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    rootMargin?: string;
    threshold?: number;
    variant?: AnimatedSectionVariant;
}

const animationClassNames: Record<
    AnimatedSectionVariant,
    {
        hidden: string;
        visible: string;
    }
> = {
    'fade-up': {
        hidden: 'translate-y-14 opacity-0 blur-sm',
        visible: 'translate-y-0 opacity-100 blur-0',
    },
    'slide-left': {
        hidden: 'translate-x-14 opacity-0 blur-sm',
        visible: 'translate-x-0 opacity-100 blur-0',
    },
    'slide-right': {
        hidden: '-translate-x-14 opacity-0 blur-sm',
        visible: 'translate-x-0 opacity-100 blur-0',
    },
    zoom: {
        hidden: 'translate-y-8 scale-95 opacity-0 blur-sm',
        visible: 'translate-y-0 scale-100 opacity-100 blur-0',
    },
    block: {
        hidden: 'translate-y-10 scale-[0.96] opacity-0 blur-sm [clip-path:inset(0_0_100%_0)]',
        visible: 'translate-y-0 scale-100 opacity-100 blur-0 [clip-path:inset(0_0_0_0)]',
    },
};

/**
 * 뷰포트에 진입한 콘텐츠를 스크롤 애니메이션으로 노출합니다.
 */
export default function AnimatedSection({
    children,
    className,
    delay = 0,
    duration = 850,
    rootMargin = '0px 0px -12% 0px',
    threshold = 0.16,
    variant = 'fade-up',
}: AnimatedSectionProps) {
    const [ref, isVisible] = useIntersectionObserver({ threshold, rootMargin });
    const animationClasses = animationClassNames[variant];

    return (
        <div
            ref={ref}
            className={cn(
                'transform-gpu transition-[opacity,transform,filter,clip-path] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:blur-0 motion-reduce:transition-none motion-reduce:[clip-path:inset(0_0_0_0)]',
                isVisible ? animationClasses.visible : animationClasses.hidden,
                className
            )}
            style={{
                transitionDelay: `${delay}ms`,
                transitionDuration: `${duration}ms`,
            }}
        >
            {children}
        </div>
    );
}

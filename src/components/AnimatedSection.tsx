import type { ReactNode } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

/**
 * Reveals section content when it enters the viewport.
 */
export default function AnimatedSection({
    children,
    className,
    delay = 0,
}: AnimatedSectionProps) {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={cn(
                'transition-all duration-1000 ease-out transform',
                isVisible
                    ? 'opacity-100 translate-y-0 blur-0'
                    : 'opacity-0 translate-y-12 blur-sm',
                className
            )}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

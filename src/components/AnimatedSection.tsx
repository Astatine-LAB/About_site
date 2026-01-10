import type { ReactNode } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    /** 애니메이션 지연 시간 (밀리초) */
    delay?: number;
}

/**
 * 스크롤 시 fade-in 애니메이션이 적용되는 섹션 래퍼 컴포넌트
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

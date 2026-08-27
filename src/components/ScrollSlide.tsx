import { useEffect, useRef } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ScrollSlideOrigin = 'left' | 'right';

interface ScrollSlideProps {
    children: ReactNode;
    className?: string;
    from: ScrollSlideOrigin;
}

type ScrollSlideStyle = CSSProperties & {
    '--scroll-slide-opacity': string;
    '--scroll-slide-scale': string;
    '--scroll-slide-x': string;
};

const INITIAL_SLIDE_STYLE: ScrollSlideStyle = {
    '--scroll-slide-opacity': '1',
    '--scroll-slide-scale': '1',
    '--scroll-slide-x': '0px',
};

/**
 * 스크롤 진행도에 맞춰 콘텐츠를 좌우에서 슬라이드합니다.
 */
export default function ScrollSlide({ children, className, from }: ScrollSlideProps) {
    const slideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        let animationFrame: number | null = null;

        const updateSlide = () => {
            animationFrame = null;

            const slide = slideRef.current;
            if (!slide) {
                return;
            }

            if (reducedMotionQuery.matches) {
                slide.style.setProperty('--scroll-slide-x', '0px');
                slide.style.setProperty('--scroll-slide-opacity', '1');
                slide.style.setProperty('--scroll-slide-scale', '1');
                return;
            }

            const bounds = slide.getBoundingClientRect();
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            const revealStart = viewportHeight * 0.92;
            const revealEnd = viewportHeight * 0.18;
            const progress = Math.min(
                Math.max((revealStart - bounds.top) / (revealStart - revealEnd), 0),
                1
            );
            const direction = from === 'left' ? -1 : 1;
            const distance = Math.min(window.innerWidth * 0.18, 220);

            slide.style.setProperty(
                '--scroll-slide-x',
                `${direction * distance * (1 - progress)}px`
            );
            slide.style.setProperty(
                '--scroll-slide-opacity',
                `${0.18 + progress * 0.82}`
            );
            slide.style.setProperty(
                '--scroll-slide-scale',
                `${0.985 + progress * 0.015}`
            );
        };

        const scheduleSlideUpdate = () => {
            if (animationFrame !== null) {
                return;
            }

            animationFrame = window.requestAnimationFrame(updateSlide);
        };

        updateSlide();
        window.addEventListener('scroll', scheduleSlideUpdate, { passive: true });
        window.addEventListener('resize', scheduleSlideUpdate);
        reducedMotionQuery.addEventListener('change', scheduleSlideUpdate);

        return () => {
            window.removeEventListener('scroll', scheduleSlideUpdate);
            window.removeEventListener('resize', scheduleSlideUpdate);
            reducedMotionQuery.removeEventListener('change', scheduleSlideUpdate);

            if (animationFrame !== null) {
                window.cancelAnimationFrame(animationFrame);
            }
        };
    }, [from]);

    return (
        <div
            ref={slideRef}
            className={cn('scroll-slide', className)}
            data-slide-from={from}
            style={INITIAL_SLIDE_STYLE}
        >
            {children}
        </div>
    );
}

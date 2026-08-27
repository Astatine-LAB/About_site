import { useState, useEffect, useRef, useMemo } from 'react';
import type { RefObject } from 'react';

interface UseIntersectionObserverOptions {
    threshold?: number;
    root?: Element | null;
    rootMargin?: string;
}

/**
 * 요소가 뷰포트에 한 번 진입했는지 감지합니다.
 */
const useIntersectionObserver = (
    options: UseIntersectionObserverOptions = {}
): [RefObject<HTMLDivElement | null>, boolean] => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const observerOptions = useMemo(
        () => ({
            threshold: options.threshold ?? 0.1,
            root: options.root ?? null,
            rootMargin: options.rootMargin ?? '0px',
        }),
        [options.threshold, options.root, options.rootMargin]
    );

    useEffect(() => {
        if (isVisible) {
            return;
        }

        const currentRef = ref.current;
        if (!currentRef) {
            return;
        }

        if (typeof window === 'undefined') {
            setIsVisible(true);
            return;
        }

        if (typeof window.IntersectionObserver === 'undefined') {
            let isTicking = false;

            const markVisibleIfNeeded = () => {
                const rect = currentRef.getBoundingClientRect();
                const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
                const visibleTop = Math.max(rect.top, 0);
                const visibleBottom = Math.min(rect.bottom, viewportHeight);
                const visibleHeight = Math.max(0, visibleBottom - visibleTop);
                const requiredHeight =
                    Math.min(rect.height, viewportHeight) * observerOptions.threshold;

                if (visibleHeight < requiredHeight) {
                    return;
                }

                setIsVisible(true);
                window.removeEventListener('scroll', handleScroll);
                window.removeEventListener('resize', handleScroll);
            };

            const handleScroll = () => {
                if (isTicking) {
                    return;
                }

                isTicking = true;

                window.requestAnimationFrame(() => {
                    isTicking = false;
                    markVisibleIfNeeded();
                });
            };

            markVisibleIfNeeded();
            window.addEventListener('scroll', handleScroll, { passive: true });
            window.addEventListener('resize', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
                window.removeEventListener('resize', handleScroll);
            };
        }

        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) {
                return;
            }

            setIsVisible(true);
            observer.unobserve(entry.target);
        }, observerOptions);

        observer.observe(currentRef);

        return () => {
            observer.disconnect();
        };
    }, [isVisible, observerOptions]);

    return [ref, isVisible];
};

export default useIntersectionObserver;

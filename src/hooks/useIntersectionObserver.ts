import { useState, useEffect, useRef, useMemo } from 'react';
import type { RefObject } from 'react';

interface UseIntersectionObserverOptions {
    threshold?: number;
    root?: Element | null;
    rootMargin?: string;
}

/**
 * Detects when an element enters the viewport once.
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

import { useState, useEffect, useRef, useMemo } from 'react';
import type { RefObject } from 'react';

interface UseIntersectionObserverOptions {
    threshold?: number;
    root?: Element | null;
    rootMargin?: string;
}

/**
 * 요소가 뷰포트에 진입했는지 감지하는 커스텀 훅
 * 한 번 감지되면 옵저버를 해제하여 성능 최적화
 */
const useIntersectionObserver = (
    options: UseIntersectionObserverOptions = {}
): [RefObject<HTMLDivElement | null>, boolean] => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // options 객체를 메모이제이션하여 불필요한 재생성 방지
    const observerOptions = useMemo(
        () => ({
            threshold: options.threshold ?? 0.1,
            root: options.root ?? null,
            rootMargin: options.rootMargin ?? '0px',
        }),
        [options.threshold, options.root, options.rootMargin]
    );

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, observerOptions);

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [observerOptions]);

    return [ref, isVisible];
};

export default useIntersectionObserver;

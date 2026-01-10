import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps {
    children: ReactNode;
    className?: string;
}

/**
 * 그라데이션 텍스트를 표시하는 UI 컴포넌트
 * className을 통해 from-*, via-*, to-* 클래스로 색상 커스터마이징 가능
 */
export function GradientText({ children, className }: GradientTextProps) {
    return (
        <span
            className={cn(
                'bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-400 animate-gradient-x bg-[length:200%_auto]',
                className
            )}
        >
            {children}
        </span>
    );
}

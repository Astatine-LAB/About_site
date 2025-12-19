
import type { ReactNode } from 'react';

interface GradientTextProps {
    children: ReactNode;
    gradient: string;
}

/**
 * 그라데이션 효과가 적용된 텍스트를 렌더링하는 컴포넌트
 */
export const GradientText = ({ children, gradient }: GradientTextProps) => (
    <span style={{
        background: gradient,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: '0 3px 15px rgba(120, 34, 211, 0.25)'
    }}>
        {children}
    </span>
);

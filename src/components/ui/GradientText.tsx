
import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

/**
 * UI COMPONENTS
 */
export const GradientText = ({ children, className }: { children: ReactNode; className?: string }) => (
    <span className={cn("bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-400 animate-gradient-x bg-[length:200%_auto]", className)}>
        {children}
    </span>
);

import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ScrollAnimateProps {
    children: ReactNode;
    animation?: 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'rotate-in' | 'slide-fade-up' | 'slide-fade-left' | 'slide-fade-right';
    delay?: number;
    threshold?: number;
    className?: string;
}

export const ScrollAnimate = ({
    children,
    animation = 'fade-in-up',
    delay = 0,
    threshold = 0.1,
    className = ''
}: ScrollAnimateProps) => {
    const { elementRef, isVisible } = useScrollAnimation({ threshold });

    const delayClass = delay > 0 ? `stagger-${Math.min(delay, 6)}` : '';

    return (
        <div
            ref={elementRef}
            className={`scroll-animate ${animation} ${delayClass} ${isVisible ? 'visible' : ''} ${className}`}
        >
            {children}
        </div>
    );
};

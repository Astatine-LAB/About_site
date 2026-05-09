import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import astnLogo from '@/assets/image/astn/ASTN_LOGO.webp';
import type { NavItem } from '@/types';

const NAV_ITEMS: NavItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Showcase', href: '#showcase' },
];

const SCROLL_THRESHOLD = 50;

interface HeaderProps {
    className?: string;
}

/**
 * Renders the fixed site header and responsive navigation.
 */
export default function Header({ className }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!isMobileMenuOpen) {
            return;
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        if (!isMobileMenuOpen) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key !== 'Escape') {
                return;
            }

            setIsMobileMenuOpen(false);
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isMobileMenuOpen]);

    const handleNavClick = useCallback(() => {
        setIsMobileMenuOpen(false);
    }, []);

    const toggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen((prev) => !prev);
    }, []);

    return (
        <header
            className={cn(
                'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
                isScrolled
                    ? 'border-b border-black/10 bg-white/95 py-3 shadow-sm backdrop-blur-xl'
                    : 'bg-white/0 py-5',
                className
            )}
        >
            <div className="container mx-auto flex items-center justify-between px-6">
                <a
                    href="#home"
                    className="z-50 flex items-center gap-3 rounded-full focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 focus-visible:outline-none"
                    onClick={handleNavClick}
                >
                    <img
                        src={astnLogo}
                        className="h-8 w-auto brightness-0"
                        alt="Astatine LAB Logo"
                        width={32}
                        height={32}
                    />
                    <span className="text-base font-bold text-black md:text-lg">
                        Astatine LAB
                    </span>
                </a>

                <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium text-black/65 transition-colors hover:text-black"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <button
                    type="button"
                    className="z-50 rounded-full p-2 text-black transition hover:bg-black/5 md:hidden"
                    onClick={toggleMobileMenu}
                    aria-controls="mobile-navigation"
                    aria-label={isMobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            <div
                id="mobile-navigation"
                className={cn(
                    'fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-white transition-transform duration-300 md:hidden',
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                )}
                aria-hidden={!isMobileMenuOpen}
            >
                {NAV_ITEMS.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="text-2xl font-bold text-black"
                        onClick={handleNavClick}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </header>
    );
}

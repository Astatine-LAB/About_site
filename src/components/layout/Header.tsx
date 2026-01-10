import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import astnLogo from '@/assets/image/astn/ASTN_LOGO.webp';
import type { NavItem } from '@/types';

const NAV_ITEMS: NavItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Showcase', href: '#showcase' },
];

const MOBILE_NAV_ITEMS: NavItem[] = [
    ...NAV_ITEMS,
    { label: 'Contact', href: '#contact' },
];

const SCROLL_THRESHOLD = 50;

interface HeaderProps {
    className?: string;
}

/**
 * 페이지 상단에 고정되는 헤더 컴포넌트
 */
export default function Header({ className }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = useCallback(() => {
        setIsMobileMenuOpen(false);
    }, []);

    const handleContactClick = useCallback(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    const toggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen((prev) => !prev);
    }, []);

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled
                    ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm border-b border-slate-100'
                    : 'bg-transparent py-6',
                className
            )}
        >
            <div className="container mx-auto flex items-center justify-between px-6">
                {/* Logo */}
                <div className="flex items-center gap-3 z-50">
                    <img src={astnLogo} className="h-8 w-auto" alt="Astatine LAB Logo" width={32} height={32} />
                    <span className="text-lg font-bold tracking-tight">Astatine LAB</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-8 items-center">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                    <Button
                        variant="default"
                        className="bg-slate-900 text-white hover:bg-slate-800"
                        onClick={handleContactClick}
                    >
                        프로젝트 보기
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50 p-2"
                    onClick={toggleMobileMenu}
                    aria-label={isMobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div
                className={cn(
                    'fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden',
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                )}
                aria-hidden={!isMobileMenuOpen}
            >
                {MOBILE_NAV_ITEMS.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="text-2xl font-bold text-slate-900"
                        onClick={handleNavClick}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </header>
    );
}

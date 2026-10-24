import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import astnLogo from '@/assets/image/astn/ASTN_LOGO.webp';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Showcase', href: '#showcase' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 761px)');
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="page-width header-inner">
        <a className="brand" href="#home" aria-label="Astatine LAB 홈" onClick={() => setMenuOpen(false)}>
          <img src={astnLogo} alt="" width="30" height="30" />
          <span>Astatine LAB</span>
        </a>
        <nav className="desktop-nav" aria-label="주요 메뉴">
          {links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>

        <button className="menu-toggle" ref={toggleRef} type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      <nav id="mobile-navigation" className="mobile-nav" aria-label="모바일 메뉴" hidden={!menuOpen}>
        {links.map((link, index) => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{link.label}<ArrowUpRight size={20} /></a>)}
      </nav>
    </header>
  );
}

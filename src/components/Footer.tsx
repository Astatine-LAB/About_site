import astnLogo from '@/assets/image/astn/ASTN_LOGO.webp';

/**
 * 사이트 푸터를 렌더링합니다.
 */
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 bg-black py-10 text-white/60">
            <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row">
                <div className="flex items-center gap-3">
                    <img
                        src={astnLogo}
                        className="h-8 brightness-0 invert"
                        alt="Astatine LAB Logo"
                    />
                    <span className="text-lg font-bold text-white">Astatine LAB</span>
                </div>
                <p className="text-sm text-white/55">
                    &copy; {currentYear} Astatine LAB. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

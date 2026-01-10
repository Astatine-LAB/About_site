import astnLogo from '@/assets/image/astn/ASTN_LOGO.webp';

/**
 * 페이지 하단 푸터 컴포넌트
 */
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-slate-100 bg-white">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-3">
                    <img src={astnLogo} className="h-8" alt="Astatine LAB Logo" />
                    <span className="font-bold text-slate-900 text-lg">Astatine LAB</span>
                </div>
                <p className="text-slate-500 text-sm">
                    &copy; {currentYear} Astatine LAB. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

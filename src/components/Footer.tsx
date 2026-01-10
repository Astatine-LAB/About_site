
import astn_logo from '../assets/image/astn/ASTN_LOGO.webp';

const Footer = () => (
    <footer className="py-12 border-t border-slate-100 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
                <img src={astn_logo} className='h-8' alt="Astatine LAB Logo" />
                <span className="font-bold text-slate-900 text-lg">Astatine LAB</span>
            </div>
            <p className="text-slate-500 text-sm">
                &copy; {new Date().getFullYear()} Astatine LAB. All rights reserved.
            </p>
        </div>
    </footer>
);

export default Footer;

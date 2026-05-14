


import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#244D3F] text-white py-12 px-10">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Brand Name */}
                <h2 className="text-4xl font-bold mb-4 tracking-tight">KeenKeeper</h2>

                {/* Description */}
                <p className="text-gray-300 text-sm max-w-xl text-center mb-8 leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.
                </p>

                {/* Social Links Section */}
                <div className="flex flex-col items-center gap-4 mb-12">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                        Social Links
                    </span>
                    <div className="flex gap-5 text-2xl">
                        <a href="#" className="hover:text-gray-300 transition-colors">
                            <FaFacebook />
                        </a>
                        <a href="#" className="hover:text-gray-300 transition-colors">
                            <FaInstagram />
                        </a>
                        <a href="#" className="hover:text-gray-300 transition-colors">
                            <FaXTwitter />
                        </a>
                    </div>
                </div>

                {/* Bottom Bar: Copyright and Policy Links */}
                <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-medium text-gray-400 uppercase tracking-widest">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>

                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;

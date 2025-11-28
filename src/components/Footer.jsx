import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-neo-black text-neo-white py-10 border-t-3 border-neo-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold tracking-tighter mb-2">HF.</h2>
                    <p className="text-sm text-neo-white/60">© 2024 Habib Fatkhul Rohman. All rights reserved.</p>
                </div>

                <div className="flex gap-6 font-bold text-sm uppercase tracking-wider">
                    <a href="#" className="hover:text-neo-yellow transition-colors">Home</a>
                    <a href="#about" className="hover:text-neo-pink transition-colors">About</a>
                    <a href="#projects" className="hover:text-neo-blue transition-colors">Projects</a>
                    <a href="#contact" className="hover:text-neo-green transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

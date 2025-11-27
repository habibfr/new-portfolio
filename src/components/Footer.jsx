import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/5 bg-primary">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Hafaro Dev. All rights reserved.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span>Made with</span>
                    <Heart size={16} className="text-red-500 fill-red-500" />
                    <span>using React & Tailwind</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

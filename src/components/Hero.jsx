import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 bg-neo-bg relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-20 right-10 w-24 h-24 bg-neo-yellow rounded-full border-3 border-neo-black shadow-neo animate-bounce delay-100"></div>
            <div className="absolute bottom-20 left-10 w-16 h-16 bg-neo-pink rotate-12 border-3 border-neo-black shadow-neo"></div>
            <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-neo-blue rounded-none border-3 border-neo-black"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <div className="inline-block mb-4 px-4 py-1 bg-neo-green border-3 border-neo-black shadow-neo-sm transform -rotate-2">
                        <span className="font-bold text-sm uppercase tracking-widest">Available for hire</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-purple to-neo-blue underline decoration-neo-black decoration-4 underline-offset-4">Habib Fatkhul Rohman</span>
                        <br />
                        <span className="text-4xl md:text-6xl mt-2 block">Full-Stack Developer</span>
                    </h1>

                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-700 font-medium border-l-4 border-neo-black pl-4 bg-white/50 py-2">
                        I build accessible, pixel-perfect, performant, and awesome web experiences using modern technologies.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="#projects" className="neo-btn group flex items-center gap-2 bg-neo-yellow text-neo-black">
                            View My Work
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#contact" className="neo-btn bg-neo-white text-neo-black hover:bg-neo-black hover:text-neo-white">
                            Contact Me
                        </a>
                    </div>

                    <div className="mt-12 flex justify-center gap-6">
                        <a href="https://github.com/habibfr" target="_blank" rel="noopener noreferrer" className="p-3 bg-neo-white border-3 border-neo-black shadow-neo hover:translate-y-[-2px] hover:shadow-neo-lg transition-all">
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com/in/habibfr" target="_blank" rel="noopener noreferrer" className="p-3 bg-neo-blue border-3 border-neo-black shadow-neo hover:translate-y-[-2px] hover:shadow-neo-lg transition-all">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:hafarowork@gmail.com" className="p-3 bg-neo-pink border-3 border-neo-black shadow-neo hover:translate-y-[-2px] hover:shadow-neo-lg transition-all">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

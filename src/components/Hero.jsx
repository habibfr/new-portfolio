import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent-blue/20 blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent-purple/20 blur-[120px] animate-pulse-slow delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-2 rounded-full border border-accent-blue/30 bg-accent-blue/10 text-accent-blue text-sm font-medium"
                        >
                            Available for Hire
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                            Building <br />
                            <span className="text-gradient">Digital Future</span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-lg">
                            I'm <span className="text-white font-semibold">Habib Fatkhul Rohman</span>.
                            A Software Engineer specializing in building exceptional digital experiences for mobile and web.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-4 rounded-full bg-accent-blue text-primary font-bold hover:bg-accent-blue/90 transition-all hover:scale-105 flex items-center gap-2"
                        >
                            View Projects <ArrowRight size={20} />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-all hover:scale-105 flex items-center gap-2"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                        <SocialLink href="https://github.com/habibfr" icon={<Github size={24} />} />
                        <SocialLink href="https://linkedin.com/in/habibfatkhulrohman" icon={<Linkedin size={24} />} />
                        <SocialLink href="mailto:habibfr968@gmail.com" icon={<Mail size={24} />} />
                    </div>
                </motion.div>

                {/* Visual Element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue to-accent-purple rounded-full opacity-20 animate-float" />
                        <div className="absolute inset-4 glass-panel rounded-2xl flex items-center justify-center border-white/20">
                            <div className="text-center space-y-4 p-8">
                                <div className="w-24 h-24 mx-auto bg-accent-blue/20 rounded-full flex items-center justify-center mb-6">
                                    <Code2 size={48} className="text-accent-blue" />
                                </div>
                                <h3 className="text-2xl font-bold">Full Stack Developer</h3>
                                <p className="text-gray-400">
                                    Turning complex problems into simple, beautiful, and intuitive designs.
                                </p>
                                <div className="flex flex-wrap justify-center gap-2 mt-6">
                                    {['React', 'Flutter', 'Laravel', 'Tailwind'].map((tech) => (
                                        <span key={tech} className="px-3 py-1 rounded-full bg-white/5 text-xs border border-white/10">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const SocialLink = ({ href, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
    >
        {icon}
    </a>
);

// Helper for the icon in the visual element
import { Code2 } from 'lucide-react';

export default Hero;

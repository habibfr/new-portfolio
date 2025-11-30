import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-neo-white border-t-3 border-neo-black relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-16 h-16 bg-neo-pink rounded-full border-3 border-neo-black shadow-neo animate-bounce delay-700 opacity-50"></div>
            <div className="absolute bottom-10 right-10 w-20 h-20 bg-neo-green rotate-45 border-3 border-neo-black shadow-neo animate-pulse delay-300 opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-neo-yellow rounded-full border-3 border-neo-black shadow-neo opacity-20 animate-ping"></div>
            <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-neo-blue border-3 border-neo-black shadow-neo animate-spin-slow opacity-40"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image/Avatar Section */}
                    <div className="w-full md:w-1/3">
                        <div className="relative">
                            <div className="absolute inset-0 bg-neo-black translate-x-4 translate-y-4 border-3 border-neo-black"></div>
                            <div className="relative bg-neo-blue border-3 border-neo-black p-2 aspect-square overflow-hidden">
                                <img
                                    src="/avatar.png"
                                    alt="Habib Fatkhul Rohman"
                                    className="w-full h-full object-cover bg-neo-white border-3 border-neo-black"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-2/3">
                        <div className="inline-block px-4 py-1 bg-neo-purple border-3 border-neo-black shadow-neo-sm mb-6 rotate-1">
                            <h2 className="text-3xl font-bold uppercase">About Me</h2>
                        </div>

                        <div className="neo-card p-8 bg-neo-bg">
                            <p className="text-lg leading-relaxed mb-6">
                                Hello! My name is <span className="font-bold bg-neo-yellow px-1">Habib Fatkhul Rohman</span> (aka Hafarou).
                                I am a software engineer specializing in mobile and web application development.
                                I focus on building robust, scalable, and efficient software solutions that solve complex problems and bring ideas to life.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                My passion for technology started with curiosity about how the internet works, and
                                it has evolved into a professional career dedicated to writing clean, maintainable code and
                                delivering valuable software products.
                            </p>
                            <p className="text-lg leading-relaxed">
                                When I'm not coding, I enjoy exploring new technologies, contributing to open source projects,
                                and having a good cup of coffee to spark creativity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

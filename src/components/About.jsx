import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-neo-white border-t-3 border-neo-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image/Avatar Section */}
                    <div className="w-full md:w-1/3">
                        <div className="relative">
                            <div className="absolute inset-0 bg-neo-black translate-x-4 translate-y-4 border-3 border-neo-black"></div>
                            <div className="relative bg-neo-blue border-3 border-neo-black p-2 aspect-square overflow-hidden">
                                <img
                                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Habib"
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
                                I am an Information System student at Dinamika University with a deep passion for
                                Mobile and Website application development.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                My journey in tech started with curiosity about how things work on the internet,
                                and it has evolved into a career where I build robust and scalable applications.
                                I love solving complex problems and turning ideas into reality through code.
                            </p>
                            <p className="text-lg leading-relaxed">
                                When I'm not coding, you can find me exploring new technologies, contributing to open source,
                                or enjoying a good cup of coffee.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

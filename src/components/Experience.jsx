import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: "Freelance Fullstack Developer",
            company: "Self-Employed",
            period: "2023 - Present",
            description: "Building custom web solutions for clients using React, Node.js, and Laravel. Delivering high-quality code and maintaining long-term client relationships.",
            color: "bg-neo-pink"
        },
        {
            title: "Information System Student",
            company: "Dinamika University",
            period: "2021 - Present",
            description: "Majoring in Information Systems. Active in student organizations and tech communities. Focusing on Software Engineering and Data Analysis.",
            color: "bg-neo-blue"
        }
    ];

    return (
        <section id="experience" className="py-20 bg-neo-bg border-t-3 border-neo-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block px-6 py-2 bg-neo-white border-3 border-neo-black shadow-neo -rotate-2">
                        <h2 className="text-4xl font-bold uppercase">My Journey</h2>
                    </div>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-neo-black hidden md:block"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className={`flex flex-col md:flex-row items-center justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-neo-white border-4 border-neo-black rounded-full z-10 hidden md:block"></div>

                                {/* Content Card */}
                                <div className="w-full md:w-5/12">
                                    <div className={`neo-card p-6 ${exp.color} relative group`}>
                                        <div className="absolute -top-4 -right-4 bg-neo-white border-3 border-neo-black p-2 shadow-neo-sm">
                                            <Briefcase size={20} />
                                        </div>
                                        <span className="inline-block px-3 py-1 bg-neo-black text-neo-white text-sm font-bold mb-3 border-2 border-white">
                                            {exp.period}
                                        </span>
                                        <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                                        <h4 className="text-lg font-semibold mb-4 underline decoration-2">{exp.company}</h4>
                                        <p className="text-sm font-medium leading-relaxed opacity-90">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Empty space for the other side */}
                                <div className="w-full md:w-5/12 hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

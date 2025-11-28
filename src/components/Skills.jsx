import React from 'react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Mobile",
            color: "bg-neo-pink",
            skills: ["Kotlin", "Java", "React Native", "Flutter", "Dart"]
        },
        {
            title: "Fullstack",
            color: "bg-neo-blue",
            skills: ["React", "Tailwind CSS", "Golang", "Express", "Laravel", "PostgreSQL"]
        },
        {
            title: "Tools & DevOps",
            color: "bg-neo-green",
            skills: ["Git", "Docker", "Linux", "Nginx", "Figma"]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-neo-white border-t-3 border-neo-black relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-20 right-20 w-8 h-8 bg-neo-purple border-3 border-neo-black shadow-neo animate-ping opacity-40"></div>
            <div className="absolute bottom-20 left-20 w-24 h-24 bg-neo-pink rounded-full border-3 border-neo-black shadow-neo opacity-30"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-neo-green border-3 border-neo-black shadow-neo rotate-45 opacity-10 animate-spin-slow"></div>
            <div className="absolute top-1/3 left-1/4 w-14 h-14 bg-neo-yellow border-3 border-neo-black shadow-neo animate-bounce delay-100 opacity-40"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block px-6 py-2 bg-neo-yellow border-3 border-neo-black shadow-neo rotate-2">
                        <h2 className="text-4xl font-bold uppercase">Tech Stack</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="neo-card p-6 bg-neo-bg flex flex-col h-full">
                            <div className={`inline-block self-start px-4 py-1 ${category.color} border-3 border-neo-black shadow-neo-sm mb-6 -rotate-1`}>
                                <h3 className="text-xl font-bold uppercase">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-neo-white border-2 border-neo-black font-bold text-sm hover:bg-neo-black hover:text-neo-white transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

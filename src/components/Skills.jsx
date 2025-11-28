import React from 'react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            color: "bg-neo-pink",
            skills: ["React", "Vue.js", "Tailwind CSS", "TypeScript", "Next.js", "HTML5/CSS3"]
        },
        {
            title: "Backend",
            color: "bg-neo-blue",
            skills: ["Node.js", "Express", "Laravel", "PHP", "Python", "PostgreSQL"]
        },
        {
            title: "Tools & DevOps",
            color: "bg-neo-green",
            skills: ["Git", "Docker", "Linux", "AWS", "Nginx", "Figma"]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-neo-white border-t-3 border-neo-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

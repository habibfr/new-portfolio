import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Dashboard",
            description: "A comprehensive dashboard for managing online stores. Features include real-time analytics, inventory management, and order processing.",
            tags: ["React", "Tailwind", "Node.js"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            links: { demo: "#", github: "#" }
        },
        {
            title: "Task Management App",
            description: "Collaborative task manager with drag-and-drop interface, team assignments, and progress tracking.",
            tags: ["Vue.js", "Firebase", "Pinia"],
            image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
            links: { demo: "#", github: "#" }
        },
        {
            title: "Portfolio Website",
            description: "Personal portfolio website featuring a Neo-Brutalism design style, fully responsive and accessible.",
            tags: ["React", "Vite", "Tailwind"],
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
            links: { demo: "#", github: "#" }
        }
    ];

    return (
        <section id="projects" className="py-20 bg-neo-bg border-t-3 border-neo-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div className="inline-block px-6 py-2 bg-neo-green border-3 border-neo-black shadow-neo -rotate-1">
                        <h2 className="text-4xl font-bold uppercase">Featured Work</h2>
                    </div>
                    <a href="https://github.com/habibfr" className="hidden md:flex items-center gap-2 font-bold hover:underline decoration-2 underline-offset-4">
                        View all on GitHub <ExternalLink size={16} />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="neo-card p-0 overflow-hidden group">
                            <div className="relative h-48 border-b-3 border-neo-black overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-neo-blue opacity-0 group-hover:opacity-20 transition-opacity duration-300 mix-blend-multiply"></div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                <p className="text-gray-700 mb-4 font-medium line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="text-xs font-bold px-2 py-1 bg-neo-bg border-2 border-neo-black">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a href={project.links.demo} className="flex-1 neo-btn py-2 text-center text-sm bg-neo-yellow text-neo-black hover:bg-neo-black hover:text-neo-white">
                                        Live Demo
                                    </a>
                                    <a href={project.links.github} className="p-2 border-3 border-neo-black shadow-neo hover:translate-y-[-2px] hover:shadow-neo-lg bg-neo-white transition-all">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="https://github.com/habibfr" className="neo-btn inline-flex items-center gap-2">
                        View all on GitHub <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;

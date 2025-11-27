import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Freelancer Website',
            description: 'A comprehensive platform for freelancers built with Laravel, Tailwind CSS, and MySQL.',
            tags: ['Laravel', 'Tailwind', 'MySQL'],
            size: 'md:col-span-2 md:row-span-2',
            color: 'from-blue-500/20 to-cyan-500/20',
            image: 'bg-gradient-to-br from-blue-900 to-slate-900'
        },
        {
            title: 'Flutter Apps',
            description: 'Collection of cross-platform mobile applications developed using Dart and Flutter.',
            tags: ['Flutter', 'Dart', 'Mobile'],
            size: 'md:col-span-1 md:row-span-1',
            color: 'from-purple-500/20 to-pink-500/20',
            image: 'bg-gradient-to-br from-purple-900 to-slate-900'
        },
        {
            title: 'Web Applications',
            description: 'Dynamic web apps powered by PHP and vanilla JavaScript.',
            tags: ['PHP', 'JavaScript', 'Web'],
            size: 'md:col-span-1 md:row-span-1',
            color: 'from-emerald-500/20 to-teal-500/20',
            image: 'bg-gradient-to-br from-emerald-900 to-slate-900'
        },
        {
            title: 'Java Mobile App',
            description: 'Native Android applications built with Java.',
            tags: ['Java', 'Android'],
            size: 'md:col-span-1 md:row-span-1',
            color: 'from-orange-500/20 to-red-500/20',
            image: 'bg-gradient-to-br from-orange-900 to-slate-900'
        },
        {
            title: 'Kotlin Apps',
            description: 'Modern Android development using Kotlin.',
            tags: ['Kotlin', 'Android'],
            size: 'md:col-span-2 md:row-span-1',
            color: 'from-indigo-500/20 to-violet-500/20',
            image: 'bg-gradient-to-br from-indigo-900 to-slate-900'
        },
    ];

    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-accent-purple rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`group relative rounded-3xl overflow-hidden glass-panel border-white/5 ${project.size}`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative h-full p-8 flex flex-col justify-between z-10">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-accent-blue transition-colors">
                                            {project.title}
                                        </h3>
                                        <ArrowUpRight className="text-gray-500 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100" />
                                    </div>
                                    <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-6">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

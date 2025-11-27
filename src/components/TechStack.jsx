import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Smartphone, Globe, Layout, Server } from 'lucide-react';

const TechStack = () => {
    const technologies = [
        { name: 'React', icon: <Code2 />, color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
        { name: 'Flutter', icon: <Smartphone />, color: 'text-blue-400', bg: 'bg-blue-400/10' },
        { name: 'Laravel', icon: <Server />, color: 'text-red-500', bg: 'bg-red-500/10' },
        { name: 'JavaScript', icon: <Code2 />, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
        { name: 'PHP', icon: <Globe />, color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
        { name: 'Tailwind', icon: <Layout />, color: 'text-teal-400', bg: 'bg-teal-400/10' },
        { name: 'Java', icon: <Code2 />, color: 'text-orange-500', bg: 'bg-orange-500/10' },
        { name: 'MySQL', icon: <Database />, color: 'text-blue-300', bg: 'bg-blue-300/10' },
    ];

    return (
        <section className="py-10">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel p-8 rounded-3xl border-white/5"
                >
                    <h3 className="text-2xl font-bold mb-8 text-center">
                        My <span className="text-gradient">Tech Stack</span>
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className={`p-4 rounded-xl ${tech.bg} border border-white/5 flex items-center gap-3 cursor-default transition-colors hover:bg-opacity-20`}
                            >
                                <span className={`${tech.color}`}>{tech.icon}</span>
                                <span className="font-medium text-gray-200">{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;

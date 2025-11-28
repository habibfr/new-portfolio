import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, User, Calendar } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-accent-blue rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Bio Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass-panel p-8 rounded-3xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <User size={120} />
                        </div>

                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span className="p-2 rounded-lg bg-accent-blue/10 text-accent-blue">
                                <User size={24} />
                            </span>
                            Who I Am
                        </h3>

                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p>
                                Hello! My name is <span className="text-white font-semibold">Habib Fatkhul Rohman || Hafarou</span>.
                                I am an Information System student at Dinamika University with a deep passion for
                                Mobile and Website application development.
                            </p>
                            <p>
                                My journey started with web development, but I soon discovered the exciting world of
                                mobile programming. I believe that continuous learning and personal projects are the
                                keys to mastery in this ever-evolving field.
                            </p>
                            <p>
                                I am capable of creating user-friendly, visually appealing, and high-performance
                                applications. Currently, I'm focused on expanding my tech stack and building
                                innovative solutions.
                            </p>
                        </div>
                    </motion.div>

                    {/* Education & Experience Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="glass-panel p-8 rounded-3xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <GraduationCap size={120} />
                        </div>

                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span className="p-2 rounded-lg bg-accent-purple/10 text-accent-purple">
                                <GraduationCap size={24} />
                            </span>
                            Education
                        </h3>

                        <div className="space-y-8">
                            <div className="relative pl-8 border-l-2 border-white/10">
                                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent-purple" />
                                <h4 className="text-xl font-semibold text-white">Information System</h4>
                                <p className="text-accent-purple mb-1">Dinamika University</p>
                                <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                                    <Calendar size={14} />
                                    <span>Aug 2021 - Present</span>
                                </div>
                                <p className="text-gray-400 text-sm">
                                    Focusing on software engineering, database management, and system analysis.
                                    Active in programming communities and tech workshops.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

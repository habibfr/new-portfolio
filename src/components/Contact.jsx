import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent-blue/10 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            Let's work <br />
                            <span className="text-gradient">together</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-md">
                            I'm always open to discussing product design work or partnership opportunities.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-white/5 border border-white/10">
                                    <Mail className="text-accent-blue" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email</p>
                                    <a href="mailto:hafarowork@gmail.com" className="text-white hover:text-accent-blue transition-colors">
                                        hafarowork@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-white/5 border border-white/10">
                                    <MapPin className="text-accent-purple" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Location</p>
                                    <p className="text-white">Indonesia</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 rounded-3xl space-y-6"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 ml-1">Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all text-white placeholder-gray-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 ml-1">Email</label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all text-white placeholder-gray-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 ml-1">Message</label>
                            <textarea
                                rows="4"
                                placeholder="Tell me about your project..."
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all text-white placeholder-gray-500 resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-white font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
                        >
                            Send Message
                            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-neo-white border-t-3 border-neo-black relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neo-blue rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
            <div className="absolute top-20 right-20 w-12 h-12 bg-neo-pink border-3 border-neo-black shadow-neo animate-spin-slow opacity-60"></div>
            <div className="absolute bottom-10 left-1/3 w-20 h-20 bg-neo-purple border-3 border-neo-black shadow-neo rotate-12 opacity-40 animate-bounce"></div>
            <div className="absolute top-1/3 left-10 w-10 h-10 bg-neo-yellow rounded-full border-3 border-neo-black shadow-neo animate-ping delay-500 opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <div className="inline-block px-6 py-2 bg-neo-pink border-3 border-neo-black shadow-neo mb-8 rotate-1">
                            <h2 className="text-4xl font-bold uppercase">Get In Touch</h2>
                        </div>

                        <h3 className="text-3xl font-bold mb-6 leading-tight">
                            Have a project in mind? <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-purple to-neo-blue">Let's build something awesome.</span>
                        </h3>

                        <p className="text-lg text-neo-black/80 mb-8 font-medium max-w-md">
                            I'm currently available for freelance projects and full-time opportunities.
                            If you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-neo-yellow border-3 border-neo-black shadow-neo-sm">
                                    <Mail size={24} className="text-black" />
                                </div>
                                <div>
                                    <p className="font-bold text-sm uppercase text-neo-black/60">Email</p>
                                    <a href="mailto:hafarowork@gmail.com" className="text-lg font-bold hover:underline">hafarowork@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-neo-green border-3 border-neo-black shadow-neo-sm">
                                    <MapPin size={24} className="text-black" />
                                </div>
                                <div>
                                    <p className="font-bold text-sm uppercase text-neo-black/60">Location</p>
                                    <p className="text-lg font-bold">Surabaya, Indonesia</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="neo-card p-8 bg-neo-bg">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold uppercase mb-2">Name</label>
                                <input type="text" id="name" className="neo-input" placeholder="John Doe" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold uppercase mb-2">Email</label>
                                <input type="email" id="email" className="neo-input" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold uppercase mb-2">Message</label>
                                <textarea id="message" rows="4" className="neo-input" placeholder="Tell me about your project..."></textarea>
                            </div>
                            <button type="submit" className="w-full neo-btn bg-neo-black text-neo-white hover:bg-neo-white hover:text-neo-black">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

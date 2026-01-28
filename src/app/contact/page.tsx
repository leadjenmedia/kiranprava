"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <main className="min-h-screen">
            <Navbar />
            <PageHero
                title="Contact Us"
                subtitle="Get in touch with our technical team for demos, quotes, and support. We respond within 2 hours."
            />

            <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />
                <div className="section-container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-10 sm:gap-16">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8 sm:space-y-10"
                        >
                            <div>
                                <span className="inline-block py-1 px-3 bg-blue-500/10 border border-blue-500/20 text-blue-600 text-[10px] font-bold tracking-[0.3em] uppercase mb-4 sm:mb-6">
                                    Support Nexus
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-industrial-charcoal mb-4 sm:mb-6">
                                    Reach Our <span className="text-primary">Team</span>
                                </h2>
                                <p className="text-gray-500 font-body mb-8 sm:mb-10">
                                    Whether you need a technical audit, product demo, or spare parts support, we're here to help. Our experts are available for on-site deployment within 24 hours.
                                </p>
                            </div>

                            <div className="space-y-6 sm:space-y-8">
                                <div className="flex items-start gap-3 sm:gap-4 group">
                                    <div className="p-2.5 sm:p-3 bg-blue-500/10 rounded-sm group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
                                        <MapPin size={22} className="sm:w-6 sm:h-6 text-blue-500" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Address</p>
                                        <p className="text-industrial-charcoal font-body text-sm sm:text-base">
                                            PLOT NO. 1923/2606, Mangalabag,<br />
                                            Cuttack, Odisha – 753001
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 sm:gap-4 group">
                                    <div className="p-2.5 sm:p-3 bg-blue-500/10 rounded-sm group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
                                        <Phone size={22} className="sm:w-6 sm:h-6 text-blue-500" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Phone</p>
                                        <a href="tel:+918984636379" className="text-industrial-charcoal font-body hover:text-primary transition-colors">
                                            +91 89846 36379
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 sm:gap-4 group">
                                    <div className="p-2.5 sm:p-3 bg-blue-500/10 rounded-sm group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
                                        <Mail size={22} className="sm:w-6 sm:h-6 text-blue-500" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Email</p>
                                        <a href="mailto:support@kiranprava.com" className="text-industrial-charcoal font-body hover:text-primary transition-colors">
                                            support@kiranprava.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 sm:gap-4 group">
                                    <div className="p-2.5 sm:p-3 bg-blue-500/10 rounded-sm group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
                                        <Clock size={22} className="sm:w-6 sm:h-6 text-blue-500" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Response Time</p>
                                        <p className="text-industrial-charcoal font-body">&lt; 2 Hours</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#fafafa] border border-gray-200 p-6 sm:p-10 lg:p-12"
                        >
                            <h3 className="text-xl sm:text-2xl font-heading font-bold text-industrial-charcoal mb-2">
                                Request Technical Specs
                            </h3>
                            <p className="text-gray-500 font-body text-sm mb-6 sm:mb-8">
                                Get detailed industrial reports on CIJ, TIJ, TTO, and packaging integration for your line.
                            </p>

                            {submitted ? (
                                <div className="py-12 text-center">
                                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Send size={28} className="text-green-600" />
                                    </div>
                                    <p className="text-lg font-heading font-bold text-industrial-charcoal mb-2">
                                        Message Sent
                                    </p>
                                    <p className="text-gray-500 font-body">
                                        We&apos;ll get back to you within 2 hours.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full px-4 py-3 border border-gray-200 bg-white font-body focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all min-h-[48px]"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 border border-gray-200 bg-white font-body focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all min-h-[48px]"
                                            placeholder="you@company.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="w-full px-4 py-3 border border-gray-200 bg-white font-body focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all min-h-[48px]"
                                            placeholder="+91"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 border border-gray-200 bg-white font-body focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none min-h-[120px]"
                                            placeholder="Tell us about your line, throughput, and requirements..."
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full btn-primary flex items-center justify-center gap-2 group min-h-[48px]"
                                    >
                                        Send Message
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import IndustryGrid from "@/components/IndustryGrid";
import Footer from "@/components/Footer";
import { CheckCircle2, Award, Users, Globe, ArrowRight, Activity } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />

            {/* Why Kiran Prava Section */}
            <section className="py-16 sm:py-24 bg-[#0a0a0a] relative overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 blur-[120px] -z-0"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-900/10 blur-[100px] -z-0"></div>

                <div className="section-container relative z-10">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
                        {/* Image Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="lg:w-1/2 relative group w-full"
                        >
                            <div className="relative z-10 overflow-hidden border border-white/10 rounded-sm">
                                <Image
                                    src="/assets/why_kiran_prava_bg.png"
                                    alt="Industrial Precision Machinery"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                                    <p className="text-[10px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.2em] text-blue-400 mb-1 sm:mb-2">ENGINEERING HUB</p>
                                    <h4 className="text-base sm:text-xl font-bold">Industrial Standard 4.0</h4>
                                </div>
                            </div>
                            {/* Decorative Frame - hide on small mobile to avoid overflow */}
                            <div className="absolute -top-2 -left-2 w-12 h-12 sm:-top-4 sm:-left-4 sm:w-24 sm:h-24 border-t-2 border-l-2 border-blue-500/30"></div>
                            <div className="absolute -bottom-2 -right-2 w-12 h-12 sm:-bottom-4 sm:-right-4 sm:w-24 sm:h-24 border-b-2 border-r-2 border-blue-500/30"></div>
                        </motion.div>

                        {/* Content Side */}
                        <div className="lg:w-1/2 w-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="inline-block py-1 px-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6">
                                    Why Kiran Prava
                                </span>
                                <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6 sm:mb-8 leading-tight">
                                    Precision Driven. <br />
                                    <span className="text-blue-500">Industry Proven.</span>
                                </h3>
                                <p className="text-gray-400 font-body text-base sm:text-lg mb-8 sm:mb-12 max-w-xl">
                                    We don't just supply machines; we engineer end-to-end integration for your production lines, ensuring zero downtime and absolute traceability.
                                </p>
                            </motion.div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                {[
                                    {
                                        icon: <CheckCircle2 className="text-blue-500" size={24} />,
                                        title: "Reliability First",
                                        desc: "Systems designed for 24/7 harsh industrial operations."
                                    },
                                    {
                                        icon: <Award className="text-blue-500" size={24} />,
                                        title: "Certified Tech",
                                        desc: "Hardware meeting strict international quality standards."
                                    },
                                    {
                                        icon: <Users className="text-blue-500" size={24} />,
                                        title: "Expert Support",
                                        desc: "On-site technical deployment within 24 hours."
                                    },
                                    {
                                        icon: <Globe className="text-blue-500" size={24} />,
                                        title: "Global Standards",
                                        desc: "Local support with a global vision for efficiency."
                                    }
                                ].map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="group p-5 sm:p-6 bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.08] transition-all"
                                    >
                                        <div className="mb-3 sm:mb-4 bg-blue-500/10 w-fit p-2.5 sm:p-3 rounded-sm group-hover:scale-110 transition-transform">
                                            {feature.icon}
                                        </div>
                                        <h4 className="text-base sm:text-lg font-bold mb-1.5 sm:mb-2 group-hover:text-blue-400 transition-colors uppercase tracking-wider">{feature.title}</h4>
                                        <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-400 transition-colors">
                                            {feature.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                                className="mt-12"
                            >
                                <Link href="/technology" className="group flex items-center gap-2 text-sm font-bold text-white uppercase tracking-widest hover:text-blue-400 transition-colors w-fit">
                                    Learn more about our process
                                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <ProductGrid />
            <IndustryGrid />

            {/* CTA Section */}
            <section className="py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-[#020817]">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/cta_background.png"
                        alt="Industrial Future"
                        fill
                        className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#020817] via-[#020817]/80 to-transparent"></div>
                </div>

                {/* Decorative HUD Elements */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="absolute top-4 left-4 sm:top-10 sm:left-10 w-20 h-20 sm:w-40 sm:h-40 border-t border-l border-blue-500/50"></div>
                    <div className="absolute bottom-4 right-4 sm:bottom-10 sm:right-10 w-20 h-20 sm:w-40 sm:h-40 border-b border-r border-blue-500/50"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,51,102,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,51,102,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
                </div>

                <div className="section-container relative z-10">
                    <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-12 sm:gap-16 lg:gap-20">
                        <div className="lg:w-3/5 text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)] flex-shrink-0"></div>
                                    <span className="text-[10px] sm:text-xs font-mono font-bold text-blue-400 uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                                        LIVE_TECHNICAL_AUDIT_SYSTEM
                                    </span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-white mb-6 sm:mb-8 leading-[1.1]">
                                    Optimize Your Production. <br />
                                    <span className="text-blue-500">Minimize Every Risk.</span>
                                </h2>
                                <p className="text-gray-400 text-base sm:text-lg md:text-xl font-body mb-8 sm:mb-12 max-w-xl leading-relaxed">
                                    Our technical experts conduct deep-dive analysis of your current coding and packaging workflows to identify efficiency gaps.
                                </p>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 opacity-60">
                                    {[
                                        { label: "Throughput", val: "+24%" },
                                        { label: "Ink Saving", val: "15%" },
                                        { label: "Uptime", val: "99.9%" }
                                    ].map((stat, i) => (
                                        <div key={i} className="border-l border-white/20 pl-3 sm:pl-4">
                                            <p className="text-xl sm:text-2xl font-bold text-white">{stat.val}</p>
                                            <p className="text-[10px] uppercase tracking-widest text-gray-500">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:w-2/5 w-full min-w-0"
                        >
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-10 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/10 blur-3xl rounded-full"></div>

                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Request Technical Specs</h3>
                                <p className="text-gray-400 text-sm mb-6 sm:mb-8 leading-relaxed">
                                    Get detailed industrial reports on CIJ, TIJ and TTO integration for your specific line requirements.
                                </p>

                                <div className="flex flex-col gap-3 sm:gap-4">
                                    <Link href="/contact" className="w-full bg-white text-primary font-bold uppercase tracking-widest px-6 sm:px-8 py-4 sm:py-5 flex items-center justify-between group/btn hover:bg-blue-50 transition-all min-h-[48px]">
                                        Schedule Audit
                                        <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform flex-shrink-0" />
                                    </Link>
                                    <Link href="/contact" className="w-full border border-white/20 text-white font-bold uppercase tracking-widest px-6 sm:px-8 py-4 sm:py-5 hover:bg-white/5 transition-all text-center hover:bg-white/10 min-h-[48px] flex items-center justify-center">
                                        Contact Support
                                    </Link>
                                </div>

                                <div className="mt-6 sm:mt-8 flex items-center gap-3 text-[9px] font-mono text-gray-500 uppercase tracking-widest justify-center flex-wrap">
                                    <Activity size={14} className="text-blue-500 flex-shrink-0" />
                                    <span>Response Time: &lt; 2 Hours</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

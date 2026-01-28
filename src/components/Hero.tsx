"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-20 sm:pt-24">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/premium_industrial_hero_bg.png"
                    alt="Premium Industrial Manufacturing Background"
                    fill
                    className="object-cover opacity-40 scale-105 animate-slow-zoom"
                    priority
                />
                {/* Modern industrial gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-primary/60"></div>

                {/* Subtle Grid Overlay */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>

            <div className="section-container relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className="text-left space-y-6 sm:space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-3 sm:px-4 py-2 rounded-full max-w-full"
                    >
                        <ShieldCheck size={16} className="text-blue-400 flex-shrink-0" />
                        <span className="text-blue-400 text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] truncate">
                            Global Industrial Standards
                        </span>
                    </motion.div>

                    <div className="space-y-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-[1.05]"
                        >
                            Engineered for <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                                Infinite Precision
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-base sm:text-lg md:text-xl text-gray-300 font-body max-w-xl leading-relaxed"
                        >
                            Next-generation coding, marking, and packaging solutions tailored for the high-velocity manufacturing landscape of India.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
                    >
                        <Link href="/#products" className="group relative btn-primary px-8 sm:px-12 py-4 sm:py-5 flex items-center justify-center gap-3 overflow-hidden text-center">
                            <span className="relative z-10">Explore Solutions</span>
                            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>
                        <Link href="/contact" className="px-8 sm:px-12 py-4 sm:py-5 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/5 transition-all backdrop-blur-sm text-center">
                            Get A Quote
                        </Link>
                    </motion.div>

                    {/* Technical Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="pt-8 sm:pt-12 grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-12 border-t border-white/10"
                    >
                        {[
                            { label: "Years Excellence", value: "10+" },
                            { label: "Deployments", value: "500+" },
                            { label: "Support", value: "24/7" },
                        ].map((stat, i) => (
                            <div key={i} className="group cursor-default">
                                <p className="text-2xl sm:text-3xl font-heading font-bold text-white group-hover:text-blue-400 transition-colors">
                                    {stat.value}
                                </p>
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-1">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Hero Feature Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative z-10">
                        <Image
                            src="/assets/cij_printer_premium.png"
                            alt="CIJ Printer Premium Render"
                            width={600}
                            height={600}
                            className="object-contain drop-shadow-[0_20px_50px_rgba(0,51,102,0.5)] animate-float"
                        />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 rounded-full blur-[100px] z-0"></div>
                    <div className="absolute -top-10 -right-10 w-32 h-32 border-t-2 border-r-2 border-blue-500/30 rounded-tr-3xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 border-b-2 border-l-2 border-blue-500/30 rounded-bl-3xl"></div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block z-10"
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2 backdrop-blur-sm">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;

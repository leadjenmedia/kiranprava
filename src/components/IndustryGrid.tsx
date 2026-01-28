"use client";

import React from "react";
import { motion } from "framer-motion";
import { Pill, Coffee, ShoppingBag, Car, ChevronRight, Activity, Zap, ShieldCheck } from "lucide-react";

const industries = [
    {
        id: "01",
        title: "Pharmaceuticals",
        icon: <Pill size={32} />,
        accentIcon: <Activity size={16} />,
        desc: "Traceability solutions for 1D/2D data matrix coding on unit packs and cartons.",
        stats: "99.9% READ RATE",
        color: "blue"
    },
    {
        id: "02",
        title: "Food & Beverage",
        icon: <Coffee size={32} />,
        accentIcon: <ShieldCheck size={16} />,
        desc: "High-speed coding systems designed for moisture-rich and wash-down environments.",
        stats: "IP65 PROTECTED",
        color: "blue"
    },
    {
        id: "03",
        title: "FMCG / Cosmetics",
        icon: <ShoppingBag size={32} />,
        accentIcon: <Zap size={16} />,
        desc: "Aesthetic and high-contrast coding for premium consumer packaging and labels.",
        stats: "ULTRA FAST DRY",
        color: "blue"
    },
    {
        id: "04",
        title: "Automotive & Industrial",
        icon: <Car size={32} />,
        accentIcon: <ShieldCheck size={16} />,
        desc: "Permanent marking and engraving for durable components and heavy machinery.",
        stats: "LASER PRECISION",
        color: "blue"
    }
];

const IndustryGrid = () => {
    return (
        <section className="py-20 sm:py-28 lg:py-32 bg-[#050505] text-white relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-0"></div>
            <div className="absolute bottom-0 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-blue-900/10 blur-[100px] rounded-full -z-0"></div>

            <div className="section-container relative z-10">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 sm:mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 mb-4 sm:mb-6"
                        >
                            <span className="w-8 sm:w-10 h-[1px] bg-blue-500"></span>
                            <h2 className="text-[10px] sm:text-[11px] font-bold text-blue-500 uppercase tracking-[0.3em] sm:tracking-[0.5em]">
                                Cross-Sector Impact
                            </h2>
                        </motion.div>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold leading-tight"
                        >
                            Engineered for Every <br />
                            <span className="text-blue-500">Major Industry.</span>
                        </motion.h3>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-left md:text-right border-l-2 border-white/10 pl-6 md:pl-10 w-full md:w-auto"
                    >
                        <p className="text-2xl sm:text-3xl font-heading font-bold mb-1">500+</p>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Installations Nationwide</p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/5 bg-white/5 backdrop-blur-sm">
                    {industries.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-6 sm:p-8 lg:p-12 border-white/5 border-[0.5px] hover:bg-white/[0.03] transition-all duration-500 cursor-pointer overflow-hidden"
                        >
                            {/* Hover Backdrop Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-transparent group-hover:from-blue-500/5 transition-all duration-700"></div>

                            {/* Industry ID Header */}
                            <div className="flex items-center justify-between mb-10 sm:mb-16">
                                <span className="text-[10px] font-mono font-bold text-gray-500 group-hover:text-blue-500 transition-colors">
                                    IND_{item.id}
                                </span>
                                <div className="p-2 bg-white/5 group-hover:bg-blue-500/20 rounded-sm transition-all duration-500 transform group-hover:rotate-12">
                                    {item.accentIcon}
                                </div>
                            </div>

                            {/* Main Icon */}
                            <div className="mb-6 sm:mb-8 text-gray-400 group-hover:text-blue-400 transition-all duration-500 transform group-hover:scale-110">
                                {item.icon}
                            </div>

                            {/* Content */}
                            <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 group-hover:text-white transition-colors">{item.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6 sm:mb-10 group-hover:text-gray-400 transition-colors">
                                {item.desc}
                            </p>

                            {/* Stats/Badge */}
                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-[9px] font-bold text-blue-500 border border-blue-500/30 px-2 py-0.5 tracking-tighter uppercase whitespace-nowrap">
                                    {item.stats}
                                </span>
                                <ChevronRight size={16} className="text-gray-600 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                            </div>

                            {/* Progress bar decoration */}
                            <div className="absolute bottom-0 left-0 h-[2px] bg-blue-500 w-0 group-hover:w-full transition-all duration-700"></div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 sm:mt-20 flex flex-wrap items-center justify-center gap-4 sm:gap-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-500"
                >
                    <span className="text-xs font-bold tracking-widest uppercase w-full sm:w-auto text-center sm:text-left">Trusted in Sectors:</span>
                    <div className="h-[1px] flex-grow bg-white/10 hidden sm:block max-w-20"></div>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-[10px] font-mono uppercase">
                        <span>// Beverages</span>
                        <span>// Cosmetics</span>
                        <span>// Industrial</span>
                        <span>// Packaging</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default IndustryGrid;

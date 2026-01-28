"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Layers, Maximize, Settings } from "lucide-react";

interface ProductCardProps {
    title: string;
    description: string;
    image: string;
    specs: string[];
}

const ProductCard = ({ title, description, image, specs }: ProductCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="group relative bg-[#fafafa] border border-gray-100 flex flex-col h-full transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,51,102,0.1)]"
        >
            {/* Corner Accents */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-blue-500/0 group-hover:border-blue-500/40 transition-all duration-500"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-blue-500/0 group-hover:border-blue-500/40 transition-all duration-500"></div>

            {/* Image Container */}
            <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden bg-gray-100 p-3 sm:p-4">
                <div className="relative w-full h-full overflow-hidden border border-gray-200">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Technical Label */}
                <div className="absolute top-4 left-4 sm:top-8 sm:left-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                    <div className="w-1.5 h-1.5 bg-blue-500 animate-pulse flex-shrink-0"></div>
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold text-primary tracking-tighter uppercase truncate max-w-[120px] sm:max-w-none">SCANNING_PRECISION_V4</span>
                </div>

                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-primary text-white p-2 sm:p-3 rounded-none opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight size={20} className="sm:w-6 sm:h-6" />
                </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 lg:p-10 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="w-6 sm:w-8 h-[1px] bg-blue-500/30"></div>
                    <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em]">Tier 01 Solutions</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-heading font-bold mb-3 sm:mb-4 text-industrial-charcoal group-hover:text-primary transition-colors duration-300">
                    {title}
                </h3>

                <p className="text-gray-500 font-body text-sm mb-6 sm:mb-10 leading-relaxed line-clamp-3">
                    {description}
                </p>

                {/* Specs Section */}
                <div className="mt-auto pt-6 sm:pt-8 border-t border-gray-100">
                    <div className="grid grid-cols-1 gap-4">
                        {specs.map((spec, i) => (
                            <div key={i} className="flex items-center gap-4 group/spec">
                                <div className="p-1.5 bg-gray-100 group-hover/spec:bg-blue-50 transition-colors">
                                    {i === 0 ? <Cpu size={12} className="text-gray-400 group-hover/spec:text-blue-500" /> :
                                        i === 1 ? <Settings size={12} className="text-gray-400 group-hover/spec:text-blue-500" /> :
                                            <Layers size={12} className="text-gray-400 group-hover/spec:text-blue-500" />}
                                </div>
                                <span className="text-[11px] font-bold text-gray-400 group-hover/spec:text-industrial-charcoal transition-colors uppercase tracking-widest leading-none">
                                    {spec}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <button className="mt-6 sm:mt-10 group/btn relative overflow-hidden flex items-center justify-between w-full text-[11px] font-bold uppercase tracking-[0.2em] text-primary pt-4 sm:pt-6 border-t border-gray-100 transition-all min-h-[44px]">
                    <span className="relative z-10">Integration Specs</span>
                    <div className="relative z-10 flex items-center gap-2 group-hover/btn:translate-x-2 transition-transform duration-300">
                        <span className="h-[1px] w-4 bg-primary"></span>
                        <ArrowUpRight size={14} />
                    </div>
                </button>
            </div>
        </motion.div>
    );
};

export default ProductCard;

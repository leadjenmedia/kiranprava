"use client";

import React from "react";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

const products = [
    {
        title: "Continuous Inkjet (CIJ)",
        description: "High-speed coding solutions for non-stop production environments. Precise, versatile, and built for 24/7 industrial performance.",
        image: "/assets/cij_printer_industrial.png",
        specs: ["Non-contact printing", "Instant dry inks", "Micro & Macro coding"]
    },
    {
        title: "TIJ / TTO Printing",
        description: "Thermal printing excellence for high-resolution graphics and barcodes on flexible packaging and secondary cartons.",
        image: "/assets/tij_tto_printer_industrial.png",
        specs: ["Zero Maintenance", "High Resolution", "Easy Integration"]
    },
    {
        title: "End-of-Line Packaging",
        description: "Intelligent automated packaging systems designed to reduce labor costs and increase throughput with absolute reliability.",
        image: "/assets/packaging_machine_industrial.png",
        specs: ["Modular Design", "Smart PLC Control", "High Throughput"]
    }
];

const ProductGrid = () => {
    return (
        <section className="py-16 sm:py-24 bg-white relative overflow-hidden" id="products">
            {/* Background Decorative Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-30"></div>

            <div className="section-container relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-20 gap-8 sm:gap-10">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 mb-4 sm:mb-6">
                            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                            <h2 className="text-[10px] sm:text-[11px] font-bold text-blue-600 uppercase tracking-[0.3em] sm:tracking-[0.4em]">
                                Technical Expertise
                            </h2>
                        </div>
                        <h3 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-industrial-charcoal leading-[1.1] mb-6 sm:mb-8">
                            High-Performance <br />
                            <span className="text-primary italic">Precision Systems.</span>
                        </h3>
                        <div className="h-1 w-20 bg-primary/20"></div>
                    </div>
                    <div className="max-w-sm">
                        <p className="text-gray-500 font-body text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                            Engineered for the most demanding production lines. Our systems deliver absolute reliability where it matters most.
                        </p>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[10px] font-mono text-gray-400 font-bold uppercase tracking-widest">
                            <span>Sect_ID: 04-PROD</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full hidden sm:inline"></span>
                            <span>VER: 2026.01</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <ProductCard {...product} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;

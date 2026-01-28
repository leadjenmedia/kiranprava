"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Printer, Layers } from "lucide-react";

const tijTtoProducts = [
    {
        title: "TIJ Precision Lab",
        description: "Thermal inkjet printers for high-resolution graphics, 1D/2D barcodes, and variable data on labels, cartons, and flexible packaging.",
        image: "/assets/tij_tto_printer_industrial.png",
        specs: ["Zero Maintenance", "High Resolution", "Easy Integration"],
    },
    {
        title: "TTO Integration",
        description: "Thermal transfer overprinters for flexible packaging, films, and pouches. Crisp codes and graphics with minimal consumable usage.",
        image: "/assets/tij_tto_printer_industrial.png",
        specs: ["Flexible Substrates", "Low TCO", "Fast Changeover"],
    },
];

export default function TIJTTOPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <PageHero
                title="TIJ / TTO Printing"
                subtitle="Thermal printing excellence for high-resolution graphics and barcodes on flexible packaging and secondary cartons."
                image="/assets/tij_tto_printer_industrial.png"
                imageAlt="TIJ TTO Printer"
            />

            {/* Overview */}
            <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />
                <div className="section-container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative order-2 lg:order-1"
                        >
                            <div className="relative overflow-hidden border border-gray-200">
                                <Image
                                    src="/assets/tij_tto_printer_industrial.png"
                                    alt="TIJ TTO Printer"
                                    width={600}
                                    height={450}
                                    className="w-full h-auto object-contain p-6 sm:p-8"
                                />
                            </div>
                            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-16 h-16 sm:w-24 sm:h-24 border-t-2 border-l-2 border-blue-500/30" />
                            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 border-b-2 border-r-2 border-blue-500/30" />
                        </motion.div>
                        <div className="order-1 lg:order-2">
                            <span className="inline-block py-1 px-3 bg-blue-500/10 border border-blue-500/20 text-blue-600 text-[10px] font-bold tracking-[0.3em] uppercase mb-4 sm:mb-6">
                                TIJ & TTO
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-industrial-charcoal mb-4 sm:mb-6">
                                Thermal Excellence. <span className="text-primary">Ultra-Fast Dry.</span>
                            </h2>
                            <p className="text-gray-500 font-body mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                                Thermal Inkjet (TIJ) and Thermal Transfer Overprint (TTO) systems deliver sharp, high-contrast codes and graphics on labels, cartons, films, and pouches. Zero daily maintenance, quick ribbon/label changes, and seamless integration with your line.
                            </p>
                            <div className="space-y-3 sm:space-y-4">
                                {[
                                    { icon: <Printer size={20} className="text-blue-500 flex-shrink-0" />, text: "TIJ: No printhead maintenance; ideal for secondary packaging and labels" },
                                    { icon: <Layers size={20} className="text-blue-500 flex-shrink-0" />, text: "TTO: Best for flexible packaging, films, and pouches with low TCO" },
                                    { icon: <CheckCircle2 size={20} className="text-blue-500 flex-shrink-0" />, text: "Easy integration with existing PLC and line control systems" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 sm:gap-4">
                                        <div className="mt-0.5">{item.icon}</div>
                                        <p className="text-gray-600 font-body text-sm sm:text-base">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 mt-8 sm:mt-10 btn-primary group min-h-[48px]"
                            >
                                Request a Demo
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="py-16 sm:py-24 bg-[#fafafa] relative overflow-hidden">
                <div className="section-container relative z-10">
                    <div className="flex items-center gap-2 mb-8 sm:mb-12">
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                        <h2 className="text-[10px] sm:text-[11px] font-bold text-blue-600 uppercase tracking-[0.3em] sm:tracking-[0.4em]">
                            TIJ / TTO Range
                        </h2>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-industrial-charcoal mb-10 sm:mb-16">
                        Explore Our <span className="text-primary">Thermal Solutions</span>
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                        {tijTtoProducts.map((product, index) => (
                            <motion.div
                                key={product.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <ProductCard {...product} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

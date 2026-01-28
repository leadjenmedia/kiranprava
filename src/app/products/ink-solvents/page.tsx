"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import Link from "next/link";
import { Droplets, CheckCircle2, ArrowRight } from "lucide-react";

const inkTypes = [
    { name: "Solvent-based CIJ Inks", use: "Metal, plastic, glass; fast drying, harsh environment" },
    { name: "Water-based CIJ Inks", use: "Cartons, porous substrates; eco-friendly, low odour" },
    { name: "UV & Specialty Inks", use: "Food-grade, pharma-compliant; FDA, EU compliant" },
    { name: "TTO Ribbons & TIJ Cartridges", use: "Genuine consumables for TTO and TIJ printers" },
];

export default function InkSolventsPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <PageHero
                title="Ink & Solvents"
                subtitle="Genuine consumables for CIJ, TIJ, and TTO systems. FDA-compliant, industry-specific formulations."
            />

            <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />
                <div className="section-container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-2 lg:order-1"
                        >
                            <div className="p-6 sm:p-10 bg-blue-500/5 border border-blue-500/20">
                                <Droplets size={40} className="sm:w-12 sm:h-12 text-blue-500 mb-4 sm:mb-6" />
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-industrial-charcoal mb-4 sm:mb-6">
                                    Premium <span className="text-primary">Consumables</span>
                                </h2>
                                <p className="text-gray-500 font-body leading-relaxed text-sm sm:text-base">
                                    We supply OEM and compatible inks, solvents, and ribbons for all our CIJ, TIJ, and TTO systems. Use genuine Kiran Prava consumables to maintain print quality, warranty, and compliance.
                                </p>
                            </div>
                        </motion.div>
                        <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                            {inkTypes.map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-[#fafafa] border border-gray-100"
                                >
                                    <CheckCircle2 size={22} className="text-blue-500 flex-shrink-0 mt-0.5" />
                                    <div className="min-w-0">
                                        <h3 className="font-heading font-bold text-industrial-charcoal text-sm sm:text-base">{item.name}</h3>
                                        <p className="text-gray-500 font-body text-xs sm:text-sm mt-1">{item.use}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 text-center">
                        <Link href="/contact" className="inline-flex items-center gap-2 btn-primary group min-h-[48px]">
                            Order Consumables / Get Quote
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const categories = [
    {
        title: "Continuous Inkjet (CIJ)",
        href: "/products/cij",
        description: "High-speed coding for non-stop production. Micro to macro, 24/7 operation.",
        image: "/assets/cij_printer_industrial.png",
    },
    {
        title: "TIJ / TTO Printing",
        href: "/products/tij-tto",
        description: "Thermal excellence for labels, cartons, and flexible packaging.",
        image: "/assets/tij_tto_printer_industrial.png",
    },
    {
        title: "Packaging Solutions",
        href: "/products/packaging",
        description: "End-of-line automation: case erectors, sealers, and smart PLC control.",
        image: "/assets/packaging_machine_industrial.png",
    },
    {
        title: "Ink & Solvents",
        href: "/products/ink-solvents",
        description: "Genuine consumables for CIJ, TIJ, and TTO. FDA-compliant formulations.",
        image: "/assets/cij_printer_industrial.png",
    },
];

export default function ProductsPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <PageHero
                title="Our Products"
                subtitle="Industrial coding, marking, and packaging solutions. CIJ, TIJ, TTO, and end-of-line automation."
            />

            <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />
                <div className="section-container relative z-10">
                    <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                        {categories.map((cat, i) => (
                            <motion.div
                                key={cat.href}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link
                                    href={cat.href}
                                    className="group block p-6 sm:p-8 bg-[#fafafa] border border-gray-100 hover:border-blue-500/30 transition-all h-full"
                                >
                                    <div className="relative h-40 sm:h-48 mb-4 sm:mb-6 overflow-hidden bg-gray-100">
                                        <Image
                                            src={cat.image}
                                            alt={cat.title}
                                            fill
                                            className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-heading font-bold text-industrial-charcoal mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                                        {cat.title}
                                    </h3>
                                    <p className="text-gray-500 font-body text-sm mb-3 sm:mb-4">{cat.description}</p>
                                    <span className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest group-hover:gap-3 transition-all">
                                        Explore
                                        <ArrowRight size={16} />
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

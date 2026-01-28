"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import Link from "next/link";
import { Handshake, Target, ArrowRight } from "lucide-react";

export default function PartnershipPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <PageHero title="Strategic Partnership" subtitle="Partner with Kiran Prava for distribution, integration, or technology collaboration." />

            <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />
                <div className="section-container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-6 sm:p-8 lg:p-10 bg-[#fafafa] border border-gray-100 order-2 lg:order-1"
                        >
                            <Handshake size={40} className="sm:w-12 sm:h-12 text-blue-500 mb-4 sm:mb-6" />
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-industrial-charcoal mb-4 sm:mb-6">
                                Why Partner With <span className="text-primary">Us</span>
                            </h2>
                            <p className="text-gray-500 font-body mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                                We work with OEMs, system integrators, and distributors across India. Benefit from our technical expertise, training programs, and after-sales support to grow your business in coding, marking, and packaging.
                            </p>
                            <ul className="space-y-2 sm:space-y-3">
                                {["Distribution partnerships", "Integration & OEM collaboration", "Technical training & certification", "Joint go-to-market"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <Target size={16} className="text-blue-500 flex-shrink-0" />
                                        <span className="text-industrial-charcoal font-body text-sm sm:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-primary text-white p-8 sm:p-10 lg:p-12 order-1 lg:order-2"
                        >
                            <h3 className="text-xl sm:text-2xl font-heading font-bold mb-4 sm:mb-6">Get in Touch</h3>
                            <p className="text-gray-300 font-body mb-6 sm:mb-8 text-sm sm:text-base">
                                Tell us about your business and how you&apos;d like to collaborate. Our partnership team will reach out within 24 hours.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-white text-primary font-bold uppercase tracking-widest px-6 sm:px-8 py-3 sm:py-4 hover:bg-gray-100 transition-colors group min-h-[48px]"
                            >
                                Discuss Partnership
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

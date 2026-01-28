"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import Link from "next/link";
import { Cpu, Zap, Shield, ArrowRight } from "lucide-react";

const techItems = [
    { icon: <Cpu size={28} className="text-blue-500" />, title: "Smart PLC Integration", desc: "Seamless integration with Siemens, Allen-Bradley, and Mitsubishi PLCs. Real-time data exchange for traceability and line control." },
    { icon: <Zap size={28} className="text-blue-500" />, title: "Industry 4.0 Ready", desc: "IoT-enabled diagnostics, remote monitoring, and predictive maintenance. OPC-UA and MES connectivity supported." },
    { icon: <Shield size={28} className="text-blue-500" />, title: "Certified & Compliant", desc: "ISO 9001:2015, FDA-compliant inks, and industry-specific certifications for pharma, FMCG, and automotive." },
];

export default function TechnologyPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <PageHero title="Our Technology" subtitle="Industry 4.0–ready coding, marking, and packaging systems with smart PLC integration and global compliance." />

            <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />
                <div className="section-container relative z-10">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {techItems.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 sm:p-8 lg:p-10 bg-[#fafafa] border border-gray-100 hover:border-blue-500/30 transition-all group"
                            >
                                <div className="mb-4 sm:mb-6">{item.icon}</div>
                                <h3 className="text-lg sm:text-xl font-heading font-bold text-industrial-charcoal mb-3 sm:mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-gray-500 font-body text-sm sm:text-base">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-12 sm:mt-16 text-center">
                        <Link href="/contact" className="inline-flex items-center gap-2 btn-primary group min-h-[48px]">
                            Discuss Your Requirements
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

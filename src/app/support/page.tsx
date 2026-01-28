"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, Wrench, ArrowRight, Clock } from "lucide-react";

const supportOptions = [
    { icon: <Phone size={24} className="text-blue-500" />, title: "Phone Support", desc: "Call +91 89846 36379 for immediate technical assistance.", action: "Call now" },
    { icon: <Mail size={24} className="text-blue-500" />, title: "Email Support", desc: "support@kiranprava.com — we respond within 2 hours.", action: "Email us" },
    { icon: <Wrench size={24} className="text-blue-500" />, title: "On-Site Deployment", desc: "Our engineers can be on your site within 24 hours across India.", action: "Request visit" },
];

export default function SupportPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <PageHero title="Technical Support" subtitle="24/7 assistance, on-site deployment within 24 hours, and spare parts across India." />

            <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />
                <div className="section-container relative z-10">
                    <div className="flex items-center gap-2 mb-4 sm:mb-6">
                        <Clock size={18} className="text-blue-500 flex-shrink-0" />
                        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Response &lt; 2 Hours</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-industrial-charcoal mb-8 sm:mb-12">
                        How We <span className="text-primary">Support You</span>
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {supportOptions.map((opt, i) => (
                            <motion.div
                                key={opt.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 sm:p-8 lg:p-10 bg-[#fafafa] border border-gray-100 hover:border-blue-500/30 transition-all"
                            >
                                <div className="mb-4 sm:mb-6">{opt.icon}</div>
                                <h3 className="text-lg sm:text-xl font-heading font-bold text-industrial-charcoal mb-3 sm:mb-4">{opt.title}</h3>
                                <p className="text-gray-500 font-body text-sm sm:text-base mb-4 sm:mb-6">{opt.desc}</p>
                                <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all min-h-[44px]">
                                    {opt.action}
                                    <ArrowRight size={16} className="flex-shrink-0" />
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

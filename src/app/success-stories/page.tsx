"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Quote, TrendingUp, Award } from "lucide-react";

const stories = [
    { sector: "Pharmaceuticals", quote: "Kiran Prava's CIJ systems gave us 99.9% read rates on our cartons. Zero downtime in 18 months.", metric: "+24% throughput" },
    { sector: "FMCG", quote: "Their TTO integration cut our changeover time by 60%. Support team is always available.", metric: "60% faster changeover" },
    { sector: "Food & Beverage", quote: "IP65 printers stood up to our wash-down environment. Traceability is now end-to-end.", metric: "24/7 operation" },
];

export default function SuccessStoriesPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <PageHero title="Success Stories" subtitle="How Indian manufacturers trust Kiran Prava for coding, marking, and packaging excellence." />

            <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />
                <div className="section-container relative z-10">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {stories.map((s, i) => (
                            <motion.div
                                key={s.sector}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 sm:p-8 lg:p-10 bg-[#fafafa] border border-gray-100 border-l-4 border-l-primary"
                            >
                                <Quote size={22} className="text-blue-500/50 mb-3 sm:mb-4" />
                                <p className="text-industrial-charcoal font-body text-sm sm:text-base mb-4 sm:mb-6 italic">&ldquo;{s.quote}&rdquo;</p>
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{s.sector}</span>
                                    <span className="flex items-center gap-1 text-[10px] font-mono text-gray-500">
                                        <TrendingUp size={12} /> {s.metric}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

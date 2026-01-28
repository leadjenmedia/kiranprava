"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import Link from "next/link";
import { Briefcase, MapPin, ArrowRight } from "lucide-react";

const openings = [
    { role: "Service Engineer", location: "Cuttack, Odisha", dept: "Technical Support" },
    { role: "Sales Manager – Industrial Coding", location: "Pan-India", dept: "Sales" },
    { role: "Application Specialist", location: "Cuttack / Hyderabad", dept: "Solutions" },
];

export default function CareersPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <PageHero title="Career Portal" subtitle="Join Kiran Prava and build a career in industrial coding, marking, and packaging solutions." />

            <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />
                <div className="section-container relative z-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-industrial-charcoal mb-8 sm:mb-12">
                        Open <span className="text-primary">Positions</span>
                    </h2>
                    <div className="space-y-4 sm:space-y-6">
                        {openings.map((job, i) => (
                            <motion.div
                                key={job.role}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 p-6 sm:p-8 bg-[#fafafa] border border-gray-100 hover:border-blue-500/30 transition-all group"
                            >
                                <div className="flex items-start gap-3 sm:gap-4 min-w-0 flex-1">
                                    <div className="p-2.5 sm:p-3 bg-blue-500/10 flex-shrink-0">
                                        <Briefcase size={22} className="sm:w-6 sm:h-6 text-blue-500" />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="text-lg sm:text-xl font-heading font-bold text-industrial-charcoal group-hover:text-primary transition-colors">{job.role}</h3>
                                        <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mt-1">{job.dept}</p>
                                        <p className="text-gray-500 font-body text-sm mt-2 flex items-center gap-1">
                                            <MapPin size={14} className="flex-shrink-0" /> <span className="truncate">{job.location}</span>
                                        </p>
                                    </div>
                                </div>
                                <Link
                                    href="/contact?subject=Career"
                                    className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all shrink-0 min-h-[44px] justify-center md:justify-start"
                                >
                                    Apply
                                    <ArrowRight size={16} className="flex-shrink-0" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                    <p className="mt-8 sm:mt-12 text-gray-500 font-body text-sm sm:text-base text-center md:text-left">
                        Don&apos;t see a fit? Email <a href="mailto:support@kiranprava.com" className="text-primary hover:underline break-all">support@kiranprava.com</a> with your resume and area of interest.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}

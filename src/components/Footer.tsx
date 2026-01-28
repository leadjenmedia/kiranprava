import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, ShieldCheck, Activity } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white text-industrial-charcoal pt-16 sm:pt-24 pb-10 sm:pb-12 relative overflow-hidden border-t border-gray-100">
            {/* Background Decorative Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-40"></div>

            <div className="section-container relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-24 mb-16 sm:mb-20">
                    {/* Brand & Mission */}
                    <div className="space-y-8">
                        <div>
                            <Link href="/" className="text-xl sm:text-2xl font-heading font-bold tracking-tighter block mb-4 sm:mb-6">
                                <span>KIRAN</span>
                                <span className="text-blue-500">PRAVA</span>
                            </Link>
                            <p className="text-gray-500 font-body text-sm leading-relaxed max-w-xs">
                                Engineered for the most demanding production lines. Providing end-to-end industrial traceability and high-speed coding solutions.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            {[
                                { icon: <Linkedin size={18} />, label: "LinkedIn" },
                                { icon: <Facebook size={18} />, label: "FB" },
                                { icon: <Twitter size={18} />, label: "TW" }
                            ].map((social, i) => (
                                <a key={i} href="#" className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300 group text-gray-500">
                                    <span className="group-hover:scale-110 group-hover:rotate-6 transition-transform">
                                        {social.icon}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Solutions Registry */}
                    <div>
                        <div className="flex items-center gap-2 mb-10">
                            <div className="w-1 h-3 bg-blue-500"></div>
                            <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-gray-400">Technical_Catalog</h4>
                        </div>
                        <ul className="space-y-4">
                            {[
                                { label: "CIJ Master Series", href: "/products/cij" },
                                { label: "TIJ Precision Lab", href: "/products/tij-tto" },
                                { label: "TTO Integration", href: "/products/tij-tto" },
                                { label: "Packaging Automation", href: "/products/packaging" },
                                { label: "Ink & Solvents", href: "/products/ink-solvents" },
                            ].map((item) => (
                                <li key={item.label} className="group overflow-hidden">
                                    <Link href={item.href} className="text-gray-500 hover:text-industrial-charcoal transition-all text-sm font-body flex items-center gap-2">
                                        <span className="h-[1px] w-0 bg-blue-500 group-hover:w-4 transition-all"></span>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Global Operations */}
                    <div>
                        <div className="flex items-center gap-2 mb-10">
                            <div className="w-1 h-3 bg-blue-500"></div>
                            <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-gray-400">Operations_Hub</h4>
                        </div>
                        <ul className="space-y-4">
                            {[
                                { label: "Our Technology", href: "/technology" },
                                { label: "Success Stories", href: "/success-stories" },
                                { label: "Technical Support", href: "/support" },
                                { label: "Strategic Partnership", href: "/partnership" },
                                { label: "Career Portal", href: "/careers" },
                            ].map((item) => (
                                <li key={item.label} className="group overflow-hidden">
                                    <Link href={item.href} className="text-gray-500 hover:text-industrial-charcoal transition-all text-sm font-body flex items-center gap-2">
                                        <span className="h-[1px] w-0 bg-blue-500 group-hover:w-4 transition-all"></span>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Direct Coordination */}
                    <div>
                        <div className="flex items-center gap-2 mb-10">
                            <div className="w-1 h-3 bg-blue-500"></div>
                            <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-gray-400">Support_Nexus</h4>
                        </div>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 group">
                                <MapPin size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                                <span className="text-gray-500 text-sm font-body group-hover:text-industrial-charcoal transition-colors">
                                    PLOT NO. 1923/2606, Mangalabag, <br />
                                    Cuttack, Odisha - 753001
                                </span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <Phone size={18} className="text-blue-500 flex-shrink-0" />
                                <span className="text-gray-500 text-sm font-body group-hover:text-industrial-charcoal transition-colors">
                                    +91 89846 36379
                                </span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="relative">
                                    <Mail size={18} className="text-blue-500 flex-shrink-0" />
                                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
                                </div>
                                <span className="text-gray-500 text-sm font-body group-hover:text-industrial-charcoal transition-colors">
                                    support@kiranprava.com
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Certification Bar */}
                <div className="border-t border-gray-100 pt-10 sm:pt-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10">
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-8 opacity-60 group">
                            <div className="flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-widest text-gray-400">
                                <ShieldCheck size={14} className="text-blue-500" />
                                ISO 9001:2015 CERTIFIED
                            </div>
                            <div className="h-4 w-[1px] bg-gray-200 hidden sm:block"></div>
                            <div className="flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-widest text-gray-400">
                                <Activity size={14} className="text-blue-500" />
                                INDUSTRY 4.0 READY
                            </div>
                        </div>

                        <div className="text-center lg:text-right w-full lg:w-auto">
                            <p className="text-[10px] font-mono text-gray-400 mb-2 uppercase tracking-tighter">REP_ID: KP_IND_SYSTEM_PRO_V2</p>
                            <div className="text-gray-500 text-xs font-body flex items-center justify-center lg:justify-end gap-2 flex-wrap">
                                <span>© 2026 Kiran Prava (P) Ltd.</span>
                                <span className="text-gray-300">|</span>
                                <Link href="/contact" className="hover:text-blue-500 transition-colors uppercase tracking-widest text-[9px] font-bold">Contact</Link>
                                <span className="text-gray-300">|</span>
                                <Link href="/support" className="hover:text-blue-500 transition-colors uppercase tracking-widest text-[9px] font-bold">Support</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

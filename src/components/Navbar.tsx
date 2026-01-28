"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "CIJ Printers", href: "/products/cij" },
        { name: "TIJ / TTO", href: "/products/tij-tto" },
        { name: "Packaging", href: "/products/packaging" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/90 backdrop-blur-md shadow-lg py-2 sm:py-3"
                    : "bg-transparent py-4 sm:py-5"
                }`}
        >
            <div className="section-container flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 min-w-0">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-xl sm:text-2xl font-heading font-bold tracking-tighter truncate"
                    >
                        <span className={`${scrolled ? "text-primary" : "text-white"}`}>KIRAN</span>
                        <span className="text-blue-500">PRAVA</span>
                    </motion.div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`font-body font-medium uppercase text-xs tracking-widest hover:text-blue-500 transition-colors ${scrolled ? "text-industrial-charcoal" : "text-white"
                                }`}
                        >
                            <motion.span
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {link.name}
                            </motion.span>
                        </Link>
                    ))}
                    <Link href="/contact">
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-block btn-primary py-2 px-6 text-xs"
                        >
                            Get Expert Advice
                        </motion.span>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`${scrolled ? "text-industrial-charcoal" : "text-white"}`}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center gap-8 overflow-hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-white text-2xl sm:text-3xl font-heading font-bold uppercase tracking-widest hover:text-blue-300 transition-colors text-center px-4"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/contact" className="bg-white text-primary font-bold py-4 px-8 sm:px-10 uppercase tracking-widest mt-8 inline-block hover:bg-gray-100 transition-colors w-full max-w-xs mx-auto text-center">
                            Enquire Now
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

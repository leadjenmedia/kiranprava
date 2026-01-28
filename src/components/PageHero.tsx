"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface PageHeroProps {
    title: string;
    subtitle?: string;
    image?: string;
    imageAlt?: string;
}

const PageHero = ({ title, subtitle, image, imageAlt }: PageHeroProps) => {
    return (
        <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden bg-primary pt-20 sm:pt-24 pb-12 sm:pb-16">
            <div className="absolute inset-0 z-0">
                {image ? (
                    <>
                        <Image
                            src={image}
                            alt={imageAlt || title}
                            fill
                            className="object-cover opacity-30"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
                    </>
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-blue-900" />
                )}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="section-container relative z-10 text-center px-2">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-4 sm:mb-6"
                >
                    {title}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-base sm:text-lg md:text-xl text-gray-300 font-body max-w-2xl mx-auto"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </section>
    );
};

export default PageHero;

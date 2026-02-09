"use client";

import { useState } from "react";
import { MessageCircle, X, Send, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SupportButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            setSubmitted(true);
            setTimeout(() => {
                setIsOpen(false);
                setSubmitted(false);
            }, 2000);
        } catch (err) {
            setError("Failed to send message. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Floating Support Button */}
            <motion.button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-50 bg-primary text-white p-4 rounded-full shadow-2xl hover:shadow-primary/50 transition-all group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Open support chat"
            >
                <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
            </motion.button>

            {/* Modal Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
                        >
                            <div className="bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                                {/* Header */}
                                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                                    <div>
                                        <h3 className="text-xl font-heading font-bold text-industrial-charcoal">
                                            Quick Support
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-1">
                                            We typically respond within 2 hours
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                        aria-label="Close modal"
                                    >
                                        <X size={20} className="text-gray-500" />
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {error && (
                                        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded">
                                            <p className="text-red-600 text-sm">{error}</p>
                                        </div>
                                    )}

                                    {submitted ? (
                                        <div className="py-8 text-center">
                                            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Send size={28} className="text-green-600" />
                                            </div>
                                            <p className="text-lg font-heading font-bold text-industrial-charcoal mb-2">
                                                Message Sent!
                                            </p>
                                            <p className="text-gray-500 text-sm">
                                                We'll get back to you soon.
                                            </p>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div>
                                                <label
                                                    htmlFor="support-name"
                                                    className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2"
                                                >
                                                    Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="support-name"
                                                    name="name"
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-200 bg-white font-body focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                                    placeholder="Your name"
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="support-email"
                                                    className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2"
                                                >
                                                    Email *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="support-email"
                                                    name="email"
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-200 bg-white font-body focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                                    placeholder="you@company.com"
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="support-message"
                                                    className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2"
                                                >
                                                    Message *
                                                </label>
                                                <textarea
                                                    id="support-message"
                                                    name="message"
                                                    required
                                                    rows={4}
                                                    className="w-full px-4 py-3 border border-gray-200 bg-white font-body focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                                                    placeholder="How can we help you?"
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="w-full btn-primary flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {loading ? "Sending..." : "Send Message"}
                                                <ArrowRight
                                                    size={18}
                                                    className="group-hover:translate-x-1 transition-transform"
                                                />
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

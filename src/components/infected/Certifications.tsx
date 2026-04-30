"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/certifications";
import { useState } from "react";

export default function Certifications() {
    const [visibleCount, setVisibleCount] = useState(12); // Show first 12

    const loadMore = () => {
        setVisibleCount(prev => Math.min(prev + 12, certifications.length));
    };

    return (
        <section className="relative w-full max-w-6xl mx-auto px-4 py-24 z-10 min-h-screen">
            <motion.h2 
                className="font-bebas text-5xl md:text-7xl mb-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ color: "var(--text-color)" }}
            >
                CLEARANCE LOGS
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.slice(0, visibleCount).map((cert, i) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (i % 12) * 0.05 }}
                        className="border border-[#8B0000] p-4 bg-black/40 backdrop-blur-sm group hover:bg-[#8B0000]/20 transition-colors duration-300"
                    >
                        <div className="font-mono text-[10px] text-[#C41E3A] mb-2 tracking-widest flex justify-between">
                            <span>ID: {cert.id.substring(0, 8).toUpperCase()}</span>
                            <span>{cert.category.toUpperCase()}</span>
                        </div>
                        <h3 className="font-courier font-bold text-gray-200 text-sm md:text-base leading-snug group-hover:text-white mb-2">
                            {cert.title}
                        </h3>
                        <p className="font-mono text-xs text-gray-400 opacity-80 uppercase">
                            ISSUER: {cert.issuer}
                        </p>
                    </motion.div>
                ))}
            </div>

            {visibleCount < certifications.length && (
                <div className="mt-12 flex justify-center">
                    <button 
                        onClick={loadMore}
                        className="font-mono text-xs px-6 py-3 border border-[#C41E3A] text-[#C41E3A] hover:bg-[#C41E3A] hover:text-white transition-all tracking-widest cursor-none"
                    >
                        [ DECRYPT MORE LOGS ]
                    </button>
                </div>
            )}
        </section>
    );
}

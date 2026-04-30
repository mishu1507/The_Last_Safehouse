"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useGlitch } from "@/hooks/useGlitch";

const skillsData = [
    { name: "DIGITAL FORENSICS", level: 88 },
    { name: "SIEM & LOG ANALYSIS", level: 85 },
    { name: "PENETRATION TESTING", level: 78 },
    { name: "THREAT INTELLIGENCE", level: 82 },
    { name: "PYTHON / FLASK", level: 75 },
    { name: "INCIDENT RESPONSE", level: 80 }
];

function SkillRow({ skill }: { skill: { name: string, level: number } }) {
    const { text, triggerGlitch } = useGlitch(`${skill.level}%`);

    useEffect(() => {
        const interval = setInterval(() => {
            if (Math.random() > 0.5) {
                triggerGlitch(200);
            }
        }, 3000 + Math.random() * 2000); // Glitch every 3-5s
        return () => clearInterval(interval);
    }, [triggerGlitch]);

    return (
        <div className="flex flex-col gap-2 w-full mb-6">
            <div className="flex justify-between items-end font-courier font-bold text-sm tracking-widest">
                <span>{skill.name}</span>
                <span className="font-glitch">{text}</span>
            </div>
            {/* The Bar Background */}
            <div className="w-full h-3 bg-black/20 relative overflow-hidden">
                {/* The Fill */}
                <motion.div
                    className="absolute top-0 left-0 h-full blob-right"
                    style={{ 
                        width: `${skill.level}%`,
                        background: "linear-gradient(90deg, #8B0000, #C41E3A)",
                        transformOrigin: "left"
                    }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                />
            </div>
        </div>
    );
}

export default function Skills() {
    return (
        <section className="relative min-h-[80vh] w-full max-w-4xl mx-auto px-4 flex flex-col justify-center py-24 z-10">
            <motion.h2 
                className="font-bebas text-5xl md:text-7xl mb-12 text-[#8B0000]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                SYSTEMS COMPROMISED
            </motion.h2>

            <div className="w-full flex flex-col">
                {skillsData.map((skill, index) => (
                    <SkillRow key={index} skill={skill} />
                ))}
            </div>

            {/* SVG DNA Divider */}
            <div className="w-full flex justify-center mt-24 opacity-20">
                <svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none">
                    <motion.path 
                        d="M 10 30 Q 30 10 50 30 T 90 30 T 130 30 T 170 30" 
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    />
                    <motion.path 
                        d="M 10 30 Q 30 50 50 30 T 90 30 T 130 30 T 170 30" 
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.2 }}
                    />
                    {/* Rungs */}
                    <path d="M 20 20 L 20 40 M 40 20 L 40 40 M 60 20 L 60 40 M 80 20 L 80 40 M 100 20 L 100 40 M 120 20 L 120 40 M 140 20 L 140 40 M 160 20 L 160 40" strokeWidth="1" opacity="0.5" />
                </svg>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import EasterEgg from "./EasterEgg";

const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function About() {
    return (
        <section className="relative min-h-[80vh] w-full max-w-6xl mx-auto px-4 md:px-12 flex flex-col justify-center py-24">
            <div className="flex flex-col md:flex-row relative z-10">
                
                {/* Left Side: Clinical File */}
                <div className="w-full md:w-[60%] flex flex-col gap-8">
                    <motion.div 
                        initial="hidden" 
                        whileInView="visible" 
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                        className="space-y-6"
                    >
                        {/* Labels */}
                        <div className="flex flex-wrap gap-4 font-mono text-[10px] tracking-widest font-bold uppercase opacity-70">
                            <motion.span variants={textVariants} className="px-2 py-1 border border-current">SUBJECT: ADITI</motion.span>
                            <motion.span variants={textVariants} className="px-2 py-1 border border-current">STATUS: ALIVE</motion.span>
                            <motion.span variants={textVariants} className="px-2 py-1 border border-[#C41E3A] text-[#C41E3A]">CLASSIFICATION: ACTIVE THREAT</motion.span>
                            <motion.span variants={textVariants} className="px-2 py-1 border border-current">AFFILIATION: PARUL UNIVERSITY — DEPT. OF CSE</motion.span>
                        </div>

                        {/* Bio Content */}
                        <motion.div variants={textVariants} className="font-courier text-base md:text-lg leading-relaxed opacity-90 space-y-4">
                            <p>
                                Third year CSE undergrad obsessed with breaking systems before bad actors do. Specializes in digital forensics, SIEM, and threat intelligence. 
                            </p>
                            <p>
                                Has deployed a full forensics platform, hunted bugs in production apps, and once mapped an entire attack chain through 300,000 log entries.
                            </p>
                            <p>
                                Also plays Resident Evil. The two aren't unrelated.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Right Side: Decorative/Easter Egg */}
                <div className="hidden md:block w-[40%] relative">
                    <EasterEgg />
                </div>
            </div>
        </section>
    );
}

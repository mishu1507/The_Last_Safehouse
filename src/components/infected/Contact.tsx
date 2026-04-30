"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section className="relative w-full h-[100svh] flex flex-col justify-center items-center px-4 overflow-hidden z-10">
            {/* Background Faint Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                <span 
                    className="font-bebas text-[15vw] md:text-[20vw] text-[#8B0000] leading-none whitespace-nowrap text-glitch-fx" 
                    style={{ opacity: 0.03 }}
                    data-text="SEND HELP"
                >
                    SEND HELP
                </span>
            </div>

            <div className="z-10 w-full max-w-2xl text-center flex flex-col items-center px-4">
                <h2 
                    className="font-bebas text-5xl md:text-8xl mb-16 text-[#F9F7F4] flicker"
                >
                    LAST TRANSMISSION
                </h2>

                <div className="flex flex-col gap-8 w-full max-w-sm">
                    <ContactLink href="https://github.com/mishu1507" label="mishu1507@github" />
                    <ContactLink href="https://linkedin.com/in/aditiborkar-cse152006/" label="LinkedIn" />
                    <ContactLink href="https://mishu1507.github.io/MyPortfolio" label="Portfolio" />
                </div>
            </div>
        </section>
    );
}

function ContactLink({ href, label }: { href: string, label: string }) {
    return (
        <motion.a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group cursor-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <motion.div 
                className="w-2 h-2 rounded-full bg-[#C41E3A] shrink-0"
                animate={{ opacity: [1, 0.2, 1], scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="font-courier text-lg md:text-xl text-white group-hover:text-[#C41E3A] transition-colors duration-200 uppercase tracking-widest">
                {label}
            </span>
        </motion.a>
    );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EasterEgg() {
    const [triggered, setTriggered] = useState(false);

    const triggerEasterEgg = () => {
        if (triggered) return;
        setTriggered(true);

        // Shake
        document.body.classList.add("shaking");
        
        // Play audio (fallback to nothing if audio not found, but we create the object)
        try {
            const audio = new Audio('/sounds/zombie-groan.mp3');
            audio.play().catch(e => console.log('Audio play failed:', e));
        } catch (e) {}

        // Reset shake
        setTimeout(() => {
            document.body.classList.remove("shaking");
        }, 800);

        // Reset completely after sequence
        setTimeout(() => {
            setTriggered(false);
            // Jump infection to 100 then smooth scroll back (simulated by scrolling to bottom then back)
            const currentY = window.scrollY;
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'auto' });
            setTimeout(() => {
                window.scrollTo({ top: currentY, behavior: 'smooth' });
            }, 500);
        }, 3000);
    };

    return (
        <>
            <div 
                className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[80%] opacity-10 hover:opacity-30 cursor-pointer transition-opacity duration-300"
                onClick={triggerEasterEgg}
                style={{ zIndex: 50 }}
            >
                <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-[#8B0000]" style={{ animation: "rotate 60s linear infinite" }}>
                    <path d="M50 10 C30 10 15 25 15 45 C15 65 30 80 50 80 C70 80 85 65 85 45 C85 25 70 10 50 10 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="50" cy="45" r="8" />
                    <path d="M50 35 L50 20 M65 50 L80 55 M35 50 L20 55" stroke="currentColor" strokeWidth="3" />
                </svg>
            </div>

            <AnimatePresence>
                {triggered && (
                    <motion.div 
                        className="fixed inset-0 z-[99999] pointer-events-none flex items-center justify-center"
                    >
                        {/* Red Flash */}
                        <motion.div 
                            className="absolute inset-0 bg-red-600 mix-blend-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 0.6 }}
                        />
                        
                        {/* Text */}
                        <motion.h1 
                            className="font-glitch text-white text-6xl md:text-8xl text-center z-10"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                            style={{ textShadow: "0 0 20px #8B0000" }}
                        >
                            PATIENT ZERO FOUND
                        </motion.h1>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

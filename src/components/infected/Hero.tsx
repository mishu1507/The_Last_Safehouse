"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
    const [doorState, setDoorState] = useState<"closed" | "stuck" | "open">("stuck");

    const forceOpen = () => {
        setDoorState("open");
    };

    return (
        <section className="relative w-full h-[100svh] flex flex-col justify-center items-center px-4 overflow-hidden">
            
            {/* --- ELEVATOR / MANSION DOORS --- */}
            <div className="absolute inset-0 z-50 flex pointer-events-none">
                {/* Left Door */}
                <motion.div 
                    className="h-full w-1/2 bg-[#050000] border-r border-[#8B0000] flex flex-col justify-center items-end overflow-hidden relative"
                    style={{ boxShadow: "10px 0 30px rgba(0,0,0,0.9)" }}
                    initial={{ x: 0 }}
                    animate={{ 
                        x: doorState === "stuck" ? ["-2%", "-5%", "-1%", "-8%"] : "-100%" 
                    }}
                    transition={{ 
                        x: doorState === "stuck" 
                            ? { delay: 0.5, duration: 0.8, ease: "linear", repeat: Infinity, repeatType: "mirror" } 
                            : { duration: 1.5, ease: [0.76, 0, 0.24, 1] } 
                    }}
                >
                    <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')]"></div>
                    
                    <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 text-[#8B0000] opacity-20">
                        <svg viewBox="0 0 100 100" width="200" height="200" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M50 10 C30 10 15 25 15 45 C15 65 30 80 50 80 C70 80 85 65 85 45 C85 25 70 10 50 10 Z" />
                            <circle cx="50" cy="45" r="5" />
                        </svg>
                    </div>
                </motion.div>

                {/* Right Door */}
                <motion.div 
                    className="h-full w-1/2 bg-[#050000] border-l border-[#8B0000] flex flex-col justify-center items-start overflow-hidden relative"
                    style={{ boxShadow: "-10px 0 30px rgba(0,0,0,0.9)" }}
                    initial={{ x: 0 }}
                    animate={{ 
                        x: doorState === "stuck" ? ["2%", "5%", "1%", "8%"] : "100%" 
                    }}
                    transition={{ 
                        x: doorState === "stuck" 
                            ? { delay: 0.5, duration: 0.8, ease: "linear", repeat: Infinity, repeatType: "mirror", delayChildren: 0.2 } 
                            : { duration: 1.5, ease: [0.76, 0, 0.24, 1] } 
                    }}
                >
                    <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')]"></div>
                    
                    <div className="absolute left-[-100px] top-1/2 -translate-y-1/2 text-[#8B0000] opacity-20">
                        <svg viewBox="0 0 100 100" width="200" height="200" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M50 35 L50 25 M60 50 L70 55 M40 50 L30 55" strokeWidth="3" />
                        </svg>
                    </div>
                </motion.div>

                {/* Override Button (Appears when stuck) */}
                <AnimatePresence>
                    {doorState === "stuck" && (
                        <motion.div 
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] pointer-events-auto cursor-none"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.5, filter: "blur(10px)" }}
                            transition={{ delay: 1, duration: 0.5 }}
                        >
                            <button 
                                onClick={forceOpen}
                                className="group relative flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm border-2 border-[#C41E3A] px-4 md:px-8 py-4 md:py-6 rounded-sm shadow-[0_0_20px_rgba(196,30,58,0.4)] hover:shadow-[0_0_40px_rgba(196,30,58,0.8)] hover:bg-[#1A0000] transition-all duration-300 w-[90vw] md:w-auto"
                            >
                                <span className="font-bebas text-2xl md:text-3xl text-[#C41E3A] group-hover:text-white transition-colors flicker text-center">
                                    [ SYSTEM OVERRIDE ]
                                </span>
                                <span className="font-mono text-xs text-white/50 tracking-widest mt-2 group-hover:text-[#C41E3A]">
                                    CLICK TO FORCE DOORS OPEN
                                </span>
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>


            {/* --- HERO CONTENT (BEHIND DOORS) --- */}
            
            <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-[150vh] h-[150vh] opacity-[0.02] pointer-events-none -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                style={{
                    animation: "rotate 120s linear infinite",
                    fill: "currentColor"
                }}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M50 10 C30 10 15 25 15 45 C15 65 30 80 50 80 C70 80 85 65 85 45 C85 25 70 10 50 10 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="45" r="5" />
                <path d="M50 35 L50 25 M60 50 L70 55 M40 50 L30 55" stroke="currentColor" strokeWidth="2" />
            </svg>

            <style>{`
                @keyframes rotate {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }
            `}</style>

            <motion.div 
                className="z-10 relative flex flex-col items-center text-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: doorState === "open" ? 1 : 0.9, opacity: doorState === "open" ? 1 : 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
            >
                <h1 
                    className="font-bebas font-black tracking-widest uppercase leading-none flex flex-col items-center gap-2" 
                    style={{ fontSize: "clamp(3rem, 15vw, 15rem)" }}
                >
                    <span className="text-glitch-fx" data-text="ADITI">ADITI</span>
                    <span className="text-glitch-fx" data-text="BORKAR">BORKAR</span>
                </h1>
                
                <p
                    className="font-courier tracking-widest md:tracking-[0.3em] opacity-80 uppercase mt-4 md:mt-8 text-center"
                    style={{ fontSize: "clamp(0.7rem, 1.5vw, 1.2rem)" }}
                >
                    <span className="text-[#C41E3A]">CYBERSECURITY</span> // SYSTEMS ENGINEER
                </p>
            </motion.div>

            {/* Patient Zero dot */}
            <div className="absolute bottom-12 right-12 md:bottom-24 md:right-24 flex items-center justify-center group cursor-none z-10">
                <motion.div
                    className="w-3 h-3 rounded-full bg-[#C41E3A] shadow-[0_0_15px_#C41E3A]"
                    initial={{ opacity: 0 }}
                    animate={{ 
                        scale: doorState === "open" ? [1, 1.2, 1, 1.5, 1] : 1, 
                        opacity: doorState === "open" ? [1, 0.8, 1, 0.5, 1] : 0 
                    }}
                    transition={{
                        scale: { duration: 1.8, repeat: Infinity, times: [0, 0.1, 0.2, 0.4, 1], ease: "easeInOut" },
                        opacity: { delay: 1, duration: 1.8, repeat: Infinity }
                    }}
                />
            </div>
        </section>
    );
}

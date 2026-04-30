"use client";

import { useState, useEffect } from "react";
import { useInfectionLevel } from "@/hooks/useInfectionLevel";
import { motion } from "framer-motion";

export default function CrackOverlay() {
    const infection = useInfectionLevel();
    const [isMobile, setIsMobile] = useState(true); // default to true to prevent hydration mismatch

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const filterUrl = isMobile ? "none" : "url(#ragged)";

    return (
        <div className="fixed inset-0 pointer-events-none z-[200]">
            {/* SVG Displacement Filter for realistic jagged cracks */}
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <defs>
                    <filter id="ragged">
                        <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="4" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                </defs>
            </svg>

            {/* Layer 1: Corner Cracks (infection > 15) */}
            <svg className="absolute inset-0 w-full h-full" style={{ opacity: infection > 15 ? (infection - 15) / 50 : 0, filter: filterUrl }}>
                <motion.path
                    d="M 0,0 L 50,50 L 80,30 L 150,100 M 100vw,0 L calc(100vw - 60px), 80px L calc(100vw - 120px), 60px"
                    fill="none"
                    stroke="#111111"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: infection > 15 ? 1 : 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                />
            </svg>

            {/* Layer 2: Spiderweb (infection > 45) */}
            <svg className="absolute inset-0 w-full h-full" style={{ opacity: infection > 45 ? (infection - 45) / 50 : 0, filter: filterUrl }}>
                <motion.path
                    d="M 50vw, 50vh L 40vw, 30vh L 20vw, 40vh M 50vw, 50vh L 60vw, 20vh L 80vw, 35vh M 50vw, 50vh L 70vw, 80vh L 90vw, 60vh M 50vw, 50vh L 30vw, 70vh L 10vw, 50vh"
                    fill="none"
                    stroke="#0A0000"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: infection > 45 ? 1 : 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                />
            </svg>

            {/* Layer 3: Heavy Shatter (infection > 75) */}
            <svg className="absolute inset-0 w-full h-full" style={{ opacity: infection > 75 ? (infection - 75) / 25 : 0, filter: filterUrl }}>
                <motion.path
                    d="M 20vw, 20vh L 80vw, 80vh M 20vw, 80vh L 80vw, 20vh M 0, 50vh L 100vw, 50vh M 50vw, 0 L 50vw, 100vh M 10vw, 30vh L 90vw, 70vh M 30vw, 90vh L 70vw, 10vh"
                    fill="none"
                    stroke="#0A0000"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: infection > 75 ? 1 : 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </svg>
        </div>
    );
}

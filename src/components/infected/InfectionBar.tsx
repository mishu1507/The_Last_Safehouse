"use client";

import { useInfectionLevel } from "@/hooks/useInfectionLevel";

export default function InfectionBar() {
    const infection = useInfectionLevel();

    return (
        <div className="fixed top-0 left-0 w-full h-[3px] z-[9999] pointer-events-none">
            <div
                className="h-full bg-gradient-to-r from-[#8B0000] to-[#C41E3A] transition-all duration-75 ease-out"
                style={{ width: `${infection}%` }}
            />
            {infection >= 100 && (
                <div className="absolute top-1 right-2 text-[#C41E3A] font-bebas text-xs tracking-widest animate-pulse">
                    FULLY INFECTED
                </div>
            )}
        </div>
    );
}

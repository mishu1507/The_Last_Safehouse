"use client";

import { useInfectionLevel } from "@/hooks/useInfectionLevel";

export default function Vignette() {
    // Force the hook to run so the CSS variable is updated
    useInfectionLevel();

    return <div className="vignette-overlay" />;
}

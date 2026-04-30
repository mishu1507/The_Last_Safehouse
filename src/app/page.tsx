"use client";

import CustomCursor from "@/components/infected/CustomCursor";
import InfectionBar from "@/components/infected/InfectionBar";
import Vignette from "@/components/infected/Vignette";
import CrackOverlay from "@/components/infected/CrackOverlay";

import Hero from "@/components/infected/Hero";
import About from "@/components/infected/About";
import Skills from "@/components/infected/Skills";
import Projects from "@/components/infected/Projects";
import Certifications from "@/components/infected/Certifications";
import Contact from "@/components/infected/Contact";

export default function Home() {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <CustomCursor />
            <InfectionBar />
            <Vignette />
            <CrackOverlay />

            <div className="flex flex-col relative z-10">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Certifications />
                <Contact />
            </div>
        </main>
    );
}

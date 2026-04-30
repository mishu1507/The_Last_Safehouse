"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useGlitch } from "@/hooks/useGlitch";
import { projects, Project } from "@/data/projects";

function ProjectCard({ project, align, index }: { project: Project, align: 'left' | 'right', index: number }) {
    const { text, triggerGlitch } = useGlitch(project.title);
    const [isHovered, setIsHovered] = useState(false);

    const handleHoverStart = () => {
        setIsHovered(true);
        triggerGlitch(400);
    };

    const handleHoverEnd = () => {
        setIsHovered(false);
    };

    const variants = {
        hidden: { opacity: 0, x: align === 'left' ? -50 : 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <motion.div 
            className={`w-full flex flex-col md:flex-row gap-8 items-center ${align === 'right' ? 'md:flex-row-reverse' : ''}`}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            {/* The Card */}
            <motion.div 
                className="w-full md:w-1/2 relative z-10"
                whileHover="hover"
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
                variants={{
                    hover: { y: -6 }
                }}
            >
                {/* Red flash background inversion element */}
                <motion.div 
                    className="absolute inset-0 bg-[#8B0000] z-0 torn-bottom blood-drip"
                    variants={{
                        hover: { opacity: [0, 1, 0.8] }
                    }}
                    transition={{ duration: 0.2 }}
                />

                <div 
                    className="relative z-10 border border-[#8B0000] p-6 pb-12 torn-bottom bg-black/60 backdrop-blur-sm transition-shadow duration-300"
                    style={{
                        boxShadow: isHovered ? "0 0 30px rgba(139,0,0,0.5)" : "none"
                    }}
                >
                    <h3 className="font-bebas text-4xl mb-2 text-white">{text}</h3>
                    <p className="font-courier text-sm text-gray-300 mb-6">{project.problem}</p>
                    
                    {/* Tools & Links */}
                    <div className="flex flex-col gap-4 mt-4">
                        <div className="flex flex-wrap gap-2">
                            {project.tools.slice(0, 5).map((t: string) => (
                                <motion.span 
                                    key={t}
                                    className="font-mono text-[10px] px-2 py-1 border border-[#8B0000] text-gray-300"
                                    variants={{ hover: { scale: 1.05 } }}
                                >
                                    {t}
                                </motion.span>
                            ))}
                        </div>
                        
                        <div className="flex gap-4 font-mono text-xs mt-2">
                            {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[#C41E3A] hover:text-white transition-colors uppercase tracking-widest flex items-center gap-1 cursor-none">
                                    <span className="animate-pulse">●</span> SOURCE_CODE
                                </a>
                            )}
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[#C41E3A] hover:text-white transition-colors uppercase tracking-widest flex items-center gap-1 cursor-none">
                                    <span className="animate-pulse">●</span> LIVE_DEPLOYMENT
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* The Detail / Number */}
            <div className={`w-full md:w-1/2 flex ${align === 'left' ? 'justify-start' : 'justify-end'} opacity-20`}>
                <span className="font-bebas text-8xl text-[#8B0000]">
                    0{index + 1}
                </span>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section className="relative min-h-screen w-full max-w-5xl mx-auto px-4 py-24 z-10">
            <motion.h2 
                className="font-bebas text-5xl md:text-7xl mb-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ color: "var(--text-color)" }}
            >
                RECOVERED INTEL
            </motion.h2>

            <div className="space-y-24">
                {projects.map((project, idx) => (
                    <ProjectCard key={project.id} project={project} align={idx % 2 === 0 ? 'left' : 'right'} index={idx} />
                ))}
            </div>
        </section>
    );
}

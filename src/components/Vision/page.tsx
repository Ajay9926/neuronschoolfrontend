"use client";
import React, { useEffect, useState, useRef } from "react";
import { LinearProgress, Box } from "@mui/material";

const SectionWithProgress: React.FC = () => {
    const [progress, setProgress] = useState(0);
    const sectionRef = useRef<HTMLBRElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY;
            const sectionHeight = sectionRef.current.offsetHeight;
            const scrollY = window.scrollY;

            const scrollPosition = scrollY - sectionTop + window.innerHeight;
            const progressValue = Math.min(
                100,
                Math.max(0, (scrollPosition / sectionHeight) * 100)
            );

            setProgress(progressValue);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="scroll-section" ref={sectionRef}>
            {/* Progress Bar */}
            <Box className="progress-container ">
                <LinearProgress variant="determinate" value={progress} />
            </Box>

            {/* Section Content */}
            <Box className="new-section">
                <h1>Section Scroll Progress Example</h1>
                <p>Scroll this section to see the progress bar fill.</p>
                <p>Keep scrolling...</p>
            </Box>
        </section>
    );
};

export default SectionWithProgress;

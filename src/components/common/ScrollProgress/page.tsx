"use client";
import React, { useEffect, useState } from "react";
import { LinearProgress, Box } from "@mui/material";

interface ScrollProgressProps {
  targetRef: React.RefObject<HTMLElement | null>;
}

const ScrollProgress: React.FC<ScrollProgressProps> = ({ targetRef }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Update progress based on scroll position
    const handleScroll = () => {
      if (!targetRef.current) return;

      const sectionTop = targetRef.current.getBoundingClientRect().top + window.scrollY;
      const sectionHeight = targetRef.current.offsetHeight;
      const scrollY = window.scrollY;

      // Calculate scroll progress for the target section
      const scrollPosition = scrollY - sectionTop + window.innerHeight;
      const progressValue = Math.min(
        100,
        Math.max(0, (scrollPosition / sectionHeight) * 100)
      );

      setProgress(progressValue);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [targetRef]);

  return (
    <Box className="progress-container">
      {/* Linear progress bar reflecting scroll progress */}
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
};

export default ScrollProgress; 
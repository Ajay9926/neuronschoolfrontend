"use client";
import React, { useEffect, useState, useRef } from "react";
import { LinearProgress, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { visionData } from "@/json/page";

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
      <Box className="progress-container">
        <LinearProgress variant="determinate" value={progress} />
      </Box>

      {/* Section Content */}
      <Box className="new-section">
        <Box>
          <Typography variant="h5">VISION</Typography>
          <Typography variant="h1">
            We’re Here to Revolutionize the Learning Experience
          </Typography>
        </Box>

        <Box className="vision-main">
          <Grid container spacing={3} alignItems="center">
            {/* Left Side: Vision Points */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <Grid container spacing={3}>
                {visionData.map((item: VisionItem) => (
                  <Grid size={{ xs: 12, sm: 6, lg: 6 }} key={item.id}>
                    <Box className="vision-box">
                      <Typography variant="h4">{item.title}</Typography>
                      <Typography variant="subtitle2" className="text mt-5">
                        {item.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Right Side: Vision Image */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <Box className="vision-image-box">
               { // eslint-disable-next-line @next/next/no-img-element
                <img src="/Images/Vision.avif" alt="vision" />}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </section>
  );
};

export default SectionWithProgress;

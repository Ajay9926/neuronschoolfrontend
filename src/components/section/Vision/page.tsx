"use client";
import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { visionData } from "@/json/page";
import ScrollProgress from "@/components/common/ScrollProgress/page";

const Vision: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section className="scroll-section" ref={sectionRef}>
      {/* Scroll Progress */}
      <ScrollProgress targetRef={sectionRef} />

      {/* Section Content */}
      <Box className="new-section">
        <Box>
          <Typography variant="h5">VISION</Typography>
          <Typography variant="h1">
            We’re Here to Revolutionize the  Learning <span className="stroke">
              Experience
            </span>
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
                  <img src="/Images/Vision.avif" alt="Vision" />}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </section>
  );
};

export default Vision;

"use client";
import React from "react";
import { Typography, Box, Button } from "@mui/material";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

const Hero: React.FC = () => {
  return (
    <section id="hero-container" className="hero-container">
      <div className="hero" id="hero">
        {/* Background Video */}
        <video autoPlay loop muted playsInline>
          <source src="/Videos/Hero.mp4" type="video/mp4" />
        </video>

        {/* Hero Content */}
        <Box className="hero-content">
          <Box>
            <Typography variant="h1">
              Launch Your Data Science Career in 6 Months:{" "}
              <span style={{ color: "#BB81F5" }}>
                Guaranteed Internship & Industry-Ready Skills
              </span>
            </Typography>

            <Typography variant="subtitle2" className="mt-5">
              While others are still debating AI&apos;s impact, our graduates are
              already building the future. Join the 6-month journey that turns
              curiosity into expertise.
            </Typography>

            {/* CTA Button */}
            <Box className="hero-btn-wrapper">
              <Button
                variant="contained"
                endIcon={<ArrowRightAltOutlinedIcon />}
                className="hero-btn"
              >
                Apply Now
              </Button>
            </Box>
          </Box>
        </Box>
      </div>
    </section>
  );
};

export default Hero;

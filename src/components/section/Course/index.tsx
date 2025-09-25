import React, { useRef, useEffect, useState } from "react";
import { Box, Card, CardContent, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface Item {
  id: number;
  title: string;
  subtitle: string;
}

interface CourseProps {
  items?: Item[];
}

const sampleItems: Item[] = new Array(8).fill(0).map((_, i) => ({
  id: i + 1,
  title: `Item ${i + 1}`,
  subtitle: `Subtitle ${i + 1}`,
}));

function Course({ items = sampleItems }: CourseProps) {
  const loopItems = [...items, ...items]; // duplicate for seamless scroll
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Scroll by one card width (used by buttons)
  const scrollByCard = (direction: "left" | "right" = "right") => {
    if (!marqueeRef.current) return;
    const marquee = marqueeRef.current;
    const card = marquee.querySelector(".marquee-item") as HTMLElement;
    if (!card) return;

    const cardWidth = card.offsetWidth + 25; // card width + gap
    setIsPaused(true); // pause auto-scroll while button scrolls

    marquee.scrollBy({
      left: direction === "right" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });

    // resume auto-scroll after smooth scroll finishes
    setTimeout(() => setIsPaused(false), 300);
  };

  // Manual drag/swipe scroll
  const enableManualScroll = () => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      marquee.classList.add("active");
      startX = e.pageX - marquee.offsetLeft;
      scrollLeft = marquee.scrollLeft;
    };
    const handleMouseLeave = () => {
      isDown = false;
      marquee.classList.remove("active");
    };
    const handleMouseUp = () => {
      isDown = false;
      marquee.classList.remove("active");
    };
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - marquee.offsetLeft;
      const walk = (x - startX) * 2;
      marquee.scrollLeft = scrollLeft - walk;
    };

    // Touch events
    const handleTouchStart = (e: TouchEvent) => {
      isDown = true;
      marquee.classList.add("active");
      startX = e.touches[0].pageX - marquee.offsetLeft;
      scrollLeft = marquee.scrollLeft;
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - marquee.offsetLeft;
      const walk = (x - startX) * 2;
      marquee.scrollLeft = scrollLeft - walk;
    };
    const handleTouchEnd = () => {
      isDown = false;
      marquee.classList.remove("active");
    };

    // Add listeners
    marquee.addEventListener("mousedown", handleMouseDown);
    marquee.addEventListener("mouseleave", handleMouseLeave);
    marquee.addEventListener("mouseup", handleMouseUp);
    marquee.addEventListener("mousemove", handleMouseMove);

    marquee.addEventListener("touchstart", handleTouchStart);
    marquee.addEventListener("touchmove", handleTouchMove);
    marquee.addEventListener("touchend", handleTouchEnd);

    return () => {
      marquee.removeEventListener("mousedown", handleMouseDown);
      marquee.removeEventListener("mouseleave", handleMouseLeave);
      marquee.removeEventListener("mouseup", handleMouseUp);
      marquee.removeEventListener("mousemove", handleMouseMove);

      marquee.removeEventListener("touchstart", handleTouchStart);
      marquee.removeEventListener("touchmove", handleTouchMove);
      marquee.removeEventListener("touchend", handleTouchEnd);
    };
  };

  // Initialize drag/swipe
  useEffect(() => {
    const cleanup = enableManualScroll();
    return cleanup;
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
  
    const width = window.innerWidth;
  
    // Only enable auto-scroll on desktop (e.g., > 480px)
    if (width <= 480) return;
  
    const scrollAmount = 1; 
    let animationId: number;
  
    const autoScroll = () => {
      if (!isPaused) {
        marquee.scrollLeft += scrollAmount;
  
        // Seamless loop
        if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
          marquee.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    };
  
    animationId = requestAnimationFrame(autoScroll);
  
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);
  
  return (
    <Box className="new-section">
      {/* Heading */}
      <Box mb={4}>
        <Typography variant="h5">COURSE CURRICULUM</Typography>
        <Typography variant="h1">
          Your Gateway to the Data-Driven <span className="stroke">World</span>
        </Typography>
      </Box>

      {/* Cards */}
      <Box className="marquee-outer">
        <Box
          ref={marqueeRef}
          className="marquee-inner"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {loopItems.map((it, idx) => (
            <Box key={idx} className="marquee-item">
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6">{it.title}</Typography>
                  <Typography variant="body2">{it.subtitle}</Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Scroll Buttons */}
      <Box className="btn-box">
        <IconButton onClick={() => scrollByCard("left")} className="course-btn">
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton onClick={() => scrollByCard("right")} className="course-btn">
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Course;

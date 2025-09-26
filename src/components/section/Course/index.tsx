"use client";
import React, { useRef, useEffect, useState } from "react";
import { Box, Card, CardContent, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { courseData } from "@/json/page";

function Course() {
  // Ref to the marquee container for scrolling
  const marqueeRef = useRef<HTMLDivElement>(null);

  // State to pause auto-scroll when interacting with the marquee
  const [isPaused, setIsPaused] = useState(false);

  /**
   * Function to scroll the marquee by one card width
   * @param direction - "left" or "right", default is "right"
   */
  const scrollByCard = (direction: "left" | "right" = "right") => {
    if (!marqueeRef.current) return;
    const marquee = marqueeRef.current;

    // Get the first card element inside the marquee
    const card = marquee.querySelector(".marquee-item") as HTMLElement;
    if (!card) return;

    // Width of card plus gap
    const cardWidth = card.offsetWidth + 25;

    // Pause auto-scroll while user clicks buttons
    setIsPaused(true);

    // Scroll by card width smoothly
    marquee.scrollBy({
      left: direction === "right" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });

    // Resume auto-scroll after 300ms
    setTimeout(() => setIsPaused(false), 300);
  };

  /**
   * Enables manual scrolling by mouse drag or touch swipe
   */
  const enableManualScroll = () => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    // Mouse event handlers
    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      marquee.classList.add("active");
      startX = e.pageX - marquee.offsetLeft;
      scrollLeft = marquee.scrollLeft;
    };
    const handleMouseLeave = () => { isDown = false; marquee.classList.remove("active"); };
    const handleMouseUp = () => { isDown = false; marquee.classList.remove("active"); };
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - marquee.offsetLeft;
      const walk = (x - startX) * 2; // Adjust scroll speed
      marquee.scrollLeft = scrollLeft - walk;
    };

    // Touch event handlers (for mobile)
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
    const handleTouchEnd = () => { isDown = false; marquee.classList.remove("active"); };

    // Add all event listeners
    marquee.addEventListener("mousedown", handleMouseDown);
    marquee.addEventListener("mouseleave", handleMouseLeave);
    marquee.addEventListener("mouseup", handleMouseUp);
    marquee.addEventListener("mousemove", handleMouseMove);
    marquee.addEventListener("touchstart", handleTouchStart);
    marquee.addEventListener("touchmove", handleTouchMove);
    marquee.addEventListener("touchend", handleTouchEnd);

    // Cleanup listeners when component unmounts
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

  // Initialize manual drag/swipe scrolling on mount
  useEffect(() => {
    const cleanup = enableManualScroll();
    return cleanup;
  }, []);

  /**
   * Auto-scroll effect for desktop screens (>480px)
   */
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Disable auto-scroll on small screens
    if (window.innerWidth <= 480) return;

    const scrollAmount = 1; // Pixels per frame
    let animationId: number;

    const autoScroll = () => {
      if (!isPaused) {
        marquee.scrollLeft += scrollAmount;

        // Reset scroll when reaching half the scroll width (for infinite effect)
        if (marquee.scrollLeft >= marquee.scrollWidth / 2) marquee.scrollLeft = 0;
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <Box className="new-section">
      {/* Section Header */}
      <Box mb={4}>
        <Typography variant="h5">COURSE CURRICULUM</Typography>
        <Typography variant="h1">
          Your Gateway to the Data-Driven <span className="stroke">World</span>
        </Typography>
      </Box>

      {/* Marquee Container */}
      <Box className="marquee-outer">
        <Box
          ref={marqueeRef}
          className="marquee-inner"
          onMouseEnter={() => setIsPaused(true)} // Pause auto-scroll on hover
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Duplicate data 3 times for infinite scrolling */}
          {[...courseData, ...courseData, ...courseData].map((item, index) => (
            <Box key={index} className="marquee-item">
              <Card variant="outlined">
                <CardContent className="card-main">
                  {/* Icon + Title */}
                  <Box className="extra-box">
                    <span className="extra-icon">{item.icon}</span>
                    <Typography variant="h5" className="bold">{item.title}</Typography>
                  </Box>

                  {/* Description */}
                  <Typography variant="subtitle2" className="text mt--5">{item.description}</Typography>

                  {/* Duration */}
                  <Typography variant="subtitle2" className="text mt-15">
                    <span style={{ color: "#cc58bd" }}>Duration :</span> {item.duration}
                  </Typography>

                  {/* Topics Covered */}
                  <Typography variant="subtitle2" className="text mt-5">
                    <span style={{ color: "#cc58bd" }}>Topics Covered : </span>
                  </Typography>
                  <ol className="text mt-5">
                    {item.topics.map((topic, idx) => <li key={idx}>{topic}</li>)}
                  </ol>

                  {/* Key Projects */}
                  <Typography variant="subtitle2" className="text mt--5">
                    <span style={{ color: "#cc58bd" }}>Key Projects : </span>
                  </Typography>
                  <ol className="text mt-5">
                    {item.projects.map((project, idx) => <li key={idx}>{project}</li>)}
                  </ol>
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
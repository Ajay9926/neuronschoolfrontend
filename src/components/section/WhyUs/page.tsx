import ScrollProgress from '@/components/common/ScrollProgress/page'
import { whyUsData } from '@/json/page';
import { Box, Grid, Typography } from '@mui/material'
import React, { useRef } from 'react'

const WhyUS = () => {
    const sectionRef = useRef<HTMLElement>(null);
    return (
        <>
            <section ref={sectionRef}>
                {/* Scroll Progress */}
                <ScrollProgress targetRef={sectionRef} />
                <Box className="new-section">
                    <Box>
                        <Typography variant="h5">WHY CHOOSE NEURONS?
                        </Typography>
                        <Typography variant="h1">
                            Transform from beginner to data science <span className="stroke">
                                professional
                            </span> with our comprehensive  <span className="stroke">
                                program
                            </span>
                        </Typography>
                    </Box>

                    <Box className="mt-50">
                        <Grid container spacing={4} alignItems="center">
                            {/* Left Column */}
                            <Grid size={{ xs: 12, md: 4 }} >
                                <Grid container direction="column" spacing={4} className="center-vertical">
                                    {whyUsData.left.map((item, index) => (
                                        <Box
                                            key={index}
                                            className={`vision-box whyus-box ${index === 0 || index === 2 ? "shift-right" : "shift-center-ri"}`}
                                        >
                                            <Typography variant="h4">{item.title}</Typography>
                                            <Typography variant="subtitle2" className="text mt-5">
                                                {item.description}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Grid>
                            </Grid>

                            {/* Center Column */}
                            <Grid size={{ xs: 12, md: 4 }} >
                                <Box className="center-image-box">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src="/Images/Brain.png" alt="Brain" />
                                </Box>
                            </Grid>

                            {/* Right Column */}
                            <Grid size={{ xs: 12, md: 4 }} >
                                <Grid container direction="column" spacing={4} className="center-vertical">
                                    {whyUsData.right.map((item, index) => (
                                        <Box
                                            key={index}
                                            className={`vision-box whyus-box ${index === 0 || index === 2 ? "shift-left" : "shift-center-le"}`}
                                        >
                                            <Typography variant="h4">{item.title}</Typography>
                                            <Typography variant="subtitle2" className="text mt-5">
                                                {item.description}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </section>
        </>
    )
}

export default WhyUS

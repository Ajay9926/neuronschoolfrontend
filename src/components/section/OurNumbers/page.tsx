"use client";
import CountUp from '@/components/common/CountUp/page'
import { numbersData } from '@/json/page'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const OurNumbers = () => {
    return (
        <Box className="new-section">
            <Grid container spacing={5}>
                {numbersData.map((item, index) => (
                    // Single number/stat card
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                        <Box>
                            <Box display="flex" alignItems="baseline">
                                {/* Animated count */}
                                <CountUp
                                    from={0}
                                    to={item.to}
                                    separator=","
                                    direction="up"
                                    duration={1}
                                    className="count-up-text"
                                />
                                {/* Display unit: % or M */}
                                <Typography component="span" className="count-up-text count-up-per">
                                    {index === 2 ? "M" : "%"}
                                </Typography>
                            </Box>
                            <hr className="mt--5" />
                            <Typography variant="h4" className="mt-15">
                                {item.title}
                            </Typography>
                            <Typography variant="subtitle2" className="text mt-5">
                                {item.subtitle}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
                {/* Source text below all cards */}
                <Box textAlign="center" width="100%" className="mt-5">
                    <Typography variant="subtitle2" className="text">
                        Source: Global AI Industry Reports 2023-2025
                    </Typography>
                </Box>
            </Grid>
        </Box>
    )
}

export default OurNumbers

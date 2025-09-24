import ScrollProgress from '@/components/common/ScrollProgress/page'
import { Box, Typography } from '@mui/material'
import React, { useRef } from 'react'

const WhyUS = () => {
    const sectionRef = useRef<HTMLElement>(null);
    return (
        <>
            <section id="" ref={sectionRef}>
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
                </Box>
            </section>
        </>
    )
}

export default WhyUS

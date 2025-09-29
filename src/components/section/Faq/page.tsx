import ScrollProgress from '@/components/common/ScrollProgress/page'
import { Box, Typography } from '@mui/material'
import React, { useRef } from 'react'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { faqData } from '@/json/page';

const Faq: React.FC = () => {
    // Track expanded accordion
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    // Accordion toggle handler
    const handleChange =
        (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    // Ref for scroll progress
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section ref={sectionRef}>
            {/* Scroll progress */}
            <ScrollProgress targetRef={sectionRef} />

            <Box className="new-section">
                <Box>
                    <Typography variant="h5">WHY CHOOSE NEURONS?</Typography>
                    <Typography variant="h1">
                        Frequently Asked <span className="stroke"> Questions</span>
                    </Typography>
                </Box>

                <Box className="mt-50">
                    {(faqData as FaqItem[]).map((item) => (
                        <MuiAccordion
                            key={item.id}
                            className="custom-accordion"
                            expanded={expanded === item.id}
                            onChange={handleChange(item.id)}
                        >
                            <MuiAccordionSummary
                                className="custom-accordion-summary"
                                expandIcon={<ArrowForwardIosSharpIcon />}
                                aria-controls={`${item.id}-content`}
                                id={`${item.id}-header`}
                            >
                                <Typography variant="h4">{item.question}</Typography>
                            </MuiAccordionSummary>

                            <MuiAccordionDetails>
                                <Typography
                                    variant="subtitle2"
                                    className="text"
                                    component="div"
                                    dangerouslySetInnerHTML={{ __html: item.answer }}
                                />
                            </MuiAccordionDetails>
                        </MuiAccordion>
                    ))}
                </Box>
            </Box>
        </section>
    )
}

export default Faq;

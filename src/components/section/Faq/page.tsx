"use client";
import ScrollProgress from '@/components/common/ScrollProgress/page'
import { Box, Typography } from '@mui/material'
import React, { useRef, useEffect, useState } from 'react'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { faqData } from '@/json/page';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');
  const [icons, setIcons] = useState<
    { left: string; duration: string; delay: string; size: string }[]
  >([]);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const sectionRef = useRef<HTMLElement>(null);

  // Generate random icons only on client
  useEffect(() => {
    const generated = Array.from({ length: 50 }, () => ({
        left: `${Math.random() * 100}%`,
        duration: `${5 + Math.random() * 20}s`,
        delay: `${Math.random() * 15}s`,
        size: `${20 + Math.random() * 50}px`,
      }));
      
    setIcons(generated);
  }, []);

  return (
    <section ref={sectionRef}>
      <ScrollProgress targetRef={sectionRef} />

      <Box className="new-section">
        {/* Floating background icons */}
        {icons.map((icon, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src="Images/Logo.png"
            alt="bg-icon"
            className="icon"
            style={{
                left: icon.left,
                animationDuration: icon.duration, // this sets speed individually
                animationDelay: icon.delay,
                width: icon.size,
                height: 'auto',
              }}
              
          />
        ))}

        {/* FAQ content */}
        <Box>
          <Typography variant="h5">WHY CHOOSE NEURONS?</Typography>
          <Typography variant="h1">
            Frequently Asked <span className="stroke">Questions</span>
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
  );
};

export default Faq;

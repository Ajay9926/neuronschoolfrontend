import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useRef } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import TextCursor from '@/components/common/TextCursor';
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import { listData } from '@/json/page';


const AiCohort = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="ai-section"
    >
      {/* TextCursor attached to this section */}
      <TextCursor parentRef={sectionRef} text={
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/Images/Logo.png"
          alt="cursor"
          style={{ width: 40, height: 40 }}
        />
      } spacing={50} maxPoints={10} />

      {/* Section content */}
      <Box className="new-section">
        <Typography variant="h5" sx={{ textAlign: "center" }}>AI COHORT</Typography>
        <Typography variant="h1" sx={{ textAlign: "center" }}>
          Be the founding member of <span className="stroke">AI Cohort</span>
        </Typography>

        <Grid container spacing={5} alignItems="center" className="mt-50">
          <Grid size={{ xs: 12, md: 5, lg: 6 }}>
            <Box
              className="vision-image-box"
              sx={{
                display: 'flex',
                justifyContent: 'flex-end', // horizontal alignment: end     
              }}
            >
              {// eslint-disable-next-line @next/next/no-img-element
                <img src="/Images/Cohort.avif" alt="Vision" />}
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 7, lg: 6 }}>
            <Typography variant="h4">Placement Traning & Internship Program...............
            </Typography>
            <List className='ml--15'>
              {listData.map((item, index) => (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar>{item.icon}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.text} className="text" />
                </ListItem>
              ))}
            </List>
            <Button
              variant="contained"
              endIcon={<ArrowRightAltOutlinedIcon />}
              className="hero-btn"
            >
              Join Now
            </Button>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default AiCohort;
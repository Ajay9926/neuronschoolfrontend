import { socialLinks } from "@/json/page";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
    return (
        <section className="scroll-section">
            <Box className="new-section footer-pad">
                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Box className="logo">
                            {// eslint-disable-next-line @next/next/no-img-element
                                <img src="/Images/Logo.avif" alt="MyLogo" />}
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="h4">Important Links</Typography>
                        <Typography variant="subtitle2">
                            <a href="#home" className="text text-none">Home</a>
                        </Typography>
                        <Typography variant="subtitle2">
                            <a href="#whyneurons" className="text text-none">Why Neurons</a>
                        </Typography>
                        <Typography variant="subtitle2">
                            <a href="#course" className="text text-none">Course</a>
                        </Typography>
                        <Typography variant="subtitle2">
                            <a href="#faq" className="text text-none">FAQs</a>
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="h4">Contact Us</Typography>
                        <Typography variant="subtitle2">
                            <a href="tel:+919977703043" className="text text-none">+91 99777-03043</a>
                        </Typography>
                        <Typography variant="subtitle2">
                            <a href="mailto:neurons.info.edu@gmail.com" className="text text-none">
                                neurons.info.edu@gmail.com
                            </a>
                        </Typography>
                        <Box display="flex" gap={1} className="ml--10">
                            {socialLinks.map((social) => (
                                <IconButton
                                    key={social.name}
                                    component="a"
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    { // eslint-disable-next-line @next/next/no-img-element
                                        <img
                                            src={social.icon}
                                            alt={social.name}
                                            style={{ width: 30, height: 30 }}
                                        />}
                                </IconButton>
                            ))}
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Box>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3679.4443971135292!2d75.8955838!3d22.7488835!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd157ca8f931%3A0x6edf41acb13e449d!2sNeurons%20School%20of%20Innovation%20%26%20AI!5e0!3m2!1sen!2sin!4v1759226895303!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12 }} className="neurons-text-container">
                        <Typography variant="h1" className="animated-text stroke">
                            NEURONS
                        </Typography>
                        <Typography variant="subtitle2" className="text mt-15" style={{ textAlign: "center" }}>
                            @Copyright 2025. Neurons School of Innovation and AI. All Rights Reserved.
                        </Typography>
                        <Typography variant="subtitle2" className="text mt-5" style={{ textAlign: "center" }}>
                            Made with ❤️ by Neurons
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </section>
    );
};

export default Footer;
"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import { FormData } from "@/type/page";

const ContactUs = () => {
  // Form state
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    address: "",
    interested: { community: false, aiCohort: false, career: false },
  });

  // Error state
  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    phone: false,
    college: false,
    address: false,
  });

  // Handle text input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: false }); // Reset error on change
  };

  // Handle checkbox change
  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      interested: { ...formData.interested, [name]: checked },
    });
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { fullName, email, phone, college, address } = formData;

    // Required fields check
    const newErrors = {
      fullName: !fullName.trim(),
      email: !email.trim(),
      phone: !phone.trim(),
      college: !college.trim(),
      address: !address.trim(),
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some((err) => err)) {
      toast.warning("Please fill all required fields correctly!");
      return;
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrors((prev) => ({ ...prev, email: true }));
      toast.warning("Invalid email address...");
      return;
    }

    // Phone validation (10 digits)
    if (!/^\d{10}$/.test(phone)) {
      setErrors((prev) => ({ ...prev, phone: true }));
      toast.warning("Invalid mobile number...");
      return;
    }

    toast.success("Form submitted successfully...");
    console.log(formData);
  };

  return (
    <Box className="new-section">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        toastStyle={{
          maxWidth: "90%",
          margin: "10px 20px",
          wordWrap: "break-word",
        }}
      />
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Degrees Won&apos;t Save You in 2025
      </Typography>
      <Typography variant="h1" sx={{ textAlign: "center" }}>
        Don&apos;t Let Your Future Wait ! Enroll in our Data Science Course in
        Indore to gain <span className="stroke">real-world skills today</span>
      </Typography>

      <Grid container spacing={2} className="mt-50">
        {/* Left side - Image */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="Images/Contact.gif" alt="Contact" />
          </Box>
        </Grid>

        {/* Right side - Form */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box className="contact-form-wrapper">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    required
                    label="Full Name"
                    placeholder="Enter your full name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    error={errors.fullName}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    required
                    label="College"
                    placeholder="Enter your college name"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    error={errors.college}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    required
                    label="Phone (Prefer WhatsApp)"
                    placeholder="Enter your phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    error={errors.phone}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    required
                    label="Email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    required
                    label="Address"
                    placeholder="e.g., Vijay Nagar, Bhawarkua, LIG, Geeta Bhawan"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    error={errors.address}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Typography variant="subtitle2" style={{ color: "black" }}>
                    I&apos;m Interested
                  </Typography>
                  <FormGroup className="red-label mt-5">
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.interested.community}
                          onChange={handleCheckbox}
                          name="community"
                        />
                      }
                      label="To join Community and being an active Neuron"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.interested.aiCohort}
                          onChange={handleCheckbox}
                          name="aiCohort"
                        />
                      }
                      label="To know more about AI Cohort Program"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.interested.career}
                          onChange={handleCheckbox}
                          name="career"
                        />
                      }
                      label="In the opportunities to grow my career"
                    />
                  </FormGroup>
                </Grid>
              </Grid>
              <Button
                variant="contained"
                type="submit"
                className="hero-btn mt-15"
                fullWidth
              >
                Submit
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
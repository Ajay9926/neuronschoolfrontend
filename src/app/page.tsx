"use client";
import React from 'react'
import Header from '@/components/section/Header/page'
import Hero from '@/components/section/Hero/page';
import OurNumbers from '@/components/section/OurNumbers/page';
import Vision from '@/components/section/Vision/page';
import WhyUS from '@/components/section/WhyUs/page';
import AiCohort from '@/components/section/AiCohort/page';
import Course from '@/components/section/Course';
import Learn from '@/components/section/Learn/page';
import WhyDifferent from '@/components/section/WhyDifferent/page';
import ContactUs from '@/components/section/ContactUs/page';

const page = () => {
  return (
    <>
    <Header />
    <Hero /> 
    <Vision />
    <OurNumbers />
    <WhyUS />
    <AiCohort />
    <Course />
    <Learn />
    <WhyDifferent />
    <ContactUs />
    </>
  )
}

export default page

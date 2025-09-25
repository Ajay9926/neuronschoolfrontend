"use client";
import React from 'react'
import Header from '@/components/section/Header/page'
import Hero from '@/components/section/Hero/page';
import OurNumbers from '@/components/section/OurNumbers/page';
import Vision from '@/components/section/Vision/page';
import WhyUS from '@/components/section/WhyUs/page';
import AiCohort from '@/components/section/AiCohort/page';
import Course from '@/components/section/Course';
const items = [
  { id:1, title: "A", subtitle: "A1"},
  { id:2, title: "B", subtitle: "B1"},
  { id:2, title: "c", subtitle: "c"},
  { id:2, title: "d", subtitle: "d"}
];
const page = () => {
  return (
    <>
    <Header />
    <Hero /> 
    <Vision />
    <OurNumbers />
    <WhyUS />
    <AiCohort />
    <Course items={items}/>
    </>
  )
}

export default page

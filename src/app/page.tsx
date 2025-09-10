"use client";
import Header from '@/components/Header/page'
import Hero from '@/components/Hero/page';

import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <Hero /> 
    <div className='new'>
        {/* Extra scrollable content */}
      </div>
    </>
  )
}

export default page

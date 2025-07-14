'use client'

import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer'
import CustomCursor from '../components/CustomCursor'

export default function AboutPage() {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth'
      
      return () => {
        document.documentElement.style.scrollBehavior = 'auto'
      }
    }
  }, [])

  return (
    <div className="relative">
      <CustomCursor />
      <Navbar />
      <About />
      <Footer />
    </div>
  )
}
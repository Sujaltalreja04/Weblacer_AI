'use client'

import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Footer from '../components/Footer'
import CustomCursor from '../components/CustomCursor'

export default function ServicesPage() {
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
      <Services />
      <Footer />
    </div>
  )
}
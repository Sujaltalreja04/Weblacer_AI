'use client'

import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Founders from '../components/Founders'
import Footer from '../components/Footer'
import CustomCursor from '../components/CustomCursor'

export default function FoundersPage() {
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
      <Founders />
      <Footer />
    </div>
  )
}
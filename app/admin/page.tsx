'use client'

import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Admin from '../components/Admin'
import Footer from '../components/Footer'
import CustomCursor from '../components/CustomCursor'

export default function AdminPage() {
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
      <Admin />
      <Footer />
    </div>
  )
}
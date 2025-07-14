'use client'

import React, { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

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
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      <div className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}>
        <Navbar />
        <Home />
        <Footer />
      </div>
    </div>
  )
}
'use client'

import React, { useEffect, useRef, useState } from 'react'

const CURSOR_DOT_SIZE = 8
const CURSOR_RING_SIZE = 36
const CURSOR_COLOR = '#B5FF6D'
const CURSOR_RING_COLOR = '#8A9A5B'

const isInteractive = (el: Element | null) => {
  if (!el) return false
  return (
    el.tagName === 'A' ||
    el.tagName === 'BUTTON' ||
    el.tagName === 'INPUT' ||
    el.tagName === 'SELECT' ||
    el.tagName === 'TEXTAREA' ||
    el.getAttribute('role') === 'button' ||
    el.classList.contains('cursor-pointer')
  )
}

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [isActive, setIsActive] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    if (isMobile) {
      return () => window.removeEventListener('resize', checkMobile)
    }

    let mouseX = coords.x
    let mouseY = coords.y
    let ringX = coords.x
    let ringY = coords.y

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      setCoords({ x: mouseX, y: mouseY })
      // Check if hovering interactive
      const el = document.elementFromPoint(mouseX, mouseY)
      setIsActive(isInteractive(el))
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - CURSOR_DOT_SIZE / 2}px, ${mouseY - CURSOR_DOT_SIZE / 2}px, 0)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - CURSOR_RING_SIZE / 2}px, ${ringY - CURSOR_RING_SIZE / 2}px, 0)`
      }
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animate()
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', checkMobile)
    }
  }, [coords.x, coords.y, isMobile])

  // Don't render cursor on mobile devices
  if (isMobile) {
    return null
  }

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          zIndex: 9999,
          width: CURSOR_DOT_SIZE,
          height: CURSOR_DOT_SIZE,
          borderRadius: '50%',
          background: CURSOR_COLOR,
          pointerEvents: 'none',
          mixBlendMode: 'exclusion',
          transition: 'background 0.2s',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          zIndex: 9998,
          width: isActive ? CURSOR_RING_SIZE * 1.3 : CURSOR_RING_SIZE,
          height: isActive ? CURSOR_RING_SIZE * 1.3 : CURSOR_RING_SIZE,
          borderRadius: '50%',
          border: `2.5px solid ${isActive ? CURSOR_COLOR : CURSOR_RING_COLOR}`,
          background: isActive ? `${CURSOR_COLOR}22` : 'transparent',
          pointerEvents: 'none',
          transition: 'all 0.18s cubic-bezier(.4,2,.6,1)',
          boxShadow: isActive ? `0 0 16px 2px ${CURSOR_COLOR}55` : 'none',
          mixBlendMode: 'exclusion',
        }}
      />
    </>
  )
}

export default CustomCursor
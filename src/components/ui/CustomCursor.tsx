'use client'

import { useEffect, useState, useRef } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)

  useEffect(() => {
    // Don't show on touch devices
    if (typeof window !== 'undefined' && 'ontouchstart' in window) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      // Dot follows instantly
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`

      if (!visible) setVisible(true)
    }

    const onMouseDown = () => setClicking(true)
    const onMouseUp = () => setClicking(false)
    const onMouseLeave = () => setVisible(false)
    const onMouseEnter = () => setVisible(true)

    // Ring follows with delay (lerp)
    let animId: number
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`
      animId = requestAnimationFrame(animateRing)
    }

    // Detect hoverable elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isHoverable =
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('.project-card') ||
        target.closest('.stat-card') ||
        target.closest('.stack-item') ||
        target.closest('.contact-item') ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'

      setHovering(!!isHoverable)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mouseover', onMouseOver)
    document.documentElement.addEventListener('mouseleave', onMouseLeave)
    document.documentElement.addEventListener('mouseenter', onMouseEnter)
    animId = requestAnimationFrame(animateRing)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mouseover', onMouseOver)
      document.documentElement.removeEventListener('mouseleave', onMouseLeave)
      document.documentElement.removeEventListener('mouseenter', onMouseEnter)
      cancelAnimationFrame(animId)
    }
  }, [visible])

  // Don't render on SSR
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        *, *::before, *::after {
          cursor: none !important;
        }
      `}</style>

      {/* Dot - center */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[99999] mix-blend-normal"
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: '#22c55e',
          boxShadow: '0 0 12px rgba(34,197,94,0.6), 0 0 4px rgba(34,197,94,0.8)',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.2s, width 0.3s, height 0.3s, background-color 0.3s',
          ...(clicking ? { transform: 'scale(0.6)' } : {}),
        }}
      />

      {/* Ring - follows with delay */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[99998]"
        style={{
          width: hovering ? 50 : 40,
          height: hovering ? 50 : 40,
          borderRadius: '50%',
          border: `1.5px solid rgba(34, 197, 94, ${hovering ? 0.5 : 0.2})`,
          backgroundColor: hovering ? 'rgba(34, 197, 94, 0.04)' : 'transparent',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.2s, width 0.3s ease, height 0.3s ease, border-color 0.3s, background-color 0.3s',
          marginLeft: hovering ? -5 : 0,
          marginTop: hovering ? -5 : 0,
        }}
      />
    </>
  )
}

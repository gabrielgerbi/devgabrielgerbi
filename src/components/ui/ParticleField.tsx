'use client'

import { useEffect, useRef } from 'react'

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let mouse = { x: -9999, y: -9999 }
    let width = 0
    let height = 0

    // Particle system
    const PARTICLE_COUNT = 120
    const CONNECTION_DISTANCE = 140
    const MOUSE_RADIUS = 200
    const MOUSE_PUSH = 0.8

    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      baseX: number
      baseY: number
      size: number
      opacity: number
      pulseSpeed: number
      pulseOffset: number
    }

    let particles: Particle[] = []

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas!.parentElement?.clientWidth || window.innerWidth
      height = canvas!.parentElement?.clientHeight || window.innerHeight
      canvas!.width = width * dpr
      canvas!.height = height * dpr
      canvas!.style.width = width + 'px'
      canvas!.style.height = height + 'px'
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function createParticles() {
      particles = []
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const x = Math.random() * width
        const y = Math.random() * height
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          baseX: x,
          baseY: y,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.2,
          pulseSpeed: Math.random() * 0.02 + 0.005,
          pulseOffset: Math.random() * Math.PI * 2,
        })
      }
    }

    function animate(time: number) {
      ctx!.clearRect(0, 0, width, height)

      // Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Drift movement
        p.x += p.vx
        p.y += p.vy

        // Soft boundary — wrap around with padding
        if (p.x < -20) p.x = width + 20
        if (p.x > width + 20) p.x = -20
        if (p.y < -20) p.y = height + 20
        if (p.y > height + 20) p.y = -20

        // Mouse interaction — push away
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (1 - dist / MOUSE_RADIUS) * MOUSE_PUSH
          p.vx += (dx / dist) * force
          p.vy += (dy / dist) * force
        }

        // Damping — slow down over time
        p.vx *= 0.98
        p.vy *= 0.98

        // Gentle return to base drift speed
        const baseVx = (Math.random() - 0.5) * 0.3
        const baseVy = (Math.random() - 0.5) * 0.3
        p.vx += (baseVx - p.vx) * 0.001
        p.vy += (baseVy - p.vy) * 0.001

        // Pulsing opacity
        const pulse = Math.sin(time * p.pulseSpeed + p.pulseOffset) * 0.15
        const currentOpacity = Math.max(0.05, p.opacity + pulse)

        // Draw particle
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(34, 197, 94, ${currentOpacity})`
        ctx!.fill()

        // Glow effect for larger particles
        if (p.size > 1.2) {
          ctx!.beginPath()
          ctx!.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2)
          ctx!.fillStyle = `rgba(34, 197, 94, ${currentOpacity * 0.08})`
          ctx!.fill()
        }
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONNECTION_DISTANCE) {
            const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.15
            ctx!.beginPath()
            ctx!.moveTo(particles[i].x, particles[i].y)
            ctx!.lineTo(particles[j].x, particles[j].y)
            ctx!.strokeStyle = `rgba(34, 197, 94, ${opacity})`
            ctx!.lineWidth = 0.5
            ctx!.stroke()
          }
        }
      }

      // Mouse connection lines — connect nearest particles to cursor
      if (mouse.x > 0 && mouse.y > 0) {
        for (let i = 0; i < particles.length; i++) {
          const dx = particles[i].x - mouse.x
          const dy = particles[i].y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < MOUSE_RADIUS) {
            const opacity = (1 - dist / MOUSE_RADIUS) * 0.2
            ctx!.beginPath()
            ctx!.moveTo(particles[i].x, particles[i].y)
            ctx!.lineTo(mouse.x, mouse.y)
            ctx!.strokeStyle = `rgba(74, 222, 128, ${opacity})`
            ctx!.lineWidth = 0.6
            ctx!.stroke()
          }
        }

        // Mouse cursor glow
        const gradient = ctx!.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 60)
        gradient.addColorStop(0, 'rgba(34, 197, 94, 0.06)')
        gradient.addColorStop(1, 'rgba(34, 197, 94, 0)')
        ctx!.beginPath()
        ctx!.arc(mouse.x, mouse.y, 60, 0, Math.PI * 2)
        ctx!.fillStyle = gradient
        ctx!.fill()
      }

      animationId = requestAnimationFrame(animate)
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    function handleMouseLeave() {
      mouse.x = -9999
      mouse.y = -9999
    }

    function handleTouchMove(e: TouchEvent) {
      const rect = canvas!.getBoundingClientRect()
      mouse.x = e.touches[0].clientX - rect.left
      mouse.y = e.touches[0].clientY - rect.top
    }

    function handleTouchEnd() {
      mouse.x = -9999
      mouse.y = -9999
    }

    // Init
    resize()
    createParticles()
    animationId = requestAnimationFrame(animate)

    // Events
    window.addEventListener('resize', () => {
      resize()
      createParticles()
    })
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true })
    canvas.addEventListener('touchend', handleTouchEnd)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      canvas.removeEventListener('touchmove', handleTouchMove)
      canvas.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.9 }}
    />
  )
}

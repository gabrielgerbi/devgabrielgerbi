'use client'

import { useEffect, useState } from 'react'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href || href === '#') return
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        scrolled ? 'bg-bg-primary/85 backdrop-blur-xl border-b border-border' : ''
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex justify-between items-center">
        <a href="#" className="font-display font-bold text-lg tracking-tight text-text-primary flex items-center gap-2.5 no-underline">
          <span className="w-2 h-2 rounded-full bg-accent-green shadow-[0_0_12px_rgba(74,222,128,0.5)] animate-[pulse-dot_2s_ease-in-out_infinite]" />
          gabriel gerbi
        </a>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Sobre', href: '#about' },
            { label: 'Projetos', href: '#projects' },
            { label: 'Stack', href: '#stack' },
            { label: 'Contato', href: '#contact' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors no-underline"
            >
              {link.label}
            </a>
          ))}

          <a
            href="https://med.gabrielgerbi.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-text-muted px-3 py-1.5 border border-border rounded-full no-underline hover:text-text-secondary hover:border-border-hover hover:bg-bg-card transition-all flex items-center gap-1.5"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
            Med
          </a>
        </div>
      </div>
    </nav>
  )
}

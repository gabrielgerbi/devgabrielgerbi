'use client'

import { useEffect, useState } from 'react'
import { useI18n, Locale } from '@/lib/i18n'

const flags: Record<Locale, string> = { pt: '🇧🇷', en: '🇺🇸', es: '🇪🇸' }

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { locale, setLocale, t } = useI18n()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close lang dropdown on outside click
  useEffect(() => {
    if (!langOpen) return
    const close = () => setLangOpen(false)
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [langOpen])

  const links = [
    { href: '#about', label: t('nav.about') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#stack', label: t('nav.stack') },
    { href: '#contact', label: t('nav.contact') },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-bg-primary/90 backdrop-blur-xl border-b border-accent-green/[0.06]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="font-display font-bold text-lg flex items-center gap-2.5 no-underline">
          <span className="w-2 h-2 rounded-full bg-accent-green shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-[pulse-dot_2s_ease-in-out_infinite]" />
          gabriel gerbi
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors no-underline ${
                scrolled ? 'text-text-secondary hover:text-text-primary' : 'text-white/50 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={(e) => { e.stopPropagation(); setLangOpen(!langOpen) }}
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 border border-white/10 rounded-full hover:border-accent-green/30 transition-all cursor-pointer bg-transparent text-text-muted hover:text-text-secondary"
            >
              <span>{flags[locale]}</span>
              <span className="uppercase font-mono">{locale}</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-2 bg-bg-card/95 backdrop-blur-xl border border-accent-green/10 rounded-lg overflow-hidden shadow-xl min-w-[100px]">
                {(['pt', 'en', 'es'] as Locale[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLocale(l); setLangOpen(false) }}
                    className={`w-full flex items-center gap-2 px-4 py-2.5 text-xs font-mono transition-colors cursor-pointer border-0 bg-transparent ${
                      locale === l ? 'text-accent-green bg-accent-green/5' : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                    }`}
                  >
                    <span>{flags[l]}</span>
                    <span className="uppercase">{l}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Med link */}
          <a
            href="https://med.gabrielgerbi.com.br"
            target="_blank"
            className="text-xs text-text-muted px-3 py-1.5 border border-white/10 rounded-full flex items-center gap-1.5 hover:text-accent-green hover:border-accent-green/30 transition-all no-underline"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            {t('nav.med')}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] cursor-pointer bg-transparent border-0 p-1"
          aria-label="Menu"
        >
          <span className={`block w-5 h-[2px] bg-text-primary transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-[2px] bg-text-primary transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[2px] bg-text-primary transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-bg-primary/95 backdrop-blur-xl ${
          menuOpen ? 'max-h-[400px] border-b border-accent-green/[0.06]' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-text-secondary hover:text-text-primary transition-colors py-2 text-sm no-underline"
            >
              {l.label}
            </a>
          ))}
          {/* Mobile language */}
          <div className="flex gap-2 py-2 border-t border-white/5 mt-2 pt-4">
            {(['pt', 'en', 'es'] as Locale[]).map((l) => (
              <button
                key={l}
                onClick={() => { setLocale(l); setMenuOpen(false) }}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-mono border cursor-pointer transition-all ${
                  locale === l
                    ? 'border-accent-green/30 text-accent-green bg-accent-green/5'
                    : 'border-white/10 text-text-muted bg-transparent hover:text-text-secondary'
                }`}
              >
                {flags[l]} {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

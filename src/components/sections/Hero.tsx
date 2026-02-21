'use client'

import { ParticleField } from '@/components/ui/ParticleField'
import { useI18n } from '@/lib/i18n'

export function Hero() {
  const { t } = useI18n()

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Particle Animation Background */}
      <ParticleField />

      {/* Central glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(34,197,94,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 font-mono text-[13px] text-accent-green border border-accent-green/20 bg-accent-green/5 px-4 py-2 rounded-full mb-8 animate-fade-in-up backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-[pulse-dot_2s_ease-in-out_infinite]" />
          {t('hero.badge')}
        </div>

        <h1 className="font-display text-[clamp(40px,5.5vw,72px)] font-extrabold tracking-[-0.04em] leading-[1.05] mb-7 animate-fade-in-up-1">
          {t('hero.title1')}<br />
          <span className="gradient-text">{t('hero.title2')}</span>
        </h1>

        <p className="text-[17px] leading-relaxed text-text-secondary max-w-[540px] mb-10 animate-fade-in-up-2 text-center">
          {t('hero.desc')}<br />
          {t('hero.desc2')}
        </p>

        <div className="flex gap-4 animate-fade-in-up-3 flex-col sm:flex-row">
          <a href="#projects" className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent-green text-bg-primary font-semibold text-sm rounded-xl hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(34,197,94,0.25)] transition-all no-underline">
            {t('hero.cta1')}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/[0.02] text-text-secondary font-medium text-sm border border-white/10 rounded-xl hover:text-text-primary hover:border-accent-green/20 hover:bg-white/[0.05] transition-all no-underline backdrop-blur-sm">
            {t('hero.cta2')}
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in-up-5">
        <div className="w-6 h-[38px] border-2 border-white/15 rounded-xl relative opacity-40">
          <span className="absolute left-1/2 -translate-x-1/2 w-[3px] h-2 bg-white/40 rounded-full" style={{ animation: 'mouse-scroll 2s ease-in-out infinite', bottom: '6px' }} />
        </div>
      </div>
    </section>
  )
}

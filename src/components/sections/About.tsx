'use client'

import { useI18n } from '@/lib/i18n'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Reveal } from '@/components/ui/Reveal'

const timelineData = [
  {
    year: '2022',
    titleKey: 'about.tl1.title' as const,
    descKey: 'about.tl1.desc' as const,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    year: '2023',
    titleKey: 'about.tl2.title' as const,
    descKey: 'about.tl2.desc' as const,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/>
      </svg>
    ),
  },
  {
    year: '2024',
    titleKey: 'about.tl3.title' as const,
    descKey: 'about.tl3.desc' as const,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m13 2-2 2.5h3L12 7"/><path d="M10 14v-3"/><path d="M14 14v-3"/><circle cx="12" cy="14" r="8"/>
      </svg>
    ),
  },
  {
    year: '2025',
    titleKey: 'about.tl4.title' as const,
    descKey: 'about.tl4.desc' as const,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
      </svg>
    ),
  },
  {
    year: '2026',
    titleKey: 'about.tl5.title' as const,
    descKey: 'about.tl5.desc' as const,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
]

export function About() {
  const { t } = useI18n()

  const stats = [
    { num: '3+', label: t('about.stat1') },
    { num: '10+', label: t('about.stat2') },
    { num: '2', label: t('about.stat3') },
    { num: '∞', label: t('about.stat4') },
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #050505, #070a07, #050505)' }}>
      {/* BG: Diagonal lines */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 80px, rgba(34,197,94,0.02) 80px, rgba(34,197,94,0.02) 81px)',
      }} />

      <div className="container max-w-[1200px] mx-auto px-6 relative z-[1]">
        {/* Header + Stats */}
        <div className="grid md:grid-cols-2 gap-20 items-start mb-20">
          <div>
            <SectionLabel>{t('about.label')}</SectionLabel>
            <Reveal>
              <h2 className="font-display text-[clamp(32px,4vw,48px)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-5">
                {t('about.title1')}<br />{t('about.title2')}
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-text-secondary text-base leading-relaxed mb-5" dangerouslySetInnerHTML={{ __html: t('about.p1') }} />
            </Reveal>
            <Reveal>
              <p className="text-text-secondary text-base leading-relaxed mb-5" dangerouslySetInnerHTML={{ __html: t('about.p2') }} />
            </Reveal>
            <Reveal>
              <p className="text-text-secondary text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.p3') }} />
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((s, i) => (
              <Reveal key={i}>
                <div className="bg-bg-card/50 border border-accent-green/[0.06] rounded-2xl p-7 transition-all hover:border-accent-green/15 hover:-translate-y-0.5 backdrop-blur-sm">
                  <div className="font-display text-[40px] font-extrabold tracking-[-0.03em] leading-none mb-2 gradient-text">{s.num}</div>
                  <div className="text-sm text-text-muted">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <Reveal>
          <div className="relative">
            {/* Horizontal line */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-accent-green/10" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
              {timelineData.map((item, i) => (
                <Reveal key={i}>
                  <div className="relative group">
                    {/* Node dot */}
                    <div className="hidden md:flex w-12 h-12 rounded-full bg-bg-primary border-2 border-accent-green/20 items-center justify-center mb-5 group-hover:border-accent-green/50 transition-all relative z-[1]">
                      {item.icon}
                    </div>

                    {/* Mobile: icon + year inline */}
                    <div className="flex md:hidden items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-bg-primary border-2 border-accent-green/20 flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <span className="font-mono text-accent-green text-sm font-semibold">{item.year}</span>
                    </div>

                    {/* Year - desktop */}
                    <div className="hidden md:block font-mono text-accent-green text-sm font-semibold mb-2">{item.year}</div>

                    <h4 className="font-display text-sm font-semibold mb-1 ml-0 md:ml-0">{t(item.titleKey)}</h4>
                    <p className="text-xs text-text-muted leading-relaxed">{t(item.descKey)}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

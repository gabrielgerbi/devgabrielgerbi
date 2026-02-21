'use client'

import { useI18n } from '@/lib/i18n'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Reveal } from '@/components/ui/Reveal'

const stackItems = [
  {
    name: 'React',
    roleKey: 'stack.frontend' as const,
    color: '#22c55e',
    // Atom/orbital icon
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="2.5" fill="#22c55e" stroke="none" opacity="0.9"/>
        <ellipse cx="12" cy="12" rx="10" ry="4"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
      </svg>
    ),
  },
  {
    name: 'Next.js',
    roleKey: 'stack.framework' as const,
    color: '#e8e8e8',
    // N inside circle
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 16V8l9 12V8" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    roleKey: 'stack.language' as const,
    color: '#22c55e',
    // Code brackets with T
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="3"/>
        <path d="M8 10h8M12 10v8"/>
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    roleKey: 'stack.styling' as const,
    color: '#22c55e',
    // Wind/wave icon
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 8c2-4 5-4 6-2s4 2 6-2"/>
        <path d="M6 16c2-4 5-4 6-2s4 2 6-2"/>
      </svg>
    ),
  },
  {
    name: 'Prisma',
    roleKey: 'stack.orm' as const,
    color: '#e8e8e8',
    // Diamond/prism shape
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 14l8 8h4l8-8L12 2z"/>
        <path d="M12 2v20"/>
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    roleKey: 'stack.database' as const,
    color: '#22c55e',
    // Database cylinder
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="8" ry="3"/>
        <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/>
        <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/>
      </svg>
    ),
  },
  {
    name: 'Vercel',
    roleKey: 'stack.deploy' as const,
    color: '#e8e8e8',
    // Triangle/deploy
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3L2 21h20L12 3z"/>
      </svg>
    ),
  },
  {
    name: 'Git/GitHub',
    roleKey: 'stack.versioning' as const,
    color: '#e8e8e8',
    // Git branch icon
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3"/>
        <circle cx="18" cy="10" r="3"/>
        <circle cx="6" cy="20" r="3"/>
        <path d="M6 9v8M9 6.5c3 .5 6 1.5 6 3.5"/>
      </svg>
    ),
  },
]

export function Stack() {
  const { t } = useI18n()

  return (
    <section id="stack" className="py-24 relative overflow-hidden bg-bg-primary border-t border-accent-green/[0.06]">
      {/* BG: Scan lines */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(34,197,94,0.012) 3px, rgba(34,197,94,0.012) 4px)',
      }} />
      {/* Scanning beam */}
      <div className="absolute left-0 right-0 h-[120px] pointer-events-none" style={{
        background: 'linear-gradient(180deg, transparent, rgba(34,197,94,0.03), transparent)',
        animation: 'stack-scan 6s ease-in-out infinite',
      }} />

      <div className="container max-w-[1200px] mx-auto px-6 relative z-[1]">
        <SectionLabel>{t('stack.label')}</SectionLabel>
        <Reveal>
          <h2 className="font-display text-[clamp(32px,4vw,48px)] font-bold tracking-[-0.03em] leading-[1.1] mb-5">
            {t('stack.title1')}<br />{t('stack.title2')}
          </h2>
        </Reveal>
        <p className="text-text-secondary text-base leading-relaxed max-w-[560px] mb-12">{t('stack.desc')}</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stackItems.map((item, i) => (
            <Reveal key={i}>
              <div className="group bg-bg-card/50 border border-accent-green/[0.06] rounded-[14px] p-6 text-center transition-all hover:border-accent-green/15 hover:bg-bg-card-hover/60 hover:-translate-y-0.5 backdrop-blur-sm">
                <div className="flex items-center justify-center mb-4 h-10 opacity-70 group-hover:opacity-100 transition-opacity">
                  {item.icon}
                </div>
                <div className="font-medium text-sm mb-1">{item.name}</div>
                <div className="text-xs text-text-muted">{t(item.roleKey)}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

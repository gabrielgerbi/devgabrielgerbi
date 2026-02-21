'use client'

import { useI18n } from '@/lib/i18n'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Reveal } from '@/components/ui/Reveal'

const projectIcons = [
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.8"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="8" y="14" width="8" height="7" rx="1"/></svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="m10 9 5 3-5 3V9z"/><path d="M2 21h20"/></svg>,
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.8"><rect x="5" y="2" width="14" height="20" rx="3"/><path d="M12 18h.01"/></svg>,
  <svg key="4" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.8"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>,
]

const projectTags = [
  ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
  ['Next.js', 'Tailwind', 'Framer Motion'],
  ['React Native', 'TypeScript', 'API REST'],
  ['HTML/CSS', 'JavaScript', 'Design'],
]

export function Projects() {
  const { t } = useI18n()

  const projects = [
    { title: t('projects.gestao.title'), desc: t('projects.gestao.desc'), icon: 0, tags: 0 },
    { title: t('projects.landing.title'), desc: t('projects.landing.desc'), icon: 1, tags: 1 },
    { title: t('projects.app.title'), desc: t('projects.app.desc'), icon: 2, tags: 2 },
    { title: t('projects.teatro.title'), desc: t('projects.teatro.desc'), icon: 3, tags: 3 },
  ]

  return (
    <section id="projects" className="py-24 relative overflow-hidden border-t border-accent-green/[0.06]" style={{ background: 'linear-gradient(180deg, #050505, #060806, #050505)' }}>
      {/* BG: Floating orbs */}
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] rounded-full pointer-events-none opacity-50" style={{
        background: 'radial-gradient(circle, rgba(34,197,94,0.07) 0%, transparent 70%)',
        filter: 'blur(100px)',
        animation: 'orb-float-1 25s ease-in-out infinite',
      }} />
      <div className="absolute -bottom-[5%] -left-[5%] w-[300px] h-[300px] rounded-full pointer-events-none opacity-50" style={{
        background: 'radial-gradient(circle, rgba(34,197,94,0.05) 0%, transparent 70%)',
        filter: 'blur(100px)',
        animation: 'orb-float-2 30s ease-in-out infinite',
      }} />

      <div className="container max-w-[1200px] mx-auto px-6 relative z-[1]">
        <SectionLabel>{t('projects.label')}</SectionLabel>
        <Reveal>
          <h2 className="font-display text-[clamp(32px,4vw,48px)] font-bold tracking-[-0.03em] leading-[1.1] mb-5">
            {t('projects.title1')}<br />{t('projects.title2')}
          </h2>
        </Reveal>
        <p className="text-text-secondary text-base leading-relaxed max-w-[560px] mb-12">{t('projects.desc')}</p>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <Reveal key={i}>
              <div className="group bg-bg-card/50 border border-accent-green/[0.06] rounded-2xl p-8 transition-all hover:border-accent-green/15 hover:bg-bg-card-hover/60 hover:-translate-y-1 backdrop-blur-sm flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-11 h-11 rounded-xl bg-accent-green/[0.08] flex items-center justify-center">
                    {projectIcons[p.icon]}
                  </div>
                  <svg className="text-text-muted group-hover:text-accent-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                </div>
                <h3 className="font-display text-xl font-semibold tracking-[-0.01em] mb-2">{p.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {projectTags[p.tags].map((tag) => (
                    <span key={tag} className="font-mono text-[11px] text-text-muted px-2.5 py-1 bg-accent-green/[0.04] rounded-md">{tag}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

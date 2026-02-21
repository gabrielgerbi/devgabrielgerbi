'use client'

import { useI18n } from '@/lib/i18n'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Reveal } from '@/components/ui/Reveal'
import { Terminal } from '@/components/ui/Terminal'

const terminalLines = [
  { text: 'cd gerbinho-store', type: 'command' as const, delay: 40 },
  { text: '~/gerbinho-store', type: 'output' as const },
  { text: '', type: 'blank' as const },
  { text: 'npm run dev', type: 'command' as const, delay: 35 },
  { text: '▲ Next.js 15.1.0', type: 'output' as const },
  { text: '- Local: http://localhost:3000', type: 'output' as const },
  { text: '', type: 'blank' as const },
  { text: '# carregando catálogo de produtos...', type: 'comment' as const },
  { text: '✓ 247 produtos sincronizados', type: 'output' as const },
  { text: '✓ 12 coleções ativas', type: 'output' as const },
  { text: '✓ Stripe conectado', type: 'output' as const },
  { text: '✓ Painel admin pronto', type: 'output' as const },
  { text: '', type: 'blank' as const },
  { text: '# transformando tradição em experiência digital 🧶', type: 'comment' as const },
]

export function Building() {
  const { t } = useI18n()

  const tags = ['Next.js 15', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL', 'Tailwind']

  return (
    <section id="building" className="py-24 relative overflow-hidden bg-bg-primary border-t border-accent-green/[0.06]">
      {/* BG: Circuit board grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(34,197,94,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.025) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'linear-gradient(180deg, transparent 0%, black 30%, black 70%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, black 30%, black 70%, transparent 100%)',
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle 3px at 60px 60px, rgba(34,197,94,0.06) 100%, transparent 100%), radial-gradient(circle 3px at 120px 120px, rgba(34,197,94,0.04) 100%, transparent 100%), radial-gradient(circle 3px at 180px 60px, rgba(34,197,94,0.05) 100%, transparent 100%)',
        backgroundSize: '240px 180px',
      }} />

      <div className="container max-w-[1200px] mx-auto px-6 relative z-[1]">
        <SectionLabel>{t('building.label')}</SectionLabel>
        <Reveal>
          <div className="bg-bg-card/50 border border-accent-green/[0.08] rounded-[20px] p-8 md:p-12 relative overflow-hidden backdrop-blur-sm transition-all hover:border-accent-green/15">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-green/50 to-transparent" />

            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-1.5 font-mono text-xs text-accent-green px-3 py-1.5 bg-accent-green/[0.08] rounded-md mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-[pulse-dot_1.5s_ease-in-out_infinite]" />
                  {t('building.badge')}
                </div>
                <h3 className="font-display text-[32px] font-bold tracking-[-0.02em] mb-4">{t('building.title')}</h3>
                <p className="text-text-secondary text-[15px] leading-relaxed mb-6">{t('building.desc')}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs text-text-muted px-3 py-1.5 border border-accent-green/[0.06] rounded-lg hover:text-text-secondary hover:border-accent-green/15 transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Terminal lines={terminalLines} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

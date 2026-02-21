'use client'

import { useI18n } from '@/lib/i18n'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Reveal } from '@/components/ui/Reveal'

const contactData = [
  {
    key: 'email',
    href: 'mailto:studio@gabrielgerbi.com.br',
    value: 'studio@gabrielgerbi.com.br',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
  },
  {
    key: 'instagram',
    href: 'https://instagram.com/gerbitech',
    label: 'Instagram',
    value: '@gerbitech',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>,
  },
  {
    key: 'github',
    href: 'https://github.com/gabrielgerbi',
    label: 'GitHub',
    value: 'gabrielgerbi',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>,
  },
  {
    key: 'linkedin',
    href: 'https://www.linkedin.com/in/gabriel-gerbi',
    label: 'LinkedIn',
    value: 'Gabriel Gerbi',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    key: 'whatsapp',
    href: 'https://wa.me/5519994690076',
    value: '+55 (19) 99469-0076',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  },
]

export function Contact() {
  const { t } = useI18n()

  const labels: Record<string, string> = {
    email: t('contact.email'),
    instagram: 'Instagram',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    whatsapp: t('contact.phone'),
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden border-t border-accent-green/[0.06]" style={{ background: 'linear-gradient(180deg, #050505, #060806)' }}>
      {/* BG: Radial glow bottom */}
      <div className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none" style={{
        background: 'radial-gradient(ellipse, rgba(34,197,94,0.06) 0%, transparent 70%)',
      }} />
      {/* BG: Dot grid bottom */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(rgba(34,197,94,0.04) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(ellipse 50% 60% at 50% 80%, black 0%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse 50% 60% at 50% 80%, black 0%, transparent 70%)',
      }} />

      <div className="container max-w-[1200px] mx-auto px-6 relative z-[1]">
        <SectionLabel>{t('contact.label')}</SectionLabel>
        <Reveal>
          <h2 className="font-display text-[clamp(32px,4vw,48px)] font-bold tracking-[-0.03em] leading-[1.1] mb-12">
            {t('contact.title1')}<br />{t('contact.title2')}
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div className="flex flex-col gap-3">
            {contactData.map((c) => (
              <Reveal key={c.key}>
                <a
                  href={c.href}
                  target={c.key !== 'email' ? '_blank' : undefined}
                  className="flex items-center gap-4 p-5 bg-bg-card/50 border border-accent-green/[0.06] rounded-[14px] transition-all hover:border-accent-green/15 hover:bg-bg-card-hover/60 hover:translate-x-1 backdrop-blur-sm no-underline"
                >
                  <div className="w-10 h-10 rounded-[10px] bg-accent-green/[0.06] flex items-center justify-center shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-[13px] text-text-muted mb-0.5">{labels[c.key]}</div>
                    <div className="text-[15px] font-medium">{c.value}</div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="bg-bg-card/50 border border-accent-green/[0.08] rounded-[20px] p-10 backdrop-blur-sm">
              <h3 className="font-display text-2xl font-bold mb-3">{t('contact.cta.title')}</h3>
              <p className="text-text-secondary text-[15px] leading-relaxed mb-6">{t('contact.cta.desc')}</p>
              <a
                href="mailto:studio@gabrielgerbi.com.br"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent-green text-bg-primary font-semibold text-sm rounded-xl hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(34,197,94,0.25)] transition-all no-underline"
              >
                {t('contact.cta.btn')} →
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'

const links = [
  {
    label: 'Email',
    value: 'contato@gabrielgerbi.com.br',
    href: 'mailto:contato@gabrielgerbi.com.br',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
  },
  {
    label: 'Instagram Tech',
    value: '@gerbitech',
    href: 'https://instagram.com/gerbitech',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>,
  },
  {
    label: 'GitHub',
    value: 'gabrielgerbi',
    href: 'https://github.com/gabrielgerbi',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>,
  },
  {
    label: 'LinkedIn',
    value: 'Gabriel Gerbi',
    href: 'https://linkedin.com/in/gabrielgerbi',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>,
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-[120px] border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <Reveal>
          <SectionLabel>Contato</SectionLabel>
          <h2 className="font-display text-[clamp(32px,4vw,48px)] font-bold tracking-[-0.03em] leading-tight mb-5">
            Vamos construir<br />algo juntos?
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mt-12 items-start">
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-5 bg-bg-card border border-border rounded-[14px] no-underline text-text-primary transition-all hover:border-border-hover hover:bg-bg-card-hover hover:translate-x-1"
                >
                  <div className="w-10 h-10 rounded-[10px] bg-white/5 flex items-center justify-center flex-shrink-0">
                    {link.icon}
                  </div>
                  <div>
                    <div className="text-[13px] text-text-muted mb-0.5">{link.label}</div>
                    <div className="text-[15px] font-medium">{link.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-bg-card border border-border rounded-[20px] p-10">
              <h3 className="font-display text-2xl font-bold mb-3">Tem um projeto em mente?</h3>
              <p className="text-text-secondary text-[15px] leading-relaxed mb-6">
                Estou disponível para projetos freelance e oportunidades de colaboração.
                Se você tem uma ideia que precisa ganhar vida no digital, vamos conversar.
              </p>
              <a
                href="mailto:contato@gabrielgerbi.com.br"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-text-primary text-bg-primary font-semibold text-sm rounded-xl hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)] transition-all no-underline"
              >
                Enviar mensagem
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

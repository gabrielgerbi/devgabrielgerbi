import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'

const stack = [
  {
    name: 'React', category: 'Frontend',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#61dafb" strokeWidth="1.5"><circle cx="12" cy="12" r="2.5"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></svg>,
  },
  {
    name: 'Next.js', category: 'Framework',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 19.5h20L12 2Z"/><path d="M12 16v-5"/></svg>,
  },
  {
    name: 'TypeScript', category: 'Linguagem',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3178c6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 17V10H7"/><path d="M7 13h4"/><path d="M13 10h2.5a1.5 1.5 0 010 3H14h1.5a1.5 1.5 0 010 3H13v-6z" fill="none"/></svg>,
  },
  {
    name: 'Tailwind CSS', category: 'Estilização',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6c-6 0-8 4-8.5 8 1.5-2 3.5-3 5.5-3 3 0 4.5 3 8.5 3 2 0 3.5-1 4.5-3-.5 4-3 8-8.5 8s-7-4-7.5-8c1.5-2 3.5-3 5.5-3 3 0 5 3 8.5 3"/></svg>,
  },
  {
    name: 'Prisma', category: 'ORM',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5a67d8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>,
  },
  {
    name: 'PostgreSQL', category: 'Banco de Dados',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#336791" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6"/><path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6"/></svg>,
  },
  {
    name: 'Vercel', category: 'Deploy',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/><path d="M12 22v-6.5"/><path d="m22 8.5-10 5.5L2 8.5"/></svg>,
  },
  {
    name: 'Git/GitHub', category: 'Versionamento',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 3a9 9 0 0 1 6 15.5"/><path d="M12 3a9 9 0 0 0-6 15.5"/><path d="M9 21h6"/></svg>,
  },
]

export function Stack() {
  return (
    <section id="stack" className="py-[120px] border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <Reveal>
          <SectionLabel>Stack</SectionLabel>
          <h2 className="font-display text-[clamp(32px,4vw,48px)] font-bold tracking-[-0.03em] leading-tight mb-5">
            Ferramentas do<br />dia a dia.
          </h2>
          <p className="text-text-secondary text-base leading-relaxed max-w-[560px]">
            Tecnologias que uso para transformar ideias em produtos funcionais.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {stack.map((item, i) => (
            <Reveal key={item.name} delay={0.1 * Math.ceil((i + 1) / 2)}>
              <div className="bg-bg-card border border-border rounded-[14px] p-6 text-center transition-all hover:border-border-hover hover:bg-bg-card-hover hover:-translate-y-0.5 cursor-default">
                <div className="flex items-center justify-center h-9 mb-3">
                  {item.icon}
                </div>
                <div className="font-medium text-sm mb-1">{item.name}</div>
                <div className="text-xs text-text-muted">{item.category}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

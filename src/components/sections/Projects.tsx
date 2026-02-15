import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'

const projects = [
  {
    name: 'Gestão Discovery',
    desc: 'Plataforma completa para gerenciar processos de cidadania europeia com kanban, árvore genealógica, portal de cliente e controle financeiro.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    color: '#4ade80',
    bg: 'rgba(74, 222, 128, 0.1)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="8" y="14" width="8" height="7" rx="1"/>
        <path d="M6.5 10v2.5a1 1 0 001 1h9a1 1 0 001-1V10"/><path d="M12 13.5V14"/>
      </svg>
    ),
  },
  {
    name: 'Traduções Juramentadas',
    desc: 'Sistema automatizado de geração de traduções PT-BR → Italiano para documentos civis, com templates e formatação profissional.',
    tags: ['Node.js', 'DOCX API', 'Templates'],
    color: '#60a5fa',
    bg: 'rgba(96, 165, 250, 0.1)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>
      </svg>
    ),
  },
  {
    name: 'Paixão de Cristo',
    desc: 'Landing page para espetáculo teatral com Henri Castelli. Galeria interativa, planos de patrocínio e design responsivo.',
    tags: ['HTML/CSS', 'JavaScript', 'Design'],
    color: '#fbbf24',
    bg: 'rgba(251, 191, 36, 0.1)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 10s3-3 8-3 8 3 8 3"/><path d="M2 10s3 3 8 3 8-3 8-3"/><circle cx="7" cy="10" r="1"/><circle cx="13" cy="10" r="1"/>
        <path d="M2 16s3-3 8-3 8 3 8 3"/><path d="M2 16s3 3 8 3 8-3 8-3"/><circle cx="7" cy="16" r="1"/><circle cx="13" cy="16" r="1"/>
      </svg>
    ),
  },
  {
    name: 'Árvore Genealógica',
    desc: 'Visualização interativa de árvores genealógicas com React Flow, drag & drop, persistência de layout e exportação PDF.',
    tags: ['React Flow', 'Dagre', 'PDF Export'],
    color: '#c084fc',
    bg: 'rgba(192, 132, 252, 0.1)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20"/><path d="M2 12h20"/><path d="M12 2a10 10 0 0 1 0 20"/><path d="M12 2a10 10 0 0 0 0 20"/>
      </svg>
    ),
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-[120px] border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <Reveal>
          <SectionLabel>Projetos</SectionLabel>
          <h2 className="font-display text-[clamp(32px,4vw,48px)] font-bold tracking-[-0.03em] leading-tight mb-5">
            Do conceito à<br />produção.
          </h2>
          <p className="text-text-secondary text-base leading-relaxed max-w-[560px]">
            Seleção de projetos que mostram minha abordagem: interfaces limpas, código sólido e foco na experiência do usuário.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={0.1 * (i + 1)}>
              <div className="group bg-bg-card border border-border rounded-2xl p-8 transition-all hover:border-border-hover hover:bg-bg-card-hover hover:-translate-y-1 cursor-pointer flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: project.bg }}
                  >
                    {project.icon}
                  </div>
                  <svg
                    className="text-text-muted group-hover:text-text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </div>

                <h3 className="font-display text-xl font-semibold mb-2 tracking-tight">{project.name}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">{project.desc}</p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[11px] text-text-muted px-2.5 py-1 bg-white/[0.03] rounded-md">
                      {tag}
                    </span>
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

import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'

const techTags = ['Next.js 14', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind', 'React Flow']

export function Building() {
  return (
    <section id="building" className="py-[120px] border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <Reveal>
          <SectionLabel>Atualmente construindo</SectionLabel>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-bg-card border border-border rounded-[20px] p-8 md:p-12 relative overflow-hidden hover:border-border-hover transition-colors">
            {/* Gradient top line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-accent-green to-accent-blue" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px] items-center">
              <div>
                <div className="inline-flex items-center gap-1.5 font-mono text-xs text-accent-green px-3 py-1.5 bg-accent-green/[0.08] rounded-md mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-[pulse-dot_1.5s_ease-in-out_infinite]" />
                  Em desenvolvimento ativo
                </div>

                <h3 className="font-display text-[32px] font-bold tracking-[-0.02em] mb-4">
                  Discovery Assessoria
                </h3>

                <p className="text-text-secondary text-[15px] leading-relaxed mb-6">
                  Sistema completo de gestão para processos de cidadania europeia.
                  Kanban de processos, árvores genealógicas interativas, portal do cliente,
                  controle financeiro e tradução juramentada.
                </p>

                <div className="flex flex-wrap gap-2">
                  {techTags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-text-muted px-3 py-1.5 border border-border rounded-lg hover:text-text-secondary hover:border-border-hover transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="bg-[#0d0d0f] border border-border rounded-xl p-6 font-mono text-[13px] leading-[1.8] overflow-hidden">
                  <span className="text-text-muted">{'// arvore-genealogica-view.tsx'}</span><br />
                  <span className="text-purple-400">export function</span>{' '}
                  <span className="text-accent-blue">ArvoreGenealogicaView</span>
                  <span className="text-text-muted">{'({'}</span><br />
                  &nbsp;&nbsp;<span className="text-yellow-400">processoId</span>
                  <span className="text-text-muted">,</span><br />
                  &nbsp;&nbsp;<span className="text-yellow-400">arvoreId</span>
                  <span className="text-text-muted">,</span><br />
                  &nbsp;&nbsp;<span className="text-yellow-400">nomeFamilia</span><br />
                  <span className="text-text-muted">{'}: '}</span>
                  <span className="text-yellow-400">Props</span>
                  <span className="text-text-muted">{')'} {'{'}</span><br />
                  &nbsp;&nbsp;<span className="text-purple-400">const</span> [
                  <span className="text-yellow-400">pessoas</span>] ={' '}
                  <span className="text-accent-blue">useState</span>
                  <span className="text-text-muted">{'<'}</span>
                  <span className="text-yellow-400">PessoaArvore</span>[]
                  <span className="text-text-muted">{'>'}([])</span><br />
                  &nbsp;&nbsp;<span className="text-purple-400">const</span> [
                  <span className="text-yellow-400">viewMode</span>] ={' '}
                  <span className="text-accent-blue">useState</span>
                  <span className="text-text-muted">(</span>
                  <span className="text-accent-green">&apos;paisagem&apos;</span>
                  <span className="text-text-muted">)</span><br /><br />
                  &nbsp;&nbsp;<span className="text-text-muted">{'// 3847 linhas de código'}</span><br />
                  &nbsp;&nbsp;<span className="text-text-muted">{'// e contando... 🚀'}</span><br />
                  <span className="text-text-muted">{'}'}</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

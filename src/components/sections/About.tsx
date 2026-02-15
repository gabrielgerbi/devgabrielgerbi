import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'

const stats = [
  { number: '3+', label: 'Anos de experiência' },
  { number: '10+', label: 'Projetos entregues' },
  { number: '5+', label: 'Clientes atendidos' },
  { number: '∞', label: 'Linhas de código' },
]

export function About() {
  return (
    <section id="about" className="py-[120px] border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
          <Reveal>
            <SectionLabel>Sobre mim</SectionLabel>
            <h2 className="font-display text-[clamp(32px,4vw,48px)] font-bold tracking-[-0.03em] leading-tight mb-5">
              Developer por<br />vocação.
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-5">
              Sou <strong className="text-text-primary font-medium">Gabriel Gerbi</strong>, Full Stack Developer de Campinas, SP.
              Trabalho com o ecossistema React há mais de 3 anos, construindo
              desde landing pages até sistemas de gestão empresarial completos.
            </p>
            <p className="text-text-secondary text-base leading-relaxed mb-5">
              Fundei a <strong className="text-text-primary font-medium">Discovery Assessoria</strong>, onde desenvolvo tecnologia
              para processos de cidadania europeia. Também presto serviços de
              desenvolvimento para clientes que buscam soluções web sob medida.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              Acredito que bom código é aquele que resolve problemas reais
              com elegância — <strong className="text-text-primary font-medium">sem complexidade desnecessária</strong>.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-bg-card border border-border rounded-2xl p-7 transition-all hover:border-border-hover hover:bg-bg-card-hover hover:-translate-y-0.5"
                >
                  <div className="font-display text-[40px] font-extrabold tracking-[-0.03em] leading-none mb-2 gradient-text">
                    {stat.number}
                  </div>
                  <div className="text-sm text-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

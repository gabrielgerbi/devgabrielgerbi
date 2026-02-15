export function Hero() {
  return (
    <section className="min-h-screen flex items-center relative py-[120px_0_80px]">
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 80%)',
        }}
      />

      {/* Glow */}
      <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(74,222,128,0.08) 0%, rgba(96,165,250,0.04) 40%, transparent 70%)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10 text-center flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 font-mono text-[13px] text-accent-green border border-accent-green/20 bg-accent-green/5 px-4 py-2 rounded-full mb-8 animate-fade-in-up">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-[pulse-dot_2s_ease-in-out_infinite]" />
          Disponível para projetos
        </div>

        {/* Title */}
        <h1 className="font-display text-[clamp(44px,5.5vw,76px)] font-extrabold tracking-[-0.04em] leading-[1.05] mb-7 animate-fade-in-up-1">
          Vamos construir<br />
          <span className="gradient-text">algo incrível juntos.</span>
        </h1>

        {/* Description */}
        <p className="text-[17px] leading-relaxed text-text-secondary max-w-[600px] mb-10 animate-fade-in-up-2 text-center">
          Full Stack Developer especializado em React, Next.js e TypeScript.<br />
          Transformo ideias complexas em interfaces elegantes e sistemas robustos.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 animate-fade-in-up-3 flex-col sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-text-primary text-bg-primary font-semibold text-sm rounded-xl hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)] transition-all no-underline"
          >
            Ver projetos
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-text-secondary font-medium text-sm border border-border rounded-xl hover:text-text-primary hover:border-border-hover hover:bg-bg-card transition-all no-underline"
          >
            Falar comigo
          </a>
        </div>
      </div>

      {/* Mouse scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up-5">
        <div className="w-6 h-[38px] border-2 border-text-muted rounded-xl relative opacity-50">
          <span
            className="absolute left-1/2 -translate-x-1/2 w-[3px] h-2 bg-text-secondary rounded-full"
            style={{ animation: 'mouse-scroll 2s ease-in-out infinite', bottom: '6px' }}
          />
        </div>
      </div>
    </section>
  )
}

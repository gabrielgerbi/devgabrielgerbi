export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-xs text-accent-green tracking-[0.15em] uppercase mb-4 flex items-center gap-3">
      <span className="w-6 h-px bg-accent-green" />
      {children}
    </div>
  )
}

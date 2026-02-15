export function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-center">
          <div className="text-[13px] text-text-muted">
            © {new Date().getFullYear()} Gabriel Gerbi. Feito com código e café.
          </div>
          <div className="flex items-center gap-1.5 text-[13px] text-text-muted">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
            Também sou estudante de medicina
          </div>
        </div>
      </div>
    </footer>
  )
}

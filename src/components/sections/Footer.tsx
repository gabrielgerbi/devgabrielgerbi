export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-[#f5f3ee] border-t border-[rgba(245,243,238,0.08)]">
      <div className="mx-auto max-w-[1100px] px-6 md:px-12 py-10 flex justify-between items-center">
        <div className="font-display text-[14px] tracking-tight text-[rgba(245,243,238,0.45)]">
          Gabriel Gerbi
          <span className="mx-2 text-[rgba(245,243,238,0.25)]">·</span>
          <span className="font-light italic">2026</span>
        </div>
        <img
          src="/logo-gg.png"
          alt=""
          width={56}
          height={56}
          className="object-contain"
        />
      </div>
    </footer>
  );
}
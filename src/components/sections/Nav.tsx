import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

export function Nav() {
  const t = useTranslations("Nav");

  return (
    <nav className="border-b border-[rgba(10,10,10,0.06)] sticky top-0 bg-[#f5f3ee]/85 backdrop-blur-[20px] backdrop-saturate-[180%] z-50">
      <div className="mx-auto max-w-[1100px] px-6 md:px-12 py-[18px] flex justify-between items-center gap-4">
        <Link href="/" className="font-display text-[20px] tracking-tight text-[#0a0a0a]">
          Gabriel Gerbi
        </Link>

        <div className="flex items-center gap-6 md:gap-10">
          <div className="font-mono text-[11px] text-[#8a8a85] hidden md:flex gap-[26px] tracking-[0.05em]">
            <Link href="/#sobre" className="hover:text-[#0a0a0a] transition-colors">
              {t("about")}
            </Link>
            <Link href="/#trabalhos" className="hover:text-[#0a0a0a] transition-colors">
              {t("work")}
            </Link>
            <Link href="/#contato" className="hover:text-[#0a0a0a] transition-colors">
              {t("contact")}
            </Link>
          </div>

          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
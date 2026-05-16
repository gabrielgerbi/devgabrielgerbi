import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-[#0a0a0a] text-[#f5f3ee] border-t border-[rgba(245,243,238,0.1)]">
      <div className="mx-auto max-w-[1100px] px-6 md:px-12 py-8 flex flex-wrap justify-between items-center gap-4 font-mono text-[11px] tracking-[0.05em] text-[rgba(245,243,238,0.4)]">
        <div>{t("copyright")}</div>
        <div className="font-display italic font-light text-[15px] text-[rgba(245,243,238,0.55)] tracking-normal">
          {t("tagline")}
        </div>
      </div>
    </footer>
  );
}
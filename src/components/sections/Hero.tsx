import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="mx-auto max-w-[1100px] px-6 md:px-12 pt-24 md:pt-40 pb-24 md:pb-40">
      <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-[#8a8a85] mb-14 animate-reveal reveal-1">
        {t("meta")}
      </div>
      <h1 className="font-display text-[clamp(52px,8vw,104px)] leading-[0.98] tracking-[-0.015em] font-normal mb-12 max-w-[940px] [text-wrap:balance] text-[#0a0a0a] animate-reveal reveal-2">
        {t("titleLine1")}
        <br />
        {t("titleLine2")}
      </h1>
      <p className="text-[17px] leading-[1.7] text-[rgba(10,10,10,0.65)] max-w-[520px] font-light animate-reveal reveal-3">
        {t("description")}
      </p>
    </section>
  );
}
import { useTranslations } from "next-intl";
import { stack } from "@/lib/stack-data";

export function Stack() {
  const t = useTranslations("Stack");

  return (
    <section className="bg-[#0a0a0a] text-[#f5f3ee]">
      <div className="mx-auto max-w-[1100px] px-6 md:px-12 py-24 md:py-32">
        <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-[rgba(245,243,238,0.5)] mb-14">
          ↳ {t("sectionLabel")}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-16">
          <h2 className="font-display text-[clamp(36px,4.5vw,56px)] leading-[1.04] tracking-[-0.01em] font-normal [text-wrap:balance]">
            {t("titleLine1")}
            <br />
            <em className="font-light italic text-[rgba(245,243,238,0.6)]">
              {t("titleLine2")}
            </em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {stack.map((item) => (
              <div
                key={item.name}
                className="group flex items-baseline justify-between py-5 border-b border-[rgba(245,243,238,0.08)] hover:border-[rgba(245,243,238,0.3)] transition-colors"
              >
                <div className="font-display text-[clamp(22px,2.4vw,32px)] font-normal tracking-[-0.005em] group-hover:translate-x-1 transition-transform duration-300">
                  {item.name}
                </div>
                <div className="font-mono text-[10px] tracking-[0.24em] uppercase text-[rgba(245,243,238,0.4)]">
                  {t(`roles.${item.roleKey}`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
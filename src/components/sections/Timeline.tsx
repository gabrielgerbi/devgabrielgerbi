import { useTranslations } from "next-intl";
import { timeline } from "@/lib/timeline-data";

export function Timeline() {
  const t = useTranslations("Timeline");

  return (
    <section className="border-t border-[rgba(10,10,10,0.08)]">
      <div className="mx-auto max-w-[1100px] px-6 md:px-12 py-24 md:py-32">
        <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-[#8a8a85] mb-14">
          ↳ {t("sectionLabel")}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-16">
          <h2 className="font-display text-[clamp(36px,4.5vw,56px)] leading-[1.04] tracking-[-0.01em] font-normal [text-wrap:balance] md:sticky md:top-32 md:self-start">
            {t("titleLine1")}
            <br />
            <em className="font-light italic text-[rgba(10,10,10,0.55)]">
              {t("titleLine2")}
            </em>
          </h2>

          <div className="relative">
            <div className="absolute left-[60px] md:left-[80px] top-2 bottom-2 w-px bg-[rgba(10,10,10,0.1)]" />

            {timeline.map((item, i) => (
              <div
                key={item.year}
                className="relative grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr] gap-6 md:gap-10 pb-12 last:pb-0"
              >
                <div className="font-mono text-[13px] text-[#0a0a0a] tracking-[0.02em] pt-1">
                  {item.year}
                </div>

                <div className="absolute left-[60px] md:left-[80px] top-2 -translate-x-1/2 w-[7px] h-[7px] bg-[#0a0a0a] rounded-full ring-4 ring-[#f5f3ee]" />

                <div className="pl-2">
                  <div className="font-display text-[22px] font-normal tracking-tight mb-2 text-[#0a0a0a]">
                    {t(`items.${item.key}.title`)}
                  </div>
                  <div className="text-[14px] leading-[1.7] text-[rgba(10,10,10,0.6)] font-light max-w-[480px]">
                    {t(`items.${item.key}.description`)}
                  </div>
                  {i === timeline.length - 1 && (
                    <div className="font-mono text-[10px] tracking-[0.24em] uppercase text-[rgba(10,10,10,0.5)] mt-3">
                      ↳ {t("currentlyTag")}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
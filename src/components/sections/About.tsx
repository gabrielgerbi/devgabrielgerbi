import { useTranslations } from "next-intl";
import { Photo } from "@/components/ui/Photo";

export function About() {
  const t = useTranslations("About");
  const photoTag = t("photoTag");

  return (
    <section className="bg-[#0a0a0a] text-[#f5f3ee]" id="sobre">
      <div className="mx-auto max-w-[1100px] px-6 md:px-12 py-24 md:py-32">
        <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-[rgba(245,243,238,0.5)] mb-16">
          ↳ {t("sectionLabel")}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-10 md:gap-16 items-start">
          {/* foto */}
          <div className="relative aspect-[3/4] bg-[#151513] overflow-hidden border border-[rgba(245,243,238,0.06)]">
            <Photo
              src="/foto-gerbi.jpg"
              alt="Gabriel Gerbi"
              className="w-full h-full object-cover grayscale contrast-110"
            />
            {photoTag && (
              <div className="absolute inset-0 flex flex-col justify-end p-6 pointer-events-none">
                <div className="font-mono text-[10px] tracking-[0.24em] text-[rgba(245,243,238,0.4)]">
                  {photoTag}
                </div>
              </div>
            )}
          </div>

          {/* texto */}
          <div>
            <h2 className="font-display text-[clamp(36px,4.5vw,56px)] leading-[1.05] tracking-[-0.01em] font-normal mb-12 [text-wrap:balance]">
              {t("titleLine1")}
              <br />
              <em className="font-light italic text-[rgba(245,243,238,0.7)]">
                {t("titleLine2")}
              </em>
            </h2>

            <div className="space-y-6 text-[15px] leading-[1.8] text-[rgba(245,243,238,0.75)] max-w-[520px] font-light">
              <p>
                {t.rich("p1", {
                  place: (chunks) => (
                    <span className="text-[#f5f3ee] font-normal">{chunks}</span>
                  ),
                })}
              </p>
              <p>{t("p2")}</p>
              <p>{t("p3")}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 mt-16 pt-10 border-t border-[rgba(245,243,238,0.1)]">
              <Stat number="3+" label={t("stats.years")} />
              <Stat number="10+" label={t("stats.projects")} />
              <Stat number="10+" label={t("stats.languages")} />
              <Stat number="2+" label={t("stats.production")} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="font-display text-[clamp(36px,4vw,56px)] font-light leading-none tracking-[-0.01em] mb-3 text-[#f5f3ee]">
        {number}
      </div>
      <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-[rgba(245,243,238,0.45)]">
        {label}
      </div>
    </div>
  );
}
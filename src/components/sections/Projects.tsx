import { useTranslations } from "next-intl";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/sections/ProjectCard";

export function Projects() {
  const t = useTranslations("Projects");

  return (
    <section className="border-t border-[rgba(10,10,10,0.08)]" id="trabalhos">
      <div className="mx-auto max-w-[1100px] px-6 md:px-12 py-24 md:py-32">
        <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-[#8a8a85] mb-14">
          ↳ {t("sectionLabel")}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-16 mb-14">
          <h2 className="font-display text-[clamp(36px,4.5vw,56px)] leading-[1.04] tracking-[-0.01em] font-normal [text-wrap:balance]">
            {t("titleLine1")}
            <br />
            <em className="font-light italic text-[rgba(10,10,10,0.55)]">
              {t("titleLine2")}
            </em>
          </h2>
          <p className="text-[15px] leading-[1.75] text-[rgba(10,10,10,0.6)] max-w-[520px] font-light self-end">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
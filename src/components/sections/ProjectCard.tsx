import { useTranslations } from "next-intl";
import Link from "next/link";
import type { Project } from "@/lib/projects";

const bgMap = {
  dark: "bg-[#0a0a0a] text-[#f5f3ee]",
  darker: "bg-[#151513] text-[#f5f3ee]",
  darkest: "bg-[#1f1f1c] text-[#f5f3ee]",
  light: "bg-[#ebe9e3] text-[#0a0a0a]",
} as const;

export function ProjectCard({ project }: { project: Project }) {
  const t = useTranslations("Projects");
  const category = t(`categories.${project.categoryKey}`);
  const title = t(`items.${project.key}.title`);
  const description = t(`items.${project.key}.description`);
  const wipBadge = t("wipBadge");

  const inner = (
    <>
      {project.wip && (
        <span className="absolute top-3 right-3 z-10 bg-[rgba(245,243,238,0.95)] text-[#0a0a0a] font-mono text-[9px] tracking-[0.24em] px-[10px] py-1 rounded-full border border-[rgba(10,10,10,0.12)]">
          {wipBadge}
        </span>
      )}
      {project.wide ? (
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] min-h-[180px]">
          <div className={`${bgMap[project.bg]} aspect-[16/10] md:aspect-auto flex items-end p-[18px]`}>
            <div className="font-mono text-[10px] tracking-[0.24em] opacity-50">
              {project.number} / {category}
            </div>
          </div>
          <div className="px-[26px] py-7 flex flex-col justify-center">
            <CardMeta title={title} description={description} year={project.year} />
          </div>
        </div>
      ) : (
        <>
          <div className={`${bgMap[project.bg]} aspect-[16/10] flex items-end p-[18px]`}>
            <div className="font-mono text-[10px] tracking-[0.24em] opacity-50">
              {project.number} / {category}
            </div>
          </div>
          <div className="px-[18px] pt-4 pb-[18px]">
            <CardMeta title={title} description={description} year={project.year} />
          </div>
        </>
      )}
    </>
  );

  const className = `group bg-[#f5f3ee] border border-[rgba(10,10,10,0.1)] rounded-[4px] overflow-hidden relative block transition-[border-color,transform] duration-200 hover:border-[#0a0a0a] hover:-translate-y-px ${project.wide ? "md:col-span-2" : ""}`;

  if (project.url) {
    return (
      <Link href={project.url} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </Link>
    );
  }
  return <div className={className}>{inner}</div>;
}

function CardMeta({
  title,
  description,
  year,
}: {
  title: string;
  description: string;
  year: string;
}) {
  return (
    <>
      <div className="flex justify-between items-baseline mb-2">
        <div className="font-display text-[18px] font-normal tracking-tight text-[#0a0a0a]">
          {title}
        </div>
        <div className="font-mono text-[10px] text-[#8a8a85] tracking-[0.05em]">
          {year}
        </div>
      </div>
      <div className="text-[13px] text-[rgba(10,10,10,0.6)] leading-[1.6] font-light">
        {description}
      </div>
    </>
  );
}
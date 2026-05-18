import { Link } from "next-view-transitions";
import { useTranslations, useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import type { Project } from "@/lib/projects";

const bgMap = {
  dark: "bg-[#0a0a0a] text-[#f5f3ee]",
  darker: "bg-[#151513] text-[#f5f3ee]",
  darkest: "bg-[#1f1f1c] text-[#f5f3ee]",
  light: "bg-[#ebe9e3] text-[#0a0a0a]",
} as const;

export function ProjectCard({ project }: { project: Project }) {
  const t = useTranslations("Projects");

  const locale = useLocale();
  const localePrefix = locale === routing.defaultLocale ? "" : `/${locale}`;

  const title = t(`items.${project.id}.title`);
  const description = t(`items.${project.id}.description`);
  const category = t(`categories.${project.category}`);

  const inner = (
    <>
      {project.wip && (
        <span className="absolute top-3 right-3 z-10 bg-[rgba(245,243,238,0.95)] text-[#0a0a0a] font-mono text-[9px] tracking-[0.24em] px-[10px] py-1 rounded-full border border-[rgba(10,10,10,0.12)]">
          {t("wipBadge")}
        </span>
      )}
      {project.wide ? (
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] min-h-[180px]">
          <CoverArea project={project} category={category} wide />
          <div className="px-[26px] py-7 flex flex-col justify-center">
            <CardMeta project={project} title={title} description={description} />
          </div>
        </div>
      ) : (
        <>
          <CoverArea project={project} category={category} />
          <div className="px-[18px] pt-4 pb-[18px]">
            <CardMeta project={project} title={title} description={description} />
          </div>
        </>
      )}
    </>
  );

  const className = `group bg-[#f5f3ee] border border-[rgba(10,10,10,0.1)] rounded-[4px] overflow-hidden relative block transition-[border-color,transform] duration-200 hover:border-[#0a0a0a] hover:-translate-y-px ${
    project.wide ? "md:col-span-2" : ""
  }`;

  // Priority: internal detail page > external URL > no link
  if (project.slug) {
    return (
      <Link href={`${localePrefix}/work/${project.slug}`} className={className}>
        {inner}
      </Link>
    );
  }

  if (project.url) {
    return (
      <a 
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {inner}
      </a>
    );
  }

  return <div className={className}>{inner}</div>;
}

function CoverArea({
  project,
  category,
  wide,
}: {
  project: Project;
  category: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`${bgMap[project.bg]} aspect-[16/10] ${
        wide ? "md:aspect-auto" : ""
      } flex items-end p-[18px] relative overflow-hidden`}
    >
      {project.cover && (
        <>
          <img
            src={project.cover}
            alt=""
            style={{ viewTransitionName: project.viewTransitionName }}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.7)] via-[rgba(10,10,10,0.15)] to-transparent" />
        </>
      )}
      <div
        className={`font-mono text-[10px] tracking-[0.24em] relative z-10 ${
          project.cover ? "text-[#f5f3ee] opacity-80" : "opacity-50"
        }`}
      >
        {project.number} / {category}
      </div>
    </div>
  );
}

function CardMeta({
  project,
  title,
  description,
}: {
  project: Project;
  title: string;
  description: string;
}) {
  return (
    <>
      <div className="flex justify-between items-baseline mb-2">
        <div className="font-display text-[18px] font-normal tracking-tight text-[#0a0a0a]">
          {title}
        </div>
        <div className="font-mono text-[10px] text-[#8a8a85] tracking-[0.05em]">
          {project.year}
        </div>
      </div>
      <div className="text-[13px] text-[rgba(10,10,10,0.6)] leading-[1.6] font-light">
        {description}
      </div>
    </>
  );
}
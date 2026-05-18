import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "next-view-transitions";
import { useLocale } from "next-intl";
import { projects } from "@/lib/projects";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    for (const project of projects) {
      if (project.slug) {
        params.push({ locale, slug: project.slug });
      }
    }
  }
  return params;
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  if (project.id === "sistemaDiscovery") {
    return <SistemaDiscovery />;
  }

  notFound();
}

// ============================================================
// SISTEMA DISCOVERY
// ============================================================

const BASE = "/work/sistema-discovery";

function SistemaDiscovery() {
  const t = useTranslations("ProjectDetail.sistemaDiscovery");
  const tCommon = useTranslations("ProjectDetail.common");
  const locale = useLocale();
  const localePrefix = locale === routing.defaultLocale ? "" : `/${locale}`;

  return (
    <main className="bg-[#f5f3ee] text-[#0a0a0a] min-h-screen">
       {/* Back link */}
        <div className="mx-auto max-w-[1100px] px-6 md:px-12 pt-10">
        <Link
            href={`${localePrefix}/#trabalhos`}
            className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#8a8a85] hover:text-[#0a0a0a] transition-colors inline-flex items-center gap-2"
        >
            ←&nbsp;&nbsp;{tCommon("backToProjects")}
        </Link>
        </div>

        {/* Project label */}
        <div className="mx-auto max-w-[1100px] px-6 md:px-12 pt-16 md:pt-24">
        <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-[#8a8a85]">
            ↳ Sistema Discovery · 01
        </div>
        </div>

        {/* Hero image */}
        <div className="mx-auto max-w-[1100px] px-6 md:px-12 pt-8 md:pt-10">
        <div className="aspect-[21/9] overflow-hidden rounded-[2px] shadow-[0_24px_50px_-20px_rgba(10,10,10,0.18)]">
            <img
            src={`${BASE}/01-login.jpg`}
            alt="Sistema Discovery — porta de entrada"
            style={{ viewTransitionName: "project-sistema-discovery" }}
            className="w-full h-full object-cover"
            />
        </div>
        </div>

        {/* Project header (pitch + metadata, sem label) */}
        <header className="mx-auto max-w-[1100px] px-6 md:px-12 pt-10 md:pt-14 pb-16 md:pb-24">
        <h1 className="font-display text-[clamp(40px,6vw,80px)] leading-[1.02] tracking-[-0.01em] font-normal mb-16 [text-wrap:balance] max-w-[920px]">
            {t("pitch")}
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 pt-10 border-t border-[rgba(10,10,10,0.1)]">
            <Meta label={tCommon("client")} value="Discovery Assessoria D.C.I." />
            <Meta label={tCommon("role")} value={t("role")} />
            <Meta
            label={tCommon("stack")}
            value="Next.js · Prisma · PostgreSQL · Tailwind · TypeScript"
            />
            <Meta label={tCommon("status")} value={t("status")} />
        </div>
        </header>

      {/* Intro — prose */}
      <Chapter>
        <p>{t("intro1")}</p>
        <p>{t("intro2")}</p>
        <p>{t("intro3")}</p>
      </Chapter>

      {/* ===== CHAPTER 1: A porta de entrada ===== */}
      <Chapter label={t("chapter1Label")}>
        <p>{t("chapter1Body1")}</p>
      </Chapter>
      <ImageBlock
        src={`${BASE}/01-login.jpg`}
        alt="Login com paisagem de Cinque Terre"
        caption={t("captionLogin")}
      />

      <Chapter>
        <p>{t("chapter1Body2")}</p>
      </Chapter>
      <ImageBlock
        src={`${BASE}/02-dashboard.jpg`}
        alt="Dashboard inicial do sistema"
      />

      {/* ===== CHAPTER 2: O coração — o processo ===== */}
      <Chapter label={t("chapter2Label")}>
        <p>{t("chapter2Body1")}</p>
      </Chapter>
      <ImageBlock
        src={`${BASE}/03-kanban-view.jpg`}
        alt="Visão geral do kanban com todos os processos"
      />

      <Chapter>
        <p>{t("chapter2Body2")}</p>
      </Chapter>
      <ImageBlock
        src={`${BASE}/04-kanban-process.jpg`}
        alt="Processo individual aberto"
      />
      <ImageGrid
        images={[
          { src: `${BASE}/05-kanban-card.jpg`, alt: "Detalhe de card do processo" },
          { src: `${BASE}/06-kanban-activities.jpg`, alt: "Atividades do processo" },
        ]}
      />
      <ImageBlock
        src={`${BASE}/07-kanban-subactividad.jpg`}
        alt="Sub-atividades dentro de uma atividade"
      />

      <Chapter>
        <p>{t("chapter2Body3")}</p>
      </Chapter>
      <ImageBlock
        src={`${BASE}/08-kanban-family-tree.jpg`}
        alt="Árvore genealógica integrada ao processo"
      />
      <ImageBlock
        src={`${BASE}/09-kanban-sidebar-family-tree.jpg`}
        alt="Árvore em painel lateral durante o trabalho"
      />

      <Chapter>
        <p>{t("chapter2Body4")}</p>
      </Chapter>

      {/* BCB Callout */}
      <div className="mx-auto max-w-[720px] px-6 md:px-12 py-6">
        <div className="pl-6 border-l-2 border-[#0a0a0a]">
          <div className="font-mono text-[10px] tracking-[0.24em] uppercase text-[#8a8a85] mb-3">
            ↳ {t("calloutLabel")}
          </div>
          <p className="font-display italic font-light text-[19px] leading-[1.55] text-[rgba(10,10,10,0.78)]">
            {t("chapter2Callout")}
          </p>
        </div>
      </div>

      <ImageGrid
        images={[
          { src: `${BASE}/10-kanban-general-finance-1.jpg`, alt: "Visão geral financeira do processo · parte 1" },
          { src: `${BASE}/11-kanban-general-finance-2.jpg`, alt: "Visão geral financeira do processo · parte 2" },
        ]}
      />
      <ImageGrid
        images={[
          { src: `${BASE}/12-kanban-revenues.jpg`, alt: "Receitas do processo" },
          { src: `${BASE}/13-kanban-costs-1.jpg`, alt: "Custos do processo · parte 1" },
        ]}
      />
      <ImageBlock
        src={`${BASE}/14-kanban-costs-2.jpg`}
        alt="Custos do processo · detalhamento"
      />
      <ImageBlock
        src={`${BASE}/15-kanban-default.jpg`}
        alt="Retorno à visão padrão do kanban"
      />

      {/* ===== CHAPTER 3: Em volta do processo ===== */}
      <Chapter label={t("chapter3Label")}>
        <p>{t("chapter3Body1")}</p>
      </Chapter>
      <ImageGrid
        images={[
          { src: `${BASE}/16-clients-view.jpg`, alt: "Lista de clientes" },
          { src: `${BASE}/17-client-register.jpg`, alt: "Cadastro de cliente" },
        ]}
      />

      <Chapter>
        <p>{t("chapter3Body2")}</p>
      </Chapter>
      <ImageBlock
        src={`${BASE}/18-activities-list.jpg`}
        alt="Lista geral de atividades da equipe"
      />
      <ImageGrid
        images={[
          { src: `${BASE}/19-activities-calendar.jpg`, alt: "Atividades em visão de calendário" },
          { src: `${BASE}/20-calendar-list.jpg`, alt: "Calendário em visão de lista" },
        ]}
      />

      <Chapter>
        <p>{t("chapter3Body3")}</p>
      </Chapter>
      <ImageBlock
        src={`${BASE}/21-chat-page.jpg`}
        alt="Mensagens internas entre equipe"
      />

      {/* ===== CHAPTER 4: Páginas dedicadas ===== */}
      <Chapter label={t("chapter4Label")}>
        <p>{t("chapter4Body1")}</p>
      </Chapter>
      <ImageBlock
        src={`${BASE}/22-family-tree-page.jpg`}
        alt="Página de pesquisa genealógica global"
      />
      <ImageBlock
        src={`${BASE}/23-finances-page.jpg`}
        alt="Central financeira global · Inadimplência e cotações em tempo real"
      />
      <ImageGrid
        images={[
          { src: `${BASE}/24-settings-page.jpg`, alt: "Configurações do sistema" },
          { src: `${BASE}/25-users-page.jpg`, alt: "Gerenciar usuários do sistema" },
        ]}
      />

      {/* ===== NUMBERS ===== */}
      <section className="bg-[#0a0a0a] text-[#f5f3ee] mt-24">
        <div className="mx-auto max-w-[1100px] px-6 md:px-12 py-24 md:py-32">
          <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-[rgba(245,243,238,0.5)] mb-16">
            ↳ {t("numbersLabel")}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-14">
            <NumberStat value="150+" label={t("numbersFamilies")} />
            <NumberStat value="750+" label={t("numbersClients")} />
            <NumberStat value="1.750+" label={t("numbersPeople")} />
            <NumberStat value="1.700+" label={t("numbersDocs")} />
            <NumberStat value="140+" label={t("numbersTrees")} />
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="mx-auto max-w-[720px] px-6 md:px-12 py-24 md:py-32">
        <p className="font-display text-[clamp(26px,3.8vw,42px)] leading-[1.18] tracking-[-0.005em] font-light italic text-[rgba(10,10,10,0.7)] [text-wrap:balance]">
          {t("closing")}
        </p>
      </section>

      {/* Footer nav */}
      <section className="border-t border-[rgba(10,10,10,0.08)]">
        <div className="mx-auto max-w-[1100px] px-6 md:px-12 py-12 flex justify-between items-center">
          <Link
            href={`${localePrefix}/#trabalhos`}
            className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#8a8a85] hover:text-[#0a0a0a] transition-colors"
          >
            ←&nbsp;&nbsp;{tCommon("backToProjects")}
          </Link>
          <div className="font-mono text-[10px] tracking-[0.24em] uppercase text-[rgba(10,10,10,0.4)]">
            01 / 05
          </div>
        </div>
      </section>
    </main>
  );
}

// ============================================================
// HELPERS
// ============================================================

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-[10px] tracking-[0.24em] uppercase text-[#8a8a85] mb-3">
        {label}
      </div>
      <div className="text-[14px] leading-[1.5] text-[#0a0a0a] font-light">
        {value}
      </div>
    </div>
  );
}

function Chapter({
  label,
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-[720px] px-6 md:px-12 py-12 md:py-20">
      {label && (
        <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-[#8a8a85] mb-10">
          ↳ {label}
        </div>
      )}
      <div className="space-y-7 text-[17px] leading-[1.75] text-[rgba(10,10,10,0.72)] font-light">
        {children}
      </div>
    </section>
  );
}

function ImageBlock({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="mx-auto max-w-[1100px] px-6 md:px-12 py-8 md:py-12">
      <div className="aspect-[16/10] overflow-hidden rounded-[2px] shadow-[0_24px_50px_-20px_rgba(10,10,10,0.18)] bg-[rgba(10,10,10,0.04)]">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      {caption && (
        <figcaption className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#8a8a85] mt-4 text-center">
          ↳ {caption}
        </figcaption>
      )}
    </figure>
  );
}

function ImageGrid({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div className="mx-auto max-w-[1100px] px-6 md:px-12 py-8 md:py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      {images.map((img) => (
        <figure
          key={img.src}
          className="aspect-[16/10] overflow-hidden rounded-[2px] shadow-[0_18px_40px_-20px_rgba(10,10,10,0.15)] bg-[rgba(10,10,10,0.04)]"
        >
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </figure>
      ))}
    </div>
  );
}

function NumberStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-[clamp(36px,4vw,56px)] font-light leading-none tracking-[-0.01em] mb-4 text-[#f5f3ee]">
        {value}
      </div>
      <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-[rgba(245,243,238,0.5)] leading-[1.5]">
        {label}
      </div>
    </div>
  );
}
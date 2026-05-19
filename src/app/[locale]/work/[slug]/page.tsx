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

  if (project.id === "discoverySite") {
    return <DiscoveryAssessoria />;
  }

  if (project.id === "paixaoCristo") {
    return <PaixaoCristo />;
  }

  if (project.id === "delegaUmax") {
    return <DelegaUmax />;
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
// DISCOVERY ASSESSORIA
// Insira esta função em src/app/[locale]/work/[slug]/page.tsx
// ANTES da seção "// HELPERS" (ou seja, depois do fechamento
// da função SistemaDiscovery e antes de "function Meta(...)")
// ============================================================

function DiscoveryAssessoria() {
  const t = useTranslations("ProjectDetail.discoveryAssessoria");
  const tCommon = useTranslations("ProjectDetail.common");
  const locale = useLocale();
  const localePrefix = locale === routing.defaultLocale ? "" : `/${locale}`;

  const BASE = "/work/discovery-assessoria";

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
          ↳ Discovery Assessoria · 02
        </div>
      </div>

      {/* Hero image */}
      <div className="mx-auto max-w-[1100px] px-6 md:px-12 pt-8 md:pt-10">
        <div className="aspect-[21/9] overflow-hidden rounded-[2px] shadow-[0_24px_50px_-20px_rgba(10,10,10,0.18)]">
          <img
            src={`${BASE}/02-hero.jpg`}
            alt="Discovery Assessoria — hero com vídeo aéreo de Lisboa"
            style={{ viewTransitionName: "project-discovery-assessoria" }}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Project header */}
      <header className="mx-auto max-w-[1100px] px-6 md:px-12 pt-10 md:pt-14 pb-16 md:pb-24">
        <h1 className="font-display text-[clamp(40px,6vw,80px)] leading-[1.02] tracking-[-0.01em] font-normal mb-16 [text-wrap:balance] max-w-[920px]">
          {t("pitch")}
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 pt-10 border-t border-[rgba(10,10,10,0.1)]">
          <Meta label={tCommon("client")} value="Discovery Assessoria D.C.I." />
          <Meta label={tCommon("role")} value={t("role")} />
          <Meta
            label={tCommon("stack")}
            value="Next.js · Tailwind · TypeScript · Vídeo HTML5"
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

      {/* ===== CHAPTER 1: A entrada ===== */}
      <Chapter label={t("chapter1Label")}>
        <p>{t("chapter1Body1")}</p>
      </Chapter>
      <ImageBlock
        src={`${BASE}/01-splash-screen.jpg`}
        alt="Splash screen com a marca Grupo Discovery centralizada"
        caption={t("captionSplash")}
      />

      <Chapter>
        <p>{t("chapter1Body2")}</p>
      </Chapter>
      <ImageBlock
        src={`${BASE}/02-hero.jpg`}
        alt="Hero com vídeo aéreo, título principal, stats e CTA duplo"
      />

      {/* ===== CHAPTER 2: O escopo ===== */}
      <Chapter label={t("chapter2Label")}>
        <p>{t("chapter2Body1")}</p>
      </Chapter>
      <ImageBlock
        src={`${BASE}/03-services.jpg`}
        alt="Grid de seis serviços oferecidos pela Discovery"
      />

      <Chapter>
        <p>{t("chapter2Body2")}</p>
      </Chapter>
      <ImageBlock
        src={`${BASE}/04-citizenships.jpg`}
        alt="Bloco de cidadanias europeias com Itália, Portugal, Espanha e Alemanha"
      />

      {/* ===== CHAPTER 3: Por que confiar ===== */}
      <Chapter label={t("chapter3Label")}>
        <p>{t("chapter3Body1")}</p>
      </Chapter>
      <ImageBlock
        src={`${BASE}/05-why-us.jpg`}
        alt="Seis diferenciais da Discovery"
      />

      <Chapter>
        <p>{t("chapter3Body2")}</p>
      </Chapter>
      <ImageBlock
        src={`${BASE}/06-process.jpg`}
        alt="Timeline horizontal de cinco etapas do processo"
      />

      <Chapter>
        <p>{t("chapter3Body3")}</p>
      </Chapter>
      <ImageBlock
        src={`${BASE}/07-team.jpg`}
        alt="Banner de consulados parceiros e equipe da Discovery"
      />

      {/* ===== CHAPTER 4: Da curiosidade ao contato ===== */}
      <Chapter label={t("chapter4Label")}>
        <p>{t("chapter4Body1")}</p>
      </Chapter>
      <ImageBlock
        src={`${BASE}/08-blog.jpg`}
        alt="Blog editorial em bloco escuro com três posts"
      />

      <Chapter>
        <p>{t("chapter4Body2")}</p>
      </Chapter>
      <ImageGrid
        images={[
          { src: `${BASE}/09-testimonials.jpg`, alt: "Depoimentos com cinco estrelas e fotos dos clientes" },
          { src: `${BASE}/10-faq.jpg`, alt: "FAQ accordion com perguntas mais frequentes" },
        ]}
      />

      <Chapter>
        <p>{t("chapter4Body3")}</p>
      </Chapter>
      <ImageBlock
        src={`${BASE}/11-contact.jpg`}
        alt="Formulário de contato, mapa e cards de contato"
      />
      <ImageGrid
        images={[
          { src: `${BASE}/12-cta.jpg`, alt: "CTA final em bloco azul-marinho com horário de atendimento" },
          { src: `${BASE}/13-footer.jpg`, alt: "Footer institucional com colunas e newsletter" },
        ]}
      />

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
            02 / 05
          </div>
        </div>
      </section>
    </main>
  );
}

// ============================================================
// PAIXÃO DE CRISTO
// Insira esta função em src/app/[locale]/work/[slug]/page.tsx
// ANTES da seção "// HELPERS" (depois de DiscoveryAssessoria,
// antes de "function Meta(...)")
//
// E adicione no switch principal (junto com os outros if):
//
//   if (project.id === "paixaoCristo") {
//     return <PaixaoCristo />;
//   }
// ============================================================

function PaixaoCristo() {
  const t = useTranslations("ProjectDetail.paixaoCristo");
  const tCommon = useTranslations("ProjectDetail.common");
  const locale = useLocale();
  const localePrefix = locale === routing.defaultLocale ? "" : `/${locale}`;

  const BASE = "/work/paixao-de-cristo";

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
          ↳ Paixão de Cristo · 03
        </div>
      </div>

      {/* Hero image */}
      <div className="mx-auto max-w-[1100px] px-6 md:px-12 pt-8 md:pt-10">
        <div className="aspect-[21/9] overflow-hidden rounded-[2px] shadow-[0_24px_50px_-20px_rgba(10,10,10,0.18)]">
          <img
            src={`${BASE}/01-choice-page.png`}
            alt="A Paixão de Cristo — ChoicePage com quatro rotas sobre fundo preto"
            style={{ viewTransitionName: "project-paixao-cristo" }}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Project header */}
      <header className="mx-auto max-w-[1100px] px-6 md:px-12 pt-10 md:pt-14 pb-16 md:pb-24">
        <h1 className="font-display text-[clamp(40px,6vw,80px)] leading-[1.02] tracking-[-0.01em] font-normal mb-16 [text-wrap:balance] max-w-[920px]">
          {t("pitch")}
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 pt-10 border-t border-[rgba(10,10,10,0.1)]">
          <Meta label={tCommon("client")} value="A Paixão de Cristo · Circuito das Águas" />
          <Meta label={tCommon("role")} value={t("role")} />
          <Meta
            label={tCommon("stack")}
            value="Vite · React · React Router"
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

      {/* ===== CHAPTER 1: O telefonema ===== */}
      <Chapter label={t("chapter1Label")}>
        <p>{t("chapter1Body1")}</p>
      </Chapter>
      <ImageBlock
        src={`${BASE}/06-protagonist.png`}
        alt="Henri Castelli, protagonista do espetáculo"
        caption={t("captionProtagonista")}
      />

      <Chapter>
        <p>{t("chapter1Body2")}</p>
      </Chapter>
      <ImageBlock
        src={`${BASE}/07-trajectory.png`}
        alt="Trajetória de Henri Castelli em Paixões anteriores — Cuiabá, Mucajaí, João Pessoa, Pacatuba"
      />

      {/* ===== CHAPTER 2: O documento ===== */}
      <Chapter label={t("chapter2Label")}>
        <p>{t("chapter2Body1")}</p>
      </Chapter>
      <ImageGrid
        images={[
          { src: `${BASE}/05-mission.png`, alt: "Seção de missão e sinopse do espetáculo" },
          { src: `${BASE}/12-justification.png`, alt: "Justificativa cultural com perfil da região" },
        ]}
      />

      <Chapter>
        <p>{t("chapter2Body2")}</p>
      </Chapter>
      <ImageGrid
        images={[
          { src: `${BASE}/13-public.png`, alt: "Projeção de público presencial e alcance em mídia" },
          { src: `${BASE}/15-quotas.png`, alt: "Cotas de patrocínio em três tiers" },
        ]}
      />

      {/* ===== CHAPTER 3: A atmosfera ===== */}
      <Chapter label={t("chapter3Label")}>
        <p>{t("chapter3Body1")}</p>
      </Chapter>
      <ImageGrid
        images={[
          { src: `${BASE}/02-transition-page.png`, alt: "Intro com cruz e brasão da prefeitura de Lindóia" },
          { src: `${BASE}/04-hero.png`, alt: "Hero principal com vídeo de fundo e duas cidades" },
        ]}
      />

      <Chapter>
        <p>{t("chapter3Body2")}</p>
      </Chapter>
      <ImageBlock
        src={`${BASE}/10-image-gallery.png`}
        alt="Galeria de fotos em modo lightbox com legenda dourada"
      />

      {/* ===== CHAPTER 4: As entradas ===== */}
      <Chapter label={t("chapter4Label")}>
        <p>{t("chapter4Body1")}</p>
      </Chapter>
      <ImageBlock
        src={`${BASE}/03-socorro-hero.png`}
        alt="Hero da página de Socorro com brasão da prefeitura"
        caption={t("captionSocorro")}
      />

      <Chapter>
        <p>{t("chapter4Body2")}</p>
      </Chapter>
      <ImageBlock
        src={`${BASE}/16-locals.png`}
        alt="Cartões de datas e locais — Lindóia e Socorro"
      />

      {/* ===== NUMBERS ===== */}
      <section className="bg-[#0a0a0a] text-[#f5f3ee] mt-24">
        <div className="mx-auto max-w-[1100px] px-6 md:px-12 py-24 md:py-32">
          <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-[rgba(245,243,238,0.5)] mb-16">
            ↳ {t("numbersLabel")}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-14">
            <NumberStat value="100k" label={t("numbersAudience")} />
            <NumberStat value="5M" label={t("numbersReach")} />
            <NumberStat value="24" label={t("numbersPhotos")} />
            <NumberStat value="4" label={t("numbersRoutes")} />
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
            03 / 05
          </div>
        </div>
      </section>
    </main>
  );
}

// ============================================================
// DELEGAUMAX
// Insira esta função em src/app/[locale]/work/[slug]/page.tsx
// ANTES da seção "// HELPERS" (depois de PaixaoCristo,
// antes de "function Meta(...)")
//
// E adicione no switch principal:
//
//   if (project.id === "delegaUmax") {
//     return <DelegaUmax />;
//   }
// ============================================================

function DelegaUmax() {
  const t = useTranslations("ProjectDetail.delegaUmax");
  const tCommon = useTranslations("ProjectDetail.common");
  const locale = useLocale();
  const localePrefix = locale === routing.defaultLocale ? "" : `/${locale}`;

  const BASE = "/work/delegaumax";

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
          ↳ DelegaUMAX · 05
        </div>
      </div>

      {/* Hero image */}
      <div className="mx-auto max-w-[1100px] px-6 md:px-12 pt-8 md:pt-10">
        <div className="aspect-[21/9] overflow-hidden rounded-[2px] shadow-[0_24px_50px_-20px_rgba(10,10,10,0.18)]">
          <img
            src={`${BASE}/01-login.png`}
            alt="Tela de login do DelegaUMAX — logo branco sobre fundo vermelho carmesim"
            style={{ viewTransitionName: "project-delegaumax" }}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Project header */}
      <header className="mx-auto max-w-[1100px] px-6 md:px-12 pt-10 md:pt-14 pb-16 md:pb-24">
        <h1 className="font-display text-[clamp(40px,6vw,80px)] leading-[1.02] tracking-[-0.01em] font-normal mb-16 [text-wrap:balance] max-w-[920px]">
          {t("pitch")}
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 pt-10 border-t border-[rgba(10,10,10,0.1)]">
          <Meta label={tCommon("client")} value="Projeto pessoal · UMAX" />
          <Meta label={tCommon("role")} value={t("role")} />
          <Meta
            label={tCommon("stack")}
            value="Next.js · Prisma · PostgreSQL · next-intl"
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

      {/* ===== CHAPTER 1: A observação ===== */}
      <Chapter label={t("chapter1Label")}>
        <p>{t("chapter1Body1")}</p>
      </Chapter>
      <ImageBlock
        src={`${BASE}/02-tela-principal.png`}
        alt="Calendário do mês com eventos categorizados por cor"
        caption={t("captionCalendario")}
      />

      <Chapter>
        <p>{t("chapter1Body2")}</p>
      </Chapter>

      {/* ===== CHAPTER 2: O delegado ===== */}
      <Chapter label={t("chapter2Label")}>
        <p>{t("chapter2Body1")}</p>
      </Chapter>
      <ImageBlock
        src={`${BASE}/04-sidebar-sistema.png`}
        alt="Sidebar do sistema expandida mostrando Calendário, Minhas Turmas, Pendentes, Configurações e Administração"
      />

      <Chapter>
        <p>{t("chapter2Body2")}</p>
      </Chapter>

      {/* ===== CHAPTER 3: O evento ===== */}
      <Chapter label={t("chapter3Label")}>
        <p>{t("chapter3Body1")}</p>
      </Chapter>
      <ImageBlock
        src={`${BASE}/03-sidebar-data.png`}
        alt="Painel lateral com detalhes do evento — início, fim, turma, criador e descrição"
        caption={t("captionEvento")}
      />

      <Chapter>
        <p>{t("chapter3Body2")}</p>
      </Chapter>

      {/* ===== CHAPTER 4: O próximo passo ===== */}
      <Chapter label={t("chapter4Label")}>
        <p>{t("chapter4Body1")}</p>
        <p>{t("chapter4Body2")}</p>
      </Chapter>

      {/* ===== NUMBERS ===== */}
      <section className="bg-[#0a0a0a] text-[#f5f3ee] mt-24">
        <div className="mx-auto max-w-[1100px] px-6 md:px-12 py-24 md:py-32">
          <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-[rgba(245,243,238,0.5)] mb-16">
            ↳ {t("numbersLabel")}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-14">
            <NumberStat value="1°" label={t("numbersSemester")} />
            <NumberStat value="5" label={t("numbersAreas")} />
            <NumberStat value="3" label={t("numbersViews")} />
            <NumberStat value="2" label={t("numbersLangs")} />
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
            05 / 05
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
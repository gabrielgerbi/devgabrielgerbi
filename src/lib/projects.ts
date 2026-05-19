export type ProjectBg = "dark" | "darker" | "darkest" | "light";

export type Project = {
  /** chave usada em messages.json sob Projects.items.<id> */
  id: string;
  /** slug pra URL da detail page. Se ausente, projeto não tem detail page. */
  slug?: string;
  /** número do card (01, 02, ...) */
  number: string;
  /** ano ou intervalo (string literal, não traduzido) */
  year: string;
  /** chave em Projects.categories.<category> */
  category: string;
  /** tom de fundo do bloco visual do card */
  bg: ProjectBg;
  /** se ocupa as duas colunas no grid */
  wide?: boolean;
  /** marca como "Em andamento" */
  wip?: boolean;
  /** URL externa (site live). Usada quando NÃO há detail page */
  url?: string;
  cover?: string;
  viewTransitionName?: string;
};

export const projects: Project[] = [
  {
    id: "sistemaDiscovery",
    slug: "sistema-discovery",
    number: "01",
    year: "2024 — 2026",
    category: "kanban",
    bg: "darkest",
    wide: true,
    cover: "/work/sistema-discovery/01-login.jpg",
    viewTransitionName: "project-sistema-discovery",
  },
  {
    id: "discoverySite",
    slug: "discovery-assessoria",
    number: "02",
    year: "2026",
    category: "web",
    bg: "darker",
    url: "https://discoveryassessoria.com.br",
    cover: "/work/discovery-assessoria/02-hero.jpg",
    viewTransitionName: "project-discovery-assessoria",
  },
  {
    id: "paixaoCristo",
    slug: "paixao-de-cristo",
    number: "03",
    year: "2026",
    category: "event",
    bg: "dark",
    cover: "/work/paixao-de-cristo/01-choice-page.png",
    viewTransitionName: "project-paixao-cristo",
  },
  {
    id: "appDiscovery",
    number: "04",
    year: "2026",
    category: "mobile",
    bg: "darkest",
    wip: true,
  },
  {
    id: "delegaUmax",
    slug: "delegaumax",                           // NOVO
    number: "05",
    year: "2026",
    category: "academic",
    bg: "light",
    wip: true,
    cover: "/work/delegaumax/01-login.png",       // NOVO
    viewTransitionName: "project-delegaumax",     // NOVO
  },
];
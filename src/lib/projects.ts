export type ProjectKey =
  | "sistemaDiscovery"
  | "discoverySite"
  | "paixaoCristo"
  | "appDiscovery"
  | "sistemaFaculdade";

export type CategoryKey =
  | "kanban"
  | "web"
  | "event"
  | "mobile"
  | "academic";

export type Project = {
  /** chave usada pra buscar em messages -> Projects.items.{key} */
  key: ProjectKey;
  number: string;
  /** chave usada pra buscar em messages -> Projects.categories.{key} */
  categoryKey: CategoryKey;
  year: string;
  bg: "dark" | "darker" | "darkest" | "light";
  url?: string;
  wip?: boolean;
  wide?: boolean;
};

export const projects: Project[] = [
  {
    key: "sistemaDiscovery",
    number: "01",
    categoryKey: "kanban",
    year: "2025",
    bg: "dark",
    url: "https://app.discovery.com.br",
  },
  {
    key: "discoverySite",
    number: "02",
    categoryKey: "web",
    year: "2025",
    bg: "light",
    url: "https://discovery.com.br",
  },
  {
    key: "paixaoCristo",
    number: "03",
    categoryKey: "event",
    year: "2024",
    bg: "darker",
    url: "https://circuitopaixaodecristo.com.br",
  },
  {
    key: "appDiscovery",
    number: "04",
    categoryKey: "mobile",
    year: "2026",
    bg: "darkest",
    wip: true,
  },
  {
    key: "sistemaFaculdade",
    number: "05",
    categoryKey: "academic",
    year: "2026",
    bg: "light",
    wip: true,
    wide: true,
  },
];
export type TimelineItem = {
  year: string;
  /** chave usada pra buscar em messages -> Timeline.items.{key} */
  key: "etec" | "designDigital" | "firstProjects" | "freelancer" | "production";
};

export const timeline: TimelineItem[] = [
  { year: "2022", key: "etec" },
  { year: "2023", key: "designDigital" },
  { year: "2024", key: "firstProjects" },
  { year: "2025", key: "freelancer" },
  { year: "2026", key: "production" },
];
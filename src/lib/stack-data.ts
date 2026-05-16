export type RoleKey =
  | "frontend"
  | "framework"
  | "language"
  | "styling"
  | "orm"
  | "database"
  | "deploy"
  | "versioning";

export type StackItem = {
  /** nome da tecnologia — não traduz, é nome próprio */
  name: string;
  /** chave usada pra buscar em messages -> Stack.roles.{key} */
  roleKey: RoleKey;
};

export const stack: StackItem[] = [
  { name: "React", roleKey: "frontend" },
  { name: "Next.js", roleKey: "framework" },
  { name: "TypeScript", roleKey: "language" },
  { name: "Tailwind CSS", roleKey: "styling" },
  { name: "Prisma", roleKey: "orm" },
  { name: "PostgreSQL", roleKey: "database" },
  { name: "Vercel", roleKey: "deploy" },
  { name: "Git / GitHub", roleKey: "versioning" },
];
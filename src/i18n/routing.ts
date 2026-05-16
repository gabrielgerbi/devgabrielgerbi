import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // idiomas suportados
  locales: ["en", "pt", "es"],

  // idioma padrão (sem prefixo na URL)
  defaultLocale: "en",

  // 'as-needed' = / vai pro idioma padrão sem prefixo,
  // /pt e /es ganham prefixo. SEO-friendly pro idioma principal.
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
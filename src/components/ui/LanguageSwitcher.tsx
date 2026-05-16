"use client";

import { useLocale } from "next-intl";
import { useTransition } from "react";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

const labels: Record<Locale, string> = {
  en: "en",
  pt: "pt",
  es: "es",
};

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function switchTo(next: Locale) {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <div
      className={`font-mono text-[11px] tracking-[0.12em] flex items-center gap-2 ${isPending ? "opacity-50" : ""}`}
    >
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center gap-2">
          <button
            onClick={() => switchTo(loc)}
            disabled={loc === locale}
            className={`transition-colors ${
              loc === locale
                ? "text-[#0a0a0a]"
                : "text-[#8a8a85] hover:text-[#0a0a0a] cursor-pointer"
            }`}
          >
            {labels[loc]}
          </button>
          {i < routing.locales.length - 1 && (
            <span className="text-[#d4d2cc]">·</span>
          )}
        </span>
      ))}
    </div>
  );
}
import { useTranslations } from "next-intl";

export function Contact() {
  const t = useTranslations("Contact");

  return (
    <section className="bg-[#0a0a0a] text-[#f5f3ee]" id="contato">
      <div className="mx-auto max-w-[1100px] px-6 md:px-12 pt-20 md:pt-28 pb-20 md:pb-24">
        <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-[rgba(245,243,238,0.5)] mb-12">
          ↳ {t("sectionLabel")}
        </div>

        <h2 className="font-display text-[clamp(44px,6vw,80px)] leading-[1.02] tracking-[-0.01em] font-normal mb-16 [text-wrap:balance] max-w-[900px]">
          {t("titleLine1")}
          <br />
          <em className="font-light italic text-[rgba(245,243,238,0.5)]">
            {t("titleLine2")}
          </em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <ContactLink
            label={t("labels.email")}
            value="studio@gabrielgerbi.com.br"
            href="mailto:studio@gabrielgerbi.com.br"
          />
          <ContactLink
            label={t("labels.whatsapp")}
            value="+55 (19) 99469-0076"
            href="https://wa.me/5519994690076"
          />
          <ContactLink
            label={t("labels.instagram")}
            value="@gerbitech"
            href="https://instagram.com/gerbitech"
          />
          <ContactLink
            label={t("labels.linkedin")}
            value="Gabriel Gerbi"
            href="https://www.linkedin.com/in/gabriel-gerbi"
          />
          <ContactLink
            label={t("labels.github")}
            value="gabrielgerbi"
            href="https://github.com/gabrielgerbi"
          />
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group block border-b border-[rgba(245,243,238,0.08)] hover:border-[rgba(245,243,238,0.3)] transition-colors pb-4"
    >
      <div className="font-mono text-[10px] tracking-[0.24em] text-[rgba(245,243,238,0.4)] mb-2">
        {label}
      </div>
      <div className="font-display text-[22px] font-normal tracking-[-0.005em] group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
        {value}
        <span className="text-[rgba(245,243,238,0.4)] text-sm font-mono">↗</span>
      </div>
    </a>
  );
}
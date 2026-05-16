"use client";

import { useState } from "react";

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
};

/**
 * <img> que se auto-esconde se a imagem falhar ao carregar.
 * Client component minúsculo — usado pelo About pra não forçar
 * a section inteira a virar client-side.
 */
export function Photo({ src, alt, className }: PhotoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
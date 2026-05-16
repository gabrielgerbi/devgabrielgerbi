import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/**
 * Substitui o Link e useRouter do next/navigation por versões
 * que entendem locale. Usar esses em vez dos nativos.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
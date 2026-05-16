import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // roda em todas as rotas exceto: api, _next/static, _next/image,
  // favicon, e qualquer coisa com extensão (foto-gerbi.jpg, etc)
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
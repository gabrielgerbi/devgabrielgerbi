// Permite imports de CSS como side-effect (import "./globals.css")
// e CSS Modules tipados (import styles from "./foo.module.css")
declare module "*.css";

declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
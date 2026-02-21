'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

export type Locale = 'pt' | 'en' | 'es'

const translations = {
  pt: {
    // Nav
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.stack': 'Stack',
    'nav.contact': 'Contato',
    'nav.med': 'Med',

    // Hero
    'hero.badge': 'Disponível para projetos',
    'hero.title1': 'Código que resolve',
    'hero.title2': 'problemas reais.',
    'hero.desc': 'Full Stack Developer especializado em React, Next.js e TypeScript.',
    'hero.desc2': 'Do interior de São Paulo para o mundo.',
    'hero.cta1': 'Ver projetos',
    'hero.cta2': 'Falar comigo',

    // About
    'about.label': 'Sobre mim',
    'about.title1': 'Tecnologia com',
    'about.title2': 'propósito.',
    'about.p1': 'Sou <strong>Gabriel Gerbi</strong>, Full Stack Developer de Amparo, uma cidade histórica no interior de São Paulo. Minha jornada na tecnologia começou na <strong>ETEC João Belarmino</strong> (Centro Paula Souza), onde cursei o ensino médio integrado ao técnico em Desenvolvimento de Sistemas.',
    'about.p2': 'No primeiro ano, estudei Design Digital — e foi o que me abriu as portas para trabalhar com tecnologia. Desde então, venho construindo sistemas completos, landing pages e aplicativos para clientes que precisam de soluções web sob medida.',
    'about.p3': 'Além de desenvolvedor, também sou <strong>estudante de medicina</strong> na Universidad María Auxiliadora (UMAX) em Assunção, Paraguai. Acredito que a tecnologia e a medicina juntas podem transformar a vida das pessoas — e é isso que me move.',
    'about.stat1': 'Anos em tecnologia',
    'about.stat2': 'Projetos entregues',
    'about.stat3': 'Áreas de atuação',
    'about.stat4': 'Linhas de código',

    // About Timeline
    'about.tl1.title': 'ETEC João Belarmino',
    'about.tl1.desc': 'Início do ensino médio integrado ao técnico em Desenvolvimento de Sistemas.',
    'about.tl2.title': 'Design Digital',
    'about.tl2.desc': 'Primeiro ano focado em design — a porta de entrada para o mundo da tecnologia.',
    'about.tl3.title': 'Primeiros Projetos',
    'about.tl3.desc': 'Sistemas completos, landing pages e apps para clientes reais. Do conceito ao deploy.',
    'about.tl4.title': 'Freelancer Full Stack',
    'about.tl4.desc': 'Consolidação como desenvolvedor autônomo com projetos de gestão e e-commerce.',
    'about.tl5.title': 'Medicina + Tech',
    'about.tl5.desc': 'Início da faculdade de medicina na UMAX, Paraguai. Unindo tecnologia e saúde.',

    // Building
    'building.label': 'Atualmente construindo',
    'building.badge': 'Em planejamento',
    'building.title': 'Gerbinho Store',
    'building.desc': 'Loja online para a confecção de roupas infantis da minha família. E-commerce completo com catálogo de produtos, carrinho, pagamento online, painel administrativo e experiência de compra inspirada nas grandes marcas.',

    // Projects
    'projects.label': 'Projetos',
    'projects.title1': 'Do conceito à',
    'projects.title2': 'produção.',
    'projects.desc': 'Projetos que mostram minha abordagem: interfaces limpas, código sólido e foco em resolver problemas reais.',
    'projects.gestao.title': 'Sistema de Gestão',
    'projects.gestao.desc': 'Sistema completo para gestão de processos de cidadania europeia. Kanban, árvores genealógicas interativas, portal do cliente, controle financeiro e geração automatizada de traduções juramentadas.',
    'projects.landing.title': 'Landing Page Institucional',
    'projects.landing.desc': 'Landing page com hero em vídeo, animações de entrada, seções interativas, blog integrado e design totalmente responsivo. Foco em conversão e presença digital.',
    'projects.app.title': 'Aplicativo Mobile',
    'projects.app.desc': 'Aplicativo para acompanhamento de processos em tempo real. Notificações, upload de documentos, chat com a equipe e visualização do progresso.',
    'projects.teatro.title': 'Landing Page Teatral',
    'projects.teatro.desc': 'Landing page para espetáculo teatral de grande porte. Galeria interativa com lightbox, planos de patrocínio, seção de elenco e design responsivo.',

    // Stack
    'stack.label': 'Stack',
    'stack.title1': 'Ferramentas do',
    'stack.title2': 'dia a dia.',
    'stack.desc': 'Tecnologias que uso para transformar ideias em produtos funcionais.',
    'stack.frontend': 'Frontend',
    'stack.framework': 'Framework',
    'stack.language': 'Linguagem',
    'stack.styling': 'Estilização',
    'stack.orm': 'ORM',
    'stack.database': 'Banco de Dados',
    'stack.deploy': 'Deploy',
    'stack.versioning': 'Versionamento',

    // Contact
    'contact.label': 'Contato',
    'contact.title1': 'Vamos construir',
    'contact.title2': 'algo juntos?',
    'contact.email': 'Email',
    'contact.phone': 'WhatsApp',
    'contact.cta.title': 'Tem um projeto em mente?',
    'contact.cta.desc': 'Estou disponível para projetos freelance e oportunidades de colaboração. Se você tem uma ideia que precisa ganhar vida no digital, vamos conversar.',
    'contact.cta.btn': 'Enviar mensagem',

    // Footer
    'footer.copy': '© 2026 Gabriel Gerbi. Amparo, SP — Brasil.',
  },
  en: {
    // Nav
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.stack': 'Stack',
    'nav.contact': 'Contact',
    'nav.med': 'Med',

    // Hero
    'hero.badge': 'Available for projects',
    'hero.title1': 'Code that solves',
    'hero.title2': 'real problems.',
    'hero.desc': 'Full Stack Developer specialized in React, Next.js and TypeScript.',
    'hero.desc2': 'From the countryside of São Paulo to the world.',
    'hero.cta1': 'See projects',
    'hero.cta2': 'Get in touch',

    // About
    'about.label': 'About me',
    'about.title1': 'Technology with',
    'about.title2': 'purpose.',
    'about.p1': "I'm <strong>Gabriel Gerbi</strong>, a Full Stack Developer from Amparo, a historic city in the countryside of São Paulo, Brazil. My journey in tech started at <strong>ETEC João Belarmino</strong> (Centro Paula Souza), where I completed high school integrated with a technical degree in Systems Development.",
    'about.p2': "In my first year, I studied Digital Design — and that's what opened the doors for me to work with technology. Since then, I've been building complete systems, landing pages, and apps for clients who need custom web solutions.",
    'about.p3': "Besides being a developer, I'm also a <strong>medical student</strong> at Universidad María Auxiliadora (UMAX) in Asunción, Paraguay. I believe that technology and medicine together can transform people's lives — and that's what drives me.",
    'about.stat1': 'Years in tech',
    'about.stat2': 'Projects delivered',
    'about.stat3': 'Fields of work',
    'about.stat4': 'Lines of code',

    // About Timeline
    'about.tl1.title': 'ETEC João Belarmino',
    'about.tl1.desc': 'Started high school integrated with a technical degree in Systems Development.',
    'about.tl2.title': 'Digital Design',
    'about.tl2.desc': 'First year focused on design — the gateway into the world of technology.',
    'about.tl3.title': 'First Projects',
    'about.tl3.desc': 'Complete systems, landing pages and apps for real clients. From concept to deploy.',
    'about.tl4.title': 'Full Stack Freelancer',
    'about.tl4.desc': 'Consolidation as a freelance developer with management and e-commerce projects.',
    'about.tl5.title': 'Medicine + Tech',
    'about.tl5.desc': 'Started medical school at UMAX, Paraguay. Bridging technology and healthcare.',

    // Building
    'building.label': 'Currently building',
    'building.badge': 'In planning',
    'building.title': 'Gerbinho Store',
    'building.desc': "Online store for my family's baby clothing business. Complete e-commerce with product catalog, cart, online payments, admin panel, and a shopping experience inspired by top brands.",

    // Projects
    'projects.label': 'Projects',
    'projects.title1': 'From concept to',
    'projects.title2': 'production.',
    'projects.desc': 'Projects that showcase my approach: clean interfaces, solid code, and focus on solving real problems.',
    'projects.gestao.title': 'Management System',
    'projects.gestao.desc': 'Complete system for European citizenship process management. Kanban boards, interactive family trees, client portal, financial control, and automated sworn translation generation.',
    'projects.landing.title': 'Institutional Landing Page',
    'projects.landing.desc': 'Landing page with video hero, entrance animations, interactive sections, integrated blog, and fully responsive design. Focused on conversion and digital presence.',
    'projects.app.title': 'Mobile App',
    'projects.app.desc': 'App for real-time process tracking. Notifications, document upload, team chat, and progress visualization.',
    'projects.teatro.title': 'Theater Landing Page',
    'projects.teatro.desc': 'Landing page for a large-scale theater production. Interactive gallery with lightbox, sponsorship plans, cast section, and responsive design.',

    // Stack
    'stack.label': 'Stack',
    'stack.title1': 'Daily',
    'stack.title2': 'tools.',
    'stack.desc': 'Technologies I use to turn ideas into functional products.',
    'stack.frontend': 'Frontend',
    'stack.framework': 'Framework',
    'stack.language': 'Language',
    'stack.styling': 'Styling',
    'stack.orm': 'ORM',
    'stack.database': 'Database',
    'stack.deploy': 'Deploy',
    'stack.versioning': 'Versioning',

    // Contact
    'contact.label': 'Contact',
    'contact.title1': "Let's build",
    'contact.title2': 'something together?',
    'contact.email': 'Email',
    'contact.phone': 'WhatsApp',
    'contact.cta.title': 'Have a project in mind?',
    'contact.cta.desc': "I'm available for freelance projects and collaboration opportunities. If you have an idea that needs to come alive in the digital world, let's talk.",
    'contact.cta.btn': 'Send message',

    // Footer
    'footer.copy': '© 2026 Gabriel Gerbi. Amparo, SP — Brazil.',
  },
  es: {
    // Nav
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.stack': 'Stack',
    'nav.contact': 'Contacto',
    'nav.med': 'Med',

    // Hero
    'hero.badge': 'Disponible para proyectos',
    'hero.title1': 'Código que resuelve',
    'hero.title2': 'problemas reales.',
    'hero.desc': 'Full Stack Developer especializado en React, Next.js y TypeScript.',
    'hero.desc2': 'Del interior de São Paulo para el mundo.',
    'hero.cta1': 'Ver proyectos',
    'hero.cta2': 'Hablemos',

    // About
    'about.label': 'Sobre mí',
    'about.title1': 'Tecnología con',
    'about.title2': 'propósito.',
    'about.p1': 'Soy <strong>Gabriel Gerbi</strong>, Full Stack Developer de Amparo, una ciudad histórica en el interior de São Paulo, Brasil. Mi camino en la tecnología comenzó en la <strong>ETEC João Belarmino</strong> (Centro Paula Souza), donde cursé la secundaria integrada con el técnico en Desarrollo de Sistemas.',
    'about.p2': 'En el primer año, estudié Diseño Digital — y eso fue lo que me abrió las puertas para trabajar con tecnología. Desde entonces, vengo construyendo sistemas completos, landing pages y aplicaciones para clientes que necesitan soluciones web a medida.',
    'about.p3': 'Además de desarrollador, también soy <strong>estudiante de medicina</strong> en la Universidad María Auxiliadora (UMAX) en Asunción, Paraguay. Creo que la tecnología y la medicina juntas pueden transformar la vida de las personas — y eso es lo que me mueve.',
    'about.stat1': 'Años en tecnología',
    'about.stat2': 'Proyectos entregados',
    'about.stat3': 'Áreas de actuación',
    'about.stat4': 'Líneas de código',

    // About Timeline
    'about.tl1.title': 'ETEC João Belarmino',
    'about.tl1.desc': 'Inicio de la secundaria integrada con el técnico en Desarrollo de Sistemas.',
    'about.tl2.title': 'Diseño Digital',
    'about.tl2.desc': 'Primer año enfocado en diseño — la puerta de entrada al mundo de la tecnología.',
    'about.tl3.title': 'Primeros Proyectos',
    'about.tl3.desc': 'Sistemas completos, landing pages y apps para clientes reales. Del concepto al deploy.',
    'about.tl4.title': 'Freelancer Full Stack',
    'about.tl4.desc': 'Consolidación como desarrollador autónomo con proyectos de gestión y e-commerce.',
    'about.tl5.title': 'Medicina + Tech',
    'about.tl5.desc': 'Inicio de la carrera de medicina en UMAX, Paraguay. Uniendo tecnología y salud.',

    // Building
    'building.label': 'Actualmente construyendo',
    'building.badge': 'En planificación',
    'building.title': 'Gerbinho Store',
    'building.desc': 'Tienda online para la confección de ropa infantil de mi familia. E-commerce completo con catálogo de productos, carrito, pago online, panel administrativo y experiencia de compra inspirada en las grandes marcas.',

    // Projects
    'projects.label': 'Proyectos',
    'projects.title1': 'Del concepto a la',
    'projects.title2': 'producción.',
    'projects.desc': 'Proyectos que muestran mi enfoque: interfaces limpias, código sólido y foco en resolver problemas reales.',
    'projects.gestao.title': 'Sistema de Gestión',
    'projects.gestao.desc': 'Sistema completo para gestión de procesos de ciudadanía europea. Kanban, árboles genealógicos interactivos, portal del cliente, control financiero y generación automatizada de traducciones juradas.',
    'projects.landing.title': 'Landing Page Institucional',
    'projects.landing.desc': 'Landing page con hero en video, animaciones de entrada, secciones interactivas, blog integrado y diseño totalmente responsive. Enfoque en conversión y presencia digital.',
    'projects.app.title': 'Aplicación Mobile',
    'projects.app.desc': 'Aplicación para seguimiento de procesos en tiempo real. Notificaciones, carga de documentos, chat con el equipo y visualización del progreso.',
    'projects.teatro.title': 'Landing Page Teatral',
    'projects.teatro.desc': 'Landing page para espectáculo teatral de gran porte. Galería interactiva con lightbox, planes de patrocinio, sección de elenco y diseño responsive.',

    // Stack
    'stack.label': 'Stack',
    'stack.title1': 'Herramientas del',
    'stack.title2': 'día a día.',
    'stack.desc': 'Tecnologías que uso para transformar ideas en productos funcionales.',
    'stack.frontend': 'Frontend',
    'stack.framework': 'Framework',
    'stack.language': 'Lenguaje',
    'stack.styling': 'Estilos',
    'stack.orm': 'ORM',
    'stack.database': 'Base de Datos',
    'stack.deploy': 'Deploy',
    'stack.versioning': 'Versionamiento',

    // Contact
    'contact.label': 'Contacto',
    'contact.title1': '¿Construimos',
    'contact.title2': 'algo juntos?',
    'contact.email': 'Email',
    'contact.phone': 'WhatsApp',
    'contact.cta.title': '¿Tenés un proyecto en mente?',
    'contact.cta.desc': 'Estoy disponible para proyectos freelance y oportunidades de colaboración. Si tenés una idea que necesita cobrar vida en el mundo digital, hablemos.',
    'contact.cta.btn': 'Enviar mensaje',

    // Footer
    'footer.copy': '© 2026 Gabriel Gerbi. Amparo, SP — Brasil.',
  },
} as const

type TranslationKey = keyof typeof translations.pt

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: TranslationKey) => string
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('pt')

  const t = useCallback(
    (key: TranslationKey): string => {
      return translations[locale]?.[key] || translations.pt[key] || key
    },
    [locale]
  )

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}

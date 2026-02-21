'use client'

import { I18nProvider } from '@/lib/i18n'
import { Nav } from '@/components/sections/Nav'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Building } from '@/components/sections/Building'
import { Projects } from '@/components/sections/Projects'
import { Stack } from '@/components/sections/Stack'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'
import { CustomCursor } from '@/components/ui/CustomCursor'

export default function Home() {
  return (
    <I18nProvider>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Building />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </I18nProvider>
  )
}

import { Nav } from '@/components/sections/Nav'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Building } from '@/components/sections/Building'
import { Projects } from '@/components/sections/Projects'
import { Stack } from '@/components/sections/Stack'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Building />
      <Projects />
      <Stack />
      <Contact />
      <Footer />
    </>
  )
}

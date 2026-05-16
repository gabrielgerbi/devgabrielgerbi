import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Timeline } from "@/components/sections/Timeline";
import { Projects } from "@/components/sections/Projects";
import { Stack } from "@/components/sections/Stack";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Stack />
      <Contact />
      <Footer />
    </>
  );
}
import { Nav } from "@/components/nav";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Research } from "@/components/research";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Recognition } from "@/components/recognition";
import { Speaking } from "@/components/speaking";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Nav />
      <main>
        <Hero />
        <About />
        <Research />
        <Experience />
        <Projects />
        <Recognition />
        <Speaking />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

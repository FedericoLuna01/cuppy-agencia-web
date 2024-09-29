import BackToTop from "@/components/back-to-top";
import Contact from "@/components/sections/contact";
import Cta from "@/components/sections/cta";
import Hero from "@/components/sections/hero";
import Pricing from "@/components/sections/pricing";
import Projects from "@/components/sections/projects";
import Services from "@/components/sections/services";
import Who from "@/components/sections/who";

export default function Home() {
  return (
    <main className="space-y-[20vh]">
      <Hero />
      <Services />
      <Who />
      <Pricing />
      <Cta />
      <Projects />
      <Contact />
      <BackToTop />
    </main>
  );
}

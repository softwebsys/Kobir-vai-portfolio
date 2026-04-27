import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Portfolio } from "@/components/portfolio";
import { Services } from "@/components/services";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">

      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

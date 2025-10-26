import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Leadership from "@/components/Leadership";
import Projects from "@/components/Projects";
import TechnicalFoundation from "@/components/TechnicalFoundation";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <TechnicalFoundation />
      <Projects />
      <Leadership />
      <Vision />
      <Contact />
    </div>
  );
}

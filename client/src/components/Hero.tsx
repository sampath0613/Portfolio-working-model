import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@assets/generated_images/AI_ML_tech_hero_background_b2c4a2c4.png";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight" data-testid="text-hero-name">
          Your Name Here
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed font-body" data-testid="text-hero-value-prop">
          Exploring transformer architectures and quantum machine learning to make AI more reliable and impactful
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
            data-testid="button-view-projects"
          >
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open("#", "_blank")}
            className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
            data-testid="button-download-resume"
          >
            Download Resume
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
            data-testid="button-contact"
          >
            Contact
          </Button>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white/90 transition-colors animate-bounce"
        data-testid="button-scroll-indicator"
        aria-label="Scroll to next section"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInHero, setIsInHero] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      
      // Check if we're in the hero section (approximately viewport height)
      const heroHeight = window.innerHeight - 100; // Subtract some pixels to trigger change earlier
      setIsInHero(scrollY < heroHeight);
    };

    handleScroll(); // Call once on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Technical", id: "technical" },
    { label: "Projects", id: "projects" },
    { label: "Leadership", id: "leadership" },
    { label: "Vision", id: "vision" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-b" : "bg-transparent"
      }`}
      data-testid="nav-main"
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`text-lg font-bold transition-colors duration-300 ${
              isScrolled || !isInHero ? "text-foreground" : "text-white"
            }`}
            data-testid="button-nav-logo"
          >
            A Sampath Dev
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                onClick={() => scrollToSection(link.id)}
                className={`transition-colors duration-300 ${
                  isScrolled || !isInHero ? "" : "text-white hover:text-white/90 hover:bg-white/10"
                }`}
                data-testid={`button-nav-${link.id}`}
              >
                {link.label}
              </Button>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-colors duration-300 ${
                isScrolled || !isInHero ? "" : "text-white hover:text-white/90 hover:bg-white/10"
              }`}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2" data-testid="mobile-menu">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                onClick={() => scrollToSection(link.id)}
                className={`w-full justify-start transition-colors duration-300 ${
                  isScrolled || !isInHero ? "" : "text-white hover:text-white/90 hover:bg-white/10"
                }`}
                data-testid={`button-mobile-nav-${link.id}`}
              >
                {link.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

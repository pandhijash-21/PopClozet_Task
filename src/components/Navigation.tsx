import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Benefits", href: "#benefits" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled 
        ? "bg-background/98 backdrop-blur-xl border-b border-border/50 shadow-lg" 
        : "bg-background/95 backdrop-blur-md border-b border-border/30"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className={cn(
            "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground px-6 py-2 md:px-8 md:py-3 rounded-full font-bold text-xl md:text-2xl tracking-tight shadow-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer",
            scrolled && "shadow-xl"
          )}>
            Popclozet
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium min-h-[44px] px-4 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary-hover hover:to-primary-hover text-primary-foreground font-bold shadow-button min-h-[44px] min-w-[44px] transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => scrollToSection("#cta")}
            >
              Unlock my closet
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-3 text-foreground hover:bg-accent hover:text-primary transition-colors font-medium rounded-lg min-h-[44px]"
              >
                {link.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-bold shadow-button min-h-[44px]"
                onClick={() => scrollToSection("#cta")}
              >
                Unlock my closet
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

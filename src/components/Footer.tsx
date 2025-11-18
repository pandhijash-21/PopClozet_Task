import { Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 md:py-12 px-4 bg-background border-t border-border">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          {/* Left Side - Logo & Copyright */}
          <div className="space-y-3 text-center md:text-left">
            <div className="text-headline font-bold text-2xl tracking-tight">
              Popclozet
            </div>
            <p className="text-sm text-muted-foreground">
              Your endless closet, delivered in 60 minutes.
            </p>
            <p className="text-xs text-muted-foreground">
              © 2025 Popclozet. All rights reserved.
            </p>
          </div>

          {/* Right Side - Social & Legal */}
          <div className="flex flex-col items-center md:items-end gap-4">
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-headline" />
              </a>
              <a
                href="#"
                className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-headline" />
              </a>
              <a
                href="#"
                className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-headline" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-headline transition-colors min-h-[44px] flex items-center px-2">
                Terms of Service
              </a>
              <a href="#" className="hover:text-headline transition-colors min-h-[44px] flex items-center px-2">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

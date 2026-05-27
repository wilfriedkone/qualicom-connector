import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Qualicom", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Réalisations", path: "/projects" },
    { name: "Références", path: "/references" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border/60"
          : "bg-background/40 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo + Monogramme */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/70 text-primary-foreground font-bold text-sm shadow-sm ring-1 ring-primary/20 transition-transform group-hover:scale-105">
              Q
              <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-primary/30 blur-[2px]" />
            </span>
            <span className="text-lg md:text-xl font-bold tracking-tight text-foreground">
              QUALICOM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                    active
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:+22507599960000"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+225 07 59 99 60 00</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Ouvrir le menu"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-accent/60 focus:outline-none focus:ring-2 focus:ring-ring"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-background/90 backdrop-blur-lg border-t border-border/60`}
      >
        <div className="px-3 pt-3 pb-2 space-y-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  active
                    ? "bg-accent text-primary"
                    : "text-foreground hover:bg-accent/60"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="px-3 pb-4 pt-2 border-t border-border/60">
          <a
            href="tel:+22507599960000"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
          >
            <Phone className="h-4 w-4" />
            +225 07 59 99 60 00
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

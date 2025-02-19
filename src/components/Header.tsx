
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-primary-600">QUALICOM</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-600 hover:text-primary-600 transition-colors px-3 py-2 text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="tel:+22507777777"
              className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm">+225 07 77 77 77</span>
            </a>
            <a
              href="mailto:contact@qualicom.ci"
              className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
            >
              <Mail className="h-4 w-4 mr-2" />
              <span className="text-sm">contact@qualicom.ci</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <X className="block h-6 w-6" />
            ) : (
              <Menu className="block h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-white`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex flex-col space-y-4 px-4">
            <a
              href="tel:+22507777777"
              className="flex items-center text-gray-600 hover:text-primary-600"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm">+225 07 77 77 77</span>
            </a>
            <a
              href="mailto:contact@qualicom.ci"
              className="flex items-center text-gray-600 hover:text-primary-600"
            >
              <Mail className="h-4 w-4 mr-2" />
              <span className="text-sm">contact@qualicom.ci</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

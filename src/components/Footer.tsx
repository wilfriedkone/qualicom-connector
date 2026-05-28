import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">QUALICOM-CI</h3>
            <p className="text-sm leading-relaxed">Intégrateur de solutions informatiques, télécoms et second œuvre</p>
            <div className="space-y-2">
              <a href="tel:+22507777777" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">+225 07 59 99 60 00</span>
              </a>
              <a
                href="mailto:contact@qualicom.ci"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">contact@qualicom.ci</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-white font-semibold mb-4">Nos bureaux</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-white mb-2">Côte d'Ivoire</h5>
                <p className="flex items-start text-gray-400 text-sm">
                  <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                  <span>Abidjan, Côte d'Ivoire</span>
                </p>
              </div>
              <div>
                <h5 className="text-white mb-2">Mali</h5>
                <p className="flex items-start text-gray-400 text-sm">
                  <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                  <span>Bamako, Mali</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="text-white font-semibold mb-4">Besoin d'informations ?</h4>
            <Link
              to="/contact"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Contactez-nous
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© 2024 QUALICOM-CI. Tous droits réservés.</p>
          <p className="mt-2">
            Développé par{" "}
            <a href="#" className="text-primary-400 hover:text-primary-300 transition-colors">
              Wilfried KONE
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { ArrowRight, Check, ChevronDown, ShieldCheck, MapPin, Award } from "lucide-react";
import { Link } from "react-router-dom";


const Index = () => {
  const services = [
    {
      title: "Réseaux & Télécoms",
      description:
        "Solutions de connectivité avancées et infrastructures réseau performantes.",
    },
    {
      title: "Informatique",
      description:
        "Services informatiques complets pour entreprises et professionnels.",
    },
    {
      title: "Bâtiment & TP",
      description: "Expertise en construction et travaux publics.",
    },
    {
      title: "Second œuvre",
      description:
        "Finitions et aménagements intérieurs de haute qualité.",
    },
  ];

  const features = [
    "Solutions sur mesure",
    "Expertise technique",
    "Support réactif",
    "Qualité garantie",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
            alt="QUALICOM Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Intégrateur de solutions
              <br />
              informatiques, télécoms et second œuvre
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in">
              Des solutions innovantes et sur mesure pour votre entreprise
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary-700 transition-colors animate-fade-in"
            >
              Nous contacter
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez notre gamme complète de services professionnels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Pourquoi choisir QUALICOM ?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Nous nous engageons à fournir des solutions de qualité supérieure,
                adaptées aux besoins spécifiques de chaque client.
              </p>
              <ul className="space-y-4">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-gray-700"
                  >
                    <span className="flex-shrink-0 p-1 bg-primary-100 rounded-full mr-3">
                      <Check className="h-5 w-5 text-primary-600" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                alt="QUALICOM Features"
                className="rounded-xl shadow-xl"
              />
              <div className="absolute inset-0 border-2 border-primary-600 rounded-xl transform translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et
            obtenir un devis personnalisé.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary-50 transition-colors"
          >
            Demander un devis
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;

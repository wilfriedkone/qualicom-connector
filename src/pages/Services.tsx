
import { ArrowRight, WifiIcon, MonitorIcon, Building2Icon, WrenchIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: "reseaux",
      title: "Réseaux & Télécoms",
      icon: <WifiIcon className="h-8 w-8 text-primary-600" />,
      description: "Solutions complètes pour la mise en place et l'optimisation des infrastructures télécoms et réseaux.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      features: [
        "Installation et maintenance de réseaux câblés et sans fil",
        "Ingénierie et intégration de solutions télécoms",
        "Mise en place de solutions VoIP et téléphonie IP",
        "Sécurisation des infrastructures réseau",
        "Maintenance préventive et curative"
      ]
    },
    {
      id: "informatique",
      title: "Informatique",
      icon: <MonitorIcon className="h-8 w-8 text-primary-600" />,
      description: "Accompagnement des entreprises dans la digitalisation et la sécurisation de leurs infrastructures informatiques.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      features: [
        "Développement et intégration de solutions logicielles sur mesure",
        "Gestion et maintenance des systèmes informatiques",
        "Sécurisation des données et mise en conformité",
        "Virtualisation et migration vers le cloud",
        "Fourniture et installation de matériel informatique"
      ]
    },
    {
      id: "btp",
      title: "Bâtiment & Travaux Publics",
      icon: <Building2Icon className="h-8 w-8 text-primary-600" />,
      description: "Solutions innovantes et fiables pour les projets de construction et d'aménagement.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      features: [
        "Études et conception de bâtiments",
        "Travaux d'électricité et climatisation",
        "Installation de systèmes de sécurité",
        "Gestion de l'éclairage public et industriel",
        "Rénovation et maintenance des infrastructures"
      ]
    },
    {
      id: "second-oeuvre",
      title: "Second Œuvre",
      icon: <WrenchIcon className="h-8 w-8 text-primary-600" />,
      description: "Prestations essentielles pour l'aménagement et l'optimisation des espaces professionnels et résidentiels.",
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
      features: [
        "Faux plafonds et cloisons amovibles",
        "Revêtements de sols et murs",
        "Travaux de plomberie et installations sanitaires",
        "Installation et maintenance des équipements électriques et climatiques"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Nos Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous accompagnons nos clients avec des solutions adaptées à leurs besoins en réseaux & télécoms, informatique, bâtiment & travaux publics, et second œuvre.
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      {services.map((service, index) => (
        <section
          key={service.id}
          className={`py-24 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
          id={service.id}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="flex items-center mb-6">
                  {service.icon}
                  <h2 className="text-3xl font-bold text-gray-900 ml-4">
                    {service.title}
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-8">
                  {service.description}
                </p>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary-600 mt-1 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg mt-8 hover:bg-primary-700 transition-colors"
                >
                  Demander un devis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-xl shadow-xl w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 border-2 border-primary-600 rounded-xl transform translate-x-4 translate-y-4 -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="bg-primary-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Un projet sur mesure ?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Nos experts sont à votre disposition pour étudier vos besoins et vous proposer les meilleures solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary-50 transition-colors"
          >
            Contactez-nous
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;

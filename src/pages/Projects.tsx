
import { useState } from "react";
import { Building2, Network, Monitor, Wrench, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Map from "../components/Map";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    {
      id: "reseaux",
      name: "Réseaux & Télécoms",
      icon: <Network className="h-6 w-6" />,
    },
    {
      id: "informatique",
      name: "Informatique",
      icon: <Monitor className="h-6 w-6" />,
    },
    {
      id: "btp",
      name: "Bâtiment & TP",
      icon: <Building2 className="h-6 w-6" />,
    },
    {
      id: "second-oeuvre",
      name: "Second Œuvre",
      icon: <Wrench className="h-6 w-6" />,
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Déploiement Réseau Fibre Optique",
      category: "reseaux",
      location: "Abidjan, Côte d'Ivoire",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      description: "Installation complète d'un réseau fibre optique pour un opérateur majeur."
    },
    {
      id: 2,
      title: "Datacenter Entreprise",
      category: "informatique",
      location: "Bamako, Mali",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      description: "Mise en place d'un datacenter moderne avec systèmes de refroidissement."
    },
    {
      id: 3,
      title: "Construction Centre Commercial",
      category: "btp",
      location: "Yamoussoukro, Côte d'Ivoire",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      description: "Construction et équipement complet d'un centre commercial."
    },
    {
      id: 4,
      title: "Aménagement Bureaux",
      category: "second-oeuvre",
      location: "Abidjan, Côte d'Ivoire",
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
      description: "Rénovation complète d'espaces de bureaux professionnels."
    },
    // ... Ajoutez plus de projets selon vos besoins
  ];

  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.category === selectedCategory)
    : projects;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Nos Réalisations
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos projets réalisés en Côte d'Ivoire, au Mali et au Burkina Faso dans nos différents domaines d'expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                !selectedCategory
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedCategory(null)}
            >
              Tous les projets
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
              >
                <div className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    En savoir plus
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Zones d'Intervention
            </h2>
            <p className="text-lg text-gray-600">
              Découvrez nos projets réalisés dans différentes régions d'Afrique de l'Ouest
            </p>
          </div>
          <div className="h-[600px] rounded-xl overflow-hidden shadow-lg">
            <Map />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

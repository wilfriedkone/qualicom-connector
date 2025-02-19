
import { Building2, Check, ArrowRight, Activity, Users, FileCheck, Target } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const processSteps = [
    {
      id: 1,
      title: "Analyse des besoins",
      description: "Étude approfondie de vos exigences pour proposer des solutions adaptées",
      icon: <Target className="h-8 w-8 text-primary-600" />
    },
    {
      id: 2,
      title: "Conception",
      description: "Élaboration détaillée des solutions techniques et plans d'intervention",
      icon: <FileCheck className="h-8 w-8 text-primary-600" />
    },
    {
      id: 3,
      title: "Réalisation",
      description: "Mise en œuvre des solutions par nos équipes qualifiées",
      icon: <Activity className="h-8 w-8 text-primary-600" />
    },
    {
      id: 4,
      title: "Support",
      description: "Accompagnement continu et maintenance des installations",
      icon: <Users className="h-8 w-8 text-primary-600" />
    }
  ];

  const keyFeatures = [
    "Expertise depuis 2012",
    "Présence en Côte d'Ivoire et au Mali",
    "Personnel hautement qualifié",
    "Solutions sur mesure",
    "Service client premium",
    "Innovation continue"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
            alt="QUALICOM Bureau"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              À propos de QUALICOM
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Votre partenaire en solutions informatiques, télécoms et second œuvre depuis 2012
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Construisons ensemble votre succès
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fondée en 2012, QUALICOM est une entreprise de services spécialisée dans les domaines de l'informatique, des télécommunications et du second œuvre. Nous sommes fiers de mettre notre expertise au service de nos clients en Côte d'Ivoire et au Mali.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Notre équipe est constituée de professionnels expérimentés dans les métiers de l'informatique, de la sécurité électronique, des télécommunications, de l'électricité et de la climatisation.
              </p>
              <ul className="grid grid-cols-2 gap-4">
                {keyFeatures.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-primary-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
                alt="Notre équipe"
                className="rounded-xl shadow-xl"
              />
              <div className="absolute inset-0 border-2 border-primary-600 rounded-xl transform translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Structure */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre Structure
            </h2>
            <p className="text-lg text-gray-600">
              Une présence régionale forte avec deux entités complémentaires
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Building2 className="h-12 w-12 text-primary-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                QUALICOM – Côte d'Ivoire SARL
              </h3>
              <p className="text-gray-600 mb-4">
                Société à Responsabilité Limitée opérant en Côte d'Ivoire avec un capital social de 2.000.000 FCFA.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Building2 className="h-12 w-12 text-primary-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                QUALICOM-ML SARL
              </h3>
              <p className="text-gray-600 mb-4">
                Entité malienne avec un capital social de 1.000.000 FCFA, régie par le droit malien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre Processus
            </h2>
            <p className="text-lg text-gray-600">
              Une approche structurée pour des résultats optimaux
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.id} className="relative">
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-6">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {step.id < processSteps.length && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 h-6 w-6 text-primary-600" />
                )}
              </div>
            ))}
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
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons vous aider.
          </p>
          <div className="space-x-4">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary-50 transition-colors"
            >
              Nous contacter
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/10 transition-colors"
            >
              Nos services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

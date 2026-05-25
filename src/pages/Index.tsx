
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
      <section className="relative min-h-[88vh] md:min-h-[92vh] flex items-center overflow-hidden bg-background">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
            alt="QUALICOM Hero"
            className="w-full h-full object-cover opacity-25"
          />
        </div>

        {/* Premium gradient + glass overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-primary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--primary)/0.18),transparent_55%)]" />

        {/* Abstract decorative shapes */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 w-[26rem] h-[26rem] rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full border border-primary/10" />
        <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] rounded-full border border-primary/10" />

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-primary/20 bg-background/60 backdrop-blur-md shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium tracking-wider uppercase text-foreground/80">
                Intégrateur de solutions depuis 2012
              </span>
            </div>

            {/* Main title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.05]">
              Bâtir l'infrastructure de{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                  votre réussite
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary/60 to-transparent rounded-full" />
              </span>
            </h1>

            {/* Subtitle — benefit-oriented */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Informatique, télécoms et second œuvre — nous concevons et déployons
              des solutions sur mesure pour faire avancer votre entreprise, en toute sérénité.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-10">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg text-base font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:bg-primary/90 transition-all"
              >
                Nous contacter
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-background/60 backdrop-blur-md text-foreground border border-border hover:border-primary/50 hover:bg-background px-7 py-3.5 rounded-lg text-base font-medium transition-all"
              >
                Voir nos services
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Expertise locale</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>Qualité garantie</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                <span>Accompagnement professionnel</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1.5 text-muted-foreground/70">
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
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


import {
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  MapPin,
  Award,
  Users,
  Briefcase,
  Globe2,
  Clock,
  Search,
  FileText,
  Wrench,
  Headphones,
  BadgeCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

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
      description: "Finitions et aménagements intérieurs de haute qualité.",
    },
  ];

  const stats = [
    { icon: Briefcase, value: "150+", label: "Projets accompagnés" },
    { icon: Clock, value: "12+", label: "Années d'expérience" },
    { icon: Users, value: "80+", label: "Clients satisfaits" },
    { icon: Globe2, value: "3", label: "Pays d'intervention" },
  ];

  const process = [
    {
      icon: Search,
      step: "01",
      title: "Analyse du besoin",
      description:
        "Nous écoutons, auditons et cadrons précisément vos enjeux pour proposer la meilleure réponse.",
    },
    {
      icon: FileText,
      step: "02",
      title: "Proposition technique",
      description:
        "Une recommandation claire, chiffrée et adaptée à votre budget, sans jargon inutile.",
    },
    {
      icon: Wrench,
      step: "03",
      title: "Réalisation & suivi",
      description:
        "Mise en œuvre par nos équipes, contrôle qualité et accompagnement dans la durée.",
    },
  ];

  const features = [
    {
      icon: BadgeCheck,
      title: "Expertise multi-métiers",
      description:
        "IT, télécoms et second œuvre réunis sous un seul interlocuteur de confiance.",
    },
    {
      icon: Globe2,
      title: "Présence régionale",
      description:
        "Implantés en Côte d'Ivoire, au Mali et au Burkina Faso pour intervenir au plus près.",
    },
    {
      icon: Headphones,
      title: "Support réactif",
      description:
        "Une équipe disponible et des délais d'intervention courts pour limiter vos imprévus.",
    },
    {
      icon: Sparkles,
      title: "Qualité garantie",
      description:
        "Des standards exigeants, des matériaux fiables et un suivi post-livraison rigoureux.",
    },
  ];

  const clients = [
    "Orange",
    "MTN",
    "Société Générale",
    "Bolloré",
    "PETROCI",
    "Ministère",
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-primary/20 bg-background/60 backdrop-blur-md shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium tracking-wider uppercase text-foreground/80">
                Intégrateur de solutions depuis 2012
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.05]">
              Bâtir l'infrastructure de{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                  votre réussite
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary/60 to-transparent rounded-full" />
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Informatique, télécoms et second œuvre — nous concevons et déployons
              des solutions sur mesure pour faire avancer votre entreprise, en toute sérénité.
            </p>

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

        <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1.5 text-muted-foreground/70">
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </div>
      </section>

      {/* Stats — bandeau premium */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary-foreground)/0.12),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="text-center md:text-left">
                  <Icon className="h-6 w-6 mb-3 mx-auto md:mx-0 opacity-80" />
                  <div className="text-3xl md:text-4xl font-bold tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-sm md:text-base opacity-80 mt-1">
                    {s.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre gamme complète de services professionnels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-accent text-accent-foreground text-xs font-medium uppercase tracking-wider">
              Notre méthode
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Un processus simple et rigoureux
            </h2>
            <p className="text-lg text-muted-foreground">
              De la première discussion à la livraison, nous gardons le cap sur vos objectifs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
            {process.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.step}
                  className="relative bg-card rounded-2xl p-8 border border-border hover:border-primary/40 transition-colors"
                >
                  <div className="absolute -top-3 -left-3 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-md">
                    {p.step}
                  </div>
                  <div className="h-12 w-12 rounded-xl bg-accent text-primary flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section — Pourquoi QUALICOM */}
      <section className="py-24 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-accent text-accent-foreground text-xs font-medium uppercase tracking-wider">
                Pourquoi QUALICOM
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
                Un partenaire fiable pour vos projets stratégiques
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Plus de 12 ans d'expérience au service des entreprises et institutions
                de la sous-région, avec un engagement clair : la qualité et la tenue
                des délais.
              </p>
              <ul className="space-y-5">
                {features.map((f) => {
                  const Icon = f.icon;
                  return (
                    <li key={f.title} className="flex gap-4">
                      <span className="flex-shrink-0 h-10 w-10 rounded-lg bg-accent text-primary flex items-center justify-center">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-semibold text-foreground mb-0.5">
                          {f.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {f.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                alt="QUALICOM Features"
                className="rounded-xl shadow-xl relative z-10"
              />
              <div className="absolute inset-0 border-2 border-primary rounded-xl transform translate-x-4 translate-y-4" />
            </div>
          </div>
        </div>
      </section>

      {/* References / Clients */}
      <section className="py-20 bg-background border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Ils nous font confiance
            </h2>
            <p className="text-muted-foreground">
              Des entreprises et institutions qui s'appuient sur notre expertise.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
            {clients.map((c) => (
              <div
                key={c}
                className="h-20 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground font-semibold tracking-wide hover:border-primary/40 hover:text-foreground transition-colors"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-primary py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary-foreground)/0.12),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-5">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et
            obtenir un devis personnalisé.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-background text-primary px-8 py-4 rounded-lg text-base md:text-lg font-medium hover:bg-background/90 transition-colors shadow-lg"
          >
            Demander un devis
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;

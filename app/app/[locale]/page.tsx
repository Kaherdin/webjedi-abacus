
import Link from "next/link";
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { ArrowDownIcon, CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/project-card";

const getFeaturedProjects = (locale: string) => [
  {
    id: "partager-newsletter-platform",
    title: locale === 'fr' ? "Plateforme Newsletter Partager" : "Partager Newsletter Platform",
    description: locale === 'fr' 
      ? "Plateforme complète de gestion de newsletters avec authentification utilisateur, création de contenu et tableau de bord analytique."
      : "Complete newsletter management platform with user authentication, content creation, and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=400&fit=crop",
    tags: ["Next.js", "Supabase", "Stripe", "TypeScript"],
    year: 2024,
    link: `/${locale}/projects/partager-newsletter-platform`
  },
  {
    id: "climact-eco-website",
    title: locale === 'fr' ? "Site Web Éco-Responsable Climact" : "Climact Eco-Website",
    description: locale === 'fr' 
      ? "Vitrine de développement web durable avec hébergement neutre en carbone et métriques de performance optimisées."
      : "Sustainable web development showcase featuring carbon-neutral hosting and optimized performance metrics.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop", 
    tags: [locale === 'fr' ? "Durabilité" : "Sustainability", "Performance", locale === 'fr' ? "Tech Verte" : "Green Tech"],
    year: 2024,
    link: `/${locale}/projects/climact-eco-website`
  },
  {
    id: "alaya-csr-platform",
    title: locale === 'fr' ? "Plateforme RSE Alaya" : "Alaya CSR Platform",
    description: locale === 'fr' 
      ? "Plateforme de gestion de Responsabilité Sociale d'Entreprise avec suivi d'impact et fonctionnalités de reporting."
      : "Corporate Social Responsibility management platform with impact tracking and reporting features.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop",
    tags: ["React", "Node.js", locale === 'fr' ? "Analytique" : "Analytics", "CSR"],
    year: 2023,
    link: `/${locale}/projects/alaya-csr-platform`
  }
];

const getServices = (locale: string) => [
  {
    title: locale === 'fr' ? "Développement Web & Mobile" : "Web & Mobile Development",
    description: locale === 'fr' 
      ? "Applications full-stack construites avec des technologies modernes comme Next.js, React et Node.js."
      : "Full-stack applications built with modern technologies like Next.js, React, and Node.js.",
    features: locale === 'fr' 
      ? ["Design Responsive", "Optimisation Performance", "Prêt pour SEO", "Mobile-First"]
      : ["Responsive Design", "Performance Optimization", "SEO-Ready", "Mobile-First"],
    icon: "🚀"
  },
  {
    title: locale === 'fr' ? "Sites Web Éco-Responsables" : "Eco-friendly Websites",
    description: locale === 'fr' 
      ? "Solutions web durables qui minimisent l'impact environnemental tout en maximisant les performances."
      : "Sustainable web solutions that minimize environmental impact while maximizing performance.",
    features: locale === 'fr' 
      ? ["Hébergement Neutre Carbone", "Code Optimisé", "Analytics Verts", "Énergie Efficace"]
      : ["Carbon-Neutral Hosting", "Optimized Code", "Green Analytics", "Energy Efficient"],
    icon: "🌱"
  }
];

export default function HomePage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = useTranslations('home');
  
  const featuredProjects = getFeaturedProjects(params.locale);
  const services = getServices(params.locale);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" asChild>
                <Link href={`/${params.locale}/contact`}>
                  {t('hero.cta')}
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={`/${params.locale}/projects`}>
                  {t('hero.scroll')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDownIcon className="h-6 w-6 text-muted-foreground" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {t('services.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href={`/${params.locale}/services`}>
                {params.locale === 'fr' ? 'Voir Tous les Services' : 'View All Services'}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {t('projects.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                title={project.title}
                description={project.description}
                imageUrl={project.image}
                techStack={project.tags}
                year={project.year}
                slug={project.id}
                featured={true}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href={`/${params.locale}/projects`}>
                {params.locale === 'fr' ? 'Voir Tous les Projets' : 'View All Projects'}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('cta.subtitle')}
            </p>
            <Button size="lg" asChild>
              <Link href={`/${params.locale}/contact`}>
                {t('cta.button')}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

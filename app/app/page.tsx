
import { Metadata } from 'next';
import Link from 'next/link';
import { PrismaClient } from '@prisma/client';
import { ArrowRight, Zap, Shield, Leaf } from 'lucide-react';
import HeroSection from '@/components/hero-section';
import ProjectCard from '@/components/project-card';
import ServiceCard from '@/components/service-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const prisma = new PrismaClient();

export const metadata: Metadata = {
  title: 'Web Jedi - Problems Solver & Time Saver',
  description: 'I create fast, modern apps, train your teams on AI, and automate your workflows — so you can focus on what really matters.',
};

async function getFeaturedData() {
  try {
    const [projects, services] = await Promise.all([
      prisma.project.findMany({
        where: { featured: true },
        take: 3,
        orderBy: { year: 'desc' }
      }),
      prisma.service.findMany({
        take: 3,
        orderBy: { createdAt: 'asc' }
      })
    ]);

    return { projects, services };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { projects: [], services: [] };
  } finally {
    await prisma.$disconnect();
  }
}

export default async function HomePage() {
  const { projects, services } = await getFeaturedData();

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <HeroSection
        title="Hi, I'm Aurélien, problems solver and time saver"
        subtitle="Web Jedi & AI Builder"
        description="I create fast, modern apps, train your teams on AI, and automate your workflows — so you can focus on what really matters."
        ctaText="Ready to Transform Your Vision?"
        ctaLink="/contact"
      />

      {/* Featured Services Overview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Digital tools, built to serve</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From MVPs to AI automation, I build custom web & mobile solutions that save you time — not create new headaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">AI Strategy & Automation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Let the bots work for you. Automate boring tasks and have more time for what matters while you stay the boss.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Web & Mobile Development</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Build fast. Ship smart. Stay in control. Modern applications that scale beautifully with your business.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Eco-friendly Websites</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Show yourself online — without killing the planet. Lightning-fast sites with minimal environmental impact.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/services">
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Successful Transformations</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every project is a new quest — from building SaaS platforms and eco-sites to taming AI for local communities.
          </p>
        </div>

        {projects?.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {projects?.map?.((project) => (
              <ProjectCard
                key={project?.id || ''}
                title={project?.title || ''}
                description={project?.description || ''}
                imageUrl={project?.imageUrl || undefined}
                techStack={project?.techStack || []}
                year={project?.year || new Date().getFullYear()}
                slug={project?.slug || ''}
                client={project?.client || undefined}
                featured={project?.featured || false}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Projects are being loaded...</p>
          </div>
        )}

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Vision Into Reality?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you need a custom application, AI training, or process automation, I'm here to help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">
                Learn More About Me
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

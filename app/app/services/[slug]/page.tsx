
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PrismaClient } from '@prisma/client';
import { ArrowLeft, CheckCircle, Code, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const prisma = new PrismaClient();

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  try {
    const services = await prisma.service.findMany({
      select: { slug: true }
    });
    
    return services?.map?.((service) => ({
      slug: service?.slug || ''
    })) || [];
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  } finally {
    await prisma.$disconnect();
  }
}

async function getService(slug: string) {
  try {
    const service = await prisma.service.findUnique({
      where: { slug }
    });
    return service;
  } catch (error) {
    console.error('Error fetching service:', error);
    return null;
  } finally {
    await prisma.$disconnect();
  }
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = await getService(params?.slug || '');
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service?.title || 'Service',
    description: service?.tagline || service?.description?.substring?.(0, 160) || '',
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const service = await getService(params?.slug || '');

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </Button>
        </div>

        {/* Service Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{service?.title || ''}</h1>
          {service?.tagline && (
            <p className="text-xl text-primary font-medium mb-4">{service.tagline}</p>
          )}
        </div>

        {/* Service Details */}
        <div className="space-y-12">
          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                {service?.description?.split?.('\n\n')?.map?.((paragraph, index) => (
                  <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Key Features</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service?.features?.map?.((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tech Stack */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Code className="h-5 w-5 text-primary" />
                <span>Technology Stack</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {service?.techStack?.map?.((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Ideal For */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span>Perfect For</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service?.idealFor?.map?.((client, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-muted-foreground">{client}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="text-center py-8">
              <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss your project and how I can help you achieve your goals with {service?.title?.toLowerCase() || 'this service'}.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">
                  Start Your Project
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

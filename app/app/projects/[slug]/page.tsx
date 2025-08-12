
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { PrismaClient } from '@prisma/client';
import { ArrowLeft, Calendar, User, Code, Target, CheckCircle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const prisma = new PrismaClient();

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  try {
    const projects = await prisma.project.findMany({
      select: { slug: true }
    });
    
    return projects?.map?.((project) => ({
      slug: project?.slug || ''
    })) || [];
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  } finally {
    await prisma.$disconnect();
  }
}

async function getProject(slug: string) {
  try {
    const project = await prisma.project.findUnique({
      where: { slug }
    });
    return project;
  } catch (error) {
    console.error('Error fetching project:', error);
    return null;
  } finally {
    await prisma.$disconnect();
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getProject(params?.slug || '');
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project?.title || ''} - Project Case Study`,
    description: project?.description || '',
    openGraph: {
      images: project?.imageUrl ? [project.imageUrl] : [],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProject(params?.slug || '');

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{project?.year}</span>
            </div>
            {project?.client && (
              <>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{project.client}</span>
                </div>
              </>
            )}
            {project?.featured && (
              <>
                <span>•</span>
                <Badge variant="default">Featured</Badge>
              </>
            )}
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">{project?.title || ''}</h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl">
            {project?.description || ''}
          </p>
        </div>

        {/* Project Image */}
        {project?.imageUrl && (
          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden mb-12">
            <Image
              src={project.imageUrl}
              alt={`${project?.title || ''} project screenshot`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>
        )}

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Challenge */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-primary" />
                  <span>The Challenge</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  {project?.challenge?.split?.('\n\n')?.map?.((paragraph, index) => (
                    <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Solution */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>The Solution</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  {project?.solution?.split?.('\n\n')?.map?.((paragraph, index) => (
                    <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span>The Results</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  {project?.results?.split?.('\n\n')?.map?.((paragraph, index) => (
                    <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
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
                  {project?.techStack?.map?.((tech, index) => (
                    <Badge key={index} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Info */}
            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm mb-1">Year</h4>
                  <p className="text-muted-foreground">{project?.year}</p>
                </div>
                {project?.client && (
                  <div>
                    <h4 className="font-medium text-sm mb-1">Client</h4>
                    <p className="text-muted-foreground">{project.client}</p>
                  </div>
                )}
                <div>
                  <h4 className="font-medium text-sm mb-1">Status</h4>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Completed
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="text-center py-6">
                <h3 className="font-bold mb-3">Like what you see?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Let's discuss your next project
                </p>
                <Button asChild className="w-full">
                  <Link href="/contact">
                    Start Your Project
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

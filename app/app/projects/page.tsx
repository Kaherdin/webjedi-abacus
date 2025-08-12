
import { Metadata } from 'next';
import { PrismaClient } from '@prisma/client';
import HeroSection from '@/components/hero-section';
import ProjectCard from '@/components/project-card';

const prisma = new PrismaClient();

export const metadata: Metadata = {
  title: 'Projects - Case Studies from the Code Trenches',
  description: 'Every project is a new quest — from building SaaS platforms and eco-sites to taming AI for local communities.',
};

async function getProjects() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { year: 'desc' }
    });
    return projects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  } finally {
    await prisma.$disconnect();
  }
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="space-y-16 pb-20">
      <HeroSection
        title="Case studies from the code trenches"
        subtitle="Every project is a new quest — from building SaaS platforms and eco-sites to taming AI for local communities."
        description="Here's what I've shipped (and survived)."
        ctaText="Start Your Project"
        ctaLink="/contact"
        showIcons={false}
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {projects?.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
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
      </section>
    </div>
  );
}

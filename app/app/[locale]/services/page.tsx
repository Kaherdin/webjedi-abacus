
import { Metadata } from 'next';
import { PrismaClient } from '@prisma/client';
import HeroSection from '@/components/hero-section';
import ServiceCard from '@/components/service-card';

const prisma = new PrismaClient();

export const metadata: Metadata = {
  title: 'Services - Digital Tools Built to Serve',
  description: 'From MVPs to AI automation, I build custom web & mobile solutions that save you time — not create new headaches.',
};

async function getServices() {
  try {
    const services = await prisma.service.findMany({
      orderBy: { createdAt: 'asc' }
    });
    return services;
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  } finally {
    await prisma.$disconnect();
  }
}

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="space-y-16 pb-20">
      <HeroSection
        title="Digital tools, built to serve (not stress you out)"
        subtitle="From MVPs to AI automation, I build custom web & mobile solutions that save you time — not create new headaches."
        description="Let's make tech work for you."
        ctaText="Discuss Your Project"
        ctaLink="/contact"
        showIcons={false}
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {services?.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services?.map?.((service) => (
              <ServiceCard
                key={service?.id || ''}
                title={service?.title || ''}
                description={service?.description || ''}
                tagline={service?.tagline || undefined}
                features={service?.features || []}
                techStack={service?.techStack || []}
                idealFor={service?.idealFor || []}
                slug={service?.slug || ''}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Services are being loaded...</p>
          </div>
        )}
      </section>
    </div>
  );
}

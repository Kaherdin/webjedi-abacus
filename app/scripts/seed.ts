
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting database seed...');

  // Clear existing data
  await prisma.lead.deleteMany();
  await prisma.project.deleteMany();
  await prisma.service.deleteMany();

  // Seed Services
  const services = await Promise.all([
    prisma.service.create({
      data: {
        title: 'AI Strategy, Automation & Training',
        tagline: 'Let the bots work for you. You stay the boss. Automate boring tasks and have more time to what matters!',
        description: `I help organizations implement AI responsibly, with transparency, human oversight, and ethical data practices. From email management to document processing, I create custom automation solutions that save time without replacing human judgment.

Key areas include smart email triage and response systems, automated document translation and summarization, data synchronization between systems, content pipeline automation, and custom integrations that connect your existing tools seamlessly.`,
        features: [
          'Email management and smart triage systems',
          'Document processing automation',
          'Data synchronization and integration',
          'Content pipeline automation',
          'Custom workflow automation',
          'AI training and strategy consulting',
          'Responsible AI implementation guidance'
        ],
        techStack: [
          'Make.com',
          'OpenAI GPT',
          'Claude AI',
          'Gemini AI',
          'Custom Python Scripts',
          'REST APIs',
          'Webhook Integration'
        ],
        idealFor: [
          'Organizations implementing AI solutions',
          'Growing teams with repetitive workflows',
          'Busy professionals seeking efficiency',
          'Founders needing AI strategy clarity',
          'Companies prioritizing ethical AI practices'
        ],
        slug: 'ai-strategy-automation-training'
      }
    }),

    prisma.service.create({
      data: {
        title: 'Web and Mobile App Development',
        tagline: 'Build fast. Ship smart. Stay in control.',
        description: `I specialize in building modern web applications and SaaS platforms that scale beautifully. From MVP validation to full-scale products, I focus on speed, intuitive UX, and maintainable code that grows with your business.

My approach combines rapid development with solid architecture, ensuring you can launch quickly while building on a foundation that supports future growth. Whether it's a client portal, internal dashboard, or consumer-facing application, I deliver solutions that work.`,
        features: [
          'Custom web applications with modern frameworks',
          'Scalable SaaS platform development',
          'Interactive dashboards and analytics',
          'Client portals and user management systems',
          'API development and third-party integrations',
          'Mobile-responsive design and React Native apps',
          'Performance optimization and SEO'
        ],
        techStack: [
          'React & Next.js',
          'TypeScript',
          'React Native',
          'Node.js',
          'Tailwind CSS',
          'Prisma & PostgreSQL',
          'Supabase',
          'Strapi CMS',
          'Vercel & AWS'
        ],
        idealFor: [
          'Startups validating product ideas',
          'Internal teams needing custom tools',
          'Solo founders building their first product',
          'Growing businesses requiring scalable solutions',
          'Companies needing rapid MVP development'
        ],
        slug: 'web-mobile-development'
      }
    }),

    prisma.service.create({
      data: {
        title: 'Eco-friendly & Lightning-fast Websites',
        tagline: 'Show yourself online — without killing the planet.',
        description: `I create websites that are both beautiful and environmentally responsible. Using modern optimization techniques, static generation, and efficient coding practices, I build sites that load incredibly fast while minimizing their carbon footprint.

Every website is optimized for performance, accessibility, and sustainability. This means faster loading times, better user experience, improved SEO rankings, and reduced environmental impact - all while maintaining stunning visual design.`,
        features: [
          'Ultra-fast static site generation',
          'Performance optimization and Core Web Vitals',
          'Minimal resource consumption and eco-friendly hosting',
          'Progressive web app (PWA) capabilities',
          'SEO optimization and accessibility compliance',
          'Headless CMS integration for easy content management',
          'Mobile-first responsive design'
        ],
        techStack: [
          'Next.js Static Generation',
          'GraphQL & Headless CMS',
          'Tailwind CSS',
          'Progressive Web Apps',
          'Image Optimization',
          'Vercel Edge Functions',
          'Lighthouse Optimization'
        ],
        idealFor: [
          'Businesses prioritizing sustainability',
          'Organizations needing high-performance sites',
          'Companies with global audiences requiring fast loading',
          'Brands wanting to showcase environmental responsibility',
          'Projects requiring maximum SEO performance'
        ],
        slug: 'eco-friendly-websites'
      }
    })
  ]);

  // Seed Projects
  const projects = await Promise.all([
    prisma.project.create({
      data: {
        title: 'Alaya',
        description: 'B2B SaaS platform that makes corporate social responsibility programs easy and engaging for companies and their employees.',
        techStack: ['React', 'AWS', 'Stripe', 'Node.js', 'PostgreSQL'],
        year: 2022,
        client: 'Alaya (Co-founder)',
        challenge: `Build a comprehensive B2B platform from scratch that would make CSR programs accessible and engaging for companies of all sizes. The challenge was creating a system that could handle complex donation matching, volunteer opportunity curation, impact measurement, and gamification while remaining intuitive for both HR administrators and employees.

The platform needed to support multiple CSR activities including volunteering, donations, and community engagement while providing detailed analytics and reporting for corporate stakeholders.`,
        solution: `As co-founder, I handled the complete technical development from initial UI/UX design to core platform architecture. I built an admin dashboard for HR teams to manage programs, integrated curated volunteering and donation opportunities, implemented a donation matching system with Stripe integration, and created comprehensive impact measurement and reporting tools.

The platform featured a gamification system with "solidarity points" to encourage employee participation and engagement. I also developed API integrations with various nonprofit databases and volunteer platforms to provide diverse opportunities.`,
        results: `Successfully launched and grew the platform over 4 years, serving multiple enterprise clients and facilitating thousands of volunteer hours and donations. The platform's success led to its acquisition, validating the product-market fit and technical architecture.

Key metrics included high employee engagement rates, significant CSR program participation increases for client companies, and measurable community impact through facilitated volunteering and donations.`,
        imageUrl: 'https://cdn.abacus.ai/images/2e1127b0-f2ed-486d-8b92-298091afb7b2.png',
        slug: 'alaya-csr-platform',
        featured: true
      }
    }),

    prisma.project.create({
      data: {
        title: 'Climact',
        description: 'Fast, lightweight, eco-friendly website designed to inspire climate action with minimal environmental impact.',
        techStack: ['Next.js', 'GraphQL', 'Strapi CMS', 'Static Generation'],
        year: 2023,
        client: 'Climact',
        challenge: `Create a website that not only educates and inspires climate action but also practices what it preaches by having minimal environmental impact. The site needed to be extremely fast-loading, resource-efficient, and accessible while containing rich content about climate initiatives and actionable resources.

The challenge was balancing visual appeal and content richness with maximum performance optimization and minimal carbon footprint, while ensuring easy content management for the team.`,
        solution: `I developed a fully optimized static website using Next.js with GraphQL for ultra-fast loading and minimal server resources. Implemented a headless CMS architecture with Strapi for easy content management without compromising performance.

Used advanced optimization techniques including static generation, image optimization, lazy loading, and minimal JavaScript to achieve exceptional performance scores. The site features interactive climate tools and resources while maintaining incredibly low resource consumption.`,
        results: `Delivered a website that achieves near-perfect Lighthouse scores across all metrics while maintaining rich, engaging content about climate action. The site loads in under 1 second on most connections and uses 90% less bandwidth than typical content sites.

The project demonstrates how modern web development can align with environmental values without sacrificing user experience or functionality, serving as a model for sustainable web development practices.`,
        imageUrl: 'https://cdn.abacus.ai/images/ddf811e2-9d1f-44ed-8865-93671fda72c4.png',
        slug: 'climact-eco-website',
        featured: true
      }
    }),

    prisma.project.create({
      data: {
        title: 'partager.io',
        description: 'Fast, clean MVP platform helping content creators launch and monetize their newsletters with subscription management.',
        techStack: ['Next.js', 'Strapi', 'Mailgun', 'Stripe', 'PostgreSQL'],
        year: 2022,
        client: 'partager.io',
        challenge: `Build a complete newsletter platform MVP in just 3 months that would allow content creators to easily publish free newsletters while offering premium paid content tiers. The platform needed to handle user management, content creation, email distribution, payment processing, and subscription management.

The tight timeline required building a fully functional SaaS product with both creator and subscriber interfaces, email automation, and monetization features while ensuring scalability for future growth.`,
        solution: `Developed a comprehensive newsletter platform using Next.js for the frontend and Strapi as a headless CMS for content management. Integrated Mailgun for reliable email delivery and automated newsletter distribution.

Built creator dashboards with analytics, subscriber management, and content scheduling. Implemented tiered subscription models with Stripe integration for payment processing. Created automated email sequences, subscription management, and detailed analytics for creators to track performance and revenue.`,
        results: `Successfully launched the platform within the 3-month timeline, providing creators with a complete newsletter solution from content creation to monetization. The platform supports both free and premium content tiers with automated email delivery and subscription management.

Creators can easily publish newsletters, manage subscribers, track engagement metrics, and generate revenue through premium subscriptions, all within an intuitive interface that requires no technical knowledge.`,
        imageUrl: 'https://cdn.abacus.ai/images/4c073d89-b1c7-4312-8caa-8551efe55822.png',
        slug: 'partager-newsletter-platform',
        featured: true
      }
    })
  ]);

  console.log(`Created ${services.length} services and ${projects.length} projects`);
  console.log('Database seed completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, UserIcon, ArrowLeftIcon } from "lucide-react";
import { formatDistance } from 'date-fns';
import { enUS, fr } from 'date-fns/locale';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

// Mock data for individual blog posts - In production, this would come from your database
const mockPostsContent: Record<string, any> = {
  'building-scalable-web-applications-nextjs-15': {
    id: '1',
    title: 'Building Scalable Web Applications with Next.js 15',
    slug: 'building-scalable-web-applications-nextjs-15',
    heroImg: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop',
    author: 'Aurélien Borst',
    publishedAt: new Date('2024-01-15'),
    tags: ['Next.js', 'React', 'Web Development'],
    locale: 'en',
    body: `
# Building Scalable Web Applications with Next.js 15

Next.js 15 introduces several groundbreaking features that make building scalable web applications easier than ever. In this comprehensive guide, we'll explore the key improvements and how they can benefit your development workflow.

## Key Features in Next.js 15

### 1. Enhanced Performance
The new version includes significant performance improvements, including faster hot reloads and optimized bundle sizes.

### 2. Improved Developer Experience
Enhanced error messages and better debugging tools make development more efficient.

### 3. Advanced Caching Strategies
New caching mechanisms help reduce server load and improve user experience.

## Getting Started

To get started with Next.js 15, you can create a new project using:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

## Best Practices

1. **Use the App Router**: Take advantage of the new routing system for better performance.
2. **Implement Proper SEO**: Leverage built-in SEO optimizations.
3. **Optimize Images**: Use Next.js Image component for automatic optimization.

## Conclusion

Next.js 15 represents a significant step forward in React framework development. By adopting these new features, you can build more performant and maintainable applications.
    `
  },
  'future-ai-web-development': {
    id: '2',
    title: 'The Future of AI in Web Development',
    slug: 'future-ai-web-development',
    heroImg: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
    author: 'Aurélien Borst',
    publishedAt: new Date('2024-01-10'),
    tags: ['AI', 'Machine Learning', 'Web Development'],
    locale: 'en',
    body: `
# The Future of AI in Web Development

Artificial Intelligence is transforming every aspect of web development, from automated code generation to intelligent user interfaces. Let's explore what the future holds.

## Current AI Applications in Web Development

### Code Generation
AI tools like GitHub Copilot are already helping developers write code faster and with fewer errors.

### Design Assistance
AI-powered design tools can generate layouts, color schemes, and even entire design systems.

### Performance Optimization
Machine learning algorithms can analyze user behavior to optimize website performance automatically.

## Emerging Trends

1. **AI-Powered Testing**: Automated testing that adapts based on code changes.
2. **Intelligent Content Generation**: Dynamic content creation based on user preferences.
3. **Predictive UX**: Interfaces that anticipate user needs.

## The Road Ahead

As AI continues to evolve, we can expect even more sophisticated tools that will revolutionize how we approach web development.
    `
  },
  'construire-applications-web-evolutives-nextjs-15': {
    id: '4',
    title: 'Construire des Applications Web Évolutives avec Next.js 15',
    slug: 'construire-applications-web-evolutives-nextjs-15',
    heroImg: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop',
    author: 'Aurélien Borst',
    publishedAt: new Date('2024-01-15'),
    tags: ['Next.js', 'React', 'Développement Web'],
    locale: 'fr',
    body: `
# Construire des Applications Web Évolutives avec Next.js 15

Next.js 15 introduit plusieurs fonctionnalités révolutionnaires qui rendent la construction d'applications web évolutives plus facile que jamais. Dans ce guide complet, nous explorerons les améliorations clés et comment elles peuvent bénéficier à votre flux de travail de développement.

## Fonctionnalités Clés dans Next.js 15

### 1. Performance Améliorée
La nouvelle version inclut des améliorations significatives de performance, incluant des rechargements à chaud plus rapides et des tailles de bundle optimisées.

### 2. Expérience Développeur Améliorée
Des messages d'erreur améliorés et de meilleurs outils de débogage rendent le développement plus efficace.

### 3. Stratégies de Cache Avancées
De nouveaux mécanismes de cache aident à réduire la charge serveur et améliorer l'expérience utilisateur.

## Commencer

Pour commencer avec Next.js 15, vous pouvez créer un nouveau projet en utilisant :

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

## Bonnes Pratiques

1. **Utilisez l'App Router**: Profitez du nouveau système de routage pour de meilleures performances.
2. **Implémentez un SEO Approprié**: Tirez parti des optimisations SEO intégrées.
3. **Optimisez les Images**: Utilisez le composant Image de Next.js pour l'optimisation automatique.

## Conclusion

Next.js 15 représente un pas significatif en avant dans le développement de framework React. En adoptant ces nouvelles fonctionnalités, vous pouvez construire des applications plus performantes et maintenables.
    `
  }
};

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ locale: string; slug: string }> 
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('blog');
  
  const post = mockPostsContent[slug];
  
  if (!post || post.locale !== locale) {
    notFound();
  }
  
  const dateLocale = locale === 'fr' ? fr : enUS;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href={`/${locale}/blog`}>
            <Button variant="ghost" className="mb-4">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              {locale === 'fr' ? 'Retour au Blog' : 'Back to Blog'}
            </Button>
          </Link>
          
          <div className="aspect-video relative overflow-hidden rounded-lg mb-8">
            <Image
              src={post.heroImg}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <CalendarIcon className="h-4 w-4" />
              <time dateTime={post.publishedAt.toISOString()}>
                {formatDistance(post.publishedAt, new Date(), {
                  addSuffix: true,
                  locale: dateLocale
                })}
              </time>
            </div>
            <div className="flex items-center gap-1">
              <UserIcon className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight mb-4">{post.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        
        <article className="prose prose-gray dark:prose-invert max-w-none">
          {post.body.split('\n').map((paragraph: string, index: number) => {
            if (paragraph.trim() === '') return null;
            
            if (paragraph.startsWith('# ')) {
              return <h1 key={index} className="text-3xl font-bold mb-4 mt-8">{paragraph.substring(2)}</h1>;
            }
            if (paragraph.startsWith('## ')) {
              return <h2 key={index} className="text-2xl font-bold mb-3 mt-6">{paragraph.substring(3)}</h2>;
            }
            if (paragraph.startsWith('### ')) {
              return <h3 key={index} className="text-xl font-bold mb-2 mt-4">{paragraph.substring(4)}</h3>;
            }
            if (paragraph.startsWith('```')) {
              return null; // Handle code blocks separately if needed
            }
            if (paragraph.match(/^\d+\./)) {
              return <li key={index} className="mb-1">{paragraph.substring(paragraph.indexOf('.') + 2)}</li>;
            }
            
            return <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>;
          })}
        </article>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(mockPostsContent).map((slug) => ({
    slug,
  }));
}

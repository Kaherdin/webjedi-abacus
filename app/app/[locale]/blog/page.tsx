
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, UserIcon } from "lucide-react";
import { formatDistance } from 'date-fns';
import { enUS, fr } from 'date-fns/locale';
import Link from 'next/link';
import Image from 'next/image';

// Mock data for blog posts - In production, this would come from your database
const mockPosts = [
  {
    id: '1',
    title: 'Building Scalable Web Applications with Next.js 15',
    slug: 'building-scalable-web-applications-nextjs-15',
    excerpt: 'Discover the latest features in Next.js 15 and how they can help you build more performant and scalable web applications.',
    heroImg: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
    author: 'Aurélien Borst',
    publishedAt: new Date('2024-01-15'),
    tags: ['Next.js', 'React', 'Web Development'],
    locale: 'en'
  },
  {
    id: '2', 
    title: 'The Future of AI in Web Development',
    slug: 'future-ai-web-development',
    excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build and interact with web applications.',
    heroImg: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    author: 'Aurélien Borst',
    publishedAt: new Date('2024-01-10'),
    tags: ['AI', 'Machine Learning', 'Web Development'],
    locale: 'en'
  },
  {
    id: '3',
    title: 'Sustainable Web Development Practices',
    slug: 'sustainable-web-development-practices', 
    excerpt: 'Learn how to build eco-friendly websites that perform well while minimizing environmental impact.',
    heroImg: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop',
    author: 'Aurélien Borst',
    publishedAt: new Date('2024-01-05'),
    tags: ['Sustainability', 'Green Tech', 'Performance'],
    locale: 'en'
  }
];

const mockPostsFr = [
  {
    id: '4',
    title: 'Construire des Applications Web Évolutives avec Next.js 15',
    slug: 'construire-applications-web-evolutives-nextjs-15',
    excerpt: 'Découvrez les dernières fonctionnalités de Next.js 15 et comment elles peuvent vous aider à créer des applications web plus performantes et évolutives.',
    heroImg: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
    author: 'Aurélien Borst',
    publishedAt: new Date('2024-01-15'),
    tags: ['Next.js', 'React', 'Développement Web'],
    locale: 'fr'
  },
  {
    id: '5',
    title: 'L\'Avenir de l\'IA dans le Développement Web',
    slug: 'avenir-ia-developpement-web',
    excerpt: 'Explorer comment l\'intelligence artificielle révolutionne la façon dont nous construisons et interagissons avec les applications web.',
    heroImg: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    author: 'Aurélien Borst',
    publishedAt: new Date('2024-01-10'),
    tags: ['IA', 'Machine Learning', 'Développement Web'],
    locale: 'fr'
  },
  {
    id: '6',
    title: 'Pratiques de Développement Web Durable',
    slug: 'pratiques-developpement-web-durable',
    excerpt: 'Apprenez à créer des sites web éco-responsables qui performent bien tout en minimisant l\'impact environnemental.',
    heroImg: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop',
    author: 'Aurélien Borst',
    publishedAt: new Date('2024-01-05'),
    tags: ['Durabilité', 'Green Tech', 'Performance'],
    locale: 'fr'
  }
];

export default function BlogPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = useTranslations('blog');
  
  const posts = params.locale === 'fr' ? mockPostsFr : mockPosts;
  const dateLocale = params.locale === 'fr' ? fr : enUS;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{t('title')}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.id} href={`/${params.locale}/blog/${post.slug}`}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={post.heroImg}
                  alt={post.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
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
                <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

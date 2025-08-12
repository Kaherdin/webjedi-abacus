
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  techStack: string[];
  year: number;
  slug: string;
  client?: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  techStack,
  year,
  slug,
  client,
  featured = false
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-xl">
        {imageUrl && (
          <div className="relative aspect-video bg-muted overflow-hidden">
            <Image
              src={imageUrl}
              alt={`${title} project screenshot`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {featured && (
              <div className="absolute top-4 left-4">
                <Badge variant="default" className="bg-primary text-primary-foreground">
                  Featured
                </Badge>
              </div>
            )}
          </div>
        )}

        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{year}</span>
              {client && (
                <>
                  <span>•</span>
                  <span>{client}</span>
                </>
              )}
            </div>
          </div>

          <CardTitle className="group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          
          <CardDescription className="line-clamp-3">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {techStack?.slice?.(0, 4)?.map?.((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {(techStack?.length ?? 0) > 4 && (
              <Badge variant="outline" className="text-xs">
                +{(techStack?.length ?? 0) - 4} more
              </Badge>
            )}
          </div>

          <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Link href={`/projects/${slug}`}>
              <span>View Case Study</span>
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

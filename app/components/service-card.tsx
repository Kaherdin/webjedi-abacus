
"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  tagline?: string;
  features: string[];
  techStack: string[];
  idealFor: string[];
  slug: string;
}

export default function ServiceCard({
  title,
  description,
  tagline,
  features,
  techStack,
  idealFor,
  slug
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-xl">
        <CardHeader className="space-y-4">
          {tagline && (
            <div className="text-sm text-primary font-medium">
              {tagline}
            </div>
          )}
          
          <CardTitle className="group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          
          <CardDescription className="line-clamp-4">
            {description?.split?.('\n\n')?.[0] || description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3 text-sm">Key Features</h4>
            <ul className="space-y-2">
              {features?.slice?.(0, 4)?.map?.((feature, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            {(features?.length ?? 0) > 4 && (
              <p className="text-xs text-muted-foreground mt-2">
                +{(features?.length ?? 0) - 4} more features
              </p>
            )}
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm">Tech Stack</h4>
            <div className="flex flex-wrap gap-1">
              {techStack?.slice?.(0, 6)?.map?.((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm">Perfect For</h4>
            <ul className="space-y-1">
              {idealFor?.slice?.(0, 3)?.map?.((client, index) => (
                <li key={index} className="text-xs text-muted-foreground">
                  • {client}
                </li>
              ))}
            </ul>
          </div>

          <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Link href={`/services/${slug}`}>
              <span>Learn More</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}


"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Code2, Zap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  showIcons?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  ctaText = "Get Started",
  ctaLink = "/contact",
  showIcons = true
}: HeroSectionProps) {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              {title}
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </motion.div>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              {description}
            </motion.p>
          )}

          {showIcons && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center space-x-8 mb-10"
            >
              <div className="flex items-center space-x-2 text-primary">
                <Zap className="h-5 w-5" />
                <span className="text-sm font-medium">Fast</span>
              </div>
              <div className="flex items-center space-x-2 text-primary">
                <Code2 className="h-5 w-5" />
                <span className="text-sm font-medium">Smart</span>
              </div>
              <div className="flex items-center space-x-2 text-primary">
                <Heart className="h-5 w-5" />
                <span className="text-sm font-medium">Reliable</span>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button asChild size="lg" className="text-lg px-8">
              <Link href={ctaLink as any}>
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

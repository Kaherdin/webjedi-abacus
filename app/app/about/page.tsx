
import { Metadata } from 'next';
import Link from 'next/link';
import { Code, Heart, Shield, Zap, Leaf, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'About - Aurélien Borst, Web Jedi & Problems Solver',
  description: 'Full Stack Developer, AI Guru, Growth Hacker, and Web Jedi. I create fast, modern apps and automate workflows to save you time.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Code className="h-16 w-16 text-primary" />
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Aurélien</span>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge variant="secondary">Full Stack Developer</Badge>
            <Badge variant="secondary">AI Guru</Badge>
            <Badge variant="secondary">Growth Hacker</Badge>
            <Badge variant="secondary">Web Jedi</Badge>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Problems solver and time saver. I make complex solutions simple and approachable, 
            helping businesses transform their vision into reality.
          </p>
        </div>

        {/* Core Philosophy */}
        <div className="space-y-12 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-primary" />
                <span>My Philosophy</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I believe technology should serve people, not stress them out. My approach is to build 
                digital tools that are fast, smart, and reliable — solutions that actually make your 
                life easier, not more complicated.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether it's a custom web application, AI automation, or an eco-friendly website, 
                I focus on delivering real value. You stay in control while I handle the complexity.
              </p>
            </CardContent>
          </Card>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>Speed & Efficiency</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Build fast. Ship smart. I focus on rapid development without compromising quality, 
                  delivering solutions that work from day one and scale with your growth.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Ethical AI Practices</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Responsible AI implementation with transparency, human oversight, and ethical data practices. 
                  AI should augment human work, not replace human judgment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Leaf className="h-5 w-5 text-primary" />
                  <span>Environmental Consciousness</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every website and application I build is optimized for minimal resource consumption. 
                  Beautiful design and lightning-fast performance without killing the planet.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Human-Centered Design</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  User experience comes first. I create intuitive interfaces and workflows that make 
                  complex tasks simple, keeping the human element at the center of every solution.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Experience Highlight */}
          <Card>
            <CardHeader>
              <CardTitle>Experience Highlights</CardTitle>
              <CardDescription>Key milestones in my journey as a Web Jedi</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-2 border-primary/20 pl-6 space-y-6">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <h4 className="font-semibold">Co-founder & Technical Lead - Alaya</h4>
                  </div>
                  <p className="text-muted-foreground mb-2">2018-2022 • 4+ years</p>
                  <p className="text-sm text-muted-foreground">
                    Built a B2B SaaS platform from ground up that made CSR programs engaging for companies. 
                    Handled full tech stack development, resulting in successful acquisition.
                  </p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <h4 className="font-semibold">Full-Stack Development & AI Integration</h4>
                  </div>
                  <p className="text-muted-foreground mb-2">2020-Present</p>
                  <p className="text-sm text-muted-foreground">
                    Specialized in modern web technologies, AI automation, and eco-friendly development. 
                    Focus on MVP development and startup solutions across multiple industries.
                  </p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <h4 className="font-semibold">Sustainable Web Development Advocate</h4>
                  </div>
                  <p className="text-muted-foreground mb-2">2021-Present</p>
                  <p className="text-sm text-muted-foreground">
                    Champion of eco-friendly web development practices, creating high-performance sites 
                    with minimal environmental impact using modern optimization techniques.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Expertise */}
          <Card>
            <CardHeader>
              <CardTitle>Technical Expertise</CardTitle>
              <CardDescription>The tools and technologies I use to bring ideas to life</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Frontend & Mobile</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Backend & Database</h4>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Strapi', 'Supabase', 'PostgreSQL', 'GraphQL', 'Prisma'].map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">AI & Automation</h4>
                <div className="flex flex-wrap gap-2">
                  {['Make.com', 'OpenAI GPT', 'Claude AI', 'Gemini', 'Python Scripts'].map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Infrastructure & Deployment</h4>
                <div className="flex flex-wrap gap-2">
                  {['Vercel', 'AWS', 'Serverless', 'Docker', 'Static Generation'].map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="text-center py-8">
            <h2 className="text-2xl font-bold mb-4">Ready to work with a Web Jedi?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you need a custom application, AI training, or process automation, 
              I'm here to help you achieve your goals. Let's transform your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">
                  View My Work
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


import { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MessageSquare, Phone, Clock } from 'lucide-react';
import ContactForm from '@/components/contact-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Contact - Let\'s Talk (No Need to Send a Droid)',
  description: 'Got a project or an idea in mind? Need a hand with your app, your AI, or your digital strategy? I\'d love to hear from you.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's talk (no need to send a droid)
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got a project or an idea in mind? Need a hand with your app, your AI, 
            or your digital strategy? I'd love to hear from you — Jedi or not.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact Info & Services */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <span>Let's Connect</span>
                </CardTitle>
                <CardDescription>
                  I typically respond within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="h-4 w-4 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-sm">Response Time</h4>
                    <p className="text-sm text-muted-foreground">Usually within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="h-4 w-4 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-sm">Phone Consultations</h4>
                    <p className="text-sm text-muted-foreground">Available by appointment</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-4 w-4 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-sm">Preferred Method</h4>
                    <p className="text-sm text-muted-foreground">Email or contact form</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Services I Offer</CardTitle>
                <CardDescription>
                  Not sure what you need? Here's what I can help with
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <Link 
                    href="/services/ai-strategy-automation-training" 
                    className="block p-3 rounded-md border hover:bg-muted/50 transition-colors"
                  >
                    <h4 className="font-medium text-sm">AI Strategy & Automation</h4>
                    <p className="text-xs text-muted-foreground">Automate workflows, save time</p>
                  </Link>
                  
                  <Link 
                    href="/services/web-mobile-development" 
                    className="block p-3 rounded-md border hover:bg-muted/50 transition-colors"
                  >
                    <h4 className="font-medium text-sm">Web & Mobile Apps</h4>
                    <p className="text-xs text-muted-foreground">Custom development, MVPs</p>
                  </Link>
                  
                  <Link 
                    href="/services/eco-friendly-websites" 
                    className="block p-3 rounded-md border hover:bg-muted/50 transition-colors"
                  >
                    <h4 className="font-medium text-sm">Eco-friendly Websites</h4>
                    <p className="text-xs text-muted-foreground">Fast, sustainable, beautiful</p>
                  </Link>
                </div>

                <Button asChild variant="outline" className="w-full mt-4">
                  <Link href="/services">
                    View All Services
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* What to Expect */}
            <Card>
              <CardHeader>
                <CardTitle>What to Expect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Initial Discussion</h4>
                    <p className="text-xs text-muted-foreground">
                      We'll chat about your project goals and requirements
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Proposal & Timeline</h4>
                    <p className="text-xs text-muted-foreground">
                      I'll provide a clear proposal with timeline and costs
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Let's Build</h4>
                    <p className="text-xs text-muted-foreground">
                      Start building your solution with regular updates
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="py-8">
              <h2 className="text-2xl font-bold mb-4">
                Ready to Transform Your Vision Into Reality?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you need a custom application, AI training, or process automation, 
                I'm here to help you achieve your goals. Let's make tech work for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/projects">
                    View My Work
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">
                    Learn More About Me
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

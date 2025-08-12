
import Link from 'next/link';
import { Code, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Code className="h-5 w-5 text-primary" />
            <span className="font-bold text-lg">Web Jedi</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <Link href="/services" className="hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/projects" className="hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
          
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>© 2025 Aurélien Borst</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <span>Built with</span>
              <Heart className="h-3 w-3 text-red-500" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

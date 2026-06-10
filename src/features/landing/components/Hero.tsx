import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/components/ui/button';

export const Hero: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl lg:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          The all-in-one brokerage <br className="hidden lg:block" /> for modern traders
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Experience lightning-fast execution, low fees, and advanced charts. 
          Start your journey with us today and trade like a pro.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/signup">
            <Button size="lg" className="px-8 h-12 text-lg">
              Get Started for Free
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="px-8 h-12 text-lg">
            View Features
          </Button>
        </div>
        
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 h-20 bottom-0" />
          <div className="rounded-xl border bg-muted/30 p-4 shadow-2xl">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
              {/* Dashboard Preview Placeholder */}
              Dashboard Preview
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

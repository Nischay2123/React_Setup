import React from 'react';
import { Separator } from '@/shared/components/ui/separator';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-background border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="text-2xl font-bold text-primary tracking-tight">
            Broker<span className="text-foreground">App</span>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
          </div>
        </div>
        <Separator className="mb-8" />
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} BrokerApp Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

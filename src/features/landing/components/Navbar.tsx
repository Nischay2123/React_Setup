import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/components/ui/button';
import { useAuth } from '@/features/auth/hooks/useAuth';

export const Navbar: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary tracking-tight">
          Broker<span className="text-foreground">App</span>
        </Link>

        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <Link to="/dashboard">
              <Button variant="default">Dashboard</Button>
            </Link>
          ) : (
            <>
              <Link to="/signin">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button variant="default">Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

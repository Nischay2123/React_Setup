import React from 'react';
import { SignInForm } from '../components/SignInForm';

export const SignInPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/50 px-4">
      <SignInForm />
    </div>
  );
};

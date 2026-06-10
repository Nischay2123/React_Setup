import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './useAuth';
import { signInSchema } from '../schemas/auth.schema';
import type { SignInSchema } from '../schemas/auth.schema';
import { useToast } from '@/shared/hooks/use-toast';

export const useSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: SignInSchema) => {
    setIsLoading(true);
    try {
      await login(data);
      toast({
        title: 'Success',
        description: 'Successfully signed in',
      });
      navigate('/dashboard');
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error instanceof Error ? error.message : 'Invalid credentials',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
    isLoading,
  };
};

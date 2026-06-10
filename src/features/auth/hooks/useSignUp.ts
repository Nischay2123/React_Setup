import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './useAuth';
import { signUpSchema } from '../schemas/auth.schema';
import type { SignUpSchema } from '../schemas/auth.schema';
import { useToast } from '@/shared/hooks/use-toast';

export const useSignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: SignUpSchema) => {
    setIsLoading(true);
    try {
      await register(data);
      toast({
        title: 'Account created',
        description: 'Please sign in with your new account',
      });
      navigate('/signin');
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error instanceof Error ? error.message : 'Something went wrong',
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

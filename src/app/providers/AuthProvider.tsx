import React, { createContext, useState, useEffect, useCallback } from 'react';
import type { User, SignInData, SignUpData } from '@/features/auth/types';
import { authService } from '@/features/auth/services/auth.service';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (data: SignInData) => Promise<void>;
  register: (data: SignUpData) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = useCallback(async (data: SignInData) => {
    setIsLoading(true);
    try {
      const response = await authService.signin(data);
      setUser(response.user);
      localStorage.setItem('token', response.token);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const register = useCallback(async (data: SignUpData) => {
    setIsLoading(true);
    try {
      const response = await authService.signup(data);
      setUser(response.user);
      localStorage.setItem('token', response.token);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    await authService.logout();
    setUser(null);
  }, []);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const currentUser = await authService.getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.error('Failed to initialize auth', error);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

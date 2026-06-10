import type { AuthResponse, SignInData, SignUpData, User } from '../types';

const MOCK_USER: User = {
  id: '1',
  email: 'test@example.com',
  name: 'Test User',
};

const DELAY = 1000;

export const authService = {
  async signin(data: SignInData): Promise<AuthResponse> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data.email === 'test@example.com') {
          resolve({
            user: MOCK_USER,
            token: 'mock-jwt-token',
          });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, DELAY);
    });
  },

  async signup(data: SignUpData): Promise<AuthResponse> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          user: {
            id: Math.random().toString(36).substr(2, 9),
            email: data.email,
            name: data.name,
          },
          token: 'mock-jwt-token',
        });
      }, DELAY);
    });
  },

  async logout(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.removeItem('token');
        resolve();
      }, 500);
    });
  },

  async getCurrentUser(): Promise<User | null> {
    return new Promise((resolve) => {
      const token = localStorage.getItem('token');
      setTimeout(() => {
        if (token) {
          resolve(MOCK_USER);
        } else {
          resolve(null);
        }
      }, 500);
    });
  },
};

import React from 'react';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { useLogout } from '@/features/auth/hooks/useLogout';
import { Button } from '@/shared/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';
import { LogOut, User as UserIcon } from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const { logout } = useLogout();

  return (
    <div className="min-h-screen bg-muted/30 p-4 lg:p-8">
      <div className="container mx-auto max-w-4xl">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <Button variant="outline" onClick={logout} className="gap-2">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </header>

        <div className="grid gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <UserIcon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle>Welcome back, {user?.name}!</CardTitle>
                <CardDescription>You are successfully logged in.</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-1">
                <p className="text-sm font-medium text-muted-foreground">Email</p>
                <p className="text-lg">{user?.email}</p>
              </div>
              <div className="grid gap-1">
                <p className="text-sm font-medium text-muted-foreground">User ID</p>
                <p className="text-mono text-sm">{user?.id}</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 flex flex-col items-center justify-center text-center">
              <p className="text-sm font-medium text-muted-foreground mb-1">Portfolio Value</p>
              <p className="text-2xl font-bold">$12,450.00</p>
            </Card>
            <Card className="p-6 flex flex-col items-center justify-center text-center">
              <p className="text-sm font-medium text-muted-foreground mb-1">Daily Gain</p>
              <p className="text-2xl font-bold text-green-600">+$240.15</p>
            </Card>
            <Card className="p-6 flex flex-col items-center justify-center text-center">
              <p className="text-sm font-medium text-muted-foreground mb-1">Buying Power</p>
              <p className="text-2xl font-bold">$1,200.00</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

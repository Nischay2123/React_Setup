import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from '@/app/guards/ProtectedRoute';
import { SignInPage } from '@/features/auth/pages/SignInPage';
import { SignUpPage } from '@/features/auth/pages/SignUpPage';
import { LandingPage } from '@/features/landing/pages/LandingPage';
import { DashboardPage } from '@/features/dashboard/pages/DashboardPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

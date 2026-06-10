import { AuthProvider } from '@/app/providers/AuthProvider';
import { AppRouter } from '@/app/router/AppRouter';
import { Toaster } from '@/shared/components/ui/toaster';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <AppRouter />
      <Toaster />
    </AuthProvider>
  );
}

export default App;

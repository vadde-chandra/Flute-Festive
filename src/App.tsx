import { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Registration from './pages/Registration';

type Page = 'login' | 'signup' | 'home' | 'registration';

function AppContent() {
  const { user, loading } = useAuth();
  const [currentPage, setCurrentPage] = useState<Page>('login');

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-amber-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    if (currentPage === 'signup') {
      return (
        <Signup
          onSuccess={() => setCurrentPage('home')}
          onSwitchToLogin={() => setCurrentPage('login')}
        />
      );
    }
    return (
      <Login
        onSuccess={() => setCurrentPage('home')}
        onSwitchToSignup={() => setCurrentPage('signup')}
      />
    );
  }

  if (currentPage === 'registration') {
    return <Registration onBack={() => setCurrentPage('home')} />;
  }

  return <Home onRegisterClick={() => setCurrentPage('registration')} />;
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;

import { Routes, Route, Navigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ConceptsPage from './pages/ConceptsPage';
import ConceptDetailPage from './pages/ConceptDetailPage';
import QuizPage from './pages/QuizPage';
import ProgressionPage from './pages/ProgressionPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { AuthProvider, useAuth } from './context/AuthContext';
import TestAuth from './components/TestAuth';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <TestAuth />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                }
              />
              <Route path="/concepts" element={<ConceptsPage />} />
              <Route path="/concept/:id" element={<ConceptDetailPage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/quiz/:conceptId" element={<QuizPage />} />
              <Route path="/progression" element={<ProgressionPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
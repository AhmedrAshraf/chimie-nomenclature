import { Routes, Route, useLocation } from 'react-router-dom';
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
import { AuthProvider } from './context/AuthContext';
import TestAuth from './components/TestAuth';

// Create a wrapper component to handle the layout
function AppLayout() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="flex flex-col min-h-screen">
      {!isAuthPage && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/concepts" element={<ConceptsPage />} />
          <Route path="/concept/:id" element={<ConceptDetailPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/quiz/:conceptId" element={<QuizPage />} />
          <Route path="/progression" element={<ProgressionPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </main>
      {!isAuthPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <TestAuth />
        <AppLayout />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
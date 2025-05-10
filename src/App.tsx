import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ConceptsPage from './pages/ConceptsPage';
import ConceptDetailPage from './pages/ConceptDetailPage';
import QuizPage from './pages/QuizPage';
import ProgressionPage from './pages/ProgressionPage';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
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
  );
}

export default App;
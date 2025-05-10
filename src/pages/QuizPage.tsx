import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { quizQuestions } from '../data/concepts';
import QuizCard from '../components/QuizCard';
import ProgressBar from '../components/ProgressBar';
import { Award, ArrowLeft, RotateCw } from 'lucide-react';

const QuizPage: React.FC = () => {
  const { conceptId } = useParams<{ conceptId?: string }>();
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    let filteredQuestions = quizQuestions;
    
    if (conceptId) {
      filteredQuestions = quizQuestions.filter(q => q.conceptId === conceptId);
    }
    
    // Shuffle questions
    const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5);
    setQuestions(shuffled.slice(0, 5)); // Limit to 5 questions
  }, [conceptId]);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    
    // Move to next question after a small delay
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setQuizCompleted(true);
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setQuizCompleted(false);
    
    // Reshuffle questions
    const shuffled = [...quizQuestions];
    if (conceptId) {
      const filtered = shuffled.filter(q => q.conceptId === conceptId);
      setQuestions(filtered.sort(() => Math.random() - 0.5).slice(0, 5));
    } else {
      setQuestions(shuffled.sort(() => Math.random() - 0.5).slice(0, 5));
    }
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Chargement des questions...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <Link to={conceptId ? `/concept/${conceptId}` : "/concepts"} className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6">
          <ArrowLeft className="h-4 w-4 mr-1" />
          {conceptId ? "Retour au concept" : "Retour aux concepts"}
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">
            {conceptId 
              ? `Quiz: ${questions[0]?.conceptId.charAt(0).toUpperCase() + questions[0]?.conceptId.slice(1)}` 
              : "Quiz: Nomenclature Chimique"}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Testez vos connaissances sur la nomenclature chimique. Chaque question teste votre capacité à nommer ou identifier des composés chimiques.
          </p>
          
          {!quizCompleted && (
            <ProgressBar 
              value={currentIndex + 1} 
              max={questions.length} 
              label="Progression" 
            />
          )}
        </div>

        {!quizCompleted ? (
          <QuizCard 
            question={questions[currentIndex]} 
            onAnswer={handleAnswer}
          />
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto text-center">
            <div className={`w-24 h-24 rounded-full ${score / questions.length >= 0.7 ? 'bg-green-100' : 'bg-yellow-100'} flex items-center justify-center mx-auto mb-6`}>
              <Award className={`h-12 w-12 ${score / questions.length >= 0.7 ? 'text-green-600' : 'text-yellow-600'}`} />
            </div>
            
            <h2 className="text-2xl font-bold mb-2">Quiz terminé !</h2>
            <p className="text-lg mb-4">
              Votre score: {score} sur {questions.length}
            </p>
            
            <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
              <div 
                className={`h-4 rounded-full ${score / questions.length >= 0.7 ? 'bg-green-500' : score / questions.length >= 0.5 ? 'bg-yellow-500' : 'bg-red-500'}`}
                style={{ width: `${(score / questions.length) * 100}%` }}
              ></div>
            </div>
            
            <p className="text-gray-600 mb-6">
              {score / questions.length >= 0.8 
                ? "Excellent ! Vous maîtrisez bien ce sujet."
                : score / questions.length >= 0.6
                ? "Bon travail ! Vous avez de bonnes connaissances, mais il y a encore place à l'amélioration."
                : "Continuez à pratiquer ! Révisez les concepts et réessayez."}
            </p>
            
            <button
              onClick={restartQuiz}
              className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md"
            >
              <RotateCw className="mr-2 h-5 w-5" />
              Recommencer le quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { CheckCircle, XCircle } from 'lucide-react';

interface QuizCardProps {
  question: QuizQuestion;
  onAnswer: (isCorrect: boolean) => void;
}

const QuizCard: React.FC<QuizCardProps> = ({ question, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswerSelection = (answer: string) => {
    if (selectedAnswer) return; // Prevent changing answer after selection
    
    setSelectedAnswer(answer);
    const correct = answer === question.correctAnswer;
    setIsCorrect(correct);
    setShowExplanation(true);
    onAnswer(correct);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 max-w-2xl mx-auto">
      <h3 className="text-xl font-bold mb-4">{question.questionText}</h3>
      
      <div className="space-y-3 mb-6">
        {question.options?.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelection(option)}
            className={`w-full text-left p-3 rounded-md border transition-colors ${
              selectedAnswer === option
                ? selectedAnswer === question.correctAnswer
                  ? 'bg-green-100 border-green-500'
                  : 'bg-red-100 border-red-500'
                : selectedAnswer
                ? 'bg-gray-100 border-gray-300'
                : 'hover:bg-gray-50 border-gray-300'
            }`}
            disabled={selectedAnswer !== null}
          >
            <div className="flex items-center justify-between">
              <span>{option}</span>
              {selectedAnswer === option && (
                selectedAnswer === question.correctAnswer ? (
                  <CheckCircle className="text-green-500 h-5 w-5" />
                ) : (
                  <XCircle className="text-red-500 h-5 w-5" />
                )
              )}
            </div>
          </button>
        ))}
      </div>

      {showExplanation && (
        <div className={`p-4 rounded-md ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
          <p className={`text-sm ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
            {isCorrect ? '✓ Correct! ' : '✗ Incorrect. '}
            {question.explanation}
          </p>
          {!isCorrect && (
            <p className="text-sm font-medium mt-2">
              La bonne réponse est : {question.correctAnswer}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizCard;
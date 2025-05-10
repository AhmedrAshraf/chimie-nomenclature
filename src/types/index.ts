export interface Concept {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface ChemicalExample {
  id: string;
  formula: string;
  name: string;
  description?: string;
}

export interface QuizQuestion {
  id: string;
  type: 'formula-to-name' | 'name-to-formula' | 'multiple-choice';
  questionText: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  conceptId: string;
}

export interface UserProgress {
  completedLessons: string[];
  quizScores: Record<string, number>;
  totalPoints: number;
}
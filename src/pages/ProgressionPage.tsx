import React, { useState, useEffect } from 'react';
import { Award, TrendingUp, Star } from 'lucide-react';
import ProgressBar from '../components/ProgressBar';
import { concepts } from '../data/concepts';

const ProgressionPage: React.FC = () => {
  // In a real app, this would be fetched from a database or local storage
  const [progress, setProgress] = useState({
    acides: { completed: 0, total: 5 },
    bases: { completed: 0, total: 4 },
    oxydes: { completed: 0, total: 5 },
    hydroxyles: { completed: 0, total: 4 },
  });
  
  const [overallScore, setOverallScore] = useState(0);
  const [badgeLevel, setBadgeLevel] = useState('Débutant');
  
  useEffect(() => {
    // Simulate loading saved progress
    // In a real app, this would fetch from an API or localStorage
    setTimeout(() => {
      setProgress({
        acides: { completed: 3, total: 5 },
        bases: { completed: 2, total: 4 },
        oxydes: { completed: 4, total: 5 },
        hydroxyles: { completed: 1, total: 4 },
      });
      
      setOverallScore(65);
      setBadgeLevel('Intermédiaire');
    }, 1000);
  }, []);
  
  const totalCompleted = Object.values(progress).reduce((sum, { completed }) => sum + completed, 0);
  const totalItems = Object.values(progress).reduce((sum, { total }) => sum + total, 0);
  const completionPercentage = Math.round((totalCompleted / totalItems) * 100);
  
  const getBadgeColor = (level: string) => {
    switch(level) {
      case 'Débutant': return 'bg-blue-100 text-blue-800';
      case 'Intermédiaire': return 'bg-purple-100 text-purple-800';
      case 'Avancé': return 'bg-amber-100 text-amber-800';
      case 'Expert': return 'bg-rose-100 text-rose-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Votre Progression</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Suivez votre apprentissage et votre maîtrise des différents concepts de nomenclature chimique.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Overall Progress Card */}
          <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-indigo-600" />
              Progression globale
            </h2>
            
            <div className="mb-6">
              <ProgressBar
                value={totalCompleted}
                max={totalItems}
                label="Concepts maîtrisés"
                color="bg-indigo-500"
              />
              <p className="text-center text-sm text-gray-600">
                Vous avez complété {totalCompleted} sur {totalItems} concepts ({completionPercentage}%)
              </p>
            </div>
            
            <h3 className="font-semibold mb-4">Progression par catégorie</h3>
            <div className="space-y-4">
              {concepts.map((concept) => (
                <div key={concept.id}>
                  <ProgressBar
                    value={progress[concept.id as keyof typeof progress]?.completed || 0}
                    max={progress[concept.id as keyof typeof progress]?.total || 0}
                    label={concept.title}
                    color={concept.color.replace('bg-', 'bg-')}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Stats Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Award className="mr-2 h-5 w-5 text-indigo-600" />
              Statistiques
            </h2>
            
            <div className="flex items-center justify-center my-8">
              <div className="w-32 h-32 rounded-full border-8 border-indigo-100 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-3xl font-bold text-indigo-600">{overallScore}%</span>
                  <p className="text-xs text-gray-500">Score moyen</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                <span className="text-gray-700">Niveau actuel</span>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getBadgeColor(badgeLevel)}`}>
                  {badgeLevel}
                </span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                <span className="text-gray-700">Quiz complétés</span>
                <span className="font-semibold">8</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                <span className="text-gray-700">Score le plus élevé</span>
                <span className="font-semibold">90%</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
              <h3 className="font-semibold flex items-center text-indigo-700 mb-2">
                <Star className="h-4 w-4 mr-1 text-indigo-600" />
                Prochain objectif
              </h3>
              <p className="text-sm text-indigo-900">
                Complétez tous les concepts des bases hydroxylées pour débloquer le niveau Avancé !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressionPage;
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Atom, BookOpen, Award, ArrowLeft } from 'lucide-react';
import { concepts, chemicalExamples, nomenclatureRules } from '../data/concepts';
import ChemicalCard from '../components/ChemicalCard';
import { Concept } from '../types';

const ConceptDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [concept, setConcept] = useState<Concept | null>(null);
  const [examples, setExamples] = useState<any[]>([]);
  const [rules, setRules] = useState<string[]>([]);
  
  useEffect(() => {
    if (id) {
      const foundConcept = concepts.find(c => c.id === id);
      if (foundConcept) {
        setConcept(foundConcept);
        setExamples(chemicalExamples[id] || []);
        setRules(nomenclatureRules[id] || []);
      }
    }
  }, [id]);

  if (!concept) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Concept non trouvé. <Link to="/concepts" className="text-indigo-600">Retour aux concepts</Link></p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <Link to="/concepts" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Retour aux concepts
        </Link>
        
        <div className={`${concept.color} text-white rounded-lg p-6 mb-8`}>
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 md:mb-0 md:mr-6">
              <Atom className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">{concept.title}</h1>
              <p className="text-lg text-white/90">{concept.description}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Exemples</h2>
            <div className="space-y-4">
              {examples.map((example) => (
                <ChemicalCard key={example.id} example={example} color={concept.color} />
              ))}
            </div>
            
            <div className="mt-8 flex space-x-4">
              <Link
                to={`/quiz/${concept.id}`}
                className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md"
              >
                <Award className="mr-2 h-5 w-5" />
                Faire le quiz
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <BookOpen className="h-6 w-6 text-indigo-600 mr-2" />
              <h2 className="text-xl font-bold">Règles de nomenclature</h2>
            </div>
            <ul className="space-y-4">
              {rules.map((rule, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 font-semibold rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-gray-700">{rule}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConceptDetailPage;
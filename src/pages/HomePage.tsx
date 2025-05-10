import React from 'react';
import { Link } from 'react-router-dom';
import { Beaker, BookOpen, Award, ArrowRight } from 'lucide-react';
import { concepts } from '../data/concepts';
import ConceptCard from '../components/ConceptCard';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Maîtrisez la Nomenclature Chimique
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Apprenez et révisez la nomenclature des acides, sels, oxydes et bases hydroxylées de façon interactive et ludique
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/concepts" 
                className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold px-6 py-3 rounded-lg transition-colors shadow-md flex items-center justify-center"
              >
                <BookOpen className="h-5 w-5 mr-2" />
                Commencer à apprendre
              </Link>
              <Link 
                to="/quiz" 
                className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md flex items-center justify-center"
              >
                <Award className="h-5 w-5 mr-2" />
                Tester mes connaissances
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Fonctions Chimiques</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {concepts.map((concept) => (
            <ConceptCard key={concept.id} concept={concept} />
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Comment ça marche ?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Apprenez</h3>
              <p className="text-gray-600">
                Explorez les différentes fonctions chimiques et leurs règles de nomenclature
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Beaker className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Pratiquez</h3>
              <p className="text-gray-600">
                Familiarisez-vous avec des exemples concrets et des formules chimiques
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Testez</h3>
              <p className="text-gray-600">
                Évaluez vos connaissances grâce à des quiz interactifs sur chaque sujet
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-indigo-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à commencer ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explorez nos leçons interactives et maîtrisez la nomenclature chimique dès aujourd'hui !
          </p>
          <Link 
            to="/concepts" 
            className="inline-flex items-center bg-white text-indigo-600 hover:bg-indigo-50 font-semibold px-6 py-3 rounded-lg transition-colors shadow-md"
          >
            Découvrir les concepts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
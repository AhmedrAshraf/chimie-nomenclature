import React from 'react';
import { concepts } from '../data/concepts';
import ConceptCard from '../components/ConceptCard';

const ConceptsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Fonctions Chimiques</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explorez les différentes fonctions chimiques pour comprendre la nomenclature en chimie minérale. Chaque section contient des explications, des exemples et des règles de nomenclature.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {concepts.map((concept) => (
            <ConceptCard key={concept.id} concept={concept} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConceptsPage;
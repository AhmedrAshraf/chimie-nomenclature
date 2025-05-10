import React from 'react';
import { Concept } from '../types';
import { Atom, Beaker, FlaskRound as Flask, FlaskRound } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ConceptCardProps {
  concept: Concept;
}

const ConceptCard: React.FC<ConceptCardProps> = ({ concept }) => {
  const getIcon = () => {
    switch (concept.icon) {
      case 'flask':
        return <Flask className="h-8 w-8 text-white" />;
      case 'beaker':
        return <Beaker className="h-8 w-8 text-white" />;
      case 'atom':
        return <Atom className="h-8 w-8 text-white" />;
      case 'flask-round':
        return <FlaskRound className="h-8 w-8 text-white" />;
      default:
        return <Beaker className="h-8 w-8 text-white" />;
    }
  };

  return (
    <Link 
      to={`/concept/${concept.id}`}
      className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 overflow-hidden cursor-pointer"
    >
      <div className={`${concept.color} p-4 flex items-center justify-center`}>
        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
          {getIcon()}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">{concept.title}</h3>
        <p className="text-gray-600 text-sm">{concept.description}</p>
      </div>
    </Link>
  );
};

export default ConceptCard;
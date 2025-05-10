import React from 'react';
import { Beaker, Menu } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <Beaker className="h-7 w-7" />
          <span>ChimieNomencl</span>
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-indigo-200 transition-colors">
            Accueil
          </Link>
          <Link to="/concepts" className="hover:text-indigo-200 transition-colors">
            Concepts
          </Link>
          <Link to="/quiz" className="hover:text-indigo-200 transition-colors">
            Quiz
          </Link>
          <Link to="/progression" className="hover:text-indigo-200 transition-colors">
            Progression
          </Link>
        </div>
        
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-700 py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <Link 
              to="/" 
              className="py-2 px-3 hover:bg-indigo-600 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              to="/concepts" 
              className="py-2 px-3 hover:bg-indigo-600 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Concepts
            </Link>
            <Link 
              to="/quiz" 
              className="py-2 px-3 hover:bg-indigo-600 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Quiz
            </Link>
            <Link 
              to="/progression" 
              className="py-2 px-3 hover:bg-indigo-600 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Progression
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
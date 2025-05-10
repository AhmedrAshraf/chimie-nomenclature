import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {new Date().getFullYear()} ChimieNomencl - Application éducative
            </p>
          </div>
          
          <div className="flex items-center space-x-1 text-sm">
            <span>Créé avec</span>
            <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
            <span>pour l'enseignement de la chimie</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { ChemicalExample } from '../types';

interface ChemicalCardProps {
  example: ChemicalExample;
  color: string;
}

const ChemicalCard: React.FC<ChemicalCardProps> = ({ example, color }) => {
  const bgColor = color.replace('bg-', 'bg-').replace('-500', '-100');
  const borderColor = color.replace('bg-', 'border-');
  const textColor = color.replace('bg-', 'text-').replace('-500', '-700');

  return (
    <div className={`${bgColor} ${borderColor} border-l-4 rounded-md p-4 mb-4 transition-transform hover:scale-102`}>
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold">{example.name}</h3>
        <div className={`${textColor} text-lg font-mono font-bold`}>
          {example.formula}
        </div>
      </div>
      {example.description && (
        <p className="text-gray-700 mt-2 text-sm">{example.description}</p>
      )}
    </div>
  );
};

export default ChemicalCard;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import type { Person } from '../types';

interface PersonCardProps {
  person: Person;
}

const getStatusClass = (durum: string) => {
  const lower = durum.toLocaleLowerCase('tr-TR');
  if (lower.includes('serbest') || lower.includes('bırakıldı')) return 'bg-green-600';
  if (lower.includes('ev hapsi') || lower.includes('adli kontrol')) return 'bg-yellow-600';
  if (lower.includes('gözaltı işlemi')) return 'bg-orange-600';
  return 'bg-red-700';
};

const PersonCard: React.FC<PersonCardProps> = React.memo(({ person }) => {
  return (
    <div className="flex flex-col bg-primary-bg border border-border-color rounded-lg p-6 transition-all duration-300 hover:border-highlight hover:-translate-y-1 hover:shadow-lg hover:shadow-highlight-transparent">
      <h3 className="text-xl font-bold text-white mb-1 font-serif">{person.isim}</h3>
      <p className="flex items-center gap-2 text-gray-300 text-sm mb-4">
        <FontAwesomeIcon icon={faUserTie} />
        <span>{person.görev}</span>
      </p>
      <span className={`mt-auto self-start inline-block py-1 px-3 rounded-full text-xs font-bold text-white ${getStatusClass(person.durum)}`}>
        {person.durum}
      </span>
    </div>
  );
});

export default PersonCard; 
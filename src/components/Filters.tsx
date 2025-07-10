import React from 'react';

interface FiltersProps {
  nameFilter: string;
  statusFilter: string;
  cityFilter: string;
  setNameFilter: (value: string) => void;
  setStatusFilter: (value: string) => void;
  setCityFilter: (value: string) => void;
  allStatuses: string[];
  allCities: string[];
  onReset: () => void;
}

const Filters: React.FC<FiltersProps> = ({
  nameFilter,
  statusFilter,
  cityFilter,
  setNameFilter,
  setStatusFilter,
  setCityFilter,
  allStatuses,
  allCities,
  onReset,
}) => {
  return (
    <div className="flex gap-4 mb-6 flex-wrap items-center">
      <input
        type="text"
        placeholder="İsim veya görevle ara..."
        value={nameFilter}
        aria-label="İsim veya göreve göre filtrele"
        className="flex-grow p-3 bg-secondary-bg border border-border-color text-text-color rounded-md focus:border-highlight focus:ring-highlight focus:ring-1"
        onChange={(e) => setNameFilter(e.target.value)}
      />
      <select
        value={statusFilter}
        aria-label="Duruma göre filtrele"
        className="p-3 bg-secondary-bg border border-border-color text-text-color rounded-md focus:border-highlight focus:ring-highlight focus:ring-1"
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        {allStatuses.map(status => (
          <option key={status} value={status}>{status || 'Tüm Durumlar'}</option>
        ))}
      </select>
      <select
        value={cityFilter}
        aria-label="Şehre göre filtrele"
        className="p-3 bg-secondary-bg border border-border-color text-text-color rounded-md focus:border-highlight focus:ring-highlight focus:ring-1"
        onChange={(e) => setCityFilter(e.target.value)}
      >
        {allCities.map(city => (
          <option key={city} value={city}>{city || 'Tüm Şehirler'}</option>
        ))}
      </select>
      <button 
        onClick={onReset}
        className="p-3 bg-highlight text-white rounded-md hover:bg-red-700 transition-colors"
      >
        Filtreleri Temizle
      </button>
    </div>
  );
};

export default Filters; 
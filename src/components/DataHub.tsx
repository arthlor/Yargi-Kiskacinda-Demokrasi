import React, { useMemo } from 'react';
import { cityCoords } from '../data/persons';
import type { Person } from '../types';
import Filters from './Filters';
import PersonCard from './PersonCard';
import DataMap from './DataMap';

interface DataHubProps {
  persons: Person[];
  filteredPersons: Person[];
  nameFilter: string;
  statusFilter: string;
  cityFilter: string;
  setNameFilter: (value: string) => void;
  setStatusFilter: (value: string) => void;
  setCityFilter: (value: string) => void;
  onResetFilters: () => void;
}

const DataHub: React.FC<DataHubProps> = ({
  persons,
  filteredPersons,
  nameFilter,
  statusFilter,
  cityFilter,
  setNameFilter,
  setStatusFilter,
  setCityFilter,
  onResetFilters,
}) => {
  const allStatuses = useMemo(() => ["", ...new Set(persons.map(p => p.durum).sort((a,b) => a.localeCompare(b)))], [persons]);
  const allCities = useMemo(() => ["", ...new Set(persons.map(p => p.şehir).sort())], [persons]);

  return (
    <section id="data-hub" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 font-serif text-white">Operasyon Haritası ve Kişi Listesi</h2>
        <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-16">
          Kim, nerede, hangi adli süreçte? Verileri filtreleyerek baskının boyutlarını keşfedin.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:flex-1">
            <DataMap cityCoords={cityCoords} setCityFilter={setCityFilter} filteredPersons={filteredPersons} />
          </div>
          <div className="lg:flex-[1.5]">
            <Filters
              nameFilter={nameFilter}
              statusFilter={statusFilter}
              cityFilter={cityFilter}
              setNameFilter={setNameFilter}
              setStatusFilter={setStatusFilter}
              setCityFilter={setCityFilter}
              allStatuses={allStatuses}
              allCities={allCities}
              onReset={onResetFilters}
            />
            <div className="mt-6 max-h-[560px] overflow-y-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-1 custom-scrollbar">
              {filteredPersons.length > 0 ? (
                filteredPersons.map(person => <PersonCard key={person.isim} person={person} />)
              ) : (
                <p className="text-gray-400 col-span-full text-center">Filtreyle eşleşen sonuç bulunamadı.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataHub; 
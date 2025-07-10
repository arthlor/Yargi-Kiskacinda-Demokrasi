import { useState, useMemo } from 'react';
import Conclusion from './components/Conclusion';
import DataHub from './components/DataHub';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import AnalysisSection from './components/AnalysisSection';
import { persons } from './data/persons';
import type { Person } from './types';
import SEO from './components/SEO';
import Footer from './components/Footer';

function App() {
  const [nameFilter, setNameFilter] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [cityFilter, setCityFilter] = useState<string>('');

  const filteredPersons: Person[] = useMemo(() => {
    return persons.filter(p =>
      (p.isim.toLowerCase().includes(nameFilter.toLowerCase()) || p.görev.toLowerCase().includes(nameFilter.toLowerCase())) &&
      (statusFilter ? p.durum === statusFilter : true) &&
      (cityFilter ? p.şehir === cityFilter : true)
    );
  }, [nameFilter, statusFilter, cityFilter]);

  const handleResetFilters = () => {
    setNameFilter('');
    setStatusFilter('');
    setCityFilter('');
  };
  
  return (
    <div className="bg-dark-bg text-text-color font-sans leading-relaxed overflow-x-hidden">
      <SEO />
      <main>
        <Hero />
        <DataHub 
          persons={persons}
          filteredPersons={filteredPersons}
          nameFilter={nameFilter}
          statusFilter={statusFilter}
          cityFilter={cityFilter}
          setNameFilter={setNameFilter}
          setStatusFilter={setStatusFilter}
          setCityFilter={setCityFilter}
          onResetFilters={handleResetFilters}
        />
        <Timeline />
        <AnalysisSection data={persons} />
        <Conclusion />
      </main>
      <Footer />
    </div>
  );
}

export default App;

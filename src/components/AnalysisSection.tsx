import React from 'react';
import type { Person } from '../types';
import StatusDonutChart from './StatusDonutChart';
import CityBarChart from './CityBarChart'; // Import the new component

interface AnalysisSectionProps {
  data: Person[];
}

const AnalysisSection: React.FC<AnalysisSectionProps> = ({ data }) => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          İstatistikler
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">Hukuki Durum Dağılımı</h3>
            <StatusDonutChart data={data} />
          </div>
          <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">Şehirlere Göre Vaka Sayısı</h3>
            <CityBarChart data={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalysisSection; 
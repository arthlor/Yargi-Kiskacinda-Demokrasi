import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { Person } from '../types';

interface CityBarChartProps {
  data: Person[];
}

const CityBarChart: React.FC<CityBarChartProps> = ({ data }) => {
  const chartData = useMemo(() => {
    const cityCounts = data.reduce((acc, person) => {
      acc[person.şehir] = (acc[person.şehir] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });

    return Object.entries(cityCounts)
      .map(([name, value]) => ({ name, 'Vaka Sayısı': value }))
      .sort((a, b) => b['Vaka Sayısı'] - a['Vaka Sayısı']);
  }, [data]);

  return (
    <div style={{ width: '100%', height: 350 }}>
      <ResponsiveContainer>
        <BarChart
          layout="vertical"
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
          <XAxis type="number" stroke="#8892b0" />
          <YAxis dataKey="name" type="category" stroke="#8892b0" width={80} />
          <Tooltip 
            cursor={{fill: 'rgba(255, 255, 255, 0.1)'}}
            contentStyle={{
              background: 'rgba(30, 41, 59, 0.9)',
              borderColor: '#4b5563',
              borderRadius: '0.5rem'
            }}
          />
          <Legend wrapperStyle={{fontSize: '14px'}} />
          <Bar dataKey="Vaka Sayısı" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CityBarChart; 
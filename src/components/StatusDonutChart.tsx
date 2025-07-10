import React, { useMemo } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { Person } from '../types';

interface StatusDonutChartProps {
  data: Person[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF4560'];
const RADIAN = Math.PI / 180;

interface CustomizedLabelProps {
  cx?: number;
  cy?: number;
  midAngle?: number;
  innerRadius?: number;
  outerRadius?: number;
  percent?: number;
}

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: CustomizedLabelProps) => {
  if (cx === undefined || cy === undefined || midAngle === undefined || innerRadius === undefined || outerRadius === undefined || percent === undefined) {
    return null;
  }
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  if (percent * 100 < 5) return null;

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" fontSize="14">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const StatusDonutChart: React.FC<StatusDonutChartProps> = ({ data }) => {
  const { chartData, total } = useMemo(() => {
    const statusCounts = data.reduce((acc, person) => {
      acc[person.durum] = (acc[person.durum] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });

    const sortedData = Object.entries(statusCounts)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value);
      
    return { chartData: sortedData, total: data.length };
  }, [data]);

  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const onPieEnter = (_event: React.MouseEvent, index: number) => {
    setActiveIndex(index);
  };
  
  const onPieLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div style={{ width: '100%', height: 350 }} className="relative">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            innerRadius={80}
            fill="#8884d8"
            dataKey="value"
            paddingAngle={3}
            onMouseEnter={onPieEnter}
            onMouseLeave={onPieLeave}
          >
            {chartData.map((_, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={COLORS[index % COLORS.length]} 
                stroke={'#1e293b'}
                strokeWidth={2}
                opacity={activeIndex === null || activeIndex === index ? 1 : 0.4}
              />
            ))}
          </Pie>
          <Tooltip 
            cursor={{ stroke: 'white', strokeWidth: 1, strokeDasharray: '5 5' }}
            contentStyle={{
              backgroundColor: 'rgba(30, 41, 59, 0.95)',
              borderColor: '#4b5563',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
            labelStyle={{ color: '#cbd5e1', fontWeight: 'bold' }}
            itemStyle={{ color: '#94a3b8' }}
          />
          <Legend
            formatter={(value) => <span className="text-gray-300">{value}</span>}
            wrapperStyle={{fontSize: '14px', paddingTop: '20px'}}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
          <p className="text-5xl font-bold text-white">{total}</p>
          <p className="text-sm text-gray-400">Toplam Vaka</p>
      </div>
    </div>
  );
};

export default StatusDonutChart; 
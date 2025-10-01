import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
interface MonthlyTrendsChartProps {
  dateRange: string;
}
export const MonthlyTrendsChart = ({
  dateRange
}: MonthlyTrendsChartProps) => {
  const [activeMetric, setActiveMetric] = useState('all');
  // Sample data
  const data = [{
    name: 'Jan',
    income: 12500,
    expenses: 8200,
    profit: 4300
  }, {
    name: 'Feb',
    income: 15800,
    expenses: 9100,
    profit: 6700
  }, {
    name: 'Mar',
    income: 14200,
    expenses: 8500,
    profit: 5700
  }, {
    name: 'Apr',
    income: 16500,
    expenses: 10200,
    profit: 6300
  }, {
    name: 'May',
    income: 18200,
    expenses: 11500,
    profit: 6700
  }, {
    name: 'Jun',
    income: 17500,
    expenses: 9800,
    profit: 7700
  }, {
    name: 'Jul',
    income: 19800,
    expenses: 10500,
    profit: 9300
  }, {
    name: 'Aug',
    income: 21200,
    expenses: 12000,
    profit: 9200
  }, {
    name: 'Sep',
    income: 20500,
    expenses: 11300,
    profit: 9200
  }, {
    name: 'Oct',
    income: 22800,
    expenses: 12500,
    profit: 10300
  }, {
    name: 'Nov',
    income: 24500,
    expenses: 13200,
    profit: 11300
  }, {
    name: 'Dec',
    income: 23800,
    expenses: 13500,
    profit: 10300
  }];
  const formatCurrency = value => {
    return `$${value.toLocaleString()}`;
  };
  const metrics = [{
    id: 'all',
    label: 'All Metrics'
  }, {
    id: 'income',
    label: 'Income'
  }, {
    id: 'expenses',
    label: 'Expenses'
  }, {
    id: 'profit',
    label: 'Profit'
  }];
  return <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Monthly Financial Trends
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            12-month performance overview
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {metrics.map(metric => <button key={metric.id} className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${activeMetric === metric.id ? 'bg-yellow-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`} onClick={() => setActiveMetric(metric.id)}>
              {metric.label}
            </button>)}
        </div>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#9ca3af" fontSize={12} tickFormatter={formatCurrency} tickLine={false} axisLine={false} />
            <Tooltip formatter={value => [formatCurrency(value), '']} contentStyle={{
            borderRadius: '4px',
            border: 'none',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            fontSize: '12px'
          }} />
            <Legend wrapperStyle={{
            fontSize: '12px',
            paddingTop: '10px'
          }} />
            {(activeMetric === 'all' || activeMetric === 'income') && <Line type="monotone" dataKey="income" name="Income" stroke="#F8C52C" strokeWidth={3} dot={{
            r: 4,
            fill: '#F8C52C',
            strokeWidth: 0
          }} activeDot={{
            r: 6,
            fill: '#F8C52C',
            stroke: '#fff',
            strokeWidth: 2
          }} />}
            {(activeMetric === 'all' || activeMetric === 'expenses') && <Line type="monotone" dataKey="expenses" name="Expenses" stroke="#000000" strokeWidth={3} dot={{
            r: 4,
            fill: '#000000',
            strokeWidth: 0
          }} activeDot={{
            r: 6,
            fill: '#000000',
            stroke: '#fff',
            strokeWidth: 2
          }} />}
            {(activeMetric === 'all' || activeMetric === 'profit') && <Line type="monotone" dataKey="profit" name="Profit" stroke="#4B5563" strokeWidth={3} dot={{
            r: 4,
            fill: '#4B5563',
            strokeWidth: 0
          }} activeDot={{
            r: 6,
            fill: '#4B5563',
            stroke: '#fff',
            strokeWidth: 2
          }} />}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>;
};
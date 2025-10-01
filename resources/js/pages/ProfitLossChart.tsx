import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
export const ProfitLossChart = () => {
  const data = [{
    name: 'Jan',
    profit: 8500
  }, {
    name: 'Feb',
    profit: 12000
  }, {
    name: 'Mar',
    profit: 9500
  }, {
    name: 'Apr',
    profit: 15000
  }, {
    name: 'May',
    profit: 11000
  }, {
    name: 'Jun',
    profit: 13500
  }, {
    name: 'Jul',
    profit: 17000
  }, {
    name: 'Aug',
    profit: 14000
  }, {
    name: 'Sep',
    profit: 17500
  }, {
    name: 'Oct',
    profit: 13000
  }, {
    name: 'Nov',
    profit: 15500
  }, {
    name: 'Dec',
    profit: 13000
  }];
  const formatCurrency = value => {
    return `$${value.toLocaleString()}`;
  };
  return <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Monthly Profit/Loss
        </h2>
        <div className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
          2024
        </div>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{
          top: 5,
          right: 20,
          left: 20,
          bottom: 5
        }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#9ca3af" fontSize={12} tickFormatter={formatCurrency} tickLine={false} axisLine={false} tickCount={6} />
            <Tooltip formatter={value => [`${formatCurrency(value)}`, 'Profit']} contentStyle={{
            borderRadius: '4px',
            border: 'none',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            fontSize: '12px'
          }} />
            <Line type="monotone" dataKey="profit" stroke="#F8C52C" strokeWidth={3} dot={{
            r: 4,
            fill: '#F8C52C',
            strokeWidth: 0
          }} activeDot={{
            r: 6,
            fill: '#F8C52C',
            stroke: '#fff',
            strokeWidth: 2
          }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>;
};
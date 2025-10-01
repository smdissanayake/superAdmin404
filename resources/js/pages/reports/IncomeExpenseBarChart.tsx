import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
interface IncomeExpenseBarChartProps {
  dateRange: string;
}
export const IncomeExpenseBarChart = ({
  dateRange
}: IncomeExpenseBarChartProps) => {
  // Sample data
  const data = [{
    name: 'Jan',
    income: 12500,
    expenses: 8200
  }, {
    name: 'Feb',
    income: 15800,
    expenses: 9100
  }, {
    name: 'Mar',
    income: 14200,
    expenses: 8500
  }, {
    name: 'Apr',
    income: 16500,
    expenses: 10200
  }, {
    name: 'May',
    income: 18200,
    expenses: 11500
  }, {
    name: 'Jun',
    income: 17500,
    expenses: 9800
  }];
  const formatCurrency = value => {
    return `$${value.toLocaleString()}`;
  };
  return <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Income vs Expenses
        </h2>
        <div className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
          {dateRange}
        </div>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{
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
            <Bar dataKey="income" name="Income" fill="#F8C52C" radius={[4, 4, 0, 0]} />
            <Bar dataKey="expenses" name="Expenses" fill="#000000" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>;
};
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
interface ExpenseCategoriesPieChartProps {
  dateRange: string;
}
export const ExpenseCategoriesPieChart = ({
  dateRange
}: ExpenseCategoriesPieChartProps) => {
  const data = [{
    name: 'Salaries',
    value: 42,
    color: '#F8C52C'
  }, {
    name: 'Marketing',
    value: 18,
    color: '#000000'
  }, {
    name: 'Office Supplies',
    value: 12,
    color: '#6B7280'
  }, {
    name: 'Software',
    value: 15,
    color: '#D1D5DB'
  }, {
    name: 'Utilities',
    value: 8,
    color: '#E5E7EB'
  }, {
    name: 'Other',
    value: 5,
    color: '#F3F4F6'
  }];
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
    return percent > 0.05 ? <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight="bold">
        {`${(percent * 100).toFixed(0)}%`}
      </text> : null;
  };
  const CustomTooltip = ({
    active,
    payload
  }) => {
    if (active && payload && payload.length) {
      return <div className="bg-white p-2 border border-gray-200 shadow-sm rounded-md text-xs">
          <p className="font-semibold">{payload[0].name}</p>
          <p>{payload[0].value}% of expenses</p>
        </div>;
    }
    return null;
  };
  const CustomLegend = props => {
    const {
      payload
    } = props;
    return <ul className="flex flex-wrap justify-center mt-4 gap-4">
        {payload.map((entry, index) => <li key={`item-${index}`} className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2" style={{
          backgroundColor: entry.color
        }}></div>
            <span className="text-xs text-gray-600">{entry.value}</span>
          </li>)}
      </ul>;
  };
  return <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Expense Categories
        </h2>
        <div className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
          {dateRange}
        </div>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" labelLine={false} label={renderCustomizedLabel} outerRadius={90} innerRadius={50} fill="#8884d8" dataKey="value" stroke="none">
              {data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>;
};
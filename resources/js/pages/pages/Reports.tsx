import React, { useState } from 'react';
import { AnalyticsSummary } from '../reports/AnalyticsSummary';
import { IncomeExpenseBarChart } from '../reports/IncomeExpenseBarChart';
import { ExpenseCategoriesPieChart } from '../reports/ExpenseCategoriesPieChart';
import { MonthlyTrendsChart } from '../reports/MonthlyTrendsChart';
import { DownloadIcon, FilterIcon } from 'lucide-react';
export const Reports = () => {
  const [dateRange, setDateRange] = useState('This Year');
  const dateRangeOptions = ['This Month', 'Last Month', 'This Quarter', 'This Year'];
  return <div className="min-h-screen bg-gray-50 pb-8">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-800">
            Reports & Analytics
          </h1>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <select value={dateRange} onChange={e => setDateRange(e.target.value)} className="appearance-none bg-gray-100 text-gray-700 py-2 pl-4 pr-10 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500 text-sm">
                {dateRangeOptions.map(option => <option key={option} value={option}>
                    {option}
                  </option>)}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
            <button className="p-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
              <div size={18} />
            </button>
            <button className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors">
              <DownloadIcon size={16} className="mr-2" />
              Export Report
            </button>
          </div>
        </div>
      </header>
      {/* Dashboard Content */}
      <div className="px-6 py-4">
        {/* KPI Summary */}
        <AnalyticsSummary dateRange={dateRange} />
        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <IncomeExpenseBarChart dateRange={dateRange} />
          <ExpenseCategoriesPieChart dateRange={dateRange} />
        </div>
        {/* Monthly Trends */}
        <div className="mt-6">
          <MonthlyTrendsChart dateRange={dateRange} />
        </div>
      </div>
    </div>;
};
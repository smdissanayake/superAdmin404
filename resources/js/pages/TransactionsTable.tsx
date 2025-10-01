import React from 'react';
export const TransactionsTable = () => {
  const transactions = [{
    id: 1,
    date: 'Dec 15',
    description: 'Office Supplies Purchase',
    category: 'Office',
    amount: -1250,
    categoryColor: 'bg-blue-100 text-blue-600'
  }, {
    id: 2,
    date: 'Dec 14',
    description: 'Client Payment Received',
    category: 'Revenue',
    amount: 5800,
    categoryColor: 'bg-green-100 text-green-600'
  }, {
    id: 3,
    date: 'Dec 13',
    description: 'Marketing Campaign',
    category: 'Marketing',
    amount: -2400,
    categoryColor: 'bg-purple-100 text-purple-600'
  }, {
    id: 4,
    date: 'Dec 12',
    description: 'Software License Renewal',
    category: 'Software',
    amount: -890,
    categoryColor: 'bg-blue-100 text-blue-600'
  }, {
    id: 5,
    date: 'Dec 11',
    description: 'Consulting Services',
    category: 'Revenue',
    amount: 3200,
    categoryColor: 'bg-green-100 text-green-600'
  }];
  const formatCurrency = amount => {
    const prefix = amount < 0 ? '-' : '+';
    return `${prefix}$${Math.abs(amount).toLocaleString()}`;
  };
  return <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-6 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">
          Recent Transactions
        </h2>
        <a href="#" className="text-sm text-yellow-600 hover:text-yellow-700 font-medium">
          View All
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map(transaction => <tr key={transaction.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {transaction.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {transaction.description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${transaction.categoryColor}`}>
                    {transaction.category}
                  </span>
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm text-right font-medium ${transaction.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
                  {formatCurrency(transaction.amount)}
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>;
};
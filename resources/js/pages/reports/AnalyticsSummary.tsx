import React from 'react';
import { TrendingUpIcon, TrendingDownIcon, DollarSignIcon, PercentIcon } from 'lucide-react';
interface AnalyticsSummaryProps {
  dateRange: string;
}
export const AnalyticsSummary = ({
  dateRange
}: AnalyticsSummaryProps) => {
  const cards = [{
    title: 'Total Income',
    value: '$78,450',
    change: '+14.2%',
    changeType: 'positive',
    period: 'vs previous period',
    icon: <DollarSignIcon />,
    color: 'green'
  }, {
    title: 'Total Expenses',
    value: '$42,680',
    change: '-3.8%',
    changeType: 'positive',
    period: 'vs previous period',
    icon: <DollarSignIcon />,
    color: 'red'
  }, {
    title: 'Net Profit',
    value: '$35,770',
    change: '+22.5%',
    changeType: 'positive',
    period: 'vs previous period',
    icon: <DollarSignIcon />,
    color: 'yellow'
  }, {
    title: 'Profit Margin',
    value: '45.6%',
    change: '+5.3%',
    changeType: 'positive',
    period: 'vs previous period',
    icon: <PercentIcon />,
    color: 'blue'
  }];
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => <div key={index} className="bg-white rounded-lg shadow-sm p-6 relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">{card.title}</p>
              <h3 className={`text-2xl font-bold mt-1 ${card.color === 'green' ? 'text-green-600' : card.color === 'red' ? 'text-red-600' : card.color === 'yellow' ? 'text-yellow-600' : 'text-blue-600'}`}>
                {card.value}
              </h3>
              <p className="text-xs mt-2">
                <span className={`inline-flex items-center ${card.changeType === 'positive' ? 'text-green-600' : card.changeType === 'negative' ? 'text-red-600' : 'text-gray-600'}`}>
                  {card.changeType === 'positive' ? <TrendingUpIcon size={14} className="mr-1" /> : card.changeType === 'negative' ? <TrendingDownIcon size={14} className="mr-1" /> : null}
                  {card.change}
                </span>{' '}
                {card.period}
              </p>
            </div>
            <div className={`p-2 rounded-md ${card.color === 'green' ? 'bg-green-100 text-green-600' : card.color === 'red' ? 'bg-red-100 text-red-600' : card.color === 'yellow' ? 'bg-yellow-100 text-yellow-600' : 'bg-blue-100 text-blue-600'}`}>
              {card.icon}
            </div>
          </div>
          <div className={`absolute bottom-0 right-0 w-20 h-20 rounded-tl-full opacity-10 ${card.color === 'green' ? 'bg-green-500' : card.color === 'red' ? 'bg-red-500' : card.color === 'yellow' ? 'bg-yellow-500' : 'bg-blue-500'}`}></div>
        </div>)}
    </div>;
};
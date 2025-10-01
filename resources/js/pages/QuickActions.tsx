import React from 'react';
import { UserPlusIcon, FileTextIcon, PlusCircleIcon } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
export const QuickActions = () => {
  // const navigate = useNavigate();
  const actions = [{
    label: 'Add Employee',
    icon: <UserPlusIcon size={18} />,
    color: 'bg-yellow-500 hover:bg-yellow-600 text-white',
    border: 'border-yellow-600',
    // onClick: () => navigate('/add-employee')
  }, {
    label: 'Add Expense',
    icon: <PlusCircleIcon size={18} />,
    color: 'bg-black hover:bg-gray-800 text-white',
    border: 'border-gray-900',
    onClick: () => {}
  }, {
    label: 'Generate Report',
    icon: <FileTextIcon size={18} />,
    color: 'bg-white hover:bg-gray-50 text-gray-800 border border-gray-200',
    border: '',
    onClick: () => {}
  }];
  return <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Quick Actions
      </h2>
      <div className="space-y-3">
        {actions.map((action, index) => <button key={index} onClick={action.onClick} className={`w-full flex items-center justify-center py-3 px-4 rounded-lg ${action.color} transition-colors duration-200 ${action.border}`}>
            <span className="mr-2">{action.icon}</span>
            <span>{action.label}</span>
          </button>)}
      </div>
      <div className="mt-8">
        <h3 className="text-sm font-medium text-gray-700 mb-3">
          Recent Activity
        </h3>
        <div className="space-y-3">
          <div className="flex items-start">
            <div className="w-2 h-2 mt-1.5 rounded-full bg-green-500 mr-2"></div>
            <div>
              <p className="text-xs text-gray-600">New employee onboarded</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 mt-1.5 rounded-full bg-yellow-500 mr-2"></div>
            <div>
              <p className="text-xs text-gray-600">Monthly report generated</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 mt-1.5 rounded-full bg-blue-500 mr-2"></div>
            <div>
              <p className="text-xs text-gray-600">Expense approved</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
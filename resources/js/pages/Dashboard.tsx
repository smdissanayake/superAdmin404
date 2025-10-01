import React, { useState } from 'react';
import { BellIcon, UserIcon } from 'lucide-react';
import { ExpenseCategoriesChart } from './ExpenseCategoriesChart';
import { ProfitLossChart } from './ProfitLossChart';
import { QuickActions } from './QuickActions';
import { SummaryCards } from './SummaryCards';
import { TransactionsTable } from './TransactionsTable';
import { Sidebar } from './Sidebar';

const Dashboard = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <Sidebar 
                collapsed={sidebarCollapsed} 
                setCollapsed={setSidebarCollapsed} 
            />
            
            {/* Main Content */}
            <div className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
                <div className="min-h-screen bg-gray-50 pb-8">
                    {/* Header */}
                    <header className="bg-white shadow-sm">
                        <div className="flex items-center justify-between px-6 py-4">
                            <h1 className="text-2xl font-bold text-gray-800">
                                Admin Dashboard
                            </h1>
                            <div className="flex items-center space-x-4">
                                <button className="relative p-2 text-gray-500 hover:text-gray-700">
                                    <BellIcon size={20} />
                                    <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                                </button>
                                <div className="flex items-center">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                                        <UserIcon size={16} className="text-gray-600" />
                                    </div>
                                    <span className="ml-2 text-sm text-gray-700">
                                        John Admin
                                    </span>
                                </div>
                            </div>
                        </div>
                    </header>
                    
                    {/* Dashboard Content */}
                    <div className="px-6 py-4">
                        <SummaryCards />
                        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                            <ProfitLossChart />
                            <ExpenseCategoriesChart />
                        </div>
                        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
                            <div className="lg:col-span-2">
                                <TransactionsTable />
                            </div>
                            <div>
                                <QuickActions />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;

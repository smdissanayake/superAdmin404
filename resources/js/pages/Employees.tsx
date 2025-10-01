import React, { useState } from 'react';
import { EmployeeTable } from './EmployeeTable';
import { EmployeeFilter } from './EmployeeFilter';
import { PlusIcon, FilterIcon } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { Sidebar } from './Sidebar';

const Employees = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);
    const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Sample departments data
    const departments = ['Engineering', 'Marketing', 'Sales', 'Human Resources', 'Finance', 'Operations', 'Customer Support'];

    const toggleFilter = () => {
        setFilterOpen(!filterOpen);
    };

    const handleDepartmentChange = (department: string) => {
        if (selectedDepartments.includes(department)) {
            setSelectedDepartments(selectedDepartments.filter(d => d !== department));
        } else {
            setSelectedDepartments([...selectedDepartments, department]);
        }
    };

    const clearFilters = () => {
        setSelectedDepartments([]);
        setSearchTerm('');
    };

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
                    <div className="flex justify-between items-center px-6 py-4">
                        <h1 className="text-2xl font-bold text-gray-800">
                            Employee Management
                        </h1>
                        <div className="flex items-center space-x-3">
                            <button 
                                onClick={toggleFilter} 
                                className="p-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 md:hidden"
                            >
                                <FilterIcon size={20} />
                            </button>
                            <Link 
                                href="/add-employee" 
                                className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
                            >
                                <PlusIcon size={18} className="mr-2" />
                                Add Employee
                            </Link>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <div className="px-6 py-4">
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Sidebar Filter - Hidden on mobile, shown with button */}
                        <div className={`md:block ${filterOpen ? 'block' : 'hidden'} md:w-64 bg-white rounded-lg shadow-sm p-4 h-fit`}>
                            <EmployeeFilter 
                                departments={departments}
                                selectedDepartments={selectedDepartments}
                                handleDepartmentChange={handleDepartmentChange}
                                searchTerm={searchTerm}
                                setSearchTerm={setSearchTerm}
                                clearFilters={clearFilters}
                            />
                        </div>

                        {/* Employee Table */}
                        <div className="flex-1">
                            <EmployeeTable 
                                selectedDepartments={selectedDepartments}
                                searchTerm={searchTerm}
                            />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Employees;

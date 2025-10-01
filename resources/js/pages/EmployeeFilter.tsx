import React from 'react';
import { SearchIcon, XIcon } from 'lucide-react';
interface EmployeeFilterProps {
  departments: string[];
  selectedDepartments: string[];
  handleDepartmentChange: (department: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  clearFilters: () => void;
}
export const EmployeeFilter = ({
  departments,
  selectedDepartments,
  handleDepartmentChange,
  searchTerm,
  setSearchTerm,
  clearFilters
}: EmployeeFilterProps) => {
  return <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-md font-semibold text-gray-800">Filters</h3>
        {(selectedDepartments.length > 0 || searchTerm) && <button onClick={clearFilters} className="text-xs text-yellow-600 hover:text-yellow-700">
            Clear all
          </button>}
      </div>
      {/* Search */}
      <div className="mb-6">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon size={16} className="text-gray-400" />
          </div>
          <input type="text" id="search" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500" placeholder="Search employees..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          {searchTerm && <button className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={() => setSearchTerm('')}>
              <XIcon size={16} className="text-gray-400 hover:text-gray-500" />
            </button>}
        </div>
      </div>
      {/* Departments */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Department</h4>
        <div className="space-y-2">
          {departments.map(department => <div key={department} className="flex items-center">
              <input id={`department-${department}`} name={`department-${department}`} type="checkbox" className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded" checked={selectedDepartments.includes(department)} onChange={() => handleDepartmentChange(department)} />
              <label htmlFor={`department-${department}`} className="ml-2 block text-sm text-gray-700">
                {department}
              </label>
            </div>)}
        </div>
      </div>
    </div>;
};
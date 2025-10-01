import React from 'react';
import { EditIcon, Trash2Icon, MoreHorizontalIcon, CheckCircleIcon, XCircleIcon } from 'lucide-react';
interface EmployeeTableProps {
  selectedDepartments: string[];
  searchTerm: string;
}
export const EmployeeTable = ({
  selectedDepartments,
  searchTerm
}: EmployeeTableProps) => {
  // Sample employee data
  const employees = [{
    id: 'EMP001',
    name: 'Jane Smith',
    role: 'Senior Developer',
    department: 'Engineering',
    salary: '$95,000',
    status: 'Active'
  }, {
    id: 'EMP002',
    name: 'John Doe',
    role: 'Marketing Manager',
    department: 'Marketing',
    salary: '$85,000',
    status: 'Active'
  }, {
    id: 'EMP003',
    name: 'Robert Johnson',
    role: 'Sales Executive',
    department: 'Sales',
    salary: '$78,000',
    status: 'Active'
  }, {
    id: 'EMP004',
    name: 'Emily Davis',
    role: 'HR Specialist',
    department: 'Human Resources',
    salary: '$72,000',
    status: 'On Leave'
  }, {
    id: 'EMP005',
    name: 'Michael Wilson',
    role: 'Financial Analyst',
    department: 'Finance',
    salary: '$82,000',
    status: 'Active'
  }, {
    id: 'EMP006',
    name: 'Sarah Thompson',
    role: 'Operations Manager',
    department: 'Operations',
    salary: '$88,000',
    status: 'Active'
  }, {
    id: 'EMP007',
    name: 'David Anderson',
    role: 'Customer Support Lead',
    department: 'Customer Support',
    salary: '$65,000',
    status: 'Inactive'
  }, {
    id: 'EMP008',
    name: 'Jennifer Martinez',
    role: 'UI/UX Designer',
    department: 'Engineering',
    salary: '$79,000',
    status: 'Active'
  }];
  // Filter employees based on selected departments and search term
  const filteredEmployees = employees.filter(employee => {
    const departmentMatch = selectedDepartments.length === 0 || selectedDepartments.includes(employee.department);
    const searchMatch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) || employee.id.toLowerCase().includes(searchTerm.toLowerCase()) || employee.role.toLowerCase().includes(searchTerm.toLowerCase());
    return departmentMatch && searchMatch;
  });
  return <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-6 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">
          Employee Directory
        </h2>
        <div className="text-sm text-gray-500">
          {filteredEmployees.length} employees
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Employee ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Department
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Salary
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredEmployees.map(employee => <tr key={employee.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {employee.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {employee.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {employee.role}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                    {employee.department}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {employee.salary}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {employee.status === 'Active' ? <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700 flex items-center w-fit">
                      <CheckCircleIcon size={12} className="mr-1" /> Active
                    </span> : employee.status === 'On Leave' ? <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700 flex items-center w-fit">
                      <MoreHorizontalIcon size={12} className="mr-1" /> On Leave
                    </span> : <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-700 flex items-center w-fit">
                      <XCircleIcon size={12} className="mr-1" /> Inactive
                    </span>}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end space-x-2">
                    <button className="p-1 text-blue-600 hover:text-blue-800">
                      <EditIcon size={16} />
                    </button>
                    <button className="p-1 text-red-600 hover:text-red-800">
                      <Trash2Icon size={16} />
                    </button>
                  </div>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
      {filteredEmployees.length === 0 && <div className="text-center py-10">
          <p className="text-gray-500">No employees match your filters</p>
        </div>}
    </div>;
};
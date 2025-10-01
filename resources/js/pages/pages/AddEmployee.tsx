import React, { useState } from 'react';
import { ArrowLeftIcon, SaveIcon } from 'lucide-react';
import { Link } from '@inertiajs/react';
export const AddEmployee = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contact: '',
    role: '',
    department: '',
    salary: '',
    joiningDate: ''
  });
  // Sample departments data (same as in EmployeeManagement)
  const departments = ['Engineering', 'Marketing', 'Sales', 'Human Resources', 'Finance', 'Operations', 'Customer Support'];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save the employee data
    console.log('Employee data:', formData);
    // Then redirect back to employees list (handled server-side when implemented)
  };
  return <div className="min-h-screen bg-gray-50 pb-8">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-800">Add New Employee</h1>
          <Link href="/employees" className="flex items-center text-gray-600 hover:text-gray-800">
            <ArrowLeftIcon size={16} className="mr-1" />
            Back to Employees
          </Link>
        </div>
      </header>
      {/* Form Content */}
      <div className="px-6 py-6">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500" required />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500" required />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Number
                </label>
                <input type="tel" name="contact" value={formData.contact} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500" required />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role
                </label>
                <input type="text" name="role" value={formData.role} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500" required />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Department
                </label>
                <select name="department" value={formData.department} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 bg-white" required>
                  <option value="">Select Department</option>
                  {departments.map(dept => <option key={dept} value={dept}>
                      {dept}
                    </option>)}
                </select>
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Salary
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <span className="text-gray-500">$</span>
                  </div>
                  <input type="number" name="salary" value={formData.salary} onChange={handleChange} className="w-full pl-8 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500" required />
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Joining Date
                </label>
                <input type="date" name="joiningDate" value={formData.joiningDate} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500" required />
              </div>
            </div>
            <div className="mt-8 flex justify-end space-x-4">
              <Link href="/employees" className="px-5 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
                Cancel
              </Link>
              <button type="submit" className="flex items-center px-5 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none">
                <SaveIcon size={18} className="mr-2" />
                Save Employee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>;
};
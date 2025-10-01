import React, { useState } from 'react';
import { ArrowLeftIcon, SaveIcon } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { Sidebar } from './Sidebar';

const AddEmployee = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contact: '',
        role: '',
        department: '',
        salary: '',
        joiningDate: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Submit later - stay on page for now
    };

    return (
        <div className="min-h-screen bg-gray-50 flex">
            <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />

            <div
                className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'ml-20' : 'ml-64'}`}
            >
                <div className="min-h-screen bg-gray-50 pb-8">
                    <header className="bg-white shadow-sm">
                        <div className="flex items-center justify-between px-6 py-4">
                            <div className="flex items-center gap-3">
                                <Link
                                    href="/employees"
                                    className="rounded-md bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
                                >
                                    <ArrowLeftIcon size={18} />
                                </Link>
                                <h1 className="text-2xl font-bold text-gray-800">
                                    Add Employee
                                </h1>
                            </div>
                            <button
                                form="add-employee-form"
                                className="flex items-center rounded-md bg-yellow-500 px-4 py-2 text-white transition-colors hover:bg-yellow-600"
                            >
                                <SaveIcon size={18} className="mr-2" /> Save
                            </button>
                        </div>
                    </header>

                    <div className="px-6 py-4">
                        <form
                            id="add-employee-form"
                            onSubmit={handleSubmit}
                            className="grid grid-cols-1 gap-6 rounded-lg bg-white p-6 shadow-sm md:grid-cols-2"
                        >
                            <div>
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                />
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                />
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Contact
                                </label>
                                <input
                                    type="tel"
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                />
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Role
                                </label>
                                <input
                                    type="text"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                />
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Department
                                </label>
                                <input
                                    type="text"
                                    name="department"
                                    value={formData.department}
                                    onChange={handleChange}
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                />
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Salary
                                </label>
                                <input
                                    type="number"
                                    name="salary"
                                    value={formData.salary}
                                    onChange={handleChange}
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                />
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Joining Date
                                </label>
                                <input
                                    type="date"
                                    name="joiningDate"
                                    value={formData.joiningDate}
                                    onChange={handleChange}
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEmployee;



import React, { useState } from 'react';
import { 
    FileText, 
    Upload, 
    Download, 
    Search, 
    Filter, 
    MoreVertical,
    Eye,
    Edit,
    Trash2
} from 'lucide-react';
import { Sidebar } from './Sidebar';

const Documents = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterOpen, setFilterOpen] = useState(false);

    // Sample documents data
    const documents = [
        {
            id: 1,
            name: 'Employee Handbook 2024.pdf',
            type: 'PDF',
            size: '2.4 MB',
            uploadedBy: 'HR Department',
            uploadDate: '2024-01-15',
            category: 'HR Documents'
        },
        {
            id: 2,
            name: 'Company Policy Manual.docx',
            type: 'DOCX',
            size: '1.8 MB',
            uploadedBy: 'Admin',
            uploadDate: '2024-01-10',
            category: 'Policies'
        },
        {
            id: 3,
            name: 'Financial Report Q1 2024.xlsx',
            type: 'XLSX',
            size: '3.2 MB',
            uploadedBy: 'Finance Team',
            uploadDate: '2024-01-05',
            category: 'Financial'
        },
        {
            id: 4,
            name: 'Meeting Minutes - Board Meeting.pdf',
            type: 'PDF',
            size: '856 KB',
            uploadedBy: 'Secretary',
            uploadDate: '2024-01-03',
            category: 'Meeting Notes'
        }
    ];

    const categories = ['All', 'HR Documents', 'Policies', 'Financial', 'Meeting Notes', 'Contracts'];

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
                            Document Management
                        </h1>
                        <div className="flex items-center space-x-3">
                            <button className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors">
                                <Upload size={18} className="mr-2" />
                                Upload Document
                            </button>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <div className="px-6 py-4">
                    {/* Search and Filter Bar */}
                    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1 relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search documents..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                />
                            </div>
                            <button 
                                onClick={() => setFilterOpen(!filterOpen)}
                                className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                            >
                                <Filter size={18} className="mr-2" />
                                Filter
                            </button>
                        </div>

                        {/* Filter Options */}
                        {filterOpen && (
                            <div className="mt-4 pt-4 border-t border-gray-200">
                                <div className="flex flex-wrap gap-2">
                                    {categories.map(category => (
                                        <button
                                            key={category}
                                            className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-yellow-100 hover:text-yellow-700"
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Documents Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {documents.map((doc) => (
                            <div key={doc.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center">
                                        <div className="p-2 bg-red-100 rounded-lg">
                                            <FileText className="text-red-600" size={20} />
                                        </div>
                                        <div className="ml-3">
                                            <h3 className="font-medium text-gray-900 truncate">{doc.name}</h3>
                                            <p className="text-sm text-gray-500">{doc.type} • {doc.size}</p>
                                        </div>
                                    </div>
                                    <button className="p-1 text-gray-400 hover:text-gray-600">
                                        <MoreVertical size={16} />
                                    </button>
                                </div>
                                
                                <div className="space-y-1 mb-4">
                                    <p className="text-sm text-gray-600">
                                        <span className="font-medium">Category:</span> {doc.category}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <span className="font-medium">Uploaded by:</span> {doc.uploadedBy}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <span className="font-medium">Date:</span> {doc.uploadDate}
                                    </p>
                                </div>

                                <div className="flex space-x-2">
                                    <button className="flex-1 flex items-center justify-center px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                                        <Eye size={16} className="mr-1" />
                                        View
                                    </button>
                                    <button className="flex-1 flex items-center justify-center px-3 py-2 text-sm bg-yellow-100 text-yellow-700 rounded-md hover:bg-yellow-200">
                                        <Download size={16} className="mr-1" />
                                        Download
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Documents;

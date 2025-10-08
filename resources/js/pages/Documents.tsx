import {
    Download,
    Eye,
    FileText,
    Filter,
    MoreVertical,
    Search,
    Upload,
} from 'lucide-react';
import { useState } from 'react';
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
            category: 'HR Documents',
        },
        {
            id: 2,
            name: 'Company Policy Manual.docx',
            type: 'DOCX',
            size: '1.8 MB',
            uploadedBy: 'Admin',
            uploadDate: '2024-01-10',
            category: 'Policies',
        },
        {
            id: 3,
            name: 'Financial Report Q1 2024.xlsx',
            type: 'XLSX',
            size: '3.2 MB',
            uploadedBy: 'Finance Team',
            uploadDate: '2024-01-05',
            category: 'Financial',
        },
        {
            id: 4,
            name: 'Meeting Minutes - Board Meeting.pdf',
            type: 'PDF',
            size: '856 KB',
            uploadedBy: 'Secretary',
            uploadDate: '2024-01-03',
            category: 'Meeting Notes',
        },
    ];

    const categories = [
        'All',
        'HR Documents',
        'Policies',
        'Financial',
        'Meeting Notes',
        'Contracts',
    ];

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar
                collapsed={sidebarCollapsed}
                setCollapsed={setSidebarCollapsed}
            />

            {/* Main Content */}
            <div
                className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'ml-20' : 'ml-64'}`}
            >
                <div className="min-h-screen bg-gray-50 pb-8">
                    {/* Header */}
                    <header className="bg-white shadow-sm">
                        <div className="flex items-center justify-between px-6 py-4">
                            <h1 className="text-2xl font-bold text-gray-800">
                                Document Management
                            </h1>
                            <div className="flex items-center space-x-3">
                                <button className="flex items-center rounded-md bg-yellow-500 px-4 py-2 text-white transition-colors hover:bg-yellow-600">
                                    <Upload size={18} className="mr-2" />
                                    Upload Document
                                </button>
                            </div>
                        </div>
                    </header>

                    {/* Main Content */}
                    <div className="px-6 py-4">
                        {/* Search and Filter Bar */}
                        <div className="mb-6 rounded-lg bg-white p-4 shadow-sm">
                            <div className="flex flex-col gap-4 md:flex-row">
                                <div className="relative flex-1">
                                    <Search
                                        className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400"
                                        size={20}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Search documents..."
                                        value={searchTerm}
                                        onChange={(e) =>
                                            setSearchTerm(e.target.value)
                                        }
                                        className="w-full rounded-md border border-gray-300 py-2 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                    />
                                </div>
                                <button
                                    onClick={() => setFilterOpen(!filterOpen)}
                                    className="flex items-center rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-50"
                                >
                                    <Filter size={18} className="mr-2" />
                                    Filter
                                </button>
                            </div>

                            {/* Filter Options */}
                            {filterOpen && (
                                <div className="mt-4 border-t border-gray-200 pt-4">
                                    <div className="flex flex-wrap gap-2">
                                        {categories.map((category) => (
                                            <button
                                                key={category}
                                                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 hover:bg-yellow-100 hover:text-yellow-700"
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Documents Grid */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {documents.map((doc) => (
                                <div
                                    key={doc.id}
                                    className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                                >
                                    <div className="mb-3 flex items-start justify-between">
                                        <div className="flex items-center">
                                            <div className="rounded-lg bg-red-100 p-2">
                                                <FileText
                                                    className="text-red-600"
                                                    size={20}
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <h3 className="truncate font-medium text-gray-900">
                                                    {doc.name}
                                                </h3>
                                                <p className="text-sm text-gray-500">
                                                    {doc.type} • {doc.size}
                                                </p>
                                            </div>
                                        </div>
                                        <button className="p-1 text-gray-400 hover:text-gray-600">
                                            <MoreVertical size={16} />
                                        </button>
                                    </div>

                                    <div className="mb-4 space-y-1">
                                        <p className="text-sm text-gray-600">
                                            <span className="font-medium">
                                                Category:
                                            </span>{' '}
                                            {doc.category}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-medium">
                                                Uploaded by:
                                            </span>{' '}
                                            {doc.uploadedBy}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-medium">
                                                Date:
                                            </span>{' '}
                                            {doc.uploadDate}
                                        </p>
                                    </div>

                                    <div className="flex space-x-2">
                                        <button className="flex flex-1 items-center justify-center rounded-md bg-gray-100 px-3 py-2 text-sm text-gray-700 hover:bg-gray-200">
                                            <Eye size={16} className="mr-1" />
                                            View
                                        </button>
                                        <button className="flex flex-1 items-center justify-center rounded-md bg-yellow-100 px-3 py-2 text-sm text-yellow-700 hover:bg-yellow-200">
                                            <Download
                                                size={16}
                                                className="mr-1"
                                            />
                                            Download
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Documents;

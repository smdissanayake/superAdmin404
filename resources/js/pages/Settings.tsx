import React, { useState } from 'react';
import { 
    User, 
    Bell, 
    Shield, 
    Palette, 
    Database, 
    Globe,
    Save,
    Eye,
    EyeOff
} from 'lucide-react';
import { Sidebar } from './Sidebar';

const Settings = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [activeTab, setActiveTab] = useState('profile');
    const [showPassword, setShowPassword] = useState(false);
    const [notifications, setNotifications] = useState({
        email: true,
        push: false,
        sms: true
    });

    const tabs = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'security', label: 'Security', icon: Shield },
        { id: 'appearance', label: 'Appearance', icon: Palette },
        { id: 'data', label: 'Data & Privacy', icon: Database },
        { id: 'system', label: 'System', icon: Globe }
    ];

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
                            Settings
                        </h1>
                    </div>
                </header>

                {/* Main Content */}
                <div className="px-6 py-4">
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Sidebar Navigation */}
                        <div className="lg:w-64 bg-white rounded-lg shadow-sm p-4 h-fit">
                            <nav className="space-y-1">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                                            activeTab === tab.id
                                                ? 'bg-yellow-100 text-yellow-700'
                                                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                        }`}
                                    >
                                        <tab.icon size={18} className="mr-3" />
                                        {tab.label}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        {/* Settings Content */}
                        <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
                            {activeTab === 'profile' && (
                                <div className="space-y-6">
                                    <h2 className="text-xl font-semibold text-gray-900">Profile Information</h2>
                                    
                                    <div className="flex items-center space-x-4">
                                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                                            <User size={24} className="text-gray-600" />
                                        </div>
                                        <div>
                                            <button className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                                                Change Avatar
                                            </button>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                defaultValue="John"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                defaultValue="Admin"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                defaultValue="john.admin@company.com"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Phone
                                            </label>
                                            <input
                                                type="tel"
                                                defaultValue="+1 (555) 123-4567"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                            />
                                        </div>
                                    </div>

                                    <button className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors">
                                        <Save size={18} className="mr-2" />
                                        Save Changes
                                    </button>
                                </div>
                            )}

                            {activeTab === 'notifications' && (
                                <div className="space-y-6">
                                    <h2 className="text-xl font-semibold text-gray-900">Notification Preferences</h2>
                                    
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                            <div>
                                                <h3 className="font-medium text-gray-900">Email Notifications</h3>
                                                <p className="text-sm text-gray-600">Receive notifications via email</p>
                                            </div>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={notifications.email}
                                                    onChange={(e) => setNotifications({...notifications, email: e.target.checked})}
                                                    className="sr-only peer"
                                                />
                                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                                            </label>
                                        </div>

                                        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                            <div>
                                                <h3 className="font-medium text-gray-900">Push Notifications</h3>
                                                <p className="text-sm text-gray-600">Receive push notifications in browser</p>
                                            </div>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={notifications.push}
                                                    onChange={(e) => setNotifications({...notifications, push: e.target.checked})}
                                                    className="sr-only peer"
                                                />
                                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                                            </label>
                                        </div>

                                        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                            <div>
                                                <h3 className="font-medium text-gray-900">SMS Notifications</h3>
                                                <p className="text-sm text-gray-600">Receive notifications via SMS</p>
                                            </div>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={notifications.sms}
                                                    onChange={(e) => setNotifications({...notifications, sms: e.target.checked})}
                                                    className="sr-only peer"
                                                />
                                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'security' && (
                                <div className="space-y-6">
                                    <h2 className="text-xl font-semibold text-gray-900">Security Settings</h2>
                                    
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Current Password
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                                >
                                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                                </button>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                New Password
                                            </label>
                                            <input
                                                type="password"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Confirm New Password
                                            </label>
                                            <input
                                                type="password"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                            />
                                        </div>
                                    </div>

                                    <button className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors">
                                        <Save size={18} className="mr-2" />
                                        Update Password
                                    </button>
                                </div>
                            )}

                            {activeTab === 'appearance' && (
                                <div className="space-y-6">
                                    <h2 className="text-xl font-semibold text-gray-900">Appearance Settings</h2>
                                    
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900 mb-2">Theme</h3>
                                            <div className="grid grid-cols-3 gap-4">
                                                <button className="p-4 border-2 border-yellow-500 rounded-lg bg-yellow-50">
                                                    <div className="w-full h-8 bg-white rounded mb-2"></div>
                                                    <span className="text-sm font-medium">Light</span>
                                                </button>
                                                <button className="p-4 border border-gray-300 rounded-lg hover:border-gray-400">
                                                    <div className="w-full h-8 bg-gray-800 rounded mb-2"></div>
                                                    <span className="text-sm font-medium">Dark</span>
                                                </button>
                                                <button className="p-4 border border-gray-300 rounded-lg hover:border-gray-400">
                                                    <div className="w-full h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded mb-2"></div>
                                                    <span className="text-sm font-medium">Auto</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'data' && (
                                <div className="space-y-6">
                                    <h2 className="text-xl font-semibold text-gray-900">Data & Privacy</h2>
                                    
                                    <div className="space-y-4">
                                        <div className="p-4 border border-gray-200 rounded-lg">
                                            <h3 className="font-medium text-gray-900 mb-2">Export Data</h3>
                                            <p className="text-sm text-gray-600 mb-3">Download a copy of your data</p>
                                            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                                                Export Data
                                            </button>
                                        </div>

                                        <div className="p-4 border border-red-200 rounded-lg bg-red-50">
                                            <h3 className="font-medium text-red-900 mb-2">Delete Account</h3>
                                            <p className="text-sm text-red-600 mb-3">Permanently delete your account and all data</p>
                                            <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                                                Delete Account
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'system' && (
                                <div className="space-y-6">
                                    <h2 className="text-xl font-semibold text-gray-900">System Settings</h2>
                                    
                                    <div className="space-y-4">
                                        <div className="p-4 border border-gray-200 rounded-lg">
                                            <h3 className="font-medium text-gray-900 mb-2">Application Version</h3>
                                            <p className="text-sm text-gray-600">v1.0.0</p>
                                        </div>

                                        <div className="p-4 border border-gray-200 rounded-lg">
                                            <h3 className="font-medium text-gray-900 mb-2">Database Status</h3>
                                            <p className="text-sm text-green-600">Connected</p>
                                        </div>

                                        <div className="p-4 border border-gray-200 rounded-lg">
                                            <h3 className="font-medium text-gray-900 mb-2">Cache Status</h3>
                                            <p className="text-sm text-green-600">Active</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;

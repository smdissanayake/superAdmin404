import {
    Bell,
    Database,
    Eye,
    EyeOff,
    Globe,
    Palette,
    Save,
    Shield,
    User,
} from 'lucide-react';
import { useState } from 'react';
import { Sidebar } from './Sidebar';

const Settings = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [activeTab, setActiveTab] = useState('profile');
    const [showPassword, setShowPassword] = useState(false);
    const [notifications, setNotifications] = useState({
        email: true,
        push: false,
        sms: true,
    });

    const tabs = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'security', label: 'Security', icon: Shield },
        { id: 'appearance', label: 'Appearance', icon: Palette },
        { id: 'data', label: 'Data & Privacy', icon: Database },
        { id: 'system', label: 'System', icon: Globe },
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
                                Settings
                            </h1>
                        </div>
                    </header>

                    {/* Main Content */}
                    <div className="px-6 py-4">
                        <div className="flex flex-col gap-6 lg:flex-row">
                            {/* Sidebar Navigation */}
                            <div className="h-fit rounded-lg bg-white p-4 shadow-sm lg:w-64">
                                <nav className="space-y-1">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                                                activeTab === tab.id
                                                    ? 'bg-yellow-100 text-yellow-700'
                                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                            }`}
                                        >
                                            <tab.icon
                                                size={18}
                                                className="mr-3"
                                            />
                                            {tab.label}
                                        </button>
                                    ))}
                                </nav>
                            </div>

                            {/* Settings Content */}
                            <div className="flex-1 rounded-lg bg-white p-6 shadow-sm">
                                {activeTab === 'profile' && (
                                    <div className="space-y-6">
                                        <h2 className="text-xl font-semibold text-gray-900">
                                            Profile Information
                                        </h2>

                                        <div className="flex items-center space-x-4">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200">
                                                <User
                                                    size={24}
                                                    className="text-gray-600"
                                                />
                                            </div>
                                            <div>
                                                <button className="rounded-md bg-gray-100 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
                                                    Change Avatar
                                                </button>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                            <div>
                                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    defaultValue="John"
                                                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    defaultValue="Admin"
                                                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    defaultValue="john.admin@company.com"
                                                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                                    Phone
                                                </label>
                                                <input
                                                    type="tel"
                                                    defaultValue="+1 (555) 123-4567"
                                                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                                />
                                            </div>
                                        </div>

                                        <button className="flex items-center rounded-md bg-yellow-500 px-4 py-2 text-white transition-colors hover:bg-yellow-600">
                                            <Save size={18} className="mr-2" />
                                            Save Changes
                                        </button>
                                    </div>
                                )}

                                {activeTab === 'notifications' && (
                                    <div className="space-y-6">
                                        <h2 className="text-xl font-semibold text-gray-900">
                                            Notification Preferences
                                        </h2>

                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                                                <div>
                                                    <h3 className="font-medium text-gray-900">
                                                        Email Notifications
                                                    </h3>
                                                    <p className="text-sm text-gray-600">
                                                        Receive notifications
                                                        via email
                                                    </p>
                                                </div>
                                                <label className="relative inline-flex cursor-pointer items-center">
                                                    <input
                                                        type="checkbox"
                                                        checked={
                                                            notifications.email
                                                        }
                                                        onChange={(e) =>
                                                            setNotifications({
                                                                ...notifications,
                                                                email: e.target
                                                                    .checked,
                                                            })
                                                        }
                                                        className="peer sr-only"
                                                    />
                                                    <div className="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-yellow-500 peer-focus:ring-4 peer-focus:ring-yellow-300 peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                                                </label>
                                            </div>

                                            <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                                                <div>
                                                    <h3 className="font-medium text-gray-900">
                                                        Push Notifications
                                                    </h3>
                                                    <p className="text-sm text-gray-600">
                                                        Receive push
                                                        notifications in browser
                                                    </p>
                                                </div>
                                                <label className="relative inline-flex cursor-pointer items-center">
                                                    <input
                                                        type="checkbox"
                                                        checked={
                                                            notifications.push
                                                        }
                                                        onChange={(e) =>
                                                            setNotifications({
                                                                ...notifications,
                                                                push: e.target
                                                                    .checked,
                                                            })
                                                        }
                                                        className="peer sr-only"
                                                    />
                                                    <div className="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-yellow-500 peer-focus:ring-4 peer-focus:ring-yellow-300 peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                                                </label>
                                            </div>

                                            <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                                                <div>
                                                    <h3 className="font-medium text-gray-900">
                                                        SMS Notifications
                                                    </h3>
                                                    <p className="text-sm text-gray-600">
                                                        Receive notifications
                                                        via SMS
                                                    </p>
                                                </div>
                                                <label className="relative inline-flex cursor-pointer items-center">
                                                    <input
                                                        type="checkbox"
                                                        checked={
                                                            notifications.sms
                                                        }
                                                        onChange={(e) =>
                                                            setNotifications({
                                                                ...notifications,
                                                                sms: e.target
                                                                    .checked,
                                                            })
                                                        }
                                                        className="peer sr-only"
                                                    />
                                                    <div className="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-yellow-500 peer-focus:ring-4 peer-focus:ring-yellow-300 peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'security' && (
                                    <div className="space-y-6">
                                        <h2 className="text-xl font-semibold text-gray-900">
                                            Security Settings
                                        </h2>

                                        <div className="space-y-4">
                                            <div>
                                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                                    Current Password
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type={
                                                            showPassword
                                                                ? 'text'
                                                                : 'password'
                                                        }
                                                        className="w-full rounded-md border border-gray-300 px-3 py-2 pr-10 focus:border-transparent focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setShowPassword(
                                                                !showPassword,
                                                            )
                                                        }
                                                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                                                    >
                                                        {showPassword ? (
                                                            <EyeOff size={18} />
                                                        ) : (
                                                            <Eye size={18} />
                                                        )}
                                                    </button>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                                    New Password
                                                </label>
                                                <input
                                                    type="password"
                                                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                                />
                                            </div>

                                            <div>
                                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                                    Confirm New Password
                                                </label>
                                                <input
                                                    type="password"
                                                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                                />
                                            </div>
                                        </div>

                                        <button className="flex items-center rounded-md bg-yellow-500 px-4 py-2 text-white transition-colors hover:bg-yellow-600">
                                            <Save size={18} className="mr-2" />
                                            Update Password
                                        </button>
                                    </div>
                                )}

                                {activeTab === 'appearance' && (
                                    <div className="space-y-6">
                                        <h2 className="text-xl font-semibold text-gray-900">
                                            Appearance Settings
                                        </h2>

                                        <div className="space-y-4">
                                            <div>
                                                <h3 className="mb-2 text-lg font-medium text-gray-900">
                                                    Theme
                                                </h3>
                                                <div className="grid grid-cols-3 gap-4">
                                                    <button className="rounded-lg border-2 border-yellow-500 bg-yellow-50 p-4">
                                                        <div className="mb-2 h-8 w-full rounded bg-white"></div>
                                                        <span className="text-sm font-medium">
                                                            Light
                                                        </span>
                                                    </button>
                                                    <button className="rounded-lg border border-gray-300 p-4 hover:border-gray-400">
                                                        <div className="mb-2 h-8 w-full rounded bg-gray-800"></div>
                                                        <span className="text-sm font-medium">
                                                            Dark
                                                        </span>
                                                    </button>
                                                    <button className="rounded-lg border border-gray-300 p-4 hover:border-gray-400">
                                                        <div className="mb-2 h-8 w-full rounded bg-gradient-to-r from-yellow-400 to-orange-500"></div>
                                                        <span className="text-sm font-medium">
                                                            Auto
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'data' && (
                                    <div className="space-y-6">
                                        <h2 className="text-xl font-semibold text-gray-900">
                                            Data & Privacy
                                        </h2>

                                        <div className="space-y-4">
                                            <div className="rounded-lg border border-gray-200 p-4">
                                                <h3 className="mb-2 font-medium text-gray-900">
                                                    Export Data
                                                </h3>
                                                <p className="mb-3 text-sm text-gray-600">
                                                    Download a copy of your data
                                                </p>
                                                <button className="rounded-md bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">
                                                    Export Data
                                                </button>
                                            </div>

                                            <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                                                <h3 className="mb-2 font-medium text-red-900">
                                                    Delete Account
                                                </h3>
                                                <p className="mb-3 text-sm text-red-600">
                                                    Permanently delete your
                                                    account and all data
                                                </p>
                                                <button className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600">
                                                    Delete Account
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'system' && (
                                    <div className="space-y-6">
                                        <h2 className="text-xl font-semibold text-gray-900">
                                            System Settings
                                        </h2>

                                        <div className="space-y-4">
                                            <div className="rounded-lg border border-gray-200 p-4">
                                                <h3 className="mb-2 font-medium text-gray-900">
                                                    Application Version
                                                </h3>
                                                <p className="text-sm text-gray-600">
                                                    v1.0.0
                                                </p>
                                            </div>

                                            <div className="rounded-lg border border-gray-200 p-4">
                                                <h3 className="mb-2 font-medium text-gray-900">
                                                    Database Status
                                                </h3>
                                                <p className="text-sm text-green-600">
                                                    Connected
                                                </p>
                                            </div>

                                            <div className="rounded-lg border border-gray-200 p-4">
                                                <h3 className="mb-2 font-medium text-gray-900">
                                                    Cache Status
                                                </h3>
                                                <p className="text-sm text-green-600">
                                                    Active
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;

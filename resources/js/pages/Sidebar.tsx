import { Link, router, usePage } from '@inertiajs/react';
import {
    BarChartIcon,
    ChevronLeftIcon,
    FileTextIcon,
    HelpCircleIcon,
    LayoutDashboardIcon,
    LogOutIcon,
    MenuIcon,
    SettingsIcon,
    UsersIcon,
} from 'lucide-react';

interface SidebarProps {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
}
export function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
    const { url } = usePage();

    const menuItems = [
        {
            icon: <LayoutDashboardIcon size={20} />,
            label: 'Dashboard',
            active: url === '/dashboard',
            link: '/dashboard',
        },
        {
            icon: <UsersIcon size={20} />,
            label: 'Employees',
            active: url.startsWith('/employees'),
            link: '/employees',
        },
        {
            icon: <BarChartIcon size={20} />,
            label: 'Reports',
            active: url.startsWith('/reports'),
            link: '/reports',
        },
        {
            icon: <FileTextIcon size={20} />,
            label: 'Documents',
            active: url.startsWith('/documents'),
            link: '/documents',
        },
        {
            icon: <SettingsIcon size={20} />,
            label: 'Settings',
            active: url.startsWith('/settings'),
            link: '/settings',
        },
    ];
    return (
        <div
            className={`fixed z-10 h-full border-r border-gray-200 bg-white shadow-sm transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'}`}
        >
            <div className="flex items-center border-b border-gray-200 p-4">
                <div
                    className={`flex items-center ${collapsed ? 'w-full justify-center' : ''}`}
                >
                    <div className="rounded bg-yellow-500 p-2 text-white">
                        <LayoutDashboardIcon size={collapsed ? 20 : 24} />
                    </div>
                    {!collapsed && (
                        <h1 className="ml-2 text-xl font-bold">Admin Panel</h1>
                    )}
                </div>
                <button
                    className={`ml-auto text-gray-500 hover:text-gray-700 ${collapsed ? 'hidden' : ''}`}
                    onClick={() => setCollapsed(true)}
                >
                    <ChevronLeftIcon size={20} />
                </button>
                <button
                    className={`ml-auto text-gray-500 hover:text-gray-700 ${!collapsed ? 'hidden' : ''}`}
                    onClick={() => setCollapsed(false)}
                >
                    <MenuIcon size={20} />
                </button>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
                <ul className="space-y-2 px-3">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.link}
                                className={`flex items-center px-4 py-3 ${collapsed ? 'justify-center' : ''} ${item.active ? 'border-r-4 border-yellow-500 bg-yellow-50 text-yellow-600' : 'text-gray-700 hover:bg-gray-100'}`}
                            >
                                <span className="min-w-8">{item.icon}</span>
                                {!collapsed && (
                                    <span className="ml-3">{item.label}</span>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="absolute bottom-0 w-full border-t border-gray-200">
                <ul>
                    <li>
                        <a
                            href="#"
                            className={`flex items-center px-4 py-3 ${collapsed ? 'justify-center' : ''} text-gray-700 hover:bg-gray-100`}
                        >
                            <span>
                                <HelpCircleIcon size={20} />
                            </span>
                            {!collapsed && <span className="ml-3">Help</span>}
                        </a>
                    </li>
                    <li>
                        <button
                            onClick={() => router.post('/logout')}
                            className={`flex w-full items-center px-4 py-3 ${collapsed ? 'justify-center' : ''} text-gray-700 hover:bg-gray-100`}
                        >
                            <span>
                                <LogOutIcon size={20} />
                            </span>
                            {!collapsed && <span className="ml-3">Logout</span>}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

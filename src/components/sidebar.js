'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  LayoutDashboard,
  Briefcase,
  Users,
  Calendar,
  FileText,
  Settings,
  LogOut,
  ChevronDown,
} from 'lucide-react';
import { useState } from 'react';

const menuItems = [
  {
    label: 'Dashboard',
    href: '/Dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'Jobs',
    href: '/Jobs',
    icon: Briefcase,
  },
  {
    label: 'Candidates',
    href: '/Candidate',
    icon: Users,
  },
  {
    label: 'Interviews',
    href: '/Interview',
    icon: Calendar,
  },
  {
    label: 'Offers',
    href: '/Offer',
    icon: FileText,
  },
];

const bottomMenuItems = [
  {
    label: 'Settings',
    href: '/settings',
    icon: Settings,
  },
  {
    label: 'Logout',
    href: '/logout',
    icon: LogOut,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  const isActive = (href) => {
    return pathname.startsWith(href);
  };

  return (
    <aside
      className={`fixed left-0 top-16 h-[calc(100vh-64px)] border-r border-gray-200 bg-white transition-all duration-300 ease-in-out ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      {/* Main Menu */}
      <nav className="flex flex-col gap-2 p-4">
        <div className="mb-4">
          <h2 className={`text-xs font-semibold text-gray-500 uppercase transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            Main Menu
          </h2>
        </div>

        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                active
                  ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              {isOpen && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Divider */}
      <div className="mx-2 border-t border-gray-200"></div>

      {/* Bottom Menu */}
      <nav className="absolute bottom-0 left-0 right-0 flex flex-col gap-2 p-4 border-t border-gray-200 bg-white">
        {bottomMenuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-50"
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              {isOpen && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

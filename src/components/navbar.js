'use client';

import { Bell, User, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
            <span className="text-lg font-bold text-white">HR</span>
          </div>
          <h1 className="text-xl font-bold text-gray-900">HRMS Recruitment</h1>
        </div>

        {/* Search Bar */}
        <div className="hidden flex-1 mx-8 md:flex">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search candidates, jobs..."
              className="w-full rounded-lg border border-gray-300 bg-gray-50 py-2 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          {/* User Menu */}
          <button className="flex items-center gap-2 rounded-lg p-2 text-gray-600 hover:bg-gray-100 transition-colors">
            <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold text-sm">
              AB
            </div>
            <span className="hidden sm:inline text-sm font-medium text-gray-900">Admin</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

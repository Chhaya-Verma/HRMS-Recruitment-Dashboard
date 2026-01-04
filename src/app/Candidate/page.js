'use client';

import { mockCandidates } from '@/lib/mockData';
import { Users, Plus, Search } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function CandidatesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredCandidates = mockCandidates.filter((candidate) => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || candidate.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    const colors = {
      'Offer Extended': 'bg-blue-100 text-blue-700',
      'Interview Scheduled': 'bg-yellow-100 text-yellow-700',
      'Under Review': 'bg-gray-100 text-gray-700',
      'Rejected': 'bg-red-100 text-red-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Candidates</h1>
          <p className="mt-2 text-gray-600">Manage candidate applications and profiles</p>
        </div>
        <Link href="/Candidate/upload" className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition-colors">
          <Plus className="h-5 w-5" />
          Upload Candidates
        </Link>
      </div>

      {/* Filters */}
      <div className="flex gap-4 flex-col sm:flex-row">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search candidates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="all">All Status</option>
          <option value="Interview Scheduled">Interview Scheduled</option>
          <option value="Under Review">Under Review</option>
          <option value="Offer Extended">Offer Extended</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      {/* Candidates Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCandidates.map((candidate) => (
          <Link
            key={candidate.id}
            href={`/Candidate/${candidate.id}`}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                  {candidate.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{candidate.name}</h3>
                  <p className="text-xs text-gray-500">{candidate.email}</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500">Applied for</p>
                <p className="text-sm font-medium text-gray-900">{candidate.position}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-xs text-gray-500">Applied on</p>
                  <p className="text-sm text-gray-900">{candidate.appliedDate}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Rating</p>
                  <p className="text-sm font-medium text-yellow-600">★ {candidate.rating}</p>
                </div>
              </div>
              <div className="pt-2">
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusColor(candidate.status)}`}>
                  {candidate.status}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredCandidates.length === 0 && (
        <div className="rounded-lg border border-gray-200 bg-white p-12 text-center">
          <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900">No candidates found</h3>
          <p className="mt-2 text-gray-600">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}

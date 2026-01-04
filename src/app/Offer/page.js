'use client';

import { mockOffers } from '@/lib/mockData';
import { FileText, Plus, Search } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function OffersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredOffers = mockOffers.filter((offer) => {
    const matchesSearch = offer.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      offer.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || offer.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Offers</h1>
          <p className="mt-2 text-gray-600">Create and manage job offers</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition-colors">
          <Plus className="h-5 w-5" />
          Create Offer
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 flex-col sm:flex-row">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search offers..."
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
          <option value="Pending">Pending</option>
          <option value="Accepted">Accepted</option>
        </select>
      </div>

      {/* Offers Table */}
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-gray-200 bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Candidate</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Position</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Salary</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Start Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Offered Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOffers.map((offer) => (
                <tr key={offer.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-orange-600 flex items-center justify-center text-white font-semibold text-sm">
                        {offer.candidateName.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{offer.candidateName}</h3>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{offer.position}</td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-900">{offer.salary}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{offer.startDate}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{offer.offerDate}</td>
                  <td className="px-6 py-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                      offer.status === 'Accepted'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {offer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Link href={`/Offer/${offer.id}`} className="text-sm font-medium text-blue-600 hover:text-blue-700">
                      View Offer
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredOffers.length === 0 && (
        <div className="rounded-lg border border-gray-200 bg-white p-12 text-center">
          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900">No offers found</h3>
          <p className="mt-2 text-gray-600">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}

'use client';

import { mockOffers } from '@/lib/mockData';
import { ArrowLeft, FileText, Mail, Phone, Download } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function OfferDetailPage() {
  const params = useParams();
  const id = parseInt(params.id);
  
  const offer = mockOffers.find(o => o.id === id);

  if (!offer) {
    return (
      <div className="p-8">
        <Link href="/Offer" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-5 w-5" />
          Back to Offers
        </Link>
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Offer not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <Link href="/Offer" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
        <ArrowLeft className="h-5 w-5" />
        Back to Offers
      </Link>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{offer.candidateName}</h1>
            <p className="text-gray-600 mt-2">{offer.position}</p>
          </div>
          <span className={`px-4 py-2 rounded-full text-sm font-medium ${
            offer.status === 'Sent' ? 'bg-blue-100 text-blue-700' :
            offer.status === 'Accepted' ? 'bg-green-100 text-green-700' :
            offer.status === 'Rejected' ? 'bg-red-100 text-red-700' :
            'bg-gray-100 text-gray-700'
          }`}>
            {offer.status}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Basic Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="text-gray-900">{offer.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="text-gray-900">{offer.phone}</p>
              </div>
            </div>
          </div>

          {/* Offer Details */}
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600">Salary</p>
              <p className="text-lg font-semibold text-gray-900">{offer.salary}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Start Date</p>
              <p className="text-gray-900">{offer.startDate}</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="h-5 w-5" />
            Download Offer Letter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <Mail className="h-5 w-5" />
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
}

'use client';

import { mockCandidates } from '@/lib/mockData';
import { ArrowLeft, Mail, Phone, Calendar, Briefcase, FileText, Download } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function CandidateDetailPage() {
  const params = useParams();
  const id = parseInt(params.id);
  
  const candidate = mockCandidates.find(c => c.id === id);

  if (!candidate) {
    return (
      <div className="p-8">
        <Link href="/Candidate" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-5 w-5" />
          Back to Candidates
        </Link>
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Candidate not found</p>
        </div>
      </div>
    );
  }

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
      <Link href="/Candidate" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
        <ArrowLeft className="h-5 w-5" />
        Back to Candidates
      </Link>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{candidate.name}</h1>
            <p className="text-gray-600 mt-2">{candidate.position}</p>
          </div>
          <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(candidate.status)}`}>
            {candidate.status}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="text-gray-900">{candidate.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="text-gray-900">{candidate.phone}</p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Applied Date</p>
                <p className="text-gray-900">{candidate.appliedDate}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Briefcase className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Experience</p>
                <p className="text-gray-900">{candidate.experience}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h3 className="font-semibold text-gray-900 mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {candidate.skills?.map((skill, idx) => (
              <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="h-5 w-5" />
            Download Resume
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <FileText className="h-5 w-5" />
            Schedule Interview
          </button>
        </div>
      </div>
    </div>
  );
}
